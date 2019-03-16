import {DI}         from '@votecube/di'
import {
	CONTINENTS,
	COUNTRIES,
	FACTOR_POSITIONS,
	FACTORS,
	LABELS,
	POLL_CONTINENTS,
	POLL_COUNTRIES,
	POLL_FACTOR_POSITIONS,
	POLL_LABELS,
	POLL_STATES,
	POLL_TOWNS,
	POLLS,
	POSITIONS,
	STATES,
	THEMES,
	TOWNS,
	USER_ACCOUNTS
}                   from '@votecube/model'
import {
	Database,
	IDatabase
}                   from './Database'
import {INDEXED_DB} from './tokens'

/**
 * Naming conventions
 *
 * Keys are encoded for two reasons
 *
 * 1) To reduce the storage footprint
 * 2) Encoded in a still decipherable way for human analysis
 *
 * Only base64 characters are allowed with / and + being reserved as key prefixes
 *
 * Primary keys are always prefixed with /
 *
 * /R - repositoryId
 * /A - actorId
 * /I - recordId (?autogenerated?)
 *
 * Foreign keys are always prefixed with +.  Foreign keys reference tables in same or
 * other schemas
 *
 * Table names are represented by the first characters of every word in the table name
 *
 * Tft - reference to THE_FIRST_TABLE
 * Tft2 - reference to THE_FAR_TABLE
 *
 * (NOTE, table names and schema names cannot have the last word start with a number,
 * with words being separated by underscores)
 *
 * (this assumes that THE_FIRST_TABLE was defined above THE_FAR_TABLE, or in an earlier
 * version of the schema)
 *
 * Same for schema names, their acronyms are prefixed in front of the schema names
 *
 * MsTft - reference to MY_SCHEMA.THE_FIRST_TABLE
 *
 * Ms2Tft - reference to MORE_SCHEMA.THE_FIRST_TABLE
 *
 * Foreign key into another schema:
 * +RMs2Tft - MORE_SCHEMA.THE_FIRST_TABLE.repositoryId
 * +AMs2Tft - MORE_SCHEMA.THE_FIRST_TABLE.actorId
 * +IMs2Tft - MORE_SCHEMA.THE_FIRST_TABLE.recordId
 *
 * The rest of the columns use the same acronym convention, but without any prefixes
 *
 * mvfc - MY_VERY_FIRST_COLUMN
 * mvfc2 - MY_VERY_FAR_COLUMN
 *
 * (this assumes that MY_VERY_FIRST_COLUMN was defined above MY_VERY_FAR_COLUMN, or in an
 * earlier version of the schema)
 *
 * For server based schemas, the server id and foreign keys are stored separately, using
 * the same convention but with key prefixes starting with lowercase
 *
 * /pi - primary key POLL_ID (in POLLS table)
 * +piP - foreign key POLLS.POLL_ID
 *
 *
 * ?Does server id need to be stored separately from the actorRecordId?
 * ?Do we ever need both?
 *    No, though internally actorRecordId should always be used for joins, etc.
 * ?Does storing the actorRecordId cause more or fewer updates to IDB?
 *    Should be the exact same number of updates
 * ?Does changing the primary key of the record cause issues?
 *    Central server records should never be referenced in repositories UNTIL the
 *    server id is known.
 *    However,
 *    we could probably omit saving the server record ids in related tables,
 *    though if we ever start referencing child records in new tables that might
 *    cause issues (or at least require additional lookups, complicating update
 *    code).  So, it's probably a good idea to update all ids in all tables where
 *    they are referenced.
 *    Also, using actorRecordIds in URLs becomes problematic - you can't share those
 *    URLs and it becomes invalid after the id actorRecordId is updated.  A URL
 *    updating scheme can be used but past history cannot be replaced, so it's safer
 *    to keep the original id, in case it was in the the browser history and the user
 *    navigates back.
 * Overall answer:
 *  Yes, because of browser history.
 *
 *
 */

export class IndexedDB {

	async open(
		name: string,
		version = 1,
		upgradeCallback?
	): Promise<IDatabase> {
		return new Promise((
			resolve,
			reject
		) => {
			const dbOpenRequest = window.indexedDB.open(name, version)

			dbOpenRequest.onerror = (event) => {
				resolve(new Database(null))
			}

			dbOpenRequest.onsuccess = (event) => {
				resolve(new Database(dbOpenRequest.result))
			}

			dbOpenRequest.onupgradeneeded = function (event) {
				const db = this.result

				db.onerror = (errorEvent) => {
					resolve(new Database(null))
				}

				/*				db.onerror = (event) => {
									resolve(new Database(dbOpenRequest.result))
								}*/

				/* TODO: populate metadata tables */
				// const schemas = db.createObjectStore('SCHEMAS', {keyPath: 'id', autoIncrement:
				// true}) const tables  = db.createObjectStore('TABLES', {keyPath: 'id',
				// autoIncrement: true}) const columns = db.createObjectStore('COLUMNS',
				// {keyPath: 'id', autoIncrement: true})
				{
					const polls = createTable(POLLS, 'pi' /*POLL_ID*/, db)
					polls.createIndex(THEMES + '__THEME_ID', '+tiT')
					polls.createIndex(USER_ACCOUNTS + '__USER_ACCOUNT_ID', '+uaiUA')
				}
				{
					const pollFactorPositions = createTable(POLL_FACTOR_POSITIONS,
						'pfpi' /*POLL_FACTOR_POSITION_ID*/, db)
					pollFactorPositions.createIndex(POLLS + '__POLL_ID', '+piP')
					pollFactorPositions.createIndex(FACTOR_POSITIONS + '__FACTOR_POSITION_ID', '+fpiFP')
				}
				{
					const factorPositions = createTable(FACTOR_POSITIONS, 'fpi' /*FACTOR_POSITION_ID*/, db)
					factorPositions.createIndex(FACTORS + '__FACTOR_ID', '+fiF')
					factorPositions.createIndex(POSITIONS + '__POSITION_ID', '+piP2')
					factorPositions.createIndex(USER_ACCOUNTS + '__USER_ACCOUNT_ID', '+uaiUA')
				}
				{
					const factors = createTable(FACTORS, 'fi' /*FACTOR_ID*/, db)
					factors.createIndex(FACTORS + '__PARENT_FACTOR_ID', '+pfiF')
					factors.createIndex(USER_ACCOUNTS + '__USER_ACCOUNT_ID', '+uaiUA')
				}
				{
					const positions = createTable(POSITIONS, 'pi' /*POSITION_ID*/, db)
					positions.createIndex(POSITIONS + '__PARENT_POSITION_ID', '+ppiP2')
					positions.createIndex(USER_ACCOUNTS + '__USER_ACCOUNT_ID', '+uaiUA')
				}
				{
					const themes = createTable(THEMES, 'ti' /*THEME_ID*/, db)
					themes.createIndex(THEMES + '__PARENT_THEME_ID', '+ptiT')
				}
				{
					const userAccounts = createTable(USER_ACCOUNTS, 'uai' /*USER_ACCOUNT_ID*/, db)
					userAccounts.add({
						'/A': 0,
						'/R': 0,
						'/uai': 0
					})
				}
				{
					const labels = createTable(LABELS, 'li' /*LABEL_ID*/, db)
					labels.createIndex(USER_ACCOUNTS + '__USER_ACCOUNT_ID', '+uaiUA')
				}
				{
					const pollLabels = createTable(POLL_LABELS, 'pli' /*POLL_LABEL_ID*/, db)
					pollLabels.createIndex(POLLS + '__POLL_ID', '+piP')
					pollLabels.createIndex(USER_ACCOUNTS + '__USER_ACCOUNT_ID', '+uaiUA')
				}
				{
					const continents = createTable(CONTINENTS, 'ci' /*CONTINENT_ID*/, db)
					continents.createIndex(USER_ACCOUNTS + '__USER_ACCOUNT_ID', '+uaiUA')
				}
				{
					const countries = createTable(COUNTRIES, 'ci' /*COUNTRY_ID*/, db)
					countries.createIndex(CONTINENTS + '__CONTINENT_ID', '+ciC')
				}
				{
					const states = createTable(STATES, 'si' /*STATE_ID*/, db)
					states.createIndex(COUNTRIES + '__COUNTRY_ID', '+ciC2')
				}
				{
					const towns = createTable(TOWNS, 'ti' /*TOWN_ID*/, db)
					towns.createIndex(STATES + '__STATE_ID', '+siS')
				}
				{
					const pollContinents = createTable(POLL_CONTINENTS, 'pci' /*POLL_CONTINENT_ID*/, db)
					pollContinents.createIndex(POLLS + '__POLL_ID', '+piP')
					pollContinents.createIndex(CONTINENTS + '__CONTINENT_ID', '+ciC')
					pollContinents.createIndex(USER_ACCOUNTS + '__USER_ACCOUNT_ID', '+uaiUA')
				}
				{
					const pollCountries = createTable(POLL_COUNTRIES, 'pci' /*POLL_COUNTRY_ID*/, db)
					pollCountries.createIndex(POLLS + '__POLL_ID', '+piP')
					pollCountries.createIndex(COUNTRIES + '__COUNTRY_ID', '+ciC2')
					pollCountries.createIndex(USER_ACCOUNTS + '__USER_ACCOUNT_ID', '+uaiUA')
				}
				{
					const pollStates = createTable(POLL_STATES, 'psi' /*POLL_STATE_ID*/, db)
					pollStates.createIndex(POLLS + '__POLL_ID', '+piP')
					pollStates.createIndex(STATES + '__STATE_ID', '+siS')
					pollStates.createIndex(USER_ACCOUNTS + '__USER_ACCOUNT_ID', '+uaiUA')
				}
				{
					const pollTowns = createTable(POLL_TOWNS, 'pti' /*POLL_TOWN_ID*/, db)
					pollTowns.createIndex(POLLS + '__POLL_ID', '+piP')
					pollTowns.createIndex(TOWNS + '__TOWN_ID', '+tiT2')
					pollTowns.createIndex(USER_ACCOUNTS + '__USER_ACCOUNT_ID', '+uaiUA')
				}
			}
		})
	}

}

function createTable(
	name: string,
	serverIdAcronym: string,
	db: IDBDatabase
) {
	const table = db.createObjectStore(name, {keyPath: '/I', autoIncrement: true})

	table.createIndex('airId', ['/R', '/A', '/I'], {unique: true})
	table.createIndex('serverId', ['/' + serverIdAcronym], {unique: true})

	return table
}

// function createForeignKey(
// 	name: string,
// 	foreignKeyAcronym: string,
// 	table: IDBObjectStore
// ) {
// 	table.createIndex(name, 'piP')
// }

DI.set(INDEXED_DB, IndexedDB)

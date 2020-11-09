import {DI}                 from '@airport/di'
import {CONNECTION_MANAGER} from './tokens'

export interface IConnectionManager {

	get<T>(
		url: string,
		params?: any
	): Promise<T>

	put<V, R>(
		url: string,
		value: V,
		params?: any
	): Promise<R>

}

export class ConnectionManager
	implements IConnectionManager {

	serverUrlPrefix = 'http://localhost:8081/api/'

	async get<T>(
		url: string,
		params: any = {}
	): Promise<T> {
		const response = await fetch(this.serverUrlPrefix + url + this.getParamsSuffix(params))

		return response.json()
	}

	async put<V, R>(
		url: string,
		value: V,
		params: any = {}
	): Promise<R> {
		const response = await fetch(this.serverUrlPrefix + url + this.getParamsSuffix(params), {
			method: 'PUT',
			body: JSON.stringify(value)
		})

		// TODO: implement error handling
		return response.json()
	}

	private getParamsSuffix(
		params: any
	): string {
		let paramStrings = []
		for(let paramName in params) {
			paramStrings.push(paramName + '=' + params[paramName])
		}
		let paramsSuffix = ''
		if (paramStrings.length) {
			paramsSuffix = '?' + paramStrings.join('&')
		}

		return paramsSuffix
	}

}

DI.set(CONNECTION_MANAGER, ConnectionManager)
<script>
	import {
		ABOUT,
		APP_CONTAINER,
		AUTH,
		authChecked,
		CARD_CLIMATE_CHANGE,
		cube,
		currentPage,
		FACTOR_INFO_MAIN,
		FACTOR_LIST,
		FEEDBACK,
		isDesktop,
		navigateToPage,
		noOverflow,
		POLL_FORM,
		POLL_LIST,
		POLL_LOCATIONS,
		POLL_MAIN,
		POLL_TIME_FRAME,
		RELEASE_PLAN,
		ROUTES,
		scheduleToResize,
		showConfirm,
		showMainMenu,
		showSignIn,
		startResizeInterval,
		textToast,
		user,
		VARIATION_LIST
	}                   from '@votecube/public-logic'
	import {
		onDestroy,
		onMount
	}                   from 'svelte'
	import {get}        from 'svelte/store'
	import TextToast    from './common/shell/TextToast.svelte'
	import {loadUi}     from './libs/text/ui'
	import AboutUs      from './pages/AboutUs.svelte'
	import FactorMain   from './pages/factor/info/FactorMain.svelte'
	// import FactorList      from './pages/factor/search/FactorList.html'
	import Feedback     from './pages/feedback/FeedbackForm.svelte'
	import PollForm     from './pages/poll/info/PollForm.svelte'
	import PollInfoMain from './pages/poll/info/PollMain.svelte'
	// import PollLocations   from './pages/poll/Locations.html'
	import PollList     from './pages/poll/search/PollList.svelte'
	// import PollTimeframe   from './pages/poll/Timeframe.html'
	import VariationList   from './pages/poll/variation/VariationList.svelte'
	import ReleasePlan  from './pages/ReleasePlan.svelte'
	import Menu         from './shell/menu/Menu.svelte'
	import SignIn       from './shell/SignIn.svelte'
	import TopBar       from './shell/top/TopBar.svelte'

	// let topMenuMap
	let appShowMainMenu = showMainMenu
	let appIsDesktop    = isDesktop
	let lastTextToast   = {}
	let PageComp        = null
	let pageMap
	let showTextToast   = false
	let textToastUnsubscribe

	$: activeClass = $appShowMainMenu ? 'active' : ''

	$: showLogo = $appIsDesktop || $appShowMainMenu

	function clickMain() {
		// if (DOM_API.e(menuElementIdSelector)
		//   .className
		//   .indexOf('active') !== -1) {
		if (get(showMainMenu)) {
			toggleMenu()
		}
	}

	function closeSignIn() {
		showSignIn.set(false)
	}

	function handleResize(
		event
	) {
		scheduleToResize()
	}

	function selectMenu(
		menuItem
	) {
		// navigateToPage(menuItem.key, menuItem.params)
		showMainMenu.toggle()
	}

	function toggleMenu() {
		if (get(showConfirm)) {
			return
		}
		showMainMenu.toggle()
	}

	function setPageComp(
		pageComp
	) {
		PageComp = pageComp
	}

	function setViewType(
		view
	) {
		navigateToPage(view.type, view.params)
	}

	onMount(async () => {
		const routes = await APP_CONTAINER.get(ROUTES)

		pageMap = {
			[ABOUT]: AboutUs,
			[CARD_CLIMATE_CHANGE]: PollInfoMain,
			[FACTOR_INFO_MAIN]: FactorMain,
			// [FACTOR_LIST]: FactorList,
			[FEEDBACK]: Feedback,
			[POLL_FORM]: PollForm,
			[POLL_LIST]: PollList,
			// [POLL_LOCATIONS]: PollLocations,
			[POLL_MAIN]: PollInfoMain,
			// [POLL_TIME_FRAME]: PollTimeframe,
			[RELEASE_PLAN]: ReleasePlan,
			[VARIATION_LIST]: VariationList,
		}
		/*		topMenuMap = {
					[routes.POLL_MAIN]: PollInfoCommonTopMenu,
					[routes.POLL_LIST]: PollListTopMenu
				}*/

		routes.configPages([
			[ABOUT, false, false],
			[CARD_CLIMATE_CHANGE, false, false],
			[FACTOR_INFO_MAIN, false, false],
			[FACTOR_LIST, false, true],
			[FEEDBACK, false, false],
			[POLL_FORM, true, false],
			[POLL_LIST, false, true],
			[POLL_LOCATIONS, true, false],
			[POLL_MAIN, false, true],
			[POLL_TIME_FRAME, true, false],
			[RELEASE_PLAN, false, false],
			[VARIATION_LIST, false, true],
		])

		routes.setupRoutes(pageMap,
			setPageComp,
			ABOUT, POLL_LIST
		)

		startResizeInterval()

		textToastUnsubscribe = textToast.subscribe(
			value => {
				lastTextToast = value
				showTextToast = true
				setTimeout(() => {
					showTextToast = false
				}, value.seconds * 1000)
			})

		const [auth, _] = await Promise.all([
			APP_CONTAINER.get(AUTH),
			loadUi('en-us'),
			// init()
		])
		user.set(auth.getUser())

		const userChanges$ = await auth.reactToUser()

		userChanges$.subscribe(
			authUser => {
				const theCurrentPage = get(currentPage)
				if (!authUser && theCurrentPage && theCurrentPage.authenticated) {
					navigateToPage(POLL_LIST)
				}

				user.set(authUser)
				authChecked.set(true)
			})
	})

	onDestroy(() => {
		textToastUnsubscribe()
	})
</script>

<style>
	@media (min-width: 62em) {
		#main {
			margin: 1em 23%;
			width: 54%;
		}
	}

	div {
		color: white;
		background: #191818;
		height: 44px;
		line-height: 44px;
		position: fixed;
		text-align: center;
		top: 0px;
		vertical-align: middle;
		width: 160px;
		z-index: 1200;
	}

	article {
		overflow-y: auto;
		overflow-x: hidden;
	}

	article.noOverflow {
		overflow: initial;
	}

	nav {
		z-index: 1100;
	}
</style>

<svelte:window on:resize={handleResize}/>
	<article
			class="{activeClass} wrapper"
			class:noOverflow="{$noOverflow}"
			class:cube="{$cube}"
			id="layout"
	>
		<!-- Menu toggle -->
		<TopBar></TopBar>
		{#if showLogo}
		<div>
			VOTECUBE
		</div>
		{/if}

		<nav
				class="menu-link {activeClass}"
				id="menuLink"
				on:click="{toggleMenu}"
		>
			<!--Hamburger icon -->
			<span></span>
		</nav>
		<Menu
				active="{$showMainMenu}"
				on:selected="{selectMenu}"
		></Menu>
		<section
				id="main"
				on:click="{clickMain}"
		>
			<svelte:component this="{PageComp}"/>
		</section>
	</article>
	{#if showTextToast}
	<TextToast
			text="{$textToast.text}"
	></TextToast>
	{/if}
	{#if $showSignIn}
	<SignIn
			on:closed="{closeSignIn}"
	></SignIn>
	{/if}
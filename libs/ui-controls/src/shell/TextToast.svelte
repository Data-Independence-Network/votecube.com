<script>

	// import {
	// 	isDesktop,
	// 	showMainMenu,
	// 	showTopMenu
	// } from '@votecube/vc-logic'

	export let text = ''

	// let theIsDesktop    = isDesktop
	// let theShowMainMenu = showMainMenu
	// let theShowTopMenu  = showTopMenu
	//
	// $: mainMenuOffset = $theIsDesktop || $theShowMainMenu
	// $: wrapperMarginBottom = $theShowTopMenu ? 2.5 : 0

</script>

<style>
	@media (min-width: 62em) {
		aside {
			left: 23%;
			width: calc(54% - 18px) !important;
		}
	}

	aside {
		bottom: 5px;
		padding: 5px;
		position: fixed;
		width: 100%;
		z-index: 1500;
	}

	div {
		background-color: #111;
		border-radius: 3px;
		color: #eee;
		padding: 10px;
		width: 100%;
	}
</style>

<aside>
	<div>
		{text}
	</div>
</aside>

<script>

	export let multiLine = false

</script>

<style>
	i {
		padding: 2px;
	}

	svg {
		border: 2px solid #aaa;
		border-radius: 3px;
	}
</style>

<i
		class:fieldAid="{!multiLine}"
		on:click|stopPropagation
>
	<svg
			width="28"
			height="28"
	>
		<g>
			<line
					stroke="#aaa"
					stroke-width="5"
					x1="12"
					x2="12"
					y1="10"
					y2="22"
			></line>
			<circle
					cx="12"
					cy="5"
					fill="#aaa"
					r="3"
			></circle>
			<!--
			<circle
					cx="17"
					cy="17"
					fill="none"
					r="14"
					stroke="#aaa"
			/>
			-->
		</g>
	</svg>
</i>

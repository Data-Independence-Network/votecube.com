<script>

	export let classes = ''
	export let fillColor = 'fff'
	export let highlightColor = '000'
	export let styles = ''

</script>

<svg
		class="{classes}"
		height="50"
		on:click
		style="{styles}"
		width="50"
>
	<g>
		<circle
				cx="25"
				cy="25"
				fill="#{fillColor}"
				r="23"
				stroke="#{highlightColor}"
				stroke-width="3"
		/>
		<rect
				fill="#FFF"
				height="20"
				stroke="#{highlightColor}"
				stroke-linejoin="round"
				stroke-width="4"
				width="28"
				y="15"
				x="11"
		/>
		<line
				stroke="#FFF"
				stroke-width="12"
				x1="25"
				x2="25"
				y1="12"
				y2="19"
		/>
		<line
				stroke="#{highlightColor}"
				stroke-linecap="round"
				stroke-width="4"
				x1="25"
				x2="25"
				y1="12"
				y2="28"
		/>
		<line
				stroke="#{highlightColor}"
				stroke-width="4"
				stroke-linecap="round"
				x1="20"
				y1="23"
				x2="25"
				y2="28"
		/>
		<line
				stroke="#{highlightColor}"
				stroke-linecap="round"
				stroke-width="4"
				x1="30"
				x2="25"
				y1="23"
				y2="28"
		/>
	</g>
</svg>

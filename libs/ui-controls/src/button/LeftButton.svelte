<script>

	export let classes        = ''
	export let circleRadius   = 23
	export let fillColor      = 'fff'
	export let highlightColor = '000'
	export let strokeWidth    = 3
	export let styles         = ''

</script>

<svg
		class="{classes}"
		height="50"
		on:click
		style="{styles}"
		width="50"
>
	<g class="layer">
		<circle
				cx="25"
				cy="25"
				fill="#{fillColor}"
				r="{circleRadius}"
				stroke="#{highlightColor}"
				stroke-width="{strokeWidth}"
		/>
		<line
				stroke="#{highlightColor}"
				stroke-width="5"
				x1="16"
				x2="29"
				y1="27"
				y2="14"
		/>
		<line
				stroke="#{highlightColor}"
				stroke-width="5"
				x1="29"
				x2="16"
				y1="37"
				y2="24"
		/>
	</g>
</svg>

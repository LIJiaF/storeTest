<template>
	<div class="header">
		<h1>{{ title }}</h1>
	</div>
</template>

<style type="text/css">
.header{
	height:48px;
	text-align:center;
}
</style>

<script type="text/javascript">
	import {mapState} from 'vuex'

	export default {
		computed: {
			...mapState([
				'title'
			])
		}
	}
</script>
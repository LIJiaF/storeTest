<template>
	<div class="main">
		home
	</div>
</template>

<style type="text/css">
	
</style>

<script type="text/javascript">
	import {mapMutations} from 'vuex'

	export default {
		created () {
			this.TITLE('首页')
		},
		methods: {
			...mapMutations([
                'TITLE',
            ]),
		}		
	}
</script>
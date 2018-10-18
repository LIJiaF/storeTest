<template>
	<div class="list">
		list
	</div>
</template>

<script type="text/javascript">
	import {mapMutations} from 'vuex'

	export default {
		created () {
			this.TITLE('列表')
		},
		methods: {
			...mapMutations([
                'TITLE',
            ]),
		}		
	}
</script>
<template>
	<div class="person">
		person
	</div>
</template>

<script type="text/javascript">
	import {mapMutations} from 'vuex'

	export default {
		created () {
			this.TITLE('个人')
		},
		methods: {
			...mapMutations([
                'TITLE',
            ]),
		}		
	}
</script>
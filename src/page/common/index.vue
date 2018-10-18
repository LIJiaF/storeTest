<template>
	<div>
		<Header/>
		<router-view/>
		<Footer/>
	</div>
</template>

<script type="text/javascript">
	import Header from '@/components/header/header.vue'
	import Footer from '@/components/footer/footer.vue'

	export default {
		components: {
			Header,
			Footer
		}
	}
</script>
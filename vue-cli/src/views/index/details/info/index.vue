<template>
	<div class="wrapper">
		<div class="content" v-html="$route.query.content"></div>
	</div>
</template>

<script>
	export default {
		created(){
			console.log(this.$route.query.attachments)
			this.$http.get('../static/state.json',).then((response) => {
					// success callback
						
				}, (response) => {
					console.log('錯誤')
				});
		}
	}
</script>

<style scoped lang="scss">
	.wrapper{
		margin-top: .6rem;
		padding-left: .2rem;
		padding-right: .2rem;
		text-align: left;
	}
</style>
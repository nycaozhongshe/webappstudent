<template>
	<div class="info-wrap">
		<div class="info-item">
			个人信息
		</div>	
		<div class="info-item-logoff" @click="logoff">
			注销登陆
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			logoff(){
				window.ssessionStorage.removeItem('jndxyjsuser')
				this.$router.push('/login')
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
		.info-item-logoff{
			position: fixed;
			width: 2.8rem;
			background: #e83929;
			height: .36rem;
			line-height: .36rem;
			color: #fff;
			border-radius:4px ;
			bottom: .9rem;
			left: 50%;
			transform: translateX(-50%);	
		}
</style>
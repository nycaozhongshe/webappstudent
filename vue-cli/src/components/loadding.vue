<template>
	<div class="loadding-warp" v-show="show">
		<img src="../../static/loadding.gif"/>
		<div class="txt">{{txt}}</div>
	</div>
</template>

<script>
	export default {
		props:{
			show:{
				default:false
			},
			txt:{
				default:'页面正在加载中'
			},
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.loadding-warp{
		width: 3.75rem;
		height: 6.67rem;
		background: #fff;
		position: fixed;
		top: 0;
		z-index: 9999;		
		img{
			margin-top: 2.4rem;
			width: .5rem;
			display: block;
			margin-left: auto;
			margin-right: auto;

		}
		.txt{
			margin-top:.3rem;
			font-size: 14px;
		}	
	}
</style>
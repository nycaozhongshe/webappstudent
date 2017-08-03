<template>
	<div class="main_container">
		<header class="header">
			<router-link to="/personinfo" slot="left">
				<span class="iconfont login">&#xe689;</span>
			</router-link>
			<div class="title">测试学校管理系统</div>
		</header>
		<div class="nav">
			<router-link to='/index' tag='div' class='router'>
				<span class="iconfont logo-icon">&#xe610;</span><!--{{nav1}}-->
			</router-link>
			<router-link to='/cultivate' tag='div'  class='router'>
				<span class="iconfont logo-icon">&#xe76d;</span><!--{{nav3}}-->
			</router-link>
			<router-link to='/personinfo' tag='div'  class='router'>
				<span class="iconfont logo-icon">&#xe645;</span><!--{{nav2}}-->
			</router-link>	
			<!--<router-link to='/information' tag='span'>我的</router-link><-->
		</div>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script type="text/ecmascript-6">
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				navShow: false
			}
		},
		components: {
			//TODO 添加子组件
		},
		computed: {
			//TODO 计算区
			...mapState(['nav1', 'nav2', 'nav3', 'action'])
		},
		methods: {
			//TODO 方法区
		},
		mounted: function() {

			//TODO 函数执行区域
		}
	}
</script>
<style lang="scss" scoped="scoped">
	.header {
		width: 100%;
		position: fixed;
		top: 0;
		background: #26a2ff;
		vertical-align: middle;
		line-height: .5rem;
		height: .5rem;
		z-index: 10000;
		.login {
			font-size: .3rem;
			float: left;
			width: 25%;
			color: #fff;
		}
		.title {
			float: left;
			width: 50%;
			color: #fff;
			font-size: .18rem;
		}
	}
	
	.nav {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		font-size: .14rem;
		background: #fff;
		z-index: 10001;
		.router {
			width: 33.33%;
			display: block;
			float: left;
			height: .5rem;
			line-height: .5rem;
			color: #666;
			border-top: 1px solid #ccc;
			.logo-icon{
			display: block;
			font-size: .28rem;
			height:.2rem;
		}
		}
		
		.router-link-active {
			color: #26a2ff;	
		}

	}
</style>
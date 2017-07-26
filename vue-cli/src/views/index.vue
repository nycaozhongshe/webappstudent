<template>
	<div class="main_container">

		<header class="header">
			<router-link to="/login" slot="left">
				<span class="iconfont login">&#xe689;</span>
			</router-link>
			<div class="title">测试学校</div>
		</header>

		<div class="nav">
			<router-link to='/index' tag='span'>主页</router-link>
			<router-link to='/posts' tag='span'>成绩</router-link>
			<router-link to='/games' tag='span'>游戏</router-link>
			<router-link to='/music' tag='span'>音乐</router-link>
		</div>

		<router-view></router-view>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {
				//todo 这里是data区域

			}
		},
		components: {
			//TODO 添加子组件
		},
		computed: {
			//TODO 计算区
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
		line-height: .6rem;
		height: .6rem;
		.login {
			font-size: .3rem;
			float: left;
			width: 25%;
			color: #fff;
		}
		.title{
			float: left;
			width: 50%;
		}
	}
	
	.nav {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		font-size: .14rem;
		background: #fff;
		span {
			width: 25%;
			display: block;
			float: left;
			height: .6rem;
			line-height: .6rem;
			border-top: 1px solid #ccc;
		}
	}
</style>
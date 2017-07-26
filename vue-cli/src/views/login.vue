<template>
	<div>
	<div class="login">
		
			<div class="login-form">
				<div class="login-logo"><img src="../../static/logo.png"class="login-logo-img" /></div>
				<input type="text" placeholder="账号"  autofocus="autofocus" id="account"/>
				<input type="password" placeholder="密码"  id="password"/>
				<label for="account" class="iconfont">&#xe61f;</label>
				<label for="password" class="iconfont">&#xe6b2;</label>				
				<button>
					<router-link to="/index">登陆</router-link>
				</button>
			</div>
	</div>
	<!--<vue-input-code span-size="20px" type="number" :number="5" height="50px" span-color="#f35252" input-color="#3498db" input-size="24px" :code="code" :getinput="getInput" :success="success"></vue-input-code>-->
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {
				//todo 这里是data区域
				value: '默认文字'
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
<style lang="scss" scoped="">
.login-form{
	position: relative;
	margin-top: 1.4rem;
	.login-logo{
		
		.login-logo-img{
			margin-bottom: .3rem;
			width: 3.75rem;
			height: .6rem;
		}
	}
	label{
		 position: absolute;
		 left: .5rem;
	}
	label:first-of-type{
		 top: 1.21rem;
	}
	label:nth-of-type(2){
		top: 1.74rem;
	}
		input{
			width: 3rem;
			display: block;
			margin: .2rem auto;
			padding-left: .4rem;
			outline-color: #69b3f2;
		}
		button{
			width: 2.8rem;
			background: #fff;
			outline-color:#eee ;
		}
		button a{
			color: #69b3f2;
		}
}
		
</style>
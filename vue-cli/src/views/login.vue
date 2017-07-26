<template>
	<div>
		<div class="login">

			<div class="login-form">
				<div class="login-logo"><img src="../../static/logo.png" class="login-logo-img" /></div>
				<input type="text" placeholder="账号" autofocus="autofocus" id="account" v-model="input1" />
				<input type="password" placeholder="密码" id="password" v-model="inputp" />
				<label for="account" class="iconfont">&#xe61f;</label>
				<label for="password" class="iconfont">&#xe6b2;</label>
				<div class="botton" @click="commit">
					<!--<router-link to="/index" tag='span'>登陆</router-link>-->
					登陆
				</div>
				<div class="about">关于我们</div>
				<div class="tip" v-if='enter'>账号/密码不能为空</div>
				<div class="tip" v-if="passwordFalse">密码错误</div>
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
				input1: '',
				inputp: '',
				enter: false,
				passwordFalse: false
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
			//			judgeAccount(){
			//				  console.log('账号')
			//			},
			//			judgePassword(){
			//				  console.log('密码')
			//				
			//			}
			commit() {
				var reg = new RegExp('^[a-zA-Z\d]\w{3,11}[a-zA-Z\d]$') //验证账号
				//					if(reg.test(this.Input1)) {
				//						console.log('zh')
				//					} else {
				//						console.log('false')
				//					}
				if(this.input1 && this.inputp){
					//如果不对
					this.passwordFalse = true
					setTimeout(() => this.passwordFalse = false, 3000)
					//假设密码和账号都对返回格式也对
					//验证成功后跳到主页
					this.$router.push('/index')
				} else {
					this.enter = true
					setTimeout(() => this.enter = false, 3000)
				}
			},

		},
		mounted: function() {

			//TODO 函数执行区域
		}
	}
</script>
<style lang="scss" scoped="scoped">
	.login-form {
		position: relative;
		margin-top: .2rem;
		.login-logo {
			.login-logo-img {
				margin-bottom: .3rem;
				width: 3rem;
				height: .6rem;
				margin-left: -.2rem;
			}
		}
		label {
			position: absolute;
			left: .5rem;
		}
		label:first-of-type {
			top: 1.3rem;
		}
		label:nth-of-type(2) {
			top: 2rem;
		}
		input {
			width: 3rem;
			display: block;
			margin: .2rem auto;
			padding-left: .4rem;
			outline-color: #69b3f2;
			height: .5rem;
			border-radius: 8px;
			/*outline: 30px solid #cd0000;*/
			-moz-outline-radius: 8px;
			border: 1px solid #ddd;
			font-size: .14rem;
		}
		.botton {
			width: 2.8rem;
			background: #00d762;
			outline-color: #eee;
			color: #fff;
			height: .4rem;
			margin: .2rem auto;
			line-height: .4rem;
		}
		.about {
			font-size: .14rem;
			color: #999;
			margin-top: .9rem;
		}
		.tip {
			position: fixed;
			width: 1.6rem;
			height: .24rem;
			line-height: .24rem;
			top: 4rem;
			left: 50%;
			transform: translateX(-50%);
			background: #666;
			border-radius: 30px;
			color: #fff;
			font-size: .14rem;
		}
	}
</style>
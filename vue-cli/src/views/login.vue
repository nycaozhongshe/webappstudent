<template>
	<div>
		<div class="login">

			<div class="login-form">
				<div class="login-logo"><img src="../../static/logo.png" class="login-logo-img" /></div>
				<form>
					<input type="text" placeholder="账号" autofocus="autofocus" id="account" v-model="user.username" />
					<input type="password" placeholder="密码" id="password" v-model="user.password" />
					<label for="account" class="iconfont">&#xe61f;</label>
					<label for="password" class="iconfont">&#xe6b2;</label>
					<!--<router-link to="/index" tag='span'>登陆</router-link>-->
					<input type="button" value="登陆" class="botton" @click='submiti'>
				</form>
				<div class="about">关于我们</div>
				<div class="tip" v-if='tip.show'>{{tip.txt}}</div>
			</div>
		</div>
		<!--<vue-input-code span-size="20px" type="number" :number="5" height="50px" span-color="#f35252" input-color="#3498db" input-size="24px" :code="code" :getinput="getInput" :success="success"></vue-input-code>-->
	</div>
</template>

<script type="text/ecmascript-6">
	var qs = require('qs');
	export default {
		data() {
			return {
				//todo 这里是data区域
				user: {
					username: '',
					password: '',
				},
				tip: {
					show: false,
					txt: ""
				},
				saltPwd:{
					username:'',
					password:''
				}
			}
		},
		components: {
			//TODO 添加子组件
		},
		computed: {
			//TODO 计算区
		},
		created() {
			
		},
		methods: {
			//TODO 方法区
			submiti() {
				if(this.user.username && this.user.password) {
					//如果不对
					this.getApi()
				} else {
					this.tip.txt = '账号或密码不能为空'
					this.tipShow()
				}
			},
			getApi() {
				var  saltPwd = {}
				saltPwd.password  = this.convertPassword(this.user.username,this.user.password)
				saltPwd.username  = this.user.username
				this.$http({
					url: 'http://172.25.253.5:8081/km-gradms-core-server/moblile/mobileLogin/login?',
					method: 'post',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					data: qs.stringify(saltPwd),
					withCredentials:true 
					//					responseType: 'json',
				}).
				then((response) => {
					// success callback
					console.log(response)
					let state = response.status
					if(state == 200) {
						//密码和账号都对
						//验证成功后跳到主页	
						window.sessionStorage.setItem('jndxyjsuser', this.user.username)
						this.$router.push('index')
					} else if(state == 300) {
						this.tip.txt = '服务器响应错误'
						this.tipShow()
					} else if(state == 301) {
						this.tip.txt = '登陆超时'
						this.tipShow()
					} else if(state == 303) {
						this.tip.txt = '重复提交'
						this.tipShow()
					} else if(state == 401) {
						this.tip.txt = '账号或密码错误'
						this.tipShow()
					} else if(state == 500) {
						this.tip.txt = '服务器响应错误'
						this.tipShow()
					}
				}).catch((error) => {
					console.log('错误')
				});

			},
			tipShow() {
				this.tip.show = true
				setTimeout(() => this.tip.show = false, 3000)
			},
			//加密方法
			convertPassword(username, password){
					//var salt=username+"@zhtframework_94DABGioQOq2tTUO0AXYow";
					//return hex_md5(salt+password);
					var saltPwd = hex_md5(password + "{" + username + "}");
					return saltPwd;
				}
			
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
			border-radius: 4px;
			/*outline: 30px solid #cd0000;*/
			-moz-outline-radius: 4px;
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
			padding: 0;
		}
		.about {
			font-size: .14rem;
			color: #999;
			margin-top: .9rem;
		}
		.tip {
			position: fixed;
			width: 2rem;
			height: .24rem;
			line-height: .24rem;
			top: 4rem;
			left: 50%;
			transform: translateX(-50%);
			background: #666;
			border-radius: 30px;
			color: #fff;
			font-size: 12px;
		}
	}
</style>
<template>
	<div id="app">
		<div class="header clearfix">
			<div class="logo iconfont" v-on:click="go">&#xe606;</div>
			<div class="title"><span class="iconfont title-logo">&#xe618;</span>成绩查看</div>
			<div class="button"></div>
		</div>
		<div class="main">		
			<div class="result-list-wrap">
				<ul>
					<li v-for="item in contentList">
						<p  class="course-name"><span class="iconfont course-logo">&#xe619;</span>课程名称：{{item.courseName}}</p>
						<p>课程编号：{{item.courseNum}}</p>
						<p>课程学分：{{item.credit | credit}}</p>
						<p>课程属性：{{item.examType | examType }}</p>
						<!--1专业课-->
						<p>课程性质：{{item.isDegree | isDegree}}</p>
						<!--32学位课  31-->
						<p>课程类别：{{item.coursetypecode | coursetypecode}}</p>
						<p>课程分数：{{item.endScore}}</p>
						<!--0 必修-->
					</li>
				</ul>
			</div>
		</div>
		<div class="footer"></div>
	</div>
</template>

<script >
	export default {
		data() {
			return {
				contentList: []
			}
		},
		created() {
				this.getApi()
		},
		methods: {
			getApi() {
				this.$http.get('../static/db.json')
					.then((response) => {
						this.contentList = response.data.data
					})
					.catch((error) => {
						console.log(error)
					})
			},
			go (){
			window.history.go(-1);
		}
		},
		
	}
</script>

<style scoped="scoped" lang="scss">
.header {
		width: 100%;
		position: fixed;
		top: 0;
		background: #26a2ff;
		vertical-align: middle;
		line-height: .5rem;
		height: .5rem;
		color: #fff;
		.logo{
			font-size: .24rem;
			float: left;
			width: 25%;	
			text-align: left;
			padding-left: .2rem;
		}
		.title{
			float: left;
			width: 50%;
			font-size: .2rem;		
		}
	}
	
</style>
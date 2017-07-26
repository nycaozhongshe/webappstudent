<template>
	<div id="app">
		<div class="header clearfix">
			<div class="logo iconfont"></div>
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
			}
		},
	}
</script>

<style scoped="scoped">
	.header {
		width: 100%;
		/*border-bottom: 1px solid #b8b8b9;*/	
		box-shadow:  0 1px 1px  #666; 
		background: #fff;
		position: fixed;
		top: 0;
		z-index: 9999;
	}
	
	.header .logo,
	.header .title,
	.header .button {
		float: left;
		width: 25%;
		text-align: center;
		height: .6rem;
		line-height: .6rem;
		/*background: red;*/
	}
	
	.header .title {
		width: 50%;
		font-size: .24rem;
		color: #4889db;
	}

	.result-list-wrap li {
		box-shadow:  0 1px 3px  #333;
		margin-top: .14rem;
		background: #fff;
		color: #333;
		padding-top: .04rem;
		padding-bottom: .1rem;
		position: relative;
	}
		.result-list-wrap li  p{
				padding-left: .4rem;
				padding-right: .4rem;
				padding-top: .04rem;	
				white-space: .1rem;
				letter-spacing:.02rem;
				
		}
	.result-list-wrap  li  .course-name{
		font-size: .2rem;
		margin-bottom: .08rem;
		color: #fb9821;		
		padding-right: .36rem;
		padding-left: .36rem;

}
.course-logo{
	 color: #898687;
	 margin-right: .1rem;
	 position: absolute;
	 right: .4rem;
	 top:.4rem;
}
.title-logo{
		padding-right: .1rem;
}
</style>
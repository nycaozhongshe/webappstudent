<template>
	<div id="app">
		<loadding :show='loaddingShow'></loadding>
		<div class="header clearfix">
			<div class="logo iconfont" v-on:click="go">&#xe606;</div>
			<div class="title"><span class="iconfont title-logo">&#xe618;</span>{{query.title}}</div>
			<div class="button"></div>
		</div>
		
		<div class="main">
			<div class="result-list-wrap" v-if="query.id==1">
				<ul>
					<li v-for="item in indexId1list">
						{{item.title}}
						<div class="item" v-for="pro in item.rows">
						{{pro.msgTheme}}
						</div>
					</li>
				</ul>
			</div>
			<div class="result-list-wrap" v-if="query.id==2">
				<ul>
					<li v-for="item in contentList">
						<p class="course-name"><span class="iconfont course-logo">&#xe619;</span>课程名称：{{item.courseName}}</p>
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

<script>
	import { mapActions, mapState } from 'vuex'
	export default {
		data() {
			return {
				contentList: []
			}
		},
		created() {
			//首次进入模拟加载过程
			setTimeout(() => {
				this.detailsLoaddinghide()
			}, 1000)
			this.displayIdIndex()
			console.log(this.indexId1list)
		},
		computed: {
			...mapState(['loaddingShow','indexId1list']),
			query() {
				return this.$route.query
			}
		},
		methods: {
			...mapActions([
				'getIndexId1Api', 'getIndexId2Api','detailsLoaddinghide'
			]),
			go() {
				window.history.go(-1);
			},
			displayIdIndex(){
				if(this.query.id== 1){
					this.getIndexId1Api()
				}else if(query.id== 2){
					this.getIndexId2Api()
					
				}
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
		z-index: 11111;
		.logo {
			font-size: .24rem;
			float: left;
			width: 25%;
			text-align: left;
			padding-left: .2rem;
		}
		.title {
			float: left;
			width: 50%;
			font-size: .2rem;
		}
	}
	.result-list-wrap{
		text-align: left;
	}
</style>
<template>
	<div id="app">
		<loadding :show='loaddingShow'></loadding>
		<div class="header clearfix">
			<div class="logo iconfont" v-on:click="go">&#xe606;</div>
			<div class="title"><span class="iconfont title-logo">&#xe618;</span>{{indexTitle}}</div>
			<div class="button"></div>
		</div>
		<router-view></router-view>
		<div class="main">
			<div class="result-list-wrap" v-if="query.id==1">
				<ul>
					<li v-for="item in indexId1list">						
						<h3 class="inform-list-title">{{item.title}}</h3>
						<div class="inform-list-item" v-for="pro in item.rows">
							<router-link :to="{name:'detailsinfo',query:{content:pro.msgContent,attachments:pro.attachments}}">
							{{pro.msgTheme}}
							</router-link>							
						</div>

					</li>
				</ul>
			</div>
			<div class="result-list-wrap" v-if="query.id==2">
				<ul>
					<li v-for="item in indexId2list">
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
	import { mapActions, mapState,mapMutations  } from 'vuex'
	export default {
		 beforecreate() {
        //  创建前状态
        	
   	},
		deactivated() {
			this.$destroy(true) //銷毀數據
			this.detailsLoaddingShow()
		},
		data() {
			return {
				contentList: []
			}
		},
		created() {
			this.modifyAgent(this.query.title)
			//首次进入模拟加载过程
			setTimeout(() => {
				this.detailsLoaddinghide()
			}, 500)
			this.displayIdIndex()
			this.getIndexId3Api(
				{url:'../static/db.json',
				method:'get',
				data:'',
				res:(response)=>{console.log(response)}
				}
				)
		},
		computed: {
			...mapState(['loaddingShow','indexId1list', 'indexId2list','indexTitle']),
			query() {
				return this.$route.query
			}
		},
		methods: {
			...mapActions([
				'getIndexId1Api', 'getIndexId2Api', 'detailsLoaddinghide','detailsLoaddingShow',
			'getIndexId3Api']),
			...mapMutations(['modifyAgent']),
			go() {
				window.history.go(-1);
			},
			displayIdIndex() {
				if(this.query.id == 1) {
					this.getIndexId1Api()
				} else if(this.query.id == 2) {
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
	
	.result-list-wrap {
		width: 100%;
		overflow: hidden;
		text-align: left;
		padding-left: .2rem;
		padding-right: .2rem;
		.inform-list-title {
			padding-left: .1rem;
			width: 100%;
			background: #e83929;
			/*height: .36rem;*/
			line-height: .36rem;
			font-size: .18rem;
			color: #fff;
			font-weight: 300;
			border-radius: 4px;
		}
		.inform-list-item {
			background: #ddd;
			margin-top: .1rem;
			margin-bottom: .1rem;
			padding: .1rem;
			border-radius: 4px;
		}
	}
</style>
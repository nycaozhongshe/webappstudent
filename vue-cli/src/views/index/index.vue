<template>
	<div class="index-wrapper">
		<loadding :show='pageShow' :txt="prompt"></loadding>
		<!--直接渲染一个页面-->
		
		<div class="wrapper-item" v-for="item in contentList">
			<div class="title">{{item.title}}</div>
			<div class="index-list clearfix">
				<div class="index-item" v-for="pro in item.rows">
					<router-link :to="{ path:'/details', query: {id: pro.id,title:pro.display} }" tag='div'>
						<img src="../../../static/20150407120602871.jpg" class="item-logo" />
						<span>{{pro.display}}</span>
					</router-link>
				</div>
			</div>
		</div>
		
		<!--分三個部分渲染-->
		
		<!--<div class="wrapper-item">
			<div class="index-list clearfix">
				<div class="index-item" v-for="pro in contentList.rows">
					<router-link :to="{ path:'/details', query: {id: pro.id,title:pro.display} }">
						<img src="../../../static/20150407120602871.jpg" class="item-logo" />
						<span>{{pro.display}}</span>
					</router-link>
				</div>
			</div>
		</div>-->
	</div>
</template>

<script>
	import { mapActions, mapState } from 'vuex'
	export default {
		data() {
			return {
				contentList: [],	
				prompt: '',
				pageShow: true
			}
		},
		created() {
//			this.indexTitle = this.
			setTimeout(() => this.pageShow = false, 1000)
			this.getIndexApi()
		},
		methods: {
			...mapActions([
				'getIndexApi'
			]),
			go() {
				window.history.go(-1);
			},
			pageDisplay() {

			}
		},
		mounted() {

		},
		computed: {
			...mapState(['indexData', 'page', 'tipTxt', 'indexTitle'])
		},
		watch: {
			indexData() {
				this.contentList = this.indexData
			},
			page() {				
			setTimeout(() => this.pageShow = this.page, 1000)					
			},
			tipTxt() {
				this.prompt = this.tipTxt
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.index-wrapper {
		margin-bottom: .6rem;
	}
	.wrapper-item {
		width: 100%;
		.title {
			text-align: left;
			padding-left: .2rem;
			height: .3rem;
			width: 100%;
			background: #f9f9f9;
			color: #26a2ff;
			line-height: .3rem;
		}
		.index-list {
			width: 100%;
			.index-item {
				width: 25%;
				float: left;
				border: 1px solid #f9f9f9;
				padding-bottom: .1rem;
				font-size: .14rem;
				.item-logo {
					display: block;
					width: 50%;
					height: auto;
					border-radius: 50%;
					margin: .1rem auto;
				}
			}
		}
	}
</style>
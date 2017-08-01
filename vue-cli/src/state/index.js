import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		//导航页	
		nav1: '',
		nav2: '',
		nav3: '',
		//index	
		indexData: [],
		tipTxt: '页面正在加载中',
		page: false,
		action: false,
		//
		indexTitle:'',
		//details
		loaddingShow: true,
		//details id = 1
		indexId1list: [],
		//details id = 2
		indexId2list: [],
	},
	actions: {
		detailsLoaddinghide(context) {
			context.state.loaddingShow = false
		},
		detailsLoaddingShow(context) {
			context.state.loaddingShow = true
		},
		getIndexApi(context) {
			axios({
					method: 'get',
					url: '../static/index.json'
//					url: 'http://172.25.253.5:8081/km-gradms-core-server/moblile/mobileAuthMenu/loadMobileAuthMenuListByDefaultRole',
					//data: context.state.test02s
				}).then((response) => {
					
					if(response.data.statusCode == 200) {
						let data = response.data.objData
						context.state.indexData = data
						context.state.nav1 = data[0].title
						context.state.nav2 = data[1].title
						context.state.nav3 = data[2].title
						context.state.action = true
					} else {
						setTimeout(() => {
							context.state.tipTxt = '服务器响应失败'
							context.state.page = true
						}, 1000)
					}
				}).catch((error) => {
					console.log('错误')
//					setTimeout(() => {
//						context.state.tipTxt = '服务器响应失败'
//						context.state.page = true
//					}, 800)
				})
		},
		getIndexId1Api(context) {
			axios({
					method: 'get',
					url: '../static/index-id-1.json',
					data: 'msgtzType=1'		
					//	data:  JSON.stringify({
					//  "msetztype": 1                   
					// })        
				}).then((response) => {
					response.data.title = '通知'					
					context.state.indexId1list[0] = response.data 					
				})
				.catch((error) => {
					context.state.indexId1list[0] = {rows:''}
				}),
				axios({
					method: 'get',
					//	url: '../static/index-id-1.json',
					url: '../static/index-id-1.json',  
					data: 'msgtzType=2'	
				}).then((response) => {
					response.data.title = '公告'
					context.state.indexId1list[1] = response.data 	
				})
				.catch((error) => {					
					context.state.indexId1list[1] = {rows:''}					
				}),
				axios({
					method: 'post',
					url: '172.25.253.5:8081/km-gradms-core-server/common/msg/sysMessageScope/loadSysMessageScopeList',
					data: 'msgtzType=3'	        
//					url: '../static/index-id-1.json',					
				}).then((response) => {		
					console.log('22222222222222')
					response.data.title = '资讯'					
					context.state.indexId1list[2] = response.data				
				})
				.catch((error) => {
					console.log('1111111111111111')
					context.state.indexId1list[2] = {rows:''}				
				})
		},
		getIndexId2Api(context) {
			axios({
					method: 'get',
					url: '../static/db.json',
				}).then((response) => {
					context.state.indexId2list = response.data.data				
				})
				.catch((error) => {
					console.log('错误')
					setTimeout(() => context.state.loaddingShow = true, 1000)
				})
		},
		getIndexId3Api(context,{url,method,data,res}) {
			axios({
					method: method || 'get',
					url: url,
					data:data 
				}).then((response) => {
					res(response)			
				})
				.catch((error) => {
					console.log('错误')
//					error(error)
				})
		}
	},
	mutations: {
			modifyAgent(state,val){
				state.indexTitle = val
			},
	},
	getters: {

	}
})
export default store
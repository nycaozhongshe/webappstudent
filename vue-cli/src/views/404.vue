<template>
	<div class="notFound" @click="goback">
		<span>页面未找到=_=</span>
		<span>点击屏幕返回</span>
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
			goback() {
				window.history.go(-1);
			}
		},
		mounted: function() {
			//TODO 函数执行区域
		}
	}
</script>
<style lang="scss" scoped="scoped">
	.notFound {
		width: 100%;
		position: fixed;
		height: 6.67rem;
		text-align: center;
		position:999;
	}
</style>
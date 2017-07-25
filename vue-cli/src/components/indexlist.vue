<template>
	<div class="wrapper-item">
		<div class="title">首页</div>
		<div class="index-list clearfix">
			<div class="index-item">
				<span class="iconfont item-logo">&#xe689;</span> 通知公告
			</div>
			<div class="index-item">
				<span class="iconfont item-logo">&#xe689;</span> 我的课程
			</div>
			<div class="index-item">
				<span class="iconfont item-logo">&#xe689;</span> 我的成绩
			</div>
			<div class="index-item">
				<span class="iconfont item-logo">&#xe689;</span> 调课信息
			</div>
			<div class="index-item">
				<span class="iconfont item-logo">&#xe689;</span> 我的申请
			</div>
			<div class="index-item">
				<span class="iconfont item-logo">&#xe689;</span> 师生互动
			</div>
			<!--<div class="index-item">
				<span class="iconfont item-logo">&#xe689;</span> 学业预警
			</div>-->
			<!--<div class="index-item">
				<span class="iconfont item-logo">&#xe689;</span> 我的评教
			</div>-->
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.wrapper-item {
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
			.index-item {
				width: 25%;
				float: left;
				border: 1px solid #f9f9f9;
				padding-bottom: .1rem;
				.item-logo {
					display: block;
					font-size: .3rem;
					color: #ff461f;
				}
			}
		}
	}
</style>
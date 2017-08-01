<template>
	<div id="app">
		<!--<keep-alive>-->
			<router-view></router-view>
		<!--</keep-alive>-->
	</div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style>
	@import 'assets/css/cormalize.css';

  @font-face {
  font-family: 'iconfont';  /* project id 363070 */
  src: url('http://at.alicdn.com/t/font_8fitkxrbovhlrf6r.eot');
  src: url('http://at.alicdn.com/t/font_8fitkxrbovhlrf6r.eot?#iefix') format('embedded-opentype'),
  url('http://at.alicdn.com/t/font_8fitkxrbovhlrf6r.woff') format('woff'),
  url('http://at.alicdn.com/t/font_8fitkxrbovhlrf6r.ttf') format('truetype'),
  url('http://at.alicdn.com/t/font_8fitkxrbovhlrf6r.svg#iconfont') format('svg');
}
	.iconfont {
		font-family: 'iconfont';
		/* project id 363070 */
	}
	
	#app {
		width: 3.75rem;
		font-size: 16px;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: .6rem;
	}
	
	#app::-webkit-scrollbar {
		display: none;
	}
</style>
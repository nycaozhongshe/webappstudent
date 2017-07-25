<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import 'assets/css/cormalize.css';
	html{
		font-size: 100px;
	}
	@font-face {
		font-family: 'iconfont';
		src: url('http://at.alicdn.com/t/font_gsgwcsx3n093haor.eot');
		src: url('http://at.alicdn.com/t/font_gsgwcsx3n093haor.eot?#iefix') format('embedded-opentype'), url('http://at.alicdn.com/t/font_gsgwcsx3n093haor.woff') format('woff'), url('http://at.alicdn.com/t/font_gsgwcsx3n093haor.ttf') format('truetype'), url('http://at.alicdn.com/t/font_gsgwcsx3n093haor.svg#iconfont') format('svg');
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
</style>

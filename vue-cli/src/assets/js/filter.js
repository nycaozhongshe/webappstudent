import Vue from 'vue'
Vue.filter('examType', function(value) {
	return value ? '专业课' : '公共课'
})
Vue.filter('isDegree', function(value) {
	return value > 31 ? '学位课' : '非学位课'
})
Vue.filter('coursetypecode', function(value) {
	return value ? '必修课' : '选修课'
})

Vue.filter('credit', function(value) {
	return value- Math.round(value)? value : Math.round(value)
})
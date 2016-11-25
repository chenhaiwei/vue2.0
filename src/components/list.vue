<template>
	<div class="list">
		<ul>
			<li v-for="item in items">{{ item.title }}</li>
		</ul>
	</div>
</template>
<script>
export default {
	data(){
		return {
			title: '豆瓣电影',
			items: ''
		}
	},
	mounted(){
		this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10').then(res => {
			this.items = res.data.subjects;
		})
	}
}
</script>

<template>
	<div>
		<title-bar :titleBar="data.title"></title-bar>
		<div class="details">
			<div class="banner">
				<img :src="data.images.medium" />
			</div>
			<div class="info">
				<p>{{ data.summary }}</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return {
			data: ''
		}
	},
	mounted(){
		this.$http.jsonp('https://api.douban.com/v2/movie/subject/'+this.$route.params.id).then(res => {
			this.data = res.data
		})
	},
	components: {
		'title-bar': require('./../components/title-bar.vue')
	}
}
</script>

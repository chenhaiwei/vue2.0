<template>
	<div>
		<title-bar :titleBar="title" @listenTitleBar="movieSort"></title-bar>
		<div class="movie">
			<ul>
				<li v-for="item in items">
					<router-link :to="{name: 'details', params: {id: item.id}}">
						<img :src="item.images.large" />
						<div class="info">
							<h3>{{ item.title }}</h3>
							<p>主演：<span v-for="cast in item.casts">{{ cast.name }}</span></p>
							<p>类型：<span v-for="genre in item.genres">{{ genre }}</span></p>
							<i>{{ item.rating.average }}</i>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return {
			title: '电影',
			items: '',
			nav: 'in_theaters'
		}
	},
	methods: {
		movieSort(sort){
			this.nav = sort;
			this.getMovieList(this.nav);
		},
		getMovieList(params){
			this.$http.jsonp('https://api.douban.com/v2/movie/'+params+'?count=20').then(res => {
				this.items = res.data.subjects;
			})
		}
	},
	watch: {
		nav(n, o){
			console.log(n, o);
		}
	},
	mounted(){
		let nav = this.nav;
		this.getMovieList(nav);
	},
	components: {
		'title-bar': require('./../components/title-bar.vue')
	}
}
</script>

<template>
	<header>
		<a href="javascript:;" class="go-back" @click="goBack"></a>
		<h1>{{ titleBar }}</h1>
		<div v-if="sortBar">
			<a href="javascript:;" class="sort" @click="openSort"></a>
			<ul class="sort-item" v-show="item">
				<li @click="getSort('in_theaters')">正在热映</li>
				<li @click="getSort('coming_soon')">即将上映</li>
				<li @click="getSort('top250')">经典口碑</li>
			</ul>
		</div>
	</header>
</template>
<script>
export default {
	data(){
		return {
			item: false,
			sortBar: false
		}
	},
	props: ['titleBar'],
	methods: {
		goBack(e){
			if(e.target.href === 'javascript:;'){
				history.go(-1);
			}
		},
		openSort(){
			this.item = !this.item;
		},
		getSort(m){
			this.$emit('listenTitleBar', m);
			this.item = !this.item;
		}
	},
	mounted(){
		this.sortBar = this.$route.path === '/list' ? true : false;
	}
}
</script>

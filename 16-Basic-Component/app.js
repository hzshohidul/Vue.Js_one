Vue.component('shohidul', {
	data(){
		return{
			nameta : 'My name is Ashraful Islam'
		}
	},
	template: `<p>{{ nameta }}</p>`
});

new Vue({
	el: '#appidta',
});
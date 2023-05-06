new Vue({
	el: "#appidta",
	data:{
		nameta: "Osman",
	},
	methods:{
		heading(){
			setTimeout(()=>{
				this.nameta = 'Shohidul'
			}, 2000)
		}
	}
});
new Vue({
	el: "#appidta",
	data:{
		nameta: 'Osman',
		x: 0,
		y: 0,
	},
	methods:{
		updateName(){
			this.nameta = 'Ashraful Islam';
		},
		getCoord(event){
			this.x = event.clientX;
			this.y = event.clientY;
		}
	}
});
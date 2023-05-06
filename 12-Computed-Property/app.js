new Vue({
	el: "#appidta",
	data:{
		a : 0,
		b : 0,
		salary : 1000
	},
	computed:{
		addToA(){
			console.log("add A");
			return this.a + this.salary;
		},
		addToB(){
			console.log("add B");
			return this.b + this.salary;
		}
	}
});
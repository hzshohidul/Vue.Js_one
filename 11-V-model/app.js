new Vue({
	el: "#appidta",
	data:{
		formDatata:{
			firstName : '',
			lastName : '',
		}
	},
	methods:{
		handleForm(){
			console.log(this.formDatata);
		}
	}
});
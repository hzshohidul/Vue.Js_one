new Vue({
	el: "#appidta",
	data:{
		user    : "Osman",
		userAge : 17,
		allowedAge : 18,
	},
	methods:{
		changeUser(){
			return this.user === "Osman" ? true : false;
		}
	}
});
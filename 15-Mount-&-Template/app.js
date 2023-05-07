
const app11 = new Vue({
	el: "#appidta1",
	data:{
		valueta : '1st',
	},
	methods:{
		changeValue(){
			app12.valueta = 'Changed';
		}
	},
});


const app12 = new Vue({
	el: "#appidta2",
	data:{
		valueta : '2nd',
	},
});

new Vue({
    el: "#app",
    data: {
        titleee: "Shohidul Islam",
        isItTrueee: true,
        cars: ['Ford', 'Toyota'],
		
        //object
        eat: {
            nameee: "Mango",
            company: "Food.org",
        },
        //function
        greeting: ()=>{
            return "Hello World";
        }
    },
	
	//method old version
	// methods: {
		// heaving: function() {
			// return "Hello Shohidul Islam";
		// }
	// },
	
	//method ES6 version
	methods: {
		monnig() {
			return "Hello Ashraful Islam";
		},
		heading() {
			return this.titleee;
		},
		johing() {
			return this.cars[0];
		},
	}
});
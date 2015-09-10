var augment = function(FruitMaker) {

		FruitMaker.slices = function(name, slice) {
			var slices = [];

		    for (var i = 0; i < slice; i++) {
		    	slices.push(name); 
		    }

			return slices;
		}

		return FruitMaker;

}(FruitMaker)
(function(){
	var app = angular.module('bookQuest',[]);

		app.controller('BookController', function($scope){
			this.items = days;

});
	
	var days =
	[{
		day: '01',
		available: "Всё занято",

	},
	{
		day: '02',
		available: 8,

	}];

	
	
})();

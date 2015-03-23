(function() {
	var ang = angular.module('index', []);

	ang.controller('IndexController', function(){
		this.introduction = introduction

		var loadText = function(){
			introduction.started = true;

		}

		var loadMoreText = function(){
			introduction.introductionTextCounter +=1
		}
	})

	var introduction = {
		title: 'Addendum XIII',
		start: 'Begin',
		started: false,
		introductionTextCounter:-1,
		introductionTexts: [
			'The United Nations Security Council hereby endows Agent X',
			'with full permission and authority to kill all the mosnters.'
		]
	}
})();

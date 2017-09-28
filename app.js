var myApp = angular.module("myApp", ["ngRoute","ngAnimate","ui.bootstrap"]);

myApp.config(function($routeProvider){ //controls partials of html
	$routeProvider
		.when("/intro", {
			templateUrl: "partials/intro.html",
			controller: "IntroCtrl"
		})
		.when("/about", {
			templateUrl: "partials/about.html",
			controller: "AboutCtrl"
		})
		.when("/projects", {
			templateUrl: "partials/projects.html",
			controller: "ProjectsCtrl"
		})
		.when("/contact", {
			templateUrl: "partials/contact.html",
			controller: "ContactCtrl"
		})
	.otherwise({
		redirectTo: "/intro"
	});
});

myApp.controller("HeaderCtrl", function($scope, $location){ 
	$scope.appDetails = {
		
	};

	$scope.nav = {};
	$scope.nav.isActive = function(path) {
		if(path === $location.path()){
			return true;
		}

		return false;
	};
});

myApp.controller("IntroCtrl", function($scope){ 
	$scope.appDetails = {
		hello: "Hi, I'm Tyler.",
		about1: "I'm an undergraduate student of Computer Science at the University of North Florida.",
		about2: "Explore this site to learn more about me, my technical skills, and my projects.",
		about3: "When I'm not programming, I enjoy surfing, fishing, and reading."

	};
});

myApp.controller("AboutCtrl", function($scope){ 
	$scope.appDetails = {
		title: "About Me.",
		arrow: "images/arrow1.png"
	};
});

myApp.controller("ProjectsCtrl", function($scope){ 
	$scope.appDetails = {
		title: "Project List.",
		arrow: "images/arrow1.png"
	};


	$scope.projects =[
		{
			title: "UNF Surf",
			imgURL: "images/splash.png",
			description: "UNF Surf is a mobile application, downloadable on both iOS and Android platforms. I made this app for the team as a centralized point of communication and data; this includes anouncements, contest schedules, event dates, photos, team profiles, and more. Administrators are able to push posts to the database that can be viewed instantaneously on the feed of the application. Not affiliated with the UNF Surf team? No problem! Our awesome sponsors use UNF Surf as a medium to post deals and discount codes for their merchandise. \n\n     I made this application using AngularJS 2, the Ionic Framework, and data storing with Google Firebase. The source code is compiled using Cordova, so that the application can be launched on multiple mobile platforms."
		},
		{
			title: "Packfinder",
			imgURL: "images/PFDisplay.PNG",
			description: "Packfinder is a prototype of an application for a peer with a startup company, written in Swift and designed in Xcode. The basic idea of this application is to serve as a medium for car enthusiasts to meet and share ideas, as well as to schedule car make and model meets through the use of maps and geolocation. However, this application is only partially functional as its intention was to show potential investors and straighten out ideas for the company."
		},
		{
			title: "Further Learning",
			imgURL: "images/udemy.jpg",
			description: "Staying busy is a priority of mine, as gaining knowledge in the field of development is both enjoyable and indespensable. This is why I am constantly pushing myself to take on new projects, learn new things, and program in as much free time as I am offered outside of my studies at school. I am constantly taking courses online through websites such as Udemy and Lynda so that I can broaden my knowledge with the end goal of being a well rounded developer. Some courses that I have taken include topics of\n\nWeb Development,\n\nJavaScript Frameworks,\n\niOS Development,\n\nThe Ionic Framework,\n\nXamarin,\n\nC#,\n\nPython,\n\nand more."
		}
	];

	$scope.activeProject = 
		{
			title: '',
			imgURL: '',
			description: ''
		};

	$scope.showModal = function(project) {
		this.activeProject.title = project.title;
		this.activeProject.imgURL = project.imgURL;
		this.activeProject.description = project.description;
    	angular.element('#myModal').css('display', 'block');
	}

	$scope.closeModal = function() {
		angular.element('#myModal').css('display', 'none');
	}

});

myApp.controller("ContactCtrl", function($scope){ 
	$scope.appDetails = {
		title: "Contact Me.",
		arrow: "images/arrow1.png"
	};
});







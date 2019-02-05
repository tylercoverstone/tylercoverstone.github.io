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
			title: "Internship at Florida Blue",
			imgURL: "images/flBlue.png",
			description: "In May of 2018, I took on a Internship role at Florida Blue in a summer program, within the Web and Mobile Development team to work on sales-side applications. That program expired in the beginning of August, and in that time I learned a great deal about healthcare market, my role in a true team environment for developing software, agile development procedures using SCRUM, and the tools we used to complete our tasks. I was hired at the end of my internship program, and currently still work at Florida Blue in the Web and Mobile Development area. My day-to-day activities lately consist of Java development, as well as regression and acceptance testing for new releases."
		},
		{
			title: "SMIRK",
			imgURL: "images/CyberSEED.png",
			description: "SMIRK (Secure Medical Information Repository Kit) is an application that I made with three other peers to compete in the University of Connecticut's CyberSEED 2017 cyber security coding competition. This application was written in Python, and uses Django and MariaDB. SMIRK is to be used as a medium for record creation and upkeep in a hospital setting, where authenticated users are assigned a specific role (i.e. Doctor, Patient, Medical Administrator, etc.). With each role, a list of permissions are available to the user (i.e. view patients' information, create a certain type of record, view specific records, etc.). The integration test client program can be run to insert test information to the application, and the status of the runtime will be updated in the console as well as to be observable in the application. The backdoor client is used to insert data from an XML file into the database, and can also be used to dump the database. After we finished our code for this project, our school was unable to organize the details for our travel in time, so we ended up not being able to participate in the competition. However, I am proud of the program that we created and I learned a tremendous amount. The source code for this project can be found on my Github."
		},
		{
			title: "Water Solutions Website",
			imgURL: "images/logo.png",
			description: "Water Solutions of Melbourne Beach, Florida is a local business that provides reverse osmosis coffeee and filtration systems for homes and offices. I got in touch to create a website for them: watersolutionsfl.com. This website was built with AngularJS, and showcases all of Water Solution's business information as well as providing an email service for getting in touch."
		},
		{
			title: "UNF Surf",
			imgURL: "images/splash.png",
			description: "UNF Surf is a mobile application, downloadable on both iOS and Android platforms. I made this app for the team as a centralized point of communication and data; this includes anouncements, contest schedules, event dates, photos, team profiles, and more. Administrators are able to push posts to the database that can be viewed instantaneously on the feed of the application. Not affiliated with the UNF Surf team? No problem! Our awesome sponsors use UNF Surf as a medium to post deals and discount codes for their merchandise. \n\n     I made this application using AngularJS 2, the Ionic Framework, and data storing with Google Firebase. The source code is compiled using Cordova, so that the application can be launched on multiple mobile platforms. This application is awaiting approval from UNF Student Government before deployment to the app store within the next few weeks."
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







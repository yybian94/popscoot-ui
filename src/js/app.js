angular.module('POPSCOOT', ['ngAvatar', 'ngRoute', 'ngMaterial', 'lfNgMdFileInput', 'ngFileUpload', 'ngImgCrop', 'app.service', 'app.root.ctrl', 'app.filters',  'app.account.ctrl', 'app.analytics.ctrl', 'app.bank.ctrl', 
	'app.booking.ctrl', 'app.dashboard.ctrl', 'app.enquiry.ctrl', 'app.help.ctrl', 'app.payment.ctrl', 'app.promotion.ctrl', 'app.scooter.ctrl', 'app.accountPromo.ctrl'
	])

.run(function($rootScope, $location) {
	console.log("welcome to popscoot");
	
	var isAuthenticated = function(){
		if (localStorage.getItem("UI_SECRET") === null) {
			var path = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/app/";
			window.location.href = path + "auth.html";
		}
	}
	isAuthenticated();

})

.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix("");

	$routeProvider

	.when('/accounts', {
		templateUrl: "templates/accounts.html",
		controller: "AccountsCtrl"
	})
	.when('/accounts/:id', {
		templateUrl: "templates/account.html",
		controller: "AccountCtrl"
	})

	.when('/banks', {
		templateUrl: "templates/banks.html",
		controller: "BanksCtrl"
	}).when('/transactions/:id', {
		templateUrl: "templates/bank.html",
		controller: "BankCtrl"
	})
	.when('/banks/:id', {
		templateUrl: "templates/bank.html",
		controller: "BankCtrl"
	})
	.when('/bookings', {
		templateUrl: "templates/bookings.html",
		controller: "BookingsCtrl"
	})
	.when('/bookings/:id', {
		templateUrl: "templates/booking.html",
		controller: "BookingCtrl"
	})
	.when('/enquiries', {
		templateUrl: "templates/enquiries.html",
		controller: "EnquiriesCtrl"
	})
	.when('/enquiries/:id', {
		templateUrl: "templates/enquiry.html",
		controller: "EnquiryCtrl"
	})
	.when('/helps', {
		templateUrl: "templates/helps.html",
		controller: "HelpsCtrl"
	})
	.when('/helps/:id', {
		templateUrl: "templates/help.html",
		controller: "HelpCtrl"
	})
	.when('/payments', {
		templateUrl: "templates/payments.html",
		controller: "PaymentsCtrl"
	})
	.when('/payments/:id', {
		templateUrl: "templates/payment.html",
		controller: "PaymentCtrl"
	})
	.when('/promotions', {
		templateUrl: "templates/promotions.html",
		controller: "PromotionsCtrl"
	})
	.when('/promotions/:id', {
		templateUrl: "templates/promotion.html",
		controller: "PromotionCtrl"
	})
	.when('/scooters', {
		templateUrl: "templates/scooters.html",
		controller: "ScootersCtrl"
	})
	.when('/scooters/:id', {
		templateUrl: "templates/scooter.html",
		controller: "ScooterCtrl"
	})
	
	.when('/new/account', {
		templateUrl: "templates/accountnew.html",
		controller: "NewAccountCtrl"
	})
	.when('/new/bank', {
		templateUrl: "templates/banknew.html",
		controller: "NewBankCtrl"
	})
	.when('/new/booking', {
		templateUrl: "templates/bookingnew.html",
		controller: "NewBookingCtrl"
	})
	.when('/new/help', {
		templateUrl: "templates/helpnew.html",
		controller: "NewHelpCtrl"
	})
	.when('/new/payment', {
		templateUrl: "templates/paymentnew.html",
		controller: "NewPaymentCtrl"
	})	
	.when('/new/promotion', {
		templateUrl: "templates/promotionnew.html",
		controller: "NewPromotionCtrl"
	})
	.when('/new/scooter', {
		templateUrl: "templates/scooternew.html",
		controller: "NewScooterCtrl"
	})
	.when('/new/accountPromo', {
		templateUrl: "templates/accountPromonew.html",
		controller: "NewAccountPromoCtrl"
	})


	.when('/dashboard', {
		templateUrl: "templates/dashboard.html",
		controller: "DashboardCtrl"
	})
	.when('/analytics', {
		templateUrl: "templates/dashboard.html",
		controller: "AnalyticsCtrl"
	})

	.otherwise({
		redirectTo: '/dashboard'
	});
})

.config(function($mdIconProvider) {
	$mdIconProvider
	.iconSet("call", 'img/icons/sets/communication-icons.svg', 24)
	.iconSet("social", 'img/icons/sets/social-icons.svg', 24);
})


/*.constant('LOCALES', {
    'locales': {
        'zh_CN': 'Chinese',
        'en_SG': 'English'
    },
    'preferredLocale': 'en_US'
})
 .config(function ($translateProvider) {
    $translateProvider.useMissingTranslationHandlerLog();
})
 .config(function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: 'resources/language-',// path to translations files
        suffix: '.json'// suffix, currently- extension of the translations
    });
    $translateProvider.preferredLanguage('en_US');// is applied on first load
    $translateProvider.useLocalStorage();// saves selected language to localStorage
})
 .config(function (tmhDynamicLocaleProvider) {
    tmhDynamicLocaleProvider.localeLocationPattern('node_modules/angular-i18n/angular-locale_{{locale}}.js');
})

 .directive('ngTranslateLanguageSelect', function (LocaleService) { 'use strict';

        return {
            restrict: 'A',
            replace: true,
            template: ''+
            '<div class="language-select" ng-if="visible">'+
                '<label>'+
                    '{{"directives.language-select.Language" | translate}}:'+
                    '<select ng-model="currentLocaleDisplayName"'+
                        'ng-options="localesDisplayName for localesDisplayName in localesDisplayNames"'+
                        'ng-change="changeLanguage(currentLocaleDisplayName)">'+
                    '</select>'+
                '</label>'+
            '</div>'+
            '',
            controller: function ($scope) {
                $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();
                $scope.localesDisplayNames = LocaleService.getLocalesDisplayNames();
                $scope.visible = $scope.localesDisplayNames &&
                $scope.localesDisplayNames.length > 1;

                $scope.changeLanguage = function (locale) {
                    LocaleService.setLocaleByDisplayName(locale);
                };
            }
        };
    });*/
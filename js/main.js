// Create the app
var ThreeDOMApp = angular.module('ThreeDOMApp', ['ngRoute', 'ngAnimate', 'ui.router', 'ui.bootstrap']);

// Configure the routes
ThreeDOMApp.config(function($routeProvider, $stateProvider) {

    $routeProvider  // Projects route
                    .when('/projects', {
                                    title: 'Projects',
                                    templateUrl : 'pages/projects.html',
                                    controller  : 'projectsController'})
                    // Logos route
                    .when('/logos', {
                                    title: 'Logos',
                                    templateUrl : 'pages/logos.html',
                                    controller  : 'logosController'})
                    // Presentations route
                    .when('/presentations', {
                                    title: 'Presentations',
                                    templateUrl : 'pages/presentations.html',
                                    controller  : 'presentationsController'})
                    // Quotes route
                    .when('/quotes', {
                                    title: 'Quotes',
                                    templateUrl : 'pages/quotes.html',
                                    controller  : 'quotesController'})
                    // Support route
                    .when('/support', {
                                    title: 'Support',
                                    templateUrl : 'pages/support.html',
                                    controller  : 'supportController'})

                    // Convert route
                    .when('/convert', {
                                    title: 'Convert',
                                    templateUrl : 'pages/convert.html',
                                    controller  : 'convertController'})

                    // Active project route
                    .when('/projectselected', {
                                    title: 'Project selected',
                                    templateUrl : 'pages/projectSelected.html',
                                    controller  : 'projectSelectedController'})
									
                    // Setting project route
                    .when('/projectsettings', {
                                    title: 'Project settings',
                                    templateUrl : 'pages/projectsettings.html',
                                    controller  : 'projectSettingController'})


                    // Hire a designer route
                    .when('/hieradesigner', {
                                    title: 'Hire a designer',
                                    templateUrl : 'pages/hieradesigner.html',
                                    controller  : 'hieradesignerController'})
                    // Presentations driver route
                    .when('/presentationsdriver', {
                                    title: 'Presentations Driver',
                                    templateUrl : 'pages/presentationsdriver.html',
                                    controller  : 'presentationsdriverController'})

                    // Create Project route
                    .when('/create-project', {
                                    title: 'Create project',
                                    templateUrl : 'pages/projectcreation1a.html',
                                    controller  : 'createprojectsController'})

                    // Create Project route
                    .when('/create-project-2', {
                                    title: 'Create project',
                                    templateUrl : 'pages/projectcreation2.html',
                                    controller  : 'createprojectsController'})

                    // Default route
                    .otherwise({
                                    title: 'Dashboard',
                                    templateUrl : 'pages/dashboard.html',
                                    controller  : 'dashboardController'});
                    
    $stateProvider
    
                    // route to show our basic form (/form)
                    .state('create-project', {
                        url: '/create-project',
                        templateUrl: 'pages/project-creation1a.html',
                        controller: 'createprojectsController'
                    })
                    
                    // nested states 
                    // each of these sections will have their own view
                    // url will be nested (/form/profile)
                    .state('createproject.step2', {
                        url: '/create-project-2',
                        templateUrl: 'pages/project-creation2.html'
                    })
                    
                    // url will be /form/interests
                    .state('createproject.step3', {
                        url: '/create-project-3',
                        templateUrl: 'pages/project-creation3.html'
                    })

                    // url will be /form/interests
                    .state('createproject.step4', {
                        url: '/create-project-4',
                        templateUrl: 'pages/project-creation4.html'
                    })
                    
                    // url will be /form/payment
                    .state('createproject.step5', {
                        url: '/create-project-5',
                        templateUrl: 'pages/project-creation5.html'
                    });
});


// Configure the controllers
            // Main controller
ThreeDOMApp .controller('mainController', function($scope, $route, $rootScope, $location) {
                //Change page title, based on Route information
                $rootScope.$on('$routeChangeSuccess',
                    function(event, toState, toParams, fromState, fromParams){
                        $scope.title = $route.current.title;
                        $scope.loading = false;
                    });
                $rootScope.$on('$routeChangeStart', function(scope, next, current){
                   $scope.loading = true;
                });
                $scope.isActive = function(route) {
                    return route === $location.path();
                };
                $scope.sign_in = false;
                $scope.newProject = false;
                $scope.alert = true;
                $scope.togglePlusMinus = togglePlusMinus;
                function togglePlusMinus(){
                    var self = this;
                    self.selectedIndex = 1;
                    
                    self.toggleSelect = function(ind){
                        if( ind === self.selectedIndex ){
                            self.selectedIndex = -1;
                        } else{
                            self.selectedIndex = ind;
                        }
                    }
                       
                    self.getButtonLabel = function(ind){
                        if( ind === self.selectedIndex ){
                            return "Collapse (-)";
                        } else{
                            return "-";
                        }
                    }
                }
            })
            // Dashboard controller
            .controller('dashboardController', function($scope) {
            })
            .controller('createprojectsController', function($scope) {
    
                // we will store all of our form data in this object
                $scope.formData = {};
                
                // function to process the form
                $scope.processForm = function() {
                    alert('awesome!');
                };
                
            })
            // Projects controller
            .controller('projectsController', function($scope) {
            })
            .controller('convertController', function($scope) {
                var dropEl = angular.element('.dd_zone')[0];
                dropEl.addEventListener("dragenter", function(e) {
                    e = e || event;
                    e.preventDefault();
                console.log("DragEnter event");
                }, false);
            })
            // Logos controller
            .controller('logosController', function($scope) {
                var dropEl = angular.element('.dd_zone')[0];
                dropEl.addEventListener("dragenter", function(e) {
                    e = e || event;
                    e.preventDefault();
                console.log("DragEnter event");
                }, false);
            })
            // Presentations controller
            .controller('presentationsController', function($scope) {
            })
            // Quotes controller
            .controller('quotesController', function($scope) {
            })
			// Project Setting Controller
            .controller('projectSettingController', function($scope) {
                $scope.tab=1;
			})
            // Support controller
            .controller('supportController', function($scope) {
                $scope.more_info = false;
                $scope.getting_started = false;
                $scope.getting_started_item2 = false;

                $scope.isHidden = function() {
                    return ($scope.more_info && $scope.getting_started);
                }
            })
            // project selected controller
            .controller('projectSelectedController', function($scope) {
            })
            // Hire a designer controller
            .controller('hieradesignerController', function($scope) {
                var dropEl = angular.element('.dd_zone')[0];
                dropEl.addEventListener("dragenter", function(e) {
                    e = e || event;
                    e.preventDefault();
                console.log("DragEnter event");
                }, false);
            })
            // Presentations driver controller
            .controller('presentationsdriverController', function($scope, $document) {
                
                var dropEl = angular.element('.dd_zone')[0];
                dropEl.addEventListener("dragenter", function(e) {
                    e = e || event;
                    e.preventDefault();
                console.log("DragEnter event");
                }, false);

                var mediaPlayer;
                var progressBar = angular.element('#progress-video')[0];

                initialiseMediaPlayer();
                $scope.initialiseMediaPlayer = initialiseMediaPlayer;
                function initialiseMediaPlayer() {
                    mediaPlayer = angular.element('#media-video')[0];
                    mediaPlayer.controls = false;
                    mediaPlayer.addEventListener('timeupdate', updateProgressBar, false);
                }
                $scope.updateProgressBar = updateProgressBar;
                function updateProgressBar() {
                    var percentage = Math.floor((100 / mediaPlayer.duration) *
                    mediaPlayer.currentTime);
                    progressBar.style.width = percentage+'%';
                    angular.element('#total-duration')[0].innerHTML = ("0" + Math.round((mediaPlayer.duration)/60)).slice(-2)+':'+("0" + Math.round((mediaPlayer.duration)-(mediaPlayer.duration)/60)).slice(-2);
                    angular.element('#current-time')[0].innerHTML = ("0" + Math.round((mediaPlayer.currentTime)/60)).slice(-2)+':'+("0" + Math.round((mediaPlayer.currentTime)-(mediaPlayer.currentTime)/60)).slice(-2);;
                }
                $scope.togglePlayPause = togglePlayPause;
                function togglePlayPause() {
                    var btn = angular.element('#play-pause-button')[0];
                    if (mediaPlayer.paused || mediaPlayer.ended) {
                        btn.title = 'pause';
                        btn.innerHTML = 'pause';
                        btn.className = 'pause';
                        mediaPlayer.play();
                    }
                    else {
                        btn.title = 'play';
                        btn.innerHTML = 'play';
                        btn.className = 'play';
                        mediaPlayer.pause();
                    }
                }
                $scope.changeButtonType = changeButtonType;
                function changeButtonType(btn, value) {
                    btn.title = value;
                    btn.innerHTML = value;
                    btn.className = value;
                }
                $scope.stopPlayer = stopPlayer;
                function stopPlayer() {
                    mediaPlayer.pause();
                    mediaPlayer.currentTime = 0;
                }
                $scope.changeVolume = changeVolume;
                function changeVolume(direction) {
                    if (direction === '+')
                        mediaPlayer.volume += mediaPlayer.volume == 1 ? 0 : 0.1;
                    else 
                        mediaPlayer.volume -= (mediaPlayer.volume == 0 ? 0 : 0.1);
                    mediaPlayer.volume = parseFloat(mediaPlayer.volume).toFixed(1);
                }
                $scope.toggleMute = toggleMute;
                function toggleMute() {
                    var btn = angular.element('#mute-button')[0];
                    if (mediaPlayer.muted) {
                        changeButtonType(btn, 'mute');
                        mediaPlayer.muted = false;
                    }
                    else {
                        changeButtonType(btn, 'unmute');
                        mediaPlayer.muted = true;
                    }
                }
                $scope.replayMedia = replayMedia;
                function replayMedia() {
                    resetPlayer();
                    mediaPlayer.play();
                }
                $scope.resetPlayer = resetPlayer;
                function resetPlayer() {
                    progressBar.value = 0;
                    mediaPlayer.currentTime = 0;
                    changeButtonType(playPauseBtn, '▶');
                }

                mediaPlayer.addEventListener('play', function() {
                    var btn = angular.element('#play-pause-button')[0];
                    changeButtonType(btn, 'll');
                }, false);

                mediaPlayer.addEventListener('pause', function() {
                    var btn = angular.element('#play-pause-button')[0];
                    changeButtonType(btn, '▶');
                }, false);
            });
            var TabsDemoCtrl = function ($scope) {
              $scope.tabs = [
                // { title:'Step 1' },
                // { title:'Step 2' }
                // { title:'Step 3' },
                // { title:'Step 4' }
              ];

              $scope.alertMe = function() {
                setTimeout(function() {
                  alert('You\'ve selected the alert tab!');
                });
              };
            };
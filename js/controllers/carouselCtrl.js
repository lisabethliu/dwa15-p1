'use strict';

angular.module('App').controller('CarouselCtrl',
    function ($scope) {
        $scope.interval = 5000;

        var cats = ['Lisabeth Liu', 'Meatball', 'Riceball', 'Ichiro'];
        var slides = $scope.slides = [];

        $scope.addSlide = function () {
            var newWidth = 600 + slides.length;
            slides.push({
                image: slides.length % cats.length === 0 ? 'images/myself.jpg' : 'http://placekitten.com/' + newWidth + '/600',
                text: cats[slides.length]
            });
        };

        for (var i = 0; i < cats.length; i++) {
            $scope.addSlide();
        }
    });
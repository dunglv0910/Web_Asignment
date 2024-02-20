var app = angular.module('myApp', []);
app.run(function ($rootScope) {
    var user = {
        tf: true,
        name: null,
        majoy: null
    };
    localStorage.setItem('user', JSON.stringify(user));
    console.log(localStorage.getItem('user'))
    var login = JSON.parse(localStorage.getItem('user'))
    console.log(login.tf);
});
app.controller('Ctrl', function ($scope, $http) {
    $scope.question = [];
    $scope.play = function (id) {
        console.log('ok')
        var sub = id + '.js';
        var url = 'http://127.0.0.1:5500/data/' + sub;
        $http.get(url).then(function (response) {
            $scope.question = response.data;
            console.log($scope.question);
            console.log($scope.question.length);
        }, function (response) {
            alert('Adu lỗi rồi người ae');
        });
        document.getElementById('selectSub').style = 'display: none';
        document.getElementById('tracNghiemCn1').style = 'display: block';
        document.getElementById('btn-chon').style = 'display: block';
        document.getElementById('btn-boqua').style = 'display: block';
    }

    $scope.begin = 0;
    $scope.boqua = function () {
        console.log("ok")
        $scope.begin++;
        if ($scope.begin == 10) {
            document.getElementById('tracNghiemCn1').style = 'display: none';
            document.getElementById('btn-chon').style = 'display: none';
            document.getElementById('btn-boqua').style = 'display: none';

        }
    }
    $scope.tt = 0;
    $scope.chon = function () {
        console.log("ok")
        $scope.begin++;
        if ($scope.begin == 10) {

        }
    }
    $scope.chonDapAn = function (Id, index) {
        console.log($scope.question[index].AnswerId)
        console.log(Id)
        console.log(index)
        if ($scope.question[index].AnswerId === Id) {
            console.log('______________')
            console.log($scope.question[index].AnswerId)
            console.log(Id)
            console.log('chính xác')
        $scope.tt++;

        }


    }

});

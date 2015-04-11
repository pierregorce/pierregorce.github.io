





var app = angular.module('myApp', ['ngRoute']);

//Gestion du menu du site
app.controller('NavCtrl', function MenuCtrl($scope) {
    $scope.menu = '/home';
});

//Routing
app.config(function($routeProvider){
    $routeProvider
                .when("/home",{templateUrl:'partials/cv.html'})
                .when("/android",{templateUrl:'partials/android.html'})
                .when("/web",{templateUrl:'partials/web.html', controller:'SnippetController'})
                .otherwise("/home",{});

});







var myApp = angular.module('myApp', []);


myApp.factory('HTTP_GET_REQUEST', function($http, $q) {

    var url = "https://3fba45a5abe66abe1ce6980329464ffc625c855b.googledrive.com/host/0B8Yxfc88upiYYzg1T3ROQTNCUG8/datas.txt";
    //var url = "newjson.json";
    var factory = {};

    factory.fonction1 = function() {

        var deferred = $q.defer();

        $http({method: 'GET', url: url}).
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    //factory.oData = angular.toJson(data);
                    //factory.oData = data;
                    //console.log(data);
                    deferred.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.

                });
        return deferred.promise;
    };

    return factory;

});


myApp.controller('MainCtrl', ['$scope', 'HTTP_GET_REQUEST', function($scope, HTTP_GET_REQUEST) {

        $scope.data = HTTP_GET_REQUEST.fonction1().then(
                function(data) {
                    $scope.datas = data;
                    editor.setValue($scope.datas[$scope.currentID].snippet);
                    $scope.changeLANGUAGE();
                    $scope.indent();

//                    $scope.currentLANGUAGE = $scope.datas[$scope.currentID].language;

                    //console.log(data);
                    console.log("load succes");
                    console.log(data);
                    $scope.status = "Load Succes.";
                },
                function() {
                    alert('error');
                }
        );

        $scope.currentID = '1';

//        $scope.currentLANGUAGE = $scope.languages[$scope.datas[$scope.currentID].language];

        $scope.languages = [
            {
                'option': '5',
                'value': 'Javascript'
            },
            {
                'option': '1',
                'value': 'Java'
            },
            {
                'option': '2',
                'value': 'CSS'
            },
            {
                'option': '3',
                'value': 'HTML'
            },
            {
                'option': '4',
                'value': 'SQL'
            }];

        $scope.currentLANGUAGE = $scope.languages[0];

        $scope.openSnippet = function(getClickedSnippet) {
            $scope.currentID = getClickedSnippet;
            editor.setValue($scope.datas[$scope.currentID].snippet);
            $scope.changeLANGUAGE();
            $scope.indent();
            console.log(editor);
//            $scope.currentLANGUAGE = $scope.datas[$scope.currentID].language;
            $scope.status = "Snippet Open";
        };


        $scope.newFile = function() {

            $scope.datas.push(
                    {
                        "id": $scope.datas.length,
                        "position": $scope.datas.length,
                        "title": "New Note",
                        "subtitle": "id : " + $scope.datas.length,
                        "language": "male",
                        "snippet": "Sint ex do laborum exercitation. Ut quis deserunt ad commodo dolore reprehenderit proident nulla quis deserunt eu labore ullamco. Cupidatat minim do aliquip eiusmod incididunt cupidatat.",
                        "lastEdit": "Thu Jan 01 1970 00:00:00 GMT+0100 (Paris, Madrid)",
                        "saved": false
                    }
            );
            $scope.status = "New File Create.";
        };

        $scope.save = function() {
            $scope.datas[$scope.current.id].snippet = editor.getValue();
        };

        $scope.saveJSON = function() {

            var JSON = angular.toJson($scope.datas);
            insertMyFile(JSON);
            $scope.status = "Uplaod Done";

        };

        $scope.changeLANGUAGE = function() {
            var language = $scope.languages[$scope.datas[$scope.currentID].language].value;
            var language = language.toLowerCase();
            if (language == "java") {
                language = "x-java";
            }
            if (language == "sql") {
                language = "x-sql";
            }
            if (language == "html") {
                //language = "xml";
                editor.setOption("htmlMode", true);

            }

            var mode = "text/" + language;
            console.log("Editor mode : " + mode);

//            text / css
//            text / html
//            text / javascript
//            text / x - java
//            text / x - sql


            editor.setOption("mode", mode);


        }

        $scope.delete = function() {
            var index = $scope.datas[$scope.currentID].id;
            var howmany = 1;
            $scope.datas.splice(index, howmany);
            OrderID();
            $scope.status = "Delete Done.";
        };

        $scope.indent = function() {
            for (i = 0; i < editor.lineCount(); i++) {
                editor.indentLine(i);
            }
            ;
            console.log("Indent DONE !");
            $scope.status = "Indent Done.";
        };


        function OrderID() {
            for (i = 0; i < $scope.datas.length; i++) {
                $scope.datas[i].id = i;
            }
        }


        //$scope.currentLANGUAGE = $scope.languages[$scope.datas[$scope.currentID].language];


        // $scope.textarea = $scope.datas[$scope.current.id].snippet;

//        $scope.currentLANGUAGE = $scope.languages[2];


        var config, editor;

        config = {
            lineNumbers: true,
            mode: "text/css",
            indentWithTabs: false,
            smartIndent: true,
            readOnly: false,
//            theme: "solarized"
            theme: "monokai"
                    //viewportMargin : "Infinity",
        };

        editor = CodeMirror.fromTextArea(document.getElementById("snippet_content_code"), config);

        editor.on('change', function(cMirror) {
            $scope.datas[$scope.currentID].snippet = cMirror.getValue();
        });




    }]);






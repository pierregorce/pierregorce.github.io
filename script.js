//Injection de dépendance
var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);

//Gestion du menu du site
app.controller('NavCtrl', function MenuCtrl($scope) {
    $scope.menu = 'home';
});

//Routing
app.config(function($routeProvider) {
    $routeProvider
            .when("/home", {templateUrl: 'partials/cv.html'})
            .when("/android", {templateUrl: 'partials/android.html'})
            .when("/web", {templateUrl: 'partials/web.html'})
            .otherwise({redirectTo: 'home'});
});

//Gestion du snippet editor
app.controller('MainCtrl', function MainCtrl($scope,$rootScope, HTTP_GET_REQUEST) {

    $scope.loading = true;
    //INITIALISATON

    $scope.data = HTTP_GET_REQUEST.getData().then(
            function(data) {
                $scope.datas = data;
                editor.setValue($scope.datas[$scope.currentID].snippet);
                $scope.changeLANGUAGE();
                $scope.indent();

                console.log("Load Succes");
                console.log(data);
                $scope.status = "Load Succes.";
                $scope.loading = false;
            },
            function() {
                console.log('error');
            }
    );

    $scope.currentID = '1';

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

    //FUNCTION

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
                    "snippet": "BLA BLA BLA",
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

        $scope.loading = true;

        var JSON = angular.toJson($scope.datas);
        insertMyFile(JSON,
                function callbackDownload() {
                    console.log('test callback');
                    $rootScope.$apply(function() {
                        $scope.loading = false;
                        $scope.status = "Saved on G.Drive";
                    });
                });
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

    //CODEMIRROR

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
});

//Gestion du chargement dans le snippet editor
app.factory('HTTP_GET_REQUEST', function($http, $q) {

    var url = "https://3fba45a5abe66abe1ce6980329464ffc625c855b.googledrive.com/host/0B8Yxfc88upiYYzg1T3ROQTNCUG8/datas.txt";
    //var url = "00/newjson.json";

    var factory = {};

    factory.getData = function() {

        var deferred = $q.defer();

        $http({method: 'GET', url: url}).
                success(function(data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    console.log('error');
                });
        return deferred.promise;
    };

    return factory;

});


class item {
    constructor(idx, title, desc, due) {
        this.idx = idx;
        this.title = title;
        this.desc = desc;
        this.due = due;
    }
}

var app = angular.module("todoApp", []);
app.controller("todoListController", function($scope) {
    $scope.todoList = [];
    $scope.addItem = addItem;
    $scope.delItem = delItem;
    $scope.exportList = exportList;
    $scope.importList = importList;

    //init()
    function init(){
        $scope.addItem("Title 0", "Desc 0", "Due 0")
        $scope.addItem("Title 1", "Desc 1", "Due 1")
        $scope.addItem("Title 2", "Desc 2", "Due 2")
    };

    function addItem(title, desc, due){
        var idx = $scope.todoList.length;
        var newItem = new item(idx, title, desc, due);
        $scope.todoList.push(newItem);
    };

    function delItem(idx){
        $scope.todoList.splice(idx, 1);
        for(var i = 0; i < $scope.todoList.length; i++){
            $scope.todoList[i].idx = i;
        }
    };

    function exportList(){
        $scope.todoListJSON = angular.toJson($scope.todoList);
    };

    function importList(listJSONString){
        $scope.todoList = JSON.parse(listJSONString);
    };
});
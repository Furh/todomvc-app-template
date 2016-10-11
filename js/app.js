(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!

    angular.module("myApp",[])
    .controller("mainCtrl",function($scope){
         $scope.title = '任务列表'
         $scope.text = ""
         console.log("kongh")
         // $scope.todos=[
         //  {"id":1,"text":"eat","completed":true},
         //  {"id":2,"text":"sing","completed":true},
         // ]

            $scope.todos = [
        { id: 1, text: '吃饭', completed: false },
        { id: 2, text: '睡觉', completed: false },
        { id: 3, text: '打豆豆', completed: true },
        { id: 4, text: '写代码', completed: false },
        { id: 5, text: '约会', completed: true },
        { id: 6, text: 'hello world', completed: true }
      ]
      $scope.save =function(){
        var maxId = $scope.todos[0].id
        $scope.todos.forEach(function(value,index,array){
          if(maxId<value.id){
            maxId = value.id
          }
        })
        $scope.todos.push({id:maxId+1,text:$scope.text,completed:false})
        console.log($scope.todos);
      }
      $scope.remove =function(){

      }
    })

})(window);

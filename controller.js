var app = angular.module("myfirstApp",[]);
app.controller("mycontroller",["$scope","$http",function($s,$h){
	$s.nombre;
	$s.apellido;
	$s.nuevoComentario = {};
	$s.posts = [];
	$s.newPost = {};
	$s.comentarios = [
      {
        comentarios : "Valor por defecto 1",
        usuarios : "Usuario por defecto 1" 	
      },
      {
        comentarios : "Valor por defecto 2",	
        usuarios : "Usuario por defecto 2" 	
      }    
	];

	$s.agregarComentario = function(){
		$s.comentarios.push($s.nuevoComentario);
		$s.nuevoComentario = {};
	};
    
    $s.getPosts = function(){
		$h.get("http://jsonplaceholder.typicode.com/posts")
		.success(function(data){
	      $s.posts = data; 
		})
		.error(function(err){
			console.log(err);
		})
	};

	$s.sendPost = function(){
		$h.post("http://jsonplaceholder.typicode.com/posts",{
			title : $s.newPost.title,
			body : $s.newPost.body,
			userId : 1
		})
		.success(function(data){
          console.log(data);
          console.log($s.newPost);
          $s.posts.push($s.newPost);
          $s.newPost = {};
		})
		.error(function(data){

		});
	}
	//comment

}]);
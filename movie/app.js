var MovieApi=angular.module('MovieSearch',['ngResource']);
MovieApi.controller('MovieApiControl',['$scope', '$http',function($scope,$http){
   $scope.search='';
$scope.fetch=function(){
   $http.jsonp('https://api.themoviedb.org/3/search/movie?api_key=ca79a6ea91d221034bf6c18bfcb5944c&query='+$scope.search+'&callback=JSON_CALLBACK')
    .success(function(result){
       console.log(result);
       $scope.data=result;
   });
}
    $scope.showDetail=function(movie)
    {
        $http.jsonp('https://api.themoviedb.org/3/movie/'+movie.id+'?api_key=53eab4965ee8e679cd230dc20af022c8&append_to_response=credits&callback=JSON_CALLBACK')
        .success(function(result)
                {
                 
                $('.modal').modal({
                    show:true
                });
            
            $scope.r=result;
            console.log(result);
        });
    }
    $scope.hide=function(){
        $('.modal').modal({
                    show:false
                });
        
    }
    $scope.changebox=function()
    {
        var input = $('input[type="text"]');
        input.css({width:'400px'});
    }
   
    var apiKey = '968cca12b1a8492036b1e1e05af57e3f';
      var popularMoviesEndpoint = "https://api.themoviedb.org/3/movie/now_playing";
      var page = 0;

      $scope.movieList = [];

      // creating a function for getting the movie list. we use this function when loading next page is needed
      $scope.getMovieList = function () {

        var url = popularMoviesEndpoint + '?page=' + ++page + '&api_key=' + apiKey; // generating the url

        $http({method: 'GET', url: url}).
          success(function (data, status, headers, config) {

            if (status == 200) {
              page = data.page;                                             // saving current page for pagination
              $scope.movieList.push.apply($scope.movieList, data.results)   // appending new movies to current list
            } else {
              console.error('Error happened while getting the movie list.')
            }

          }).
          error(function (data, status, headers, config) {
            console.error('Error happened while getting the movie list.')
          });
      }

      $scope.getMovieList();    // calling the function when script is loaded for the first time
 
   
}])  ;
// Controller for Actor Page
MovieApi.controller('searchCtrl',function($scope,$http){
		$scope.SITE_PATH="http://image.tmdb.org/t/p/w500/"
		$scope.moviesLoaded=false;
	     
		$scope.getActors=function(){
   var promise=$http.jsonp('https://api.themoviedb.org/3/search/person?api_key=53eab4965ee8e679cd230dc20af022c8&query='+$scope.searchActors+'&callback=JSON_CALLBACK');
   	promise.then(successCallback, failureCallback)

			function successCallback(result) {
				console.log("successCallback", result.data.results)
				$scope.actors = result.data.results;
			}

			function failureCallback(result) {
				console.log("failureCallback", result)
			}

		}

		$scope.getMoviesById = function(id) {
			var id="/" + id + "/";
			var promise = $http.jsonp('https://api.themoviedb.org/3/person'+id+'movie_credits?api_key=53eab4965ee8e679cd230dc20af022c8&callback=JSON_CALLBACK');
			promise.then(successCallback, failureCallback)
			function successCallback(result) {
				console.log("successCallback", result.data.cast)
				$scope.cast = result.data.cast;
				$scope.moviesLoaded=true;
			}

			function failureCallback(result) {
				console.log("failureCallback", result)
			}
		}
		  $scope.showDetail=function(movie)
    {
        $http.jsonp('https://api.themoviedb.org/3/movie/'+movie.id+'?api_key=53eab4965ee8e679cd230dc20af022c8&append_to_response=credits&callback=JSON_CALLBACK')
        .success(function(result)
                {
             
                $('.modal').modal({
                    show:true
                });
            
            $scope.r=result;
            console.log(result);
        });
    }
    $scope.hide=function(){
        $('.modal').modal({
                    show:false
                });
        
    }
    $scope.changebox=function()
    {
        var input = $('input[type="text"]');
        input.css({width:'400px'});
    }
	});
    
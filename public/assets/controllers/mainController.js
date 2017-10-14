

app.controller('mainController', function($scope, $location, $route){
  $scope.login = function(){
  deliveryFactory.login($scope.delivery_serviceInfo, function(data){
    $scope.errors = [];
    if(data['errors']){
    $scope.errors.push(data['errors']);
    }
    else {
      // $scope.loginfo = '';
      $location.url('/success');
    }
  });
}
$scope.aye = function() {
  $route.reload();
}

$scope.contactView = function(){
 initMap();
}
function initMap() {
        var uluru = {lat: 34.083939, lng: -118.295164};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
}initMap();
google.maps.event.addDomListener(window, "load", initialize);
$scope.aye = function() {
  $route.reload();
}

});
(function() {
  var app = angular.module('contactsListApp', []);

  app.controller('ContactsListController', function($scope){
      $scope.contactsList = [];
      var responseBody;
      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          responseBody = xhttp.responseText;
        }
      };

      xhttp.open("GET", "/contacts/list", false);
      xhttp.send();
  });
})();
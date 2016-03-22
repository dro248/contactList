var app = angular.module('contactsListApp', []);

app.controller('ContactsListController', function($scope){
    $scope.contacts = [];

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        var list = JSON.parse(xhttp.responseText);
        list.forEach(function(contact) {
          $scope.contacts.push(contact);
        });
        $scope.$apply();
      }
    };
    xhttp.open("GET", "/contacts/list");
    xhttp.send();
});
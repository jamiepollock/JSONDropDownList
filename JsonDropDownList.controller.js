angular.module("umbraco")
    .controller("JsonDropDownList.Controller", function ($scope, $http, assetsService) {
        var hasNoModelValue = typeof($scope.model.value) === 'undefined' || $scope.model.value.length == 0;
        var requestUrl = $scope.model.config.requestUrl;

        $scope.hasRequestUrl = requestUrl.length > 0;
        $scope.dataOptions = [];

        if ($scope.hasRequestUrl) {
            $http.get(requestUrl)
                 .then(function (result) {
                     $scope.dataOptions = result.data;

                     if (hasNoModelValue) {
                         $scope.model.value = $scope.dataOptions[0];
                     }
                 });
        }
    });
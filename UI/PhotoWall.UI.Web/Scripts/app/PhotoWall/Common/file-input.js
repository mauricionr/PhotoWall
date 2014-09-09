﻿angular.module('photoWall.common.fileInput', []).directive('fileInput', [
    "$parse", function ($parse) {
        return {
            restrict: 'A',
            link: function (scope, elm, attrs) {
                elm.bind('change', function () {
                    $parse(attrs.fileInput).assign(scope, elm[0].files);
                    scope.$apply();
                });
            }
        };
    }]);
//# sourceMappingURL=file-input.js.map

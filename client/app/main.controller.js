(function () {
    angular
        .module("sample")
        .controller("MainCtrl", [MainCtrl]);

    function MainCtrl() {
        var self = this;

        self.currentPage;

        self.pageType = {
            SIMPLE_SERVICE: "SIMPLE_SERVICE",
            REUSE: "REUSE",
            SHARE_DATA: "SHARE_DATA",
            RETURN_CALLBACK: "RETURN_CALLBACK",
            RETURN_PROMISE: "RETURN_PROMISE"
        };

        self.open = function (page) {
            self.currentPage = page;
        };

        self.isOpen = function (page) {
            return self.currentPage == page
        }
    }
})();
(function () {
    angular
        .module("sample")
        .controller("FirstCtrl", [FirstCtrl]);

    function FirstCtrl() {
        var self = this;

        var messages = [];

        self.getMessages = function () {
            return messages;
        };

        self.addMessage = function () {
            messages.push(self.message);
            self.message = "";
        };
    }
})();
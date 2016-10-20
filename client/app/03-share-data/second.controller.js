(function () {
    angular
        .module("sample")
        .controller("SecondCtrl", [SecondCtrl]);

    function SecondCtrl() {
        var self = this;

        var messages = [];

        self.getMessages = function () {
            return messages;
        };

        self.addMessage = function () {
            messages.push(self.message);
            self.message = "";
        }
    }
})();
(function () {
    angular
        .module("sample")
        .service("MessageService", [MessageService]);

    function MessageService() {

        var messages = [];
        var self = this;

        self.getMessages = function () {
            return messages;
        };

        self.addMessage = function (message) {
            messages.push(message)
        };
    }
})();
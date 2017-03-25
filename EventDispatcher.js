var Event = function (sender) {
    this._sender = sender;
    this._listeners = [];
};

Event.prototype = {

    attach: function (listener) {
        this._listeners.push(listener);
    },

    notify: function (args) {
        for (var i = 0; i < this._listeners.length; i++) {
            var li = this._listeners[i];
            li(this._sender, args);
        }
    }
}

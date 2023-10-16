"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListenerCount = exports.useXChannel = exports.postMessage = void 0;
var react_1 = require("react");
var channels = {};
var postMessage = function (channelName) {
    var props = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        props[_i - 1] = arguments[_i];
    }
    var channelCallbacks = channels[channelName] || [];
    channelCallbacks.forEach(function (cb) {
        cb.apply(void 0, props);
    });
};
exports.postMessage = postMessage;
var useXChannel = function (channelName, callback) {
    if (!channels[channelName]) {
        channels[channelName] = [];
    }
    var post = function () {
        var props = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            props[_i] = arguments[_i];
        }
        var channelCallbacks = channels[channelName] || [];
        channelCallbacks.forEach(function (cb) {
            cb !== callback && cb.apply(void 0, props);
        });
    };
    (0, react_1.useEffect)(function () {
        if (callback) {
            channels[channelName].push(callback);
        }
        return function () {
            if (callback) {
                var index = channels[channelName].indexOf(callback);
                if (index !== -1) {
                    channels[channelName].splice(index, 1);
                }
            }
        };
    }, [channelName, callback]);
    return post;
};
exports.useXChannel = useXChannel;
var getListenerCount = function (ChannelName) {
    var _a;
    return ((_a = channels[ChannelName]) === null || _a === void 0 ? void 0 : _a.length) || 0;
};
exports.getListenerCount = getListenerCount;

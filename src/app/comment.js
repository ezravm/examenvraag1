"use strict";
var Comment = (function () {
    function Comment(title, body) {
        this.title = title;
        this.body = body;
    }
    Comment.prototype.toForm = function () {
        return "title=" + this.title + "&body=" + this.body;
    };
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=comment.js.map
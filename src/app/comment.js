"use strict";
var Comment = (function () {
    function Comment(userID, id, title, body) {
        this.userID = userID;
        this.id = id;
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
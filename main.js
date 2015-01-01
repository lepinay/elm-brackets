define(function (require, exports, module) {
    "use strict";
    
    require("elm-mode");
    
    var LanguageManager = brackets.getModule("language/LanguageManager");

    LanguageManager.defineLanguage("elm", {
        name: "Elm",
        mode: "elm",
        fileExtensions: ["elm"],
        blockComment: ["{-", "-}"],
        lineComment: ["--"]
    });
});
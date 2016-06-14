"use strict";

// @see http://en.wikipedia.org/wiki/Framekiller
if (top.location !== self.location) {
	top.location = self.location.href;
}

// @see http://www.paulirish.com/2009/avoiding-the-fouc-v3/
(function (html) {
	html.className = html.className.replace(/\bno-js\b/, "js");
})(document.documentElement);

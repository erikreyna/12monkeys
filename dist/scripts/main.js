$(document).ready(function(){"use strict";var o=$("#post").html(),t=Handlebars.compile(o),n=$("#results");$("#idForm").submit(function(o){o.preventDefault();var r="http://45.55.253.92/post";return $.ajax({type:"POST",url:r,data:$("#idForm").serialize()}).done(function(o){var r=JSON.parse(o);n.html(t(r)),$("img").each(function(){var o=new Image,t=this;o.onerror=function(){$(t).prop("src","images/full_story.jpg")},o.src=this.src})}).fail(function(o){console.log(o),console.log("fail")}).always(function(){console.log("always")}),!1})});
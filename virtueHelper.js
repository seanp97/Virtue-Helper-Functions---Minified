$.fn.thisHeight=function(){return $(this).height()},$.fn.thisWidth=function(){return $(this).width()},$.fn.thisText=function(){return $(this).text()},$.fn.thisLength=function(){return $(this).length},$.fn.thisCSS=function(t){return $(this).css(t)},$.fn.thisOuterWidth=function(){return $(this).outerWidth()},$.fn.thisOuterHeight=function(){return $(this).outerHeight()},$.fn.thisInnerWidth=function(){return $(this).innerWidth()},$.fn.thisInnerHeight=function(){return $(this).innerHeight()},$.fn.thisNthPosition=function(){return $(this).index()},$.fn.thisXYPos=function(){var t=$(this).position();return"Top position: "+t.top+" Left position: "+t.left},$.fn.thisHeightCompare=function(t){return $(this).height()>t?"Elements height is bigger than "+t+"px":"Elements height is smaller than "+t+"px"},$.fn.thisWidthCompare=function(t){return $(this).width()>t?"Elements width is bigger than "+t+"px":"Elements width is smaller than "+t+"px"},$.fn.hasNoChildren=function(){return 0==$(this).children().length},$.fn.elemPadding=function(){return"Padding: "+$(this).css("padding")},$.fn.elemMargin=function(){return"Margin: "+$(this).css("margin")},$.fn.isLowerCase=function(){return thisUpper=$(this).text(),thisUpper==thisUpper.toUpperCase()},$.fn.isUpperCase=function(){return thisUpper=$(this).text(),thisUpper==thisUpper.toUpperCase()},$.fn.isCapitals=function(){return thisCaps=$(this).text(),firstLetter=$(this).text().substring(0,1),textLen=$(this).text().length,restOfString=$(this).text().substring(1,textLen),capsFullWord=firstLetter==firstLetter.toUpperCase()&&restOfString==restOfString.toLowerCase(),firstLetter==firstLetter.toUpperCase()&&restOfString==restOfString.toLowerCase()},$.fn.getImgSrc=function(){return $(this).attr("img")},$.fn.fadeInOutScroll=function(t){$(window).scrollTop()>t?$(this).fadeIn():$(this).fadeOut()},$.fn.textEmpty=function(){return""==this.text()},$.fn.isColor=function(t){return $(this).css("color")==t},$.fn.isBackgroundColor=function(t){return $(this).css("background-color")==t},$.fn.elemExists=function(){return $(this).length>0},$.fn.inputVal=function(){return $(this).val()},$.fn.elemAttr=function(t){return $(this).attr(t).split(/\s+/)},$.fn.hasAttr=function(t){return $(this).attr(t).split(/\s+/).length>0},$.fn.keyCodePress=function(t){$(document).keyup(function(i){return i.keyCode==t})},$.fn.slider=function(t,i){$(this).on("click",function(){var n=$(this).prop("tagName").toLowerCase();if(""!=$(this).attr("class")||""!=$(this).attr("id"))var s=$(this).attr("class"),e=$(this).attr("class");$(this).find(t).slideToggle(i),$(n).not(this).find(t).slideUp(i)||$(s).not(this).find(t).slideUp(i)||$(e).not(this).find(t).slideUp(i)})},$.fn.elemVisible=function(){return!$(this).is(":hidden")&&"hidden"!=$(this).css("visibility")},$.fn.eachToggleClass=function(t,i){$(this).each(function(){$(this).on(t,function(){$(this).toggleClass(i)})})},$.fn.heightSame=function(){var t=0,i=0;$(this).each(function(){(i=$(this).height())>t&&(t=i)}),$(this).css("height",t)},$.fn.widthSame=function(){var t=0,i=0;$(this).each(function(){(i=$(this).width())>t&&(t=i)}),$(this).css("width",t)},$.fn.getHREF=function(){return $(this).attr("href")},$.fn.hrefMatchURL=function(){var t=window.location.href;return $(this).attr("href")==t},$.fn.inViewport=function(t,i){$(this).each(function(){$(this).offset().top<$(window).scrollTop()+t&&$(this).addClass(i)})},$.fn.backToTop=function(t){$(this).click(function(){$("html, body").animate({scrollTop:0},t)})},$.fn.imageChange=function(t){$(this).each(function(){$(this).click(function(){var i=$(this).attr("src");$(t).attr("src",i)})})},$.fn.paginationStyle=function(t){$(this).each(function(){$(this).click(function(){var i=$(this).prop("tagName").toLowerCase();if(""!=$(this).attr("class")||""!=$(this).attr("id"))var n=$(this).attr("class"),s=$(this).attr("class");$(this).addClass(t),$(i).not(this).removeClass(t)||$(n).not(this).removeClass(t)||$(s).not(this).removeClass(t)})})};
var btnShowLyrics = document.getElementById('seeMoreLyric');
var btnHidenLyrics = document.getElementById('hideMoreLyric');
var divLyrics = document.getElementById('divLyric');
btnShowLyrics.addEventListener("click", function() {
    divLyrics.style.maxHeight = "100%";
    btnShowLyrics.style.display = "none"
    btnHidenLyrics.style.display = "block"
});
var btnHidenLyrics = document.getElementById('hideMoreLyric');
btnHidenLyrics.addEventListener("click", function() {
    divLyrics.style.maxHeight = "250px";
    btnShowLyrics.style.display = "block"
    btnHidenLyrics.style.display = "none"
});



var btnShowListenNext = document.getElementById('showListen');
var btnHidenListenNext = document.getElementById('hideListen');
var divListenNext = document.getElementById('hidden-listen');
btnShowListenNext.addEventListener("click", function() {
	divListenNext.style.maxHeight = "100%";
    btnShowListenNext.style.display = "none";
    btnShowListenNext.style.marginLeft = "5.2em";
    btnHidenListenNext.style.display = "block";
    btnHidenListenNext.style.marginLeft = "5.2em";
});
btnHidenListenNext.addEventListener("click", function() {
	divListenNext.style.maxHeight = "473px";
    btnShowListenNext.style.display = "block";
    btnHidenListenNext.style.display = "none";
});
function setFavicons(favImg){
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel','shortcut icon');
    setFavicon.setAttribute('href',favImg);
    headTitle.appendChild(setFavicon);
}
setFavicons('favicon.png');

const gog = document.getElementsByClassName("header");
gog.innerHTML = "<img src="TheImage.png" alt="This image cannot displayed" /><h2>The Forum<br> <a href="Howto.html" class="link">Howto</a><a href="Forum.html" class="link">Forum</a></h2>";
const media=document.querySelector("video");function autoplay(){function e(){media.muted=!0,media.play()}media.addEventListener("canplay",(()=>{const a=media.play();void 0!==a&&a.catch(e)})),setTimeout((function(){const e=document.getElementsByClassName("placeholder");for(;e.length;)e[0].classList.remove("placeholder")}),300)}media&&window.addEventListener("load",autoplay);
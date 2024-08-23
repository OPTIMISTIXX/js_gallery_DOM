"use strict";
const mainImage = document.querySelector("#largeImg");
const thumbs = document.querySelectorAll(".list-item__link");
thumbs.forEach((thumb)=>{
    thumb.addEventListener("click", (e)=>{
        e.preventDefault();
        const newSrc = thumb.getAttribute("href");
        mainImage.setAttribute("src", newSrc);
    });
});

//# sourceMappingURL=index.f75de5e1.js.map

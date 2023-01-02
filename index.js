const tabsEl = document.querySelector(".tabs");
const btnsEl = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content")

tabsEl.addEventListener("click", (event)=>{
    const id = event.target.dataset.id;

    if(id){
        btnsEl.forEach((btn)=>{
            btn.classList.remove("live")
        })
        event.target.classList.add("live");
        articles.forEach((article)=>{
            article.classList.remove("live");
        })

        const element = document.getElementById(id);
        element.classList.add("live")
    }
});
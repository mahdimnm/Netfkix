const tabItems = document.querySelectorAll(".tab-item");
const tabContent = document.querySelectorAll(".tab-content-item");

tabItems.forEach(item => item.addEventListener("click", selectItem));

function selectItem(){
    tabContent.forEach(content => content.classList.remove("show"));
    tabItems.forEach(content => content.classList.remove("tab-border"));
    this.classList.add("tab-border");
    
    const tabContentItem = document.getElementById(this.id + "-content");
    tabContentItem.classList.add("show");
}
document.querySelectorAll("nav .navbar-nav .nav-item .nav-link")[0].href="index.html";
document.querySelector("nav .navbar-brand").href="index.html";
// scroll to view items
let prev = document.querySelector(".trend .shop .left");
let next = document.querySelector(".trend .shop .right");
let row = document.querySelector(".trend .row");
let item= document.querySelector(".trend .row .box").offsetWidth;
prev.addEventListener("click",()=>{
    row.scrollLeft -= item;
});
next.addEventListener("click",()=>{
    row.scrollLeft += item;
});

// scroll to the top page
let up= document.getElementsByClassName("up")[0];
window.onscroll=()=>{
    if(scrollY>850){
        up.style.cssText="bottom: 20px;right: 20px;";
    }
    else{
        up.style.cssText="bottom: -50px;right: 20px;";
    };
}
up.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

// get pintrest api
// let pintrest=new XMLHttpRequest();
// pintrest.open("GET","commerce_media_v1_beta_oas2.json");
// pintrest.send();
// console.log(pintrest);
// pintrest.onreadystatechange=function(){
//     if(this.status===200 && this.readyState===4){
//         let jsObject=JSON.parse(pintrest.responseText);
//         console.log(jsObject.paths);
//     };
// };
//nav bar link
document.querySelectorAll("nav .navbar-nav .nav-item .nav-link")[0].href="home.html";
document.querySelector("nav .navbar-brand").href="home.html";

// scroll to the top page
function scroll(){
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
};
scroll();

//order section
function order(){
    let row= document.querySelector(".order .container .row");
    let count=3;
    do{
        row.innerHTML+=`<div class="mb-3 col-md-3">
        <div class="shop rounded position-relative overflow-hidden h-100">
            <img class="img-fluid w-100 h-100" src="../files/imgs/order/order${count}.webp" alt="shop now">
            <div class="box text-light position-absolute bottom-0 start-0 p-4">
                <div class="layout w-100 position-absolute h-100 top-0 start-0"></div>
                <p class="fs-5 m-0 position-relative">Grab your Coat</p>
                <a class="position-relative m-0 text-uppercase border-bottom text-light pb-1" href="#">shop now</a>
            </div></div></div>`;
            if(count==3){
                document.querySelector(".order .container .row .col-md-3").classList.add("col-md-5");
                document.querySelector(".order .container .row .col-md-3").classList.remove("col-md-3");
            };
        count--;
    }while(count>=1);
};
order();

//trending section
function trend(){
    let row=document.querySelector(".trend .container .shop .row");
    let count=1;
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "../../files/imgs/items");
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        if(this.status===200 && this.readyState===4){
            let n = (xmlhttp.responseText.match(/\/item\d.webp/g)).length;
            while(count<=n){
                row.innerHTML+=`<div class="box col-md-4 col-lg-3">
                <div class="item">
                    <div class="image position-relative overflow-hidden">
                        <div class="overlay w-100 position-absolute h-100 top-0 start-0"></div>
                        <button class="quick rounded w-75 px-3 py-2 text-uppercase fw-light bg-white position-absolute top-50 start-50 translate-middle">qick view</button>
                        <a class="add text-center py-3 w-100 text-uppercase fw-light text-white bg-black position-absolute start-0" href="#">add to card</a>
                        <img class="img-fluid position-relative w-100 h-100" src="../files/imgs/items/item${count}.webp" alt="cap">
                        <p class="position-absolute text-uppercase top-0 end-0 py-1 px-2 border m-3 fw-bold">sale!</p>
                    </div>
                    <div class="text text-black-50 py-2">
                        <span class="category text-uppercase">accessories</span>
                        <div class="d-flex justify-content-between">
                            <p class="text-black m-0 fw-semibold mb-2 mb-2">Beanie</p>
                            <div class="price">
                                <span class="text-end text-decoration-line-through me-1 me-1">&euro;20.00</span>
                                <span class="text-end">&euro;18.00</span>
                            </div>
                        </div>
                        <div class="stars">
                            <i class="full fa-solid fa-star"></i>
                            <i class="full fa-solid fa-star"></i>
                            <i class="full fa-solid fa-star"></i>
                            <i class="full fa-solid fa-star"></i>
                            <i class="full fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
            </div>`
            count++;
            };
        };
    };
};
trend();

// scroll to view items
function viewItems(){
    let prev = document.querySelector(".trend .shop .left");
    let next = document.querySelector(".trend .shop .right");
    let row = document.querySelector(".trend .row");
    let item;
    prev.addEventListener("click",()=>{
        item=document.querySelector(".trend .row .box").offsetWidth;
        row.scrollLeft -= item;
    });
    next.addEventListener("click",()=>{
        item=document.querySelector(".trend .row .box").offsetWidth;
        row.scrollLeft += item;
    });
}
viewItems();

// adv section
function adv(){
    let row= document.querySelector(".adv .row");
    let count=1;
    let imgs=1;
    while(count<=7){
        row.innerHTML+=`<div class="col-sm-2 col-md-3 col-lg-4 p-5 justify-content-center d-flex">
        <img class="img-fluid py-3" src="../files/imgs/adv/adv${imgs}.webp" alt="">
    </div>`
    count++;
    imgs++;
    imgs==5? imgs=1:"";
    };
};
adv();

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

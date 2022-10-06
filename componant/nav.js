document.getElementsByClassName("main")[0].innerHTML=`<nav class="navbar navbar-expand-lg py-0">
<div class="container d-flex align-items-center justify-content-between">
    <a class="navbar-brand py-0" href="../home/home.html"><img class="img-fluid" src="../files/imgs/logo.webp" alt="Logo"></a>
    <div class="icons gap-3 ms-4 d-flex align-items-center justify-content-end flex-grow-1 me-4">
        <i class="glass nav-link fs-5 fa-solid fa-magnifying-glass"></i>
        <a class="items d-flex nav-link align-items-center" href="#">
            <i class=" fs-5 fa-solid fa-basket-shopping me-1"></i>
            <p class="my-0">(<span>0</span>)</p>
        </a>
    </div>
    <button class="navbar-toggler border-2 py-1 px-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="../home/home.html">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="../shop/shop.html">Shop</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Clothing</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="../account/account.html">My Account <i class="fa-regular fa-circle-user"></i></a>
        </li>
        </ul>
    </div>
</div>
</nav>`;
document.head.innerHTML+=`<style>
nav .icons .glass{
    cursor: pointer;
}
nav .navbar-toggler:focus{
    box-shadow: none;
}
nav svg:not(.fa-basket-shopping):hover,
nav .navbar-nav li a:hover,
nav .icons .glass:hover,
nav .icons .items:hover,
nav .navbar-toggler:hover span{
    color: var(--main-color);
}
</style>`;
let navs=document.querySelectorAll("nav .navbar-nav .nav-item .nav-link");
navs.forEach(nav=>{
    nav.onclick=(eve)=>{
        navs.forEach(e=>{
            e.classList.remove("active");
        });
        nav.classList.add("active");
    };
});
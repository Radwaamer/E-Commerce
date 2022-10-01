document.getElementsByClassName("main")[0].innerHTML+=`<div class="title position-relative py-3">
<div class="overlay w-100 position-absolute h-100 top-0 start-0"></div>
<div class="container position-relative py-4 text-light d-flex justify-content-between">
    <h2>Shop</h2>
    <div class="links d-flex align-items-center">
        <a class="text-light" href="../home/home.html">Home</a>
        <p class="m-0">&nbsp; / Products</p>
    </div>
</div>
</div>`
document.querySelector("head style").innerHTML+=`.title{
    background-image: url(../../files/imgs/colorful.jpg);
    background-size: cover;
}
.title .overlay{
    background-color: rgba(51, 51, 51, 0.526);
}
.title .container{
    z-index: 1;
}
.title .links a:hover{
    color: var(--main-color) !important;
    transition: var(--main-transition);
}`;
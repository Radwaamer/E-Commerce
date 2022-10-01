document.body.innerHTML+=`<footer class="bg-black pt-5 sticky-bottom">
<div class="container text-light py-3">
    <div class="learn d-flex justify-content-between align-items-center pb-5">
        <p class="text-white-50 fs-5 m-0">Ready to revolutionize your website?</p>
        <button class="rounded border-0 px-4 py-2 fw-bold">Learn More</button>
    </div>
    <div class="info position-relative">
        <div class="row">
            <div class="col-sm-6">
                <div class="comp py-5">
                    <h5 class="text-white-50">Company</h5>
                    <ul>
                        <li class="pt-3">Home</li>
                        <li class="pt-3">Shop</li>
                        <li class="pt-3">Clothing</li>
                        <li class="pt-3">Blog</li>
                        <li class="pt-3">My Account</li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="contact py-5">
                    <h5 class="text-white-50">Contact Details</h5>
                    <ul>
                        <li class="pt-3">
                            <i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp; 
                            kornish El-Maadi
                        </li>
                        <li class="pt-3">
                            <i class="fa-solid fa-phone"></i>&nbsp;&nbsp; 
                            01148457576
                        </li>
                        <li class="pt-3">
                            <i class="fa-regular fa-clock"></i>&nbsp;&nbsp; 
                            11 a.m - 10 p.m
                        </li>
                        <li class="pt-3">
                            <i class="fa-solid fa-envelope"></i>
                            rororado44@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="made text-center py-4">&copy; Built with Radwa. All rights reserved.</div>
</div>
</footer>`;
document.querySelector("head style").innerHTML+=`footer{
    overflow: hidden;
    z-index: -10;
}
footer .learn button{
    background-color: var(--main-color);
    transition: var(--main-transition);
}
footer .learn button:hover{
    transform: translateY(-3px);
    color: white;
}
footer .info::before,
footer .info::after{
    content: "";
    background-color: #ddd;
    width: calc(100% + 800px);
    height: 1px;
    left: -400px;
    position: absolute;
}
footer .info::before{
    top: 0;
}
footer .info::after{
    bottom: 0;
}
footer .info .row ul li{
    transition: var(--main-transition);
    cursor: pointer;
    max-width: 300px;
}
footer .info .row ul li:hover{
    transform: translateX(10px);
}`;
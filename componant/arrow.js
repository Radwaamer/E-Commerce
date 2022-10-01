document.getElementsByClassName("main")[0].innerHTML+=`<div class="up fs-2 position-fixed"><i class="fa-solid fa-circle-arrow-up"></i></div>`
document.querySelector("head style").innerHTML+=`.up{
    cursor: pointer;
    z-index: 1000;
    transition: var(--main-transition);
    color: var(--main-color);
    bottom: -50px;
    right: 20px;
}
.up:hover{
    animation: ups infinite 1.2s linear;
}
@keyframes ups {
    50%{
        transform: translateY(-6px);
    }
    100%{
        transform: translateY(0);
    }
}`;
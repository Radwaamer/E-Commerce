//change nav
document.querySelectorAll("nav .navbar-nav .nav-item .nav-link")[4].href="account.html";

//change title
document.querySelector(".title h2").textContent="My Account";
document.querySelector(".title .links p").innerHTML="&nbsp; / My Account";

//remove active
let info=document.querySelectorAll(".info .boxes div");
info.forEach(i=>{
    i.onclick=()=>{
        info.forEach(e=>{
            e.classList.remove("border-bottom","active");
        });
        i.classList.add("active","border-bottom");
        if(i.classList[0]=="log"){
            document.querySelector(".info .user .log-form").classList.remove("d-grid","d-none");
            document.querySelector(".info .user .log-form").classList.add("d-grid");
            document.querySelector(".info .user .reg-form").classList.remove("d-none","d-grid");
            document.querySelector(".info .user .reg-form").classList.add("d-none");
        }else{
            document.querySelector(".info .user .log-form").classList.remove("d-none","d-grid");
            document.querySelector(".info .user .log-form").classList.add("d-none");
            document.querySelector(".info .user .reg-form").classList.remove("d-grid","d-none");
            document.querySelector(".info .user .reg-form").classList.add("d-grid");
        };
    };
});

//add countries
let countries=`Afghanistan, Albania, Algeria, Andorra, Angola, Antigua and Barbuda, Argentina, Armenia, Australia, Austria, Azerbaijan, Bahamas, Bahrain, Bangladesh, Barbados, Belarus, Belgium, Belize, Benin, Bhutan, Bolivia, Bosnia and Herzegovina, Botswana, Brazil, Brunei, Bulgaria, Burkina Faso, Burundi, Côte d'Ivoire, Cabo Verde, Cambodia, Cameroon, Canada, Central African Republic, Chad, Chile, China, Colombia, Comoros, Congo (Congo-Brazzaville), Costa Rica, Croatia, Cuba, Cyprus, Czechia (Czech Republic), Democratic Republic of the Congo, Denmark, Djibouti, Dominica, Dominican Republic, Ecuador, Egypt, El Salvador, Equatorial Guinea, Eritrea, Estonia, "Eswatini (fmr. ""Swaziland"")", Ethiopia, Fiji, Finland, France, Gabon, Gambia, Georgia, Germany, Ghana, Greece, Grenada, Guatemala, Guinea, Guinea-Bissau, Guyana, Haiti, Holy See, Honduras, Hungary, Iceland, India, Indonesia, Iran, Iraq, Ireland, Israel, Italy, Jamaica, Japan, Jordan, Kazakhstan, Kenya, Kiribati, Kuwait, Kyrgyzstan, Laos, Latvia, Lebanon, Lesotho, Liberia, Libya, Liechtenstein, Lithuania, Luxembourg, Madagascar, Malawi, Malaysia, Maldives, Mali, Malta, Marshall Islands, Mauritania, Mauritius, Mexico, Micronesia, Moldova, Monaco, Mongolia, Montenegro, Morocco, Mozambique, Myanmar (formerly Burma), Namibia, Nauru, Nepal, Netherlands, New Zealand, Nicaragua, Niger, Nigeria, North Korea, North Macedonia, Norway, Oman, Pakistan, Palau, Palestine State, Panama, Papua New Guinea, Paraguay, Peru, Philippines, Poland, Portugal, Qatar, Romania, Russia, Rwanda, Saint Kitts and Nevis, Saint Lucia, Saint Vincent and the Grenadines, Samoa, San Marino, Sao Tome and Principe, Saudi Arabia, Senegal, Serbia, Seychelles, Sierra Leone, Singapore, Slovakia, Slovenia, Solomon Islands, Somalia, South Africa, South Korea, South Sudan, Spain, Sri Lanka, Sudan, Suriname, Sweden, Switzerland, Syria, Tajikistan, Tanzania, Thailand, Timor-Leste, Togo, Tonga, Trinidad and Tobago, Tunisia, Turkey, Turkmenistan, Tuvalu, Uganda, Ukraine, United Arab Emirates, United Kingdom, United States of America, Uruguay, Uzbekistan, Vanuatu, Venezuela, Vietnam, Yemen, Zambia, Zimbabwe`.split(", ");
countries.forEach(country=>{
    document.getElementById("country").innerHTML+=`<option class="py-5" value="${country}">${country}</option>`;
    if (country=="Egypt"){
        document.querySelector("#country option[value='Egypt']").setAttribute("selected","")
    };
});

//reqired inputs
let inputs = document.querySelectorAll(".info input");
inputs.forEach(input=>{
    if(input==document.getElementById("remember")){
        input=input;
    }else{
        input.setAttribute("required","");
    };
});

// backup password
document.querySelector(".info .user .log-form .lost p").onclick=()=>{
    document.querySelector(".info .backup").style.bottom="391px";
    document.querySelector(".info .normal").style.top="-700px";
}
document.querySelector(".info .backup p span").onclick=()=>{
    document.querySelector(".info .backup").style.bottom="-600px";
    document.querySelector(".info .normal").style.top="0";
}

let up= document.getElementsByClassName("up")[0];
window.onscroll=()=>{
    if(scrollY>170){
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

//make visible or shown password
let eyes=document.querySelectorAll(".info .user .eye");
let eyeSlash=document.querySelectorAll(".info .user .eye-slash");
eyes.forEach(eye=>{
    eye.onclick=()=>{
        eye.style.display="none";
        eyeSlash.forEach(e=>{
            if(eye.classList[0]==e.classList[0]){
                e.style.display="block";
            };
        });
        eye.parentElement.nextElementSibling.type="text";
    };
});
eyeSlash.forEach(e=>{
    e.onclick=()=>{
        e.style.display="none";
        eyes.forEach(eye=>{
            if(e.classList[0]==eye.classList[0]){
                eye.style.display="block";
            };
        });
        e.parentElement.nextElementSibling.type="password";
    };
});

//trim all inputs
let trims=document.querySelectorAll(".info input");
let forms=document.querySelectorAll("form");
trims.forEach(trim=>{
    if(!(trim.id=="fs-name" || trim.id=="ls-name")){
        trim.oninput=()=>{
            trim.value=trim.value.trim();
        };
    }
    else if(trim.id=="fs-name" || trim.id=="ls-name"){
        trim.onblur=()=>{
            trim.value=trim.value.trim();
        };
    };
});

//check confirm password
let pass=document.getElementById("pass-reg");
let conf=document.getElementById("pass-conf");
let mis=document.getElementsByClassName("mis")[0];
conf.onblur=()=>{
    if (conf.value!=pass.value){
        mis.style.opacity="1";
    }else{
        mis.style.opacity="0";
    }
}
conf.oninput=()=>{
    if(conf.value==pass.value){
        mis.style.opacity="0";
    };
};
pass.oninput=()=>{
    if(conf.value==pass.value){
        mis.style.opacity="0";
    };
};

//check inputs before submit
forms[1].onsubmit=(e)=>{
    if(conf.value!=pass.value){
        e.preventDefault();
        conf.focus();
    };
};

//remember me functionality
forms[0].onsubmit=(e)=>{
    if(forms[0].querySelector("#remember").checked){
        let date=new Date();
        date.setMonth(date.getMonth+1);
        document.cookie=`email=${forms[0].querySelector('#mail-in').value};express=${date}`;
        document.cookie=`password=${forms[0].querySelector('#pass-in').value};express= ${date}`;
    };
};
//get cookies
document.body.onload=()=>{
    forms[0].querySelector('#mail-in').value=(document.cookie).split(";")[0].substring((document.cookie).split(";")[0].indexOf("=")+1);
    forms[0].querySelector('#pass-in').value=(document.cookie).split(";")[1].substring((document.cookie).split(";")[1].indexOf("=")+1);
}
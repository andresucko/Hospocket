document.getElementById("btn__log").addEventListener("click", login);
document.getElementById("btn__reg").addEventListener("click", register);
window.addEventListener("resize", pagWidth);

//Declarando variables//
var cont_log_reg = document.querySelector(".cont__log-reg");
var form_log = document.querySelector(".form__log");
var form_reg = document.querySelector(".form__reg");
var back_box_log = document.querySelector(".back__box-log");
var back_box_reg = document.querySelector(".back__box-reg");

function pagWidth() {
    if(window.innerWidth > 850){
        back_box_log.style.display = "block";
        back_box_reg.style.display = "block";
    }else {
        back_box_reg.style.display = "block";
        back_box_reg.style.opacity = "1";
        back_box_log.style.display = "none"
        form_log.style.display = "block";
        form_reg.style.display = "none";
        cont_log_reg.style.left = "0";
    }
}

pagWidth();

function login () {
    if(window.innerWidth > 850){
    form_reg.style.display = "none";
    cont_log_reg.style.left = "10px";
    form_log.style.display = "block";
    back_box_reg.style.opacity = "1";
    back_box_log.style.opacity = "0";
    }else {
    form_reg.style.display = "none";
    cont_log_reg.style.left = "0px";
    form_log.style.display = "block";
    back_box_reg.style.display = "block";
    back_box_log.style.display = "none";
    }
}

function register () {
    if(window.innerWidth > 850){
        form_reg.style.display = "block";
        cont_log_reg.style.left = "410px";
        form_log.style.display = "none";
        back_box_reg.style.opacity = "0";
        back_box_log.style.opacity = "1";
    }else{
        form_reg.style.display = "block";
        cont_log_reg.style.left = "0px";
        form_log.style.display = "none";
        back_box_reg.style.display = "none";
        back_box_log.style.display = "block";
        back_box_log.style.opacity = "1";
    }

}

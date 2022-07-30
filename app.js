var textinput = document.querySelector("#txt-input");
var textoutput=document.querySelector("#output");
var btnTranslate=document.querySelector("#btn-translate");

btnTranslate.addEventListener("click",function clickEventHandler(){
    console.log("clicked");
    console.log(textinput.value);
})


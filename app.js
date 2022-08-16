var textinput = document.querySelector("#txt-input");
var textoutput=document.querySelector("#output");
var btnTranslate=document.querySelector("#btn-translate");

var serverURL="https://api.funtranslations.com/translate/minion.json"

function getTranslatedURL(input){
    return serverURL + "?"+"text=" +input
}

function errorhandler(error){
    console.log("error occured",error);
}

function clickEventHandler(){
    var inputtext = textinput.value; //Getting input

    fetch(getTranslatedURL(inputtext))
    .then(response=>response.json())
    .then(json=>{
      var translatedtext =  json.contents.translated;
      textoutput.innerText = translatedtext;
    })
    .catch(errorhandler)
};

btnTranslate.addEventListener("click", clickEventHandler)





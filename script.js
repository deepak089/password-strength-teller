console.log("hello");
const btn = document.querySelector("#copy");
function _id(name){
    return document.getElementById(name);
}
function _class(name){
    return document.getElementsByClassName(name);
}

_class("toggle-password")[0].addEventListener("click",()=>{
    _class("toggle-password")[0].classList.toggle("active");
    if(_id("password-field").getAttribute("type")=="password"){
        _id("password-field").setAttribute("type","text");
    }
    else
    {
        _id("password-field").setAttribute("type","password");
    }
});
_id("password-field").addEventListener("focus",()=>{
    _class("password-policies")[0].classList.add("active");
    _class("btn")[0].classList.add("active");
});
_id("password-field").addEventListener("blur",()=>{

});

_id("password-field").addEventListener("keyup",()=>{
    let password=_id("password-field").value;
    if(/[A-Z]/.test(password)){
        _class("policy-uppercase")[0].classList.add("active");
    }
    else{
        _class("policy-uppercase")[0].classList.remove("active");
    }
    if(/[0-9]/.test(password)){
        _class("policy-number")[0].classList.add("active");

    }
    else
    {
        _class("policy-number")[0].classList.remove("active");
    }

    if(/[^A-Za-z0-9]/.test(password)){
        _class("policy-special")[0].classList.add("active");
    }
    else
    {
        _class("policy-special")[0].classList.remove("active");
    }
    
    if(password.length > 7){
        _class("policy-length")[0].classList.add("active");
    }
    else
    {
        _class("policy-length")[0].classList.remove("active");
    }

});
//adding clip board...
btn.addEventListener('click',()=>{
const copyText = document.getElementById("password-field");
copyText.select();
copyText.setSelectionRange(0, 99999)
document.execCommand("copy");
alert("Copied the text: " + copyText.value);
});

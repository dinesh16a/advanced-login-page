let userr=document.getElementById("username");
let passr=document.getElementById("password");
let sumbitr=document.getElementById("sumbit");
let mesager=document.getElementById("mesage");

let isusernamevalid=()=>{
    const userx=/^[a-zA-Z][a-zA-Z0-9]{3,32}/gi;
    return userx.test(userr.value);
};
let ispassvalid=()=>{
    const passx=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    return passx.test(passr.value);
}
userr.addEventListener("input",()=>{
    if(!isusernamevalid()){
        mesager.style.visibility='hidden';
        userr.style.cssText=
        "border-color:#f22e2;background:#ffc2c2";
    }
    else{
        userr.style.cssText=
        "border-color:#34bd34;background:#c2ffc2";
    }
});
passr.addEventListener("input",()=>{
 if(!ispassvalid()){
    mesager.style.visibility="hidden";
    passr.style.cssText=
    "border-color:#f22e2;background:#ffc2c2";

 }
 else{
    passr.style.cssText=
        "border-color:#34bd34;background:#c2ffc2"
 }
});
sumbitr.addEventListener("mouseover",()=>{
    if(!ispassvalid() || !(isusernamevalid())){
        let conre=document.querySelector(".container").getBoundingClientRect();
        let sumre=sumbitr.getBoundingClientRect();
        let offset= sumre.left -conre.left;
        console.log(offset);
        if(offset <= 100){
            sumbitr.style.transform="translateX(16.25em)";
        }
        else
        sumbitr.style.transform="translateX(0)";

    }
});
sumbitr.addEventListener("click",()=> {
    mesager.style.visibility="visible";
})

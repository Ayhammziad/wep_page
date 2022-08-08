let arabic =document.getElementById("Arabic");
let english= document.getElementById("English");
let title = document.getElementById("title");
let main = document.getElementById("main");
let contact = document.getElementById("contact");
let footer = document.getElementById("footer");
let mziad = document.getElementById("mziad");
arabic.onclick =()=>{
setlanguge("arabic")
localStorage.setItem("getlang" ,"arabic");
 };
 english.onclick=()=>{
 setlanguge("english")
 localStorage.setItem("getlang" ,"english");
};
onload=()=>{
    setlanguge(localStorage.getItem("getlang"));
}
function setlanguge(lang) {
if (lang==="arabic") {
    title.innerHTML=" المبرمج شيار"
    main.innerHTML=" مرحباً بكم في موقع المبرمج شيار "
about.innerHTML="حولنا"
contact.innerHTML="تواصل معنا"
footer.innerHTML=" أنا مدرس و مطور برامج "
mziad.innerHTML="بواسطة :أيهم المزيد "
}
   else if(lang==="english"){
title.innerHTML="coder_shayiar"
main.innerHTML=" Welcome to website of coder shiyar"
contact.innerHTML="Contact US"
about.innerHTML="About US"
footer.innerHTML="I am a teasher and software Developer."
mziad.innerHTML="By: Ayham _Mziad"
   }

    
};
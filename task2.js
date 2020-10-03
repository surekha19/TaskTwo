function loadjson(file){
    return new Promise((resolve,reject)=>{
        return fetch(file).then(response=>{
            if(response.ok){
                resolve(response.json());
            }else{
                reject(new Error('error'));
            }
        })
    })
}


var newfile=loadjson("task2.json");
newfile.then(data=>{
    console.log(data);
    staticdetails(data.card1);
    dynamicdetails(data.card2);
    nav(data.navbar);
})


var cardone=document.querySelector('.cardone-container');

function staticdetails(details){
    var img1=document.createElement("img");
    img1.src=details.image1;
    cardone.appendChild(img1);

    var name=document.createElement("h4");
    name.textContent=details.name1;
    cardone.appendChild(name);

    var prof=document.createElement("h6");
    prof.textContent=details.profession1;
    cardone.appendChild(prof);

    var rollnumber=document.createElement("h6");
    rollnumber.textContent=details.rollnum1;
    cardone.appendChild(rollnumber);

    var clg=document.createElement("h6");
    clg.textContent=details.college1;
    cardone.appendChild(clg);

    var mail=document.createElement("a");
    mail.href="mailto:surekha.dasari63@gmail.com";
    mail.textContent=details.mailid1;
    cardone.appendChild(mail);


    var pagelink=document.createElement("button");
    pagelink.textContent=details.staticpagelink;
    pagelink.setAttribute("class","btn");
    pagelink.classList.add("class","btn-dark");
    pagelink.addEventListener("click",movetostaticpage);
    cardone.appendChild(pagelink);

    function movetostaticpage() {
        window.location='../task1resume/resume.html';
    }


}



var cardtwo=document.querySelector('.cardtwo-container');

function dynamicdetails(content){
    var img2=document.createElement("img");
    img2.src=content.image2;
    cardtwo.appendChild(img2);

    var secondname=document.createElement("h4");
    secondname.textContent=content.name2;
    cardtwo.appendChild(secondname);

    var prof2=document.createElement("h6");
    prof2.textContent=content.profession2;
    cardtwo.appendChild(prof2);

    var secondrollnumber=document.createElement("h6");
    secondrollnumber.textContent=content.rollnum2;
    cardtwo.appendChild(secondrollnumber);

    var clg2=document.createElement("h6");
    clg2.textContent=content.college2;
    cardtwo.appendChild(clg2);

    var mail2=document.createElement("a");
   mail2.href="mailto:surekha.dasari63@gmail.com";
    mail2.textContent=content.mailid2;
    cardtwo.appendChild(mail2);

    var dypagelink=document.createElement("button");
    dypagelink.textContent=content.dynamicpagelink;
    dypagelink.setAttribute("class","btn");
    dypagelink.classList.add("class","btn-dark");
    dypagelink.addEventListener("click",movetodynamicpage);
    cardtwo.appendChild(dypagelink);

    function movetodynamicpage() {
        window.location='../maindom/dom.html';
    }

}
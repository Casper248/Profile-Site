function goTo(element) {
    var element = document.getElementById(element);
    element.scrollIntoView({block: "end" , behavior: "smooth"});
}

addEventListener('pageshow', () => {
    var child = document.getElementById("listitem-about-me").firstChild;
    child.style.color = "orange";
})

addEventListener('scroll', () => {
    markAboutMe();
    markCareer();
    markSkills();
    markcontact();
})



function markAboutMe() {
    var aboutMeEl = document.getElementById("about-me");
    var posYaboutMe = aboutMeEl.getBoundingClientRect();
    if (isElementinArea(aboutMeEl,posYaboutMe.y,-200,450)){
        var child = document.getElementById("listitem-about-me").firstChild;
        child.style.color = "orange";
      }
    else {
        var child = document.getElementById("listitem-about-me").firstChild;
        child.style.color = "rgba(255, 255, 255, 0.514)";
    }
    console.log(posYaboutMe.y);
}


function markCareer(){
    var careerEl = document.getElementById("career");
    var posYcareer = careerEl.getBoundingClientRect();
    if (isElementinArea(careerEl,posYcareer.y,-250,450)){
        var child = document.getElementById("listitem-career").firstChild;
        child.style.color = "orange";
      }
    else {
        var child = document.getElementById("listitem-career").firstChild;
        child.style.color = "rgba(255, 255, 255, 0.514)";
    }
}

function markSkills(){
    var skillsEl = document.getElementById("skills");
    var posYskills = skillsEl.getBoundingClientRect();
    if (isElementinArea(skillsEl,posYskills.y,-250,450)){
        var child = document.getElementById("listitem-skills").firstChild;
        child.style.color = "orange";
      }
    else {
        var child = document.getElementById("listitem-skills").firstChild;
        child.style.color = "rgba(255, 255, 255, 0.514)";
    }
}


function markcontact(){
    var contactEl = document.getElementById("contact");
    var posYcontact = contactEl.getBoundingClientRect();
    if (isElementinArea(contactEl,posYcontact.y,-250,450)){
        var child = document.getElementById("listitem-contact").firstChild;
        child.style.color = "orange";
      }
    else {
        var child = document.getElementById("listitem-contact").firstChild;
        child.style.color = "rgba(255, 255, 255, 0.514)";
    }
}


function isElementinArea(element,elementYPos,minY,maxY){
    if(elementYPos >= minY && elementYPos <= maxY) {
        return true;
    }
    else 
    return false;
}



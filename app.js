function animatedForm(){
    const arrows = document.querySelectorAll(".fa-arrow-down");

    arrows.forEach(arrow => {
        arrow.addEventListener('click',()=>{
            const input = arrow.previousElementSibling;
            const parent= arrow.parentElement;
            const nextForm = parent.nextElementSibling;


            //Check
            if(input.type === "text" && validateUser(input)){
                nextSlide(parent,nextForm);
            }else if(input.type === "email" && validateEmail(input)){
                nextSlide(parent,nextForm);
            }else if(input.type === "password" && validateUser(input)){
                nextSlide(parent,nextForm);
            }
        });
    });

}


function validateUser(user) {
    if(user.value.length < 6){
        error("#e65757"); //red
    }else{
        error("#49a951"); //green
        return true;
    }
}

function validateEmail(email) {
    const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (validation.test(email.value)) {
        error("#49a951");
        return true;
    } else {
        error("#e65757");
    }
}

function nextSlide(parent,nextForm){
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.remove('inactive');
    nextForm.classList.add('active');
}


function error(color){
    document.body.style.backgroundColor = color;
}




animatedForm();
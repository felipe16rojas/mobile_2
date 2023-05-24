const iconEye = document.querySelector('.icon-eye');

iconEye.addEventListener('click', function(){

    const icon = this.querySelector("i")

    if(this.nextElementSibling.type === "password"){
        this.nextElementSibling.type = "text";
        icon.classList.remove('bx-hide');
        icon.classList.add('bx-show-alt');
    }else{
        this.nextElementSibling.type = "password";
        icon.classList.remove('bx-show-alt');
        icon.classList.add('bx-hide');
    }
});
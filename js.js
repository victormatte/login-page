const geto = document.querySelector('.Password');
const getps = document.querySelector('.Passwordcf');

const checkpassword = () =>{
    const pass = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=confirmpassword]');

    if(confirm.value === pass.value){
       confirm.setCustomValidity('');
    }else{
        confirm.setCustomValidity('As senhas não conferem');
    }
}


const pegar = () =>{
    if(geto.getAttribute('type') === 'text'){
        geto.setAttribute('type' , 'password');
        icon.classList.replace('fa-eye','fa-eye-slash');
    }else{
        geto.setAttribute('type' , 'text');
        icon.classList.replace('fa-eye-slash','fa-eye',);
    }
}

const pegar1 = ()=>{
    if(getps.getAttribute('type') === 'text'){
        getps.setAttribute('type' , 'password');
        icon1.classList.replace('fa-eye','fa-eye-slash');
    }else{
        getps.setAttribute('type' , 'text');
        icon1.classList.replace('fa-eye-slash','fa-eye',);
    }
}

let icon = document.querySelector('#icon1');
let icon1 = document.querySelector('#icon');
icon.addEventListener('click', () => {
    pegar();
})
icon1.addEventListener('click', () => {
    pegar1();
})

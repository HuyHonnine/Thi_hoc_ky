  let loginForm = document.querySelector('.login-form');
 
  document.querySelector('.profile_user').onclick = () =>{
    loginForm.classList.toggle('active');
    ketQua.classList.remove('active');
 }
 
 let ketQua = document.querySelector('.ket_qua');
 
 document.querySelector('.hoc_phan').onclick = () =>{
    ketQua.classList.toggle('active');
    loginForm.classList.remove('active');
}

let spCanhan = document.querySelector('.sp_canhan');

document.querySelector('.san_pham').onclick = () =>{
    spCanhan.classList.toggle('active');
    loginForm.classList.remove('active');
}

 let btn = document.querySelector('.btn');
 document.querySelector('.box').onclick = () =>{
    btn.classList.toggle('active');
 }
 
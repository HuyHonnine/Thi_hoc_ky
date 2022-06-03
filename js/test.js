  let loginForm = document.querySelector('.login-form');
 
  document.querySelector('.profile_user').onclick = () =>{
    loginForm.classList.toggle('active');
    ketQua.classList.remove('active');
    spCanhan.classList.remove('active');
    thuVien.classList.remove('active');
 }
 
 let ketQua = document.querySelector('.ket_qua');
 
 document.querySelector('.hoc_phan').onclick = () =>{
    ketQua.classList.toggle('active');
    loginForm.classList.remove('active');
    spCanhan.classList.remove('active');
    thuVien.classList.remove('active');
}

let spCanhan = document.querySelector('.sp_canhan');

document.querySelector('.san_pham').onclick = () =>{
    spCanhan.classList.toggle('active');
    ketQua.classList.remove('active');
    loginForm.classList.remove('active');
    thuVien.classList.remove('active');
}

let thuVien = document.querySelector('.thu_vien');

document.querySelector('.album_anh').onclick = () =>{
    thuVien.classList.toggle('active');
    spCanhan.classList.remove('active');
    ketQua.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    spCanhan.classList.remove('active');
    ketQua.classList.remove('active');
    loginForm.classList.remove('active');
    thuVien.classList.remove('active');
}


 

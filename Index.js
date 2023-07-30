const modals=document.querySelector('.modal');
const overlays=document.querySelector('.overlay');
//modal open function
const openModal=()=>{
    console.log('modal is open');
    modals.classList.add('active');
    overlays.classList.add('overlayactive') ;   
};
//modal colse function
const closemodal=()=>{
    modals.classList.remove('active');
    overlays.classList.remove('overlayactive');
};
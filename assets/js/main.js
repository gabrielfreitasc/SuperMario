/*Sistema para fechar o pop-up ao clicar em "Ver trailer"*/
const button = document.querySelector('.button-trailer');
const modal = document.querySelector('.modal');
const videoModal = document.getElementById('video-modal');
const linkVideoModal = videoModal.src;
button.addEventListener('click', () => {
    modal.classList.add('modal-open');
    videoModal.setAttribute("src", linkVideoModal)
});


const closeModal = document.querySelector('.close-modal');
closeModal.addEventListener('click', () => {
    modal.classList.remove('modal-open');
    videoModal.setAttribute("src", "");
})

const closeModal = () => {
    const modal = document.querySelector(".popup-call");    
    const span = document.querySelector(".popup-close");
    span.addEventListener("click", function () {
        modal.style.display = "none";
});

}


export default closeModal
const  openModal = () => {
    const modal = document.querySelector(".popup-call");
    const btn = document.querySelectorAll(".call-btn");

    btn.forEach((element) => {
        element.addEventListener("click", function () {
            modal.style.display = "block";
        });
      });
    

}    
export default openModal;

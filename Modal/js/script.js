const openModalButtom = document.querySelector("#open-modal");
const closeModalButtom = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const toggleModal = () => {
  [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

[openModalButtom, closeModalButtom, fade].forEach((element) => {
  element.addEventListener("click", () => toggleModal());
});
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-11]"),
    closeModalBtn: document.querySelector("[data-modal-close-11]"),
    modal: document.querySelector("[data-modal-11]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden-11");
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-12]"),
    closeModalBtn: document.querySelector("[data-modal-close-12]"),
    modal: document.querySelector("[data-modal-12]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden-12");
  }
})();

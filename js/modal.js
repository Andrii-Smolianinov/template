(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.closeModalBtn.addEventListener("click", toggleModal);

  [...refs.openModalBtn].forEach(item => {
    item.addEventListener('click', toggleModal);
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("overflow-hidden");
  }
})();
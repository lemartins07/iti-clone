/*= ============== ENALBLE/DISABLE BUTTON =============== */
{
  const enableBtn = (btnClass, inputClass) => {
    const btn = document.querySelector(btnClass);
    const input = document.querySelector(inputClass);

    console.log(btn, input);

    if (btn && input) {
      input.addEventListener('keydown', () => {
        console.log(input.value);
      });
    }
  };

  enableBtn('.js-btn-abrir-conta', '.card__cpf');
}

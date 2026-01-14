const dom = {
  input: {
    trim1: document.querySelector("#trim-1"),
    trim2: document.querySelector("#trim-2"),
  },
  button: document.querySelector("#button"),
  showText: document.querySelector("#show_text"),
};

const inputs = [dom.input.trim1, dom.input.trim2];

function getNote() {
  const moyen =
    (Number(dom.input.trim1.value) + Number(dom.input.trim2.value)) /
    inputs.length;
  if (!moyen) {
    return 0;
  }
  return ((moyen * 8) / 20).toFixed(1);
}

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (Number(input.value) > 20) {
      input.value = 20;
    }
    if (Number(input.value) < 0) {
      input.value = 0;
    }
    if (isNaN(input.value)) {
      input.value = "";
    }
  });
});

dom.button.addEventListener("click", (e) => {
  const note = getNote();
  dom.showText.innerText = note;
});

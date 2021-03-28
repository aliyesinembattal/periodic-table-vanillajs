import { getAtomicNumber } from "./periodic";
import { ui } from "./ui";

const modal = document.querySelector(".modal");
const closeModal = document.querySelector("#closeModal");
const modalDialog = document.querySelector(".modal-dialog");
const modalBody = document.querySelector(".modal-body");
const modalContent = document.querySelector(".modal-content");

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  modal.className = "modal fade";
});

let atomicNumber = 0;

document.body.addEventListener(
  "click",
  function (event) {
    if (event.target.childElementCount === 1 && event.target) {
      console.log(event.target);
      const style = getComputedStyle(
        event.target.firstElementChild,
        "hover"
      ).getPropertyValue("background-color");
      console.log(style);
      modal.style.display = "block";
      modal.style.paddingRight = "17px";
      modal.className = "modal fade show";
      modalBody.style.background = style;
      modalContent.style.background = style;
      modalDialog.style.background = style;
      atomicNumber = event.target.innerText.slice(0, 5).match(/\d/g).join("");

      //get data from API
      getAtomicNumber().then((data) => {
        const element = data.find(
          (element) => element.atomicNumber === atomicNumber
        );

        ui.showModalBody(element);
      });
    }
  },
  false
);

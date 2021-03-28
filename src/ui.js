import Toastify from "toastify-js";

class UI {
  constructor() {
    this.modal = document.querySelector(".modal-body");
  }

  // Show all posts
  showModalBody(data) {
    console.log(data);
    this.modal.innerHTML = `
    <div>
      <p><strong>Symbol :</strong> ${data.symbol}</p>
      <p><strong>Name :</strong> ${data.name}</p>
      <p><strong>Atomic Number :</strong> ${data.atomicNumber}</p>
      <p><strong>Atomic Radius :</strong> ${data.atomicRadius}</p>
      <p><strong>Period :</strong> ${data.period}</p>
      <p><strong>Block :</strong> ${data.block}</p>
      <p><strong>Group Block :</strong> ${data.groupBlock}</p>
      <p><strong>Electronic Configuration :</strong> ${
        data.electronicConfiguration
      }</p>
      <p>${
        data.facts !== "" ? "<strong>Facts :</strong> " + data.facts : ""
      }</p>
      <p><strong>History :</strong> ${data.history}</p>
    </div>
   `;
  }
}

export const ui = new UI();

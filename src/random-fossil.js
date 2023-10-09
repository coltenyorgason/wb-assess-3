import axios from "axios";

document
  .querySelector("#get-random-fossil")
  .addEventListener("click", async (evt) => {
    evt.preventDefault();
    const response = await axios.get("/random-fossil.json");
    document.querySelector(
      "#random-fossil-image"
    ).innerHTML = `<img src="${response.body.img}"/>`;

    document.querySelector("#random-fossil-name").innerText = reponse.body.name;
  });

function contactContainer(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `
    <div class="contact">
        <div class="contact__title-container">
            <h3 class="contact__title">Escribime</h3>
        </div>

        <form class="contact__form" action="https://apx-api.vercel.app/api/utils/dwf" method="post">
            <fieldset class="fieldset fs-name">
                <label class="label label-name" for="name">Nombre</label>
                <input class="input" type="text" name="" id="name" placeholder="     Tu nombre">
            </fieldset>
        
            <fieldset class="fieldset fs-email">
                <label class="label" for="email">Email</label>
                <input class="input" type="email" name="" id="email" placeholder="    tu@email.com">
            </fieldset>

            <fieldset class="fieldset fs-textarea">
                <label class="label" for="mensaje">Mensaje</label>
                <textarea class="input textarea" id="mensaje"></textarea>
            </fieldset>

            <div class="button-submit-container">
                <button class="button-submit">
                    <p class="button-submit__title">Enviar</p>
                    <img class="button-submit__img" src="https://cdn-icons-png.flaticon.com/128/786/786205.png" alt="send">
                </button>
            </div>
        </form>

        <div class="sent-window">
        <div class="sent-window-container">
            <div class="sent-window__button-container">
                <button class="sent-window__button">
                    <img class="sent-window__button-img" src="" alt="close">
                </button>
            </div>
            <div class="sent-window__options-container">
                <p class="sent-window__options">¡Tu mensaje ha sido enviado con éxito!</p>
            </div>
        </div>
    </div>
    </div>
        `;

  const nameEl = componentEl.querySelector("#name");

  const emailEL = componentEl.querySelector("#email");

  const mensajeEl = componentEl.querySelector("#mensaje");

  const formEl = componentEl.querySelector(".contact__form");

  const sentWindowEl = componentEl.querySelector(".sent-window");

  const closeSentWindowButtonEl = componentEl.querySelector(
    ".sent-window__button"
  );

  formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("El form se envió");

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: `${emailEL}`,
        message: `${mensajeEl}`,
      }),
    });

    nameEl.value = "";
    emailEL.value = "";
    mensajeEl.value = "";

    fetch(
      "https://cdn.contentful.com/spaces/8r00ukyh4hkq/environments/master/entries?access_token=NIjEBRySV05-TekofMQbtnzr3pMwxmgVWomAnY-JsRU&content_type=m4header"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        const urlCloseSentButton = data.includes.Asset[1].fields.file.url;
        const imgCloseSentButtonEl = document.querySelector(
          ".sent-window__button-img"
        );
        imgCloseSentButtonEl.src = "https:/" + urlCloseSentButton;
      });

    sentWindowEl.style.display = "inherit";

    closeSentWindowButtonEl.addEventListener("click", function (e) {
      sentWindowEl.style.display = "";
    });
  });

  el.appendChild(componentEl);
}

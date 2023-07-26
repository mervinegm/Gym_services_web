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
    </div>
        `;

  const emailEL = componentEl.querySelector("#email");

  const mensajeEl = componentEl.querySelector("#mensaje");

  const formEl = componentEl.querySelector(".contact__form");

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
  });

  el.appendChild(componentEl);
}

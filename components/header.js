function headerContainer(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `
    <header class="header">
                <img src="" alt="logo" class="header__logo">
                <button class="header__button">
                <img class="header__button-img" src="" alt="menu">
                </button>
                <div class="header__menu">
                    <p class="menu__options"><a href="./portfolio.html">Portfolio</a></p>
                    <p class="menu__options"><a href="./servicios.html">Servicios</a></p>
                    <p class="menu__options"><a href="./contacto.html">Contacto</a></p>
                </div>
                <div class="window">
                    <div class="window-container">
                        <div class="window__button-container">
                            <button class="window__button">
                                <img class="window__button-img" src="" alt="close">
                            </button>
                        </div>
                        <div class="window__options-container">
                            <p class="window__options"><a href="./portfolio.html">Portfolio</a></p>
                            <p class="window__options"><a href="./servicios.html">Servicios</a></p>
                            <p class="window__options"><a href="./contacto.html">Contacto</a></p>
                        </div>
                    </div>
                </div>
        </header>
    `;

  fetch(
    "https://cdn.contentful.com/spaces/8r00ukyh4hkq/environments/master/entries?access_token=NIjEBRySV05-TekofMQbtnzr3pMwxmgVWomAnY-JsRU&content_type=m4header"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const urlMenuButton = data.includes.Asset[0].fields.file.url;
      const imgMenuButtonEl = componentEl.querySelector(".header__button-img");
      imgMenuButtonEl.src = "https:/" + urlMenuButton;

      const urlCloseButton = data.includes.Asset[1].fields.file.url;
      const imgCloseButtonEl = componentEl.querySelector(".window__button-img");
      imgCloseButtonEl.src = "https:/" + urlCloseButton;

      const urlHeaderLogo = data.includes.Asset[2].fields.file.url;
      const imgHeaderLogoEl = componentEl.querySelector(".header__logo");
      imgHeaderLogoEl.src = "https:/" + urlHeaderLogo;
    });

  const openWindowButtonEl = componentEl.querySelector(".header__button");
  const closeWindowButtonEl = componentEl.querySelector(".window__button");
  const windowEl = componentEl.querySelector(".window");

  openWindowButtonEl.addEventListener("click", function (e) {
    windowEl.style.display = "inherit";
  });

  closeWindowButtonEl.addEventListener("click", function (e) {
    windowEl.style.display = "";
  });

  el.appendChild(componentEl);
}

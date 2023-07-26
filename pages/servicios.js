function welcome() {
  fetch(
    "https://cdn.contentful.com/spaces/8r00ukyh4hkq/environments/master/entries?access_token=NIjEBRySV05-TekofMQbtnzr3pMwxmgVWomAnY-JsRU&content_type=m4welcome"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const urlServiceLogo = data.includes.Asset[2].fields.file.url;
      const imgWelcomeLogoEl = document.querySelector(".welcome-img");
      imgWelcomeLogoEl.src = "https:" + urlServiceLogo;
    });
}

function addServiceCard(params = {}) {
  const cardContainer = document.querySelector(".service-card-container");

  const cardTemplate = document.querySelector(".service-card-template");

  cardTemplate.content.querySelector(".class-name").textContent = params.title;
  cardTemplate.content.querySelector(".card-description").textContent =
    params.description;
  cardTemplate.content.querySelector(".card-img").src = params.img;

  var clone = document.importNode(cardTemplate.content, true);
  cardContainer.appendChild(clone);
}

function getServices() {
  return fetch(
    "https://cdn.contentful.com/spaces/8r00ukyh4hkq/environments/master/entries?access_token=NIjEBRySV05-TekofMQbtnzr3pMwxmgVWomAnY-JsRU&content_type=m4services"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const servicesCardCollection = data.items.map((item) => {
        return {
          title: item.fields.serviceTitle,
          description: item.fields.description,
          img: item.fields.imgUrl,
        };
      });
      return servicesCardCollection;
    });
}

function main() {
  const headerContainerEl = document.querySelector(".header-container");

  headerContainer(headerContainerEl);

  const footerContainerEl = document.querySelector(".footer-container");

  footerContainer(footerContainerEl);

  welcome();

  getServices().then(function (services) {
    for (const w of services) {
      addServiceCard(w);
    }
  });
}

main();

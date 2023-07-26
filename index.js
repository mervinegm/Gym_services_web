function welcome() {
  fetch(
    "https://cdn.contentful.com/spaces/8r00ukyh4hkq/environments/master/entries?access_token=NIjEBRySV05-TekofMQbtnzr3pMwxmgVWomAnY-JsRU&content_type=m4welcome"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const urlWelcomeLogo = data.includes.Asset[1].fields.file.url;
      const imgWelcomeLogoEl = document.querySelector(".welcome-img");
      imgWelcomeLogoEl.src = "https:/" + urlWelcomeLogo;
    });
}

function introduction() {
  fetch(
    "https://cdn.contentful.com/spaces/8r00ukyh4hkq/environments/master/entries?access_token=NIjEBRySV05-TekofMQbtnzr3pMwxmgVWomAnY-JsRU&content_type=m4introduction"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const urlProfilePic = data.includes.Asset[0].fields.file.url;
      const imgProfilePicEl = document.querySelector(".introduction-img");
      imgProfilePicEl.src = "https:/" + urlProfilePic;

      const span1 = data.items[0].fields.span1;
      const span1El = document.querySelector(".introduction-text1");
      span1El.textContent = span1;

      const span2 = data.items[0].fields.span2;
      const span2El = document.querySelector(".introduction-text2");
      span2El.textContent = span2;

      const span3 = data.items[0].fields.span3;
      const span3El = document.querySelector(".introduction-text3");
      span3El.textContent = span3;

      const span4 = data.items[0].fields.span4;
      const span4El = document.querySelector(".introduction-text4");
      span4El.textContent = span4;
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

  const contactContainerEl = document.querySelector(".contact-container");

  contactContainer(contactContainerEl);

  welcome();

  introduction();

  getServices().then(function (services) {
    for (const w of services) {
      addServiceCard(w);
    }
  });
}

main();

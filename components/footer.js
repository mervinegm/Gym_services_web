function footerContainer(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `
    <footer class="footer">
    <img src="" alt="" class="footer__logo">

    <div class="footer__info-container">
        <div class="footer__info">
            <img src="" alt="" class="info-img img-home">
            <p class="info">
                <a href="./index.html">Home</a> 
            </p>
        </div>
        <div class="footer__info footer__info-services">
            <img src="" alt="service-logo" class="info-img img-service">
            <p class="info">
                <a href="./servicios.html">Servicios</a> 
            </p>
            
        </div>
        <div class="footer__info">
            <img src="" alt="" class="info-img img-contact">
            <p class="info">
                <a href="./contacto.html">Contacto</a> 
            </p>
        </div>
    </div>

    <div class="footer__media-container">
        <a class="a-media" href="https://www.instagram.com/mervin.egm/">
            <img src="" alt="instagram" class="media ig">
        </a>
        <a class="a-media" href="https://www.facebook.com/mervin.gonzalezmoya/">
            <img src="" alt="facebook" class="media fb">
        </a>
        <a class="a-media" href="https://api.whatsapp.com/send?phone=5491131593133">
            <img src="" alt="whatsapp" class="media wp">
        </a>
    </div>

    <p class="footer__link">©2023 - <a href="https://www.merv-training.com.ar">https://www.merv-training.com.ar</a> </p>
    </footer>
      `;

  fetch(
    "https://cdn.contentful.com/spaces/8r00ukyh4hkq/environments/master/entries?access_token=NIjEBRySV05-TekofMQbtnzr3pMwxmgVWomAnY-JsRU&content_type=m4footer"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const urlFooterLogo = data.includes.Asset[1].fields.file.url;
      const imgFooterLogoEl = componentEl.querySelector(".footer__logo");
      imgFooterLogoEl.src = "https:/" + urlFooterLogo;

      const urlHomeLogo = data.includes.Asset[6].fields.file.url;
      const imgHomeLogoEl = componentEl.querySelector(".img-home");
      imgHomeLogoEl.src = "https:/" + urlHomeLogo;

      const urlServiceLogo = data.includes.Asset[5].fields.file.url;
      const imgServiceLogoEl = componentEl.querySelector(".img-service");
      imgServiceLogoEl.src = "https:/" + urlServiceLogo;

      const urlContactLogo = data.includes.Asset[0].fields.file.url;
      const imgContactLogoEl = componentEl.querySelector(".img-contact");
      imgContactLogoEl.src = "https:/" + urlContactLogo;

      const urlInstagramLogo = data.includes.Asset[3].fields.file.url;
      const imgInstagramLogoEl = componentEl.querySelector(".ig");
      imgInstagramLogoEl.src = "https:/" + urlInstagramLogo;

      const urlFacebookLogo = data.includes.Asset[4].fields.file.url;
      const imgFacebookLogoEl = componentEl.querySelector(".fb");
      imgFacebookLogoEl.src = "https:/" + urlFacebookLogo;

      const urlWhatsappLogo = data.includes.Asset[2].fields.file.url;
      const imgWhatsappLogoEl = componentEl.querySelector(".wp");
      imgWhatsappLogoEl.src = "https:/" + urlWhatsappLogo;
    });

  el.appendChild(componentEl);
}

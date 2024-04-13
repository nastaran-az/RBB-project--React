import FireflyBackground from "./FireflyBackground";

const Services = () => {
  return (
    <section class="service-section">
      <h2 class="heading-secondry heading-secondry--service">Services</h2>

      <div class="service">
        <FireflyBackground numFireflies={100} />

        <div class="part">
          <div class="part__pic">
            <div class="part__pic part__pic--img1">&nbsp;</div>
          </div>
          <div class="part__heading">
            <p class="part__heading part__heading--p">Service Panel Upgrades</p>
          </div>
        </div>
        <div class="part">
          <div class="part__pic">
            <div class="part__pic part__pic--img2">&nbsp;</div>
          </div>
          <div class="part__heading">
            <p class="part__heading part__heading--p">EV charger</p>
          </div>
        </div>
        <div class="part">
          <div class="part__pic">
            <div class="part__pic part__pic--img3">&nbsp;</div>
          </div>
          <div class="part__heading">
            <p class="part__heading part__heading--p">led pot lights</p>
          </div>
        </div>
        <div class="part">
          <div class="part__pic">
            <div class="part__pic part__pic--img4">&nbsp;</div>
          </div>
          <div class="part__heading">
            <p class="part__heading part__heading--p">
              Changing Fuses to Breaker
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;

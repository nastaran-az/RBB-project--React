import image1 from "./aboutPic/p1.JPG";
import image2 from "./aboutPic/p2.JPG";
import image3 from "./aboutPic/p3.JPG";
import image4 from "./aboutPic/p4.JPG";
const AboutSection = () => {
  return (
    <section class="about-section">
      <h2 id="about" class="heading-secondry">
        About RBB Electrical contracting inc company
      </h2>
      <div class="row">
        <div class="col-1">
          <p class="about-paragraph">
            As an electrical company in Canada, we take pride in our commitment
            to excellence and customer satisfaction. With a team of highly
            skilled and certified electricians, we offer a wide range of
            electrical services for residential, and commercial clients. From
            new installations to repairs and maintenance, we ensure that every
            project is completed to the highest standards of safety and quality.
            Our goal is to provide reliable and efficient solutions that meet
            the unique needs of each client. With years of experience in the
            industry, we have built a reputation for professionalism, integrity,
            and superior service. When you choose us, you can trust that your
            electrical needs are in good hands
          </p>
        </div>
        <div class="col-1">
          <div class="composition">
            <img
              class="composition__photo composition__photo--p1"
              src={image1}
              alt="image1"
            />
            <img
              class="composition__photo composition__photo--p2"
              src={image2}
              alt="image2"
            />
            <img
              class="composition__photo composition__photo--p3"
              src={image3}
              alt="image3"
            />
            <img
              class="composition__photo composition__photo--p4"
              src={image4}
              alt="image4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;

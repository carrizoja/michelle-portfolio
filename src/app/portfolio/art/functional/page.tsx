import React from "react";
import styles from "@/app/portfolio/art/functional/page.module.css";
import globalStyles from "@/app/page.module.css";
import WhatsAppBtn from "@/components/whatsAppBtn/WhatsAppBtn";
import jpg1 from "../../../../../public/assets/mosaic/jpg1ok.v1.1.jpg";
import jpg7 from "../../../../../public/assets/mosaic/jpg7.png";
import jpg2 from "../../../../../public/assets/mosaic/JPG2.jpeg";
import jpg5 from "../../../../../public/assets/mosaic/JPG5V1.1.jpg";
import jpg3 from "../../../../../public/assets/mosaic/JPG3v1.1.jpg";
import jpg6 from "../../../../../public/assets/mosaic/jpg6.jpg";
import orquidea from "../../../../../public/assets/mosaic/orquideanaranja.png";
import orquideamar from "../../../../../public/assets/mosaic/orquideamar.png";
import orquid4 from "../../../../../public/assets/mosaic/orchid4.png";
import orquid6 from "../../../../../public/assets/mosaic/orchid6.png";
import jpg8 from "../../../../../public/assets/mosaic/JPG7okv1.1.jpg";
import jpg9 from "../../../../../public/assets/mosaic/JPG9.jpg";
import jpg10 from "../../../../../public/assets/mosaic/jpg10.jpg";
import jpg11 from "../../../../../public/assets/mosaic/jpg11.jpg";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import { FaInstagram } from "react-icons/fa";
const Functional = () => {
  return (
    <>
      <WhatsAppBtn />
      <section
        className={[
          globalStyles.container__main,
          styles.container__functional,
        ].join(" ")}
      >
        <div className={globalStyles.container__main__title}>
          <h1 className={globalStyles.section__title}>FUNCTIONAL SCULPTURES</h1>
        </div>
        <div className={styles.container__main__containerMosaics}>
          <div
            className={[
              styles.item01,
              styles.flex_center,
              styles.relative_position,
              styles.border_radius,
              styles.overflow_hidden,
            ].join(" ")}
          >
            <img src={jpg1.src} alt="home photo" />
          </div>
          <div
            className={[
              styles.item02,
              styles.flex_center,
              styles.relative_position,
              styles.border_radius,
              styles.overflow_hidden,
            ].join(" ")}
          >
            <video
              src="https://res.cloudinary.com/dyorbs4xf/video/upload/v1708283981/videos/video1_wpibxe.mp4"
              muted
              autoPlay
              loop
            ></video>
          </div>
          <div
            className={[
              styles.item03,
              styles.flex_center,
              styles.relative_position,
              styles.border_radius,
              styles.overflow_hidden,
            ].join(" ")}
          >
            <img src={jpg9.src} alt="wood" />
          </div>
          <div
            className={[
              styles.item05,
              styles.flex_center,
              styles.relative_position,
              styles.border_radius,
              styles.overflow_hidden,
            ].join(" ")}
          >
            <img src={jpg11.src} alt="perfume" />
          </div>
          <div
            className={[
              styles.item06,
              styles.flex_center,
              styles.relative_position,
              styles.border_radius,
              styles.overflow_hidden,
            ].join(" ")}
          >
            <img src={jpg2.src} alt="girl photo" />
          </div>
          <div
            className={[
              styles.item07,
              styles.flex_center,
              styles.relative_position,
              styles.border_radius,
              styles.overflow_hidden,
            ].join(" ")}
          >
            <img src={jpg7.src} alt="perfume photo" />
          </div>
          <div
            className={[
              styles.item08,
              styles.flex_center,
              styles.relative_position,
              styles.border_radius,
              styles.overflow_hidden,
            ].join(" ")}
          >
            <img src={jpg10.src} alt="girl" />
          </div>
          <div
            className={[
              styles.item09,
              styles.flex_center,
              styles.relative_position,
              styles.border_radius,
              styles.overflow_hidden,
            ].join(" ")}
          >
            <img src={jpg3.src} alt="hands photo" />
          </div>
          <div
            className={[
              styles.item10,
              styles.flex_center,
              styles.relative_position,
              styles.border_radius,
              styles.overflow_hidden,
            ].join(" ")}
          >
            <img src={jpg8.src} alt="beautiful landscape" />
          </div>
          <div
            className={[
              styles.item11,
              styles.flex_center,
              styles.relative_position,
              styles.border_radius,
              styles.overflow_hidden,
            ].join(" ")}
          >
            <img src={jpg5.src} alt="girl photo 2" />
          </div>
          <div
            className={[
              styles.item12,
              styles.flex_center,
              styles.relative_position,
              styles.border_radius,
              styles.overflow_hidden,
            ].join(" ")}
          >
            <video
              src="https://res.cloudinary.com/dyorbs4xf/video/upload/v1708287269/videos/IMG_0961_1_vvsyeh.mp4"
              muted
              autoPlay
              loop
            ></video>
          </div>
          <div
            className={[
              styles.item13,
              styles.flex_center,
              styles.relative_position,
              styles.border_radius,
              styles.overflow_hidden,
            ].join(" ")}
          >
            <img src={jpg6.src} alt="" />
          </div>{" "}
          <div
            className={[
              styles.item14,
              styles.flex_center,
              styles.relative_position,
              styles.border_radius,
              styles.overflow_hidden,
            ].join(" ")}
          >
            <video
              src="https://res.cloudinary.com/dyorbs4xf/video/upload/v1708288081/videos/IMG_0962_wrawco.mp4"
              muted
              autoPlay
              loop
            ></video>
          </div>
          <div
            className={[
              styles.item15,
              styles.flex_center,
              styles.relative_position,
              styles.border_radius,
              styles.overflow_hidden,
            ].join(" ")}
          >
            <img src={orquid4.src} alt="orquid " />
          </div>
          <div
            className={[
              styles.item16,
              styles.flex_center,
              styles.relative_position,
              styles.border_radius,
              styles.overflow_hidden,
            ].join(" ")}
          >
            <img src={orquidea.src} alt="orchid" />
          </div>
          <div
            className={[
              styles.item17,
              styles.flex_center,
              styles.relative_position,
              styles.border_radius,
              styles.overflow_hidden,
            ].join(" ")}
          >
            <video
              src="https://res.cloudinary.com/dyorbs4xf/video/upload/v1708904239/videos/hzjplwintxi5typbzuhe.mp4"
              muted
              autoPlay
              loop
            ></video>
          </div>
          <div
            className={[
              styles.item18,
              styles.flex_center,
              styles.relative_position,
              styles.border_radius,
              styles.overflow_hidden,
            ].join(" ")}
          >
            <video
              src="https://res.cloudinary.com/dyorbs4xf/video/upload/v1708904237/videos/lrpic2srwr4pyedhy9tp.mp4"
              muted
              autoPlay
              loop
            ></video>
          </div>
          <div
            className={[
              styles.item19,
              styles.flex_center,
              styles.relative_position,
              styles.border_radius,
              styles.overflow_hidden,
            ].join(" ")}
          >
            <img src={orquid6.src} alt="pink orchid" />
          </div>
          <div
            className={[
              styles.item20,
              styles.flex_center,
              styles.relative_position,
              styles.border_radius,
              styles.overflow_hidden,
            ].join(" ")}
          >
            <img src={orquideamar.src} alt="sea orchid "/>
          </div>
        </div>
        <div className={styles.container_socialMedia}>
          <div className={styles.container__socialMedia_text}>
            <h2>Want to learn more about my universe?</h2>
            <p>Explore my visual journey on Instagram.</p>
          </div>
          <div className={styles.container_linkIG}>
      {/*     <Link href="https://www.instagram.com/mugrabimichelle/"
              target="_blank"
              rel="noreferrer">
          <FaInstagram className={styles.instagramIcon} />
          </Link> */}
          <FaInstagram className={styles.instagramIcon} />
          </div>     
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Functional;

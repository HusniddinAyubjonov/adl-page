import clsx from "clsx";
// import Footer from "../../ui-components/ui/Footer/Footer";
import Navbar from "../../ui-components/ui/Navbar/Navbar";
// import BuildFeature from "./components/BuildFeature/BuildFeature";
// import ChooseUs from "./components/ChooseUs/ChooseUs";
// import News from "./components/News/News";
// import Review from "./components/Reviews/Review";
// import Services from "./components/Services/Service";
// import StartWithMe from "./components/StartWith/StartWith";
import style from "./home.module.css";
import { advantagesData, servicesData } from "./constants";

import img1 from "../../assets/imgs/our-advanture-img.png";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className={style.container}>
        <h1 className={style.headTitle}>
          A leading web-studio to take your business to the next level
        </h1>
        <p className={style.headDescription}>
          We create modern, user-friendly websites optimized for all devices.
          Our solutions suit any purpose — from personal projects to large-scale
          platforms.
        </p>
      </section>

      {/*---------------------------------------------------------------------------
      /// Build your project
      --------------------------------------------------------------------------- */}

      <section className={style.yourProject}>
        <div>
          <h2 className={style.projectTitle}>Build your project</h2>
          <p className={style.projectDescription}>
            We help bring your project to life — from concept and design to a
            complete web solution or app.
          </p>

          <div className={style.content}>
            {servicesData.map((service) => (
              <div
                key={service.title}
                className={clsx(style.card, {
                  [style.bigCard]: service.title === "IOS & ANDROID APP",
                })}
              >
                <div className={style.icons}>
                  <img className={style.icon} src={service.icon} alt="icon" />
                </div>
                <h3 className={style.cardTitle}>{service.title}</h3>
                <p className={style.cardDescription}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*---------------------------------------------------------------------------
      /// Our Advantages
      --------------------------------------------------------------------------- */}

      <section>
        <div className={style.advantages}>
          <img className={style.advantagesImg} src={img1} alt="phone" />
          <div className={style.advantagesText}>
            <h1 className={style.advantagesTitle}>Our Advantages</h1>
            <p className={style.advantagesDescription}>
              We turn technology into growth. <br /> Our solutions deliver
              speed, reliability, and security — built for modern digital
              businesses.
            </p>
            <div>
              {advantagesData.map((advantages, index) => (
                <div key={index} className={style.advantagesInfo}>
                  <div className={style.advantagesIcons}>
                    <img
                      className={style.advantagesIcon}
                      src={advantages.icon}
                      alt="icon"
                    />
                  </div>
                  <h3 className={style.advantagesInfoText}>
                    {advantages.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <ChooseUs /> */}
      {/* <BuildFeature /> */}
      {/* <Review /> */}
      {/* <StartWithMe /> */}
      {/* <News /> */}
      {/* <Footer /> */}
    </div>
  );
}

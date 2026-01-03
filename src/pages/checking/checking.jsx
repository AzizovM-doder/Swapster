import React from "react";
import { useTranslation } from "react-i18next";
import j from "../../images/j.png";
import o1 from "../../images/o1.png";
import o2 from "../../images/o2.png";
import o3 from "../../images/o3.png";
import fuh from "../../images/fuh.png";
import fuh2 from "../../images/fuh2.png";
import det from "../../images/det.png";
import phone3 from "../../images/phone3.png";
import phone5 from "../../images/phone5.png";
import { Button } from "../../components/ui/button";
import Comp1 from "../../components/comp1";

const Checking = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <header>
        <section className="max-w-7xl m-auto p-5">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between">
            <aside className="flex flex-col items-start gap-7 lg:max-w-1/2">
              <h1 className="text-4xl font-bold lg:text-6xl">{t("main4.0")}</h1>
              <p className="text-lg opacity-50">{t("main4.1")}</p>
            </aside>
            <img width={600} src={phone5} alt="coin" />
          </div>
        </section>
        <img className="w-full h-10" src={fuh} alt="" />
      </header>
      <main>
        <section className="max-w-7xl m-auto p-5">
          <h1 className=" m-auto pt-15 pb-5 text-center font-bold text-4xl lg:text-5xl">
            {t("main4.2")}
          </h1>
          <div className="flex opacity-70 text-center m-auto lg:px-30 flex-col items-start gap-5 py-10">
            <p>{t("main4.3")}</p>
            <p>{t("main4.4")}</p>
          </div>
          <div className="flex flex-col w-full lg:flex-row gap-10 lg:h-90">
            <Comp1 img={o1} num={"01"} text={t("main3.3")} />
            <Comp1 img={o2} num={"02"} text={t("main3.3")} />
            <Comp1 img={o3} num={"03"} text={t("main3.3")} />
          </div>
          <div className="flex flex-col lg:w-full max-w-5xl  mt-5 m-auto lg:flex-row gap-10 lg:h-90">
            <Comp1 img={o1} num={"04"} text={t("main3.3")} />

            <div className="a2 p-5 rounded-2xl flex flex-col lg:flex-row lg:gap-5 lg:w-400 items-center">
              <img className="lg:w-50 lg:mx-15 lg:scale-150" src={det} alt="" />
              <aside className="flex flex-col items-start h-full">
                <p className="text-3xl font-bold py-5  text-[#A113FF]">05</p>
                <h4 className="text-xl font-bold text-white">{t("main4.6")}</h4>
              </aside>
            </div>
          </div>
        </section>
        <section className="max-w-7xl m-auto p-5">
          <h1 className="text-3xl lg:text-5xl py-10 font-bold">
            {t("main4.5")}
          </h1>
          <div className="flex flex-col items-center lg:justify-between lg:flex-row">
            <img src={fuh2} className="w-full bg-[] lg:max-w-1/3" alt="" />
            <aside className="lg:max-w-full opacity-70 flex flex-col items-start gap-5 py-5 lg:px-15">
              <p>{t("main4.3")}</p>
              <p>{t("main4.4")}</p>
            </aside>
          </div>
        </section>
        <section className="max-w-7xl m-auto p-5">
          <div className="a1 py-10 lg:py-20 flex flex-col items-center lg:justify-between lg:flex-row">
            <aside className="lg:max-w-1/2">
              <h1 className="text-white font-bold text-3xl text-center lg:text-start lg:text-5xl">
                {t("main.6")}
              </h1>
            </aside>
            <img src={phone3} className="lg:max-w-1/2" alt="" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Checking;

import React from "react";
import { useTranslation } from "react-i18next";
import j from "../../images/j.png";
import o1 from "../../images/o1.png";
import o2 from "../../images/o2.png";
import o3 from "../../images/o3.png";
import fuh from "../../images/fuh.png";
import phone4 from "../../images/phone4.png";
import { Button } from "../../components/ui/button";
import Comp1 from "../../components/comp1";

const Work = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <header>
        <section className="max-w-7xl m-auto p-5">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between">
            <aside className="flex flex-col items-start gap-7 lg:max-w-1/2">
              <h1 className="text-4xl font-bold lg:text-6xl">{t("main3.0")}</h1>
              <p className="text-lg opacity-50">{t("main3.1")}</p>
            </aside>
            <img width={600} src={phone4} alt="coin" />
          </div>
        </section>
        <img className="w-full h-10" src={fuh} alt="" />
      </header>
      <main>
        <section className="max-w-7xl m-auto p-5">
          <h1 className=" m-auto py-15 text-center font-bold text-4xl lg:text-5xl">
            {t("main3.2")}
          </h1>
          <div className="flex flex-col w-full lg:flex-row gap-10 lg:h-90">
            <Comp1 img={o1} num={"01"} text={t("main3.3")} />
            <Comp1 img={o2} num={"02"} text={t("main3.3")} />
            <Comp1 img={o3} num={"03"} text={t("main3.3")} />
          </div>
        </section>

        <section className="max-w-7xl m-auto p-5">
          <h1 className=" m-auto pt-15 pb-5 text-center font-bold text-4xl lg:text-5xl">
            {t("main3.4")}
          </h1>
          <p className="px-5 lg:px-30 pb-15 text-center opacity-70 lg:text-xl">
            {t("main3.5")}
          </p>
          <div className="flex flex-col w-full lg:flex-row gap-10 lg:h-90">
            <Comp1 img={o1} num={"01"} text={t("main3.3")} />
            <Comp1 img={o2} num={"02"} text={t("main3.3")} />
            <Comp1 img={o3} num={"03"} text={t("main3.3")} />
          </div>
          <p className="text-end opacity-50 italic py-5">{t("main3.6")}</p>
        </section>

        <section className="max-w-7xl m-auto p-5">
          <h1 className=" m-auto pt-15 pb-5 text-center font-bold text-4xl lg:text-5xl">
            {t("main3.7")}
          </h1>
          <div className="flex opacity-70 flex-col items-start gap-5 py-10">
            <p>{t("main3.8")}</p>
            <ul className="list-disc m-auto  text-sm">
                <p>{t("main3.9")}</p>
                <li>{t("main3.10")}</li>
                <li>{t("main3.11")}</li>
                <li>{t("main3.12")}</li>
                <li>{t("main3.13")}</li>
            </ul>
             <p>{t("main3.14")}</p>
             <p>{t("main3.15")}</p>
          </div>
          <div className="flex flex-col w-full lg:flex-row gap-10 lg:h-90">
            <Comp1 img={o1} num={"01"} text={t("main3.3")} />
            <Comp1 img={o2} num={"02"} text={t("main3.3")} />
            <Comp1 img={o3} num={"03"} text={t("main3.3")} />
          </div>
          <div className="flex flex-col lg:w-full lg:px-60 mt-5 m-auto lg:flex-row gap-10 lg:h-90">
            <Comp1 img={o1} num={"01"} text={t("main3.3")} />
            <Comp1 img={o2} num={"02"} text={t("main3.3")} />
          </div>
        </section>

        <section className="max-w-7xl m-auto p-5">
          <h1 className=" m-auto pt-15 pb-5 text-center font-bold text-4xl lg:text-5xl">
            {t("main3.16")}
          </h1>
          <div className="flex opacity-70 flex-col items-center text-center gap-5 py-10">
            <p>{t("main3.17")}</p>
             <p>{t("main3.18")}</p>
          </div>
          <div className="flex flex-col w-full lg:flex-row gap-10 lg:h-90">
            <Comp1 img={o1} num={"01"} text={t("main3.3")} />
            <Comp1 img={o2} num={"02"} text={t("main3.3")} />
            <Comp1 img={o3} num={"03"} text={t("main3.3")} />
          </div>
          <div className="flex flex-col lg:w-full mt-5 m-auto lg:flex-row gap-10 lg:h-90">
            <Comp1 img={o1} num={"04"} text={t("main3.3")} />
            <Comp1 img={o2} num={"05"} text={t("main3.3")} />
            <Comp1 img={o3} num={"06"} text={t("main3.3")} />
          </div>
        </section>

        <section className="max-w-7xl m-auto p-5">
          <div className="a1 py-10 lg:py-20 flex flex-col items-center lg:justify-between lg:flex-row">
            <aside className="lg:max-w-1/2 flex flex-col items-start gap-5">
              <h1 className="text-white font-bold text-3xl text-center lg:text-start lg:text-5xl">
                {t("main.17")}
              </h1>
              <Button
                className={
                  "hidden lg:flex text-black dark:text-white py-5 px-10 border-2 bg-[#07DBB4]"
                }
              >
                {t("nav.6")}
              </Button>
            </aside>
            <img src={j} className="lg:max-w-1/2" alt="" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Work;

import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../components/ui/button";
import btc from "../../images/btc.png";
import phone2 from "../../images/phone2.png";
import phone3 from "../../images/phone3.png";
import Card1 from "../../components/card1";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import a1 from "../../images/a1.png";
import a2 from "../../images/a2.png";
import a3 from "../../images/a3.png";
import j from "../../images/j.png";
import coin from "../../images/coin.png";
import Card2 from "../../components/card2";
import Card3 from "../../components/card3";

const Bitcoin = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <header>
        <section className="max-w-7xl m-auto p-5">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between">
            <aside className="flex flex-col items-start gap-7 lg:max-w-1/2">
              <h1 className="text-4xl font-bold lg:text-6xl">{t("main7.0")}</h1>
              <p className="text-lg opacity-50">{t("main6.1")}</p>
              <Button className={"bg-[#42E8E0] py-5 px-10"}>
                {t("main.2")}
              </Button>
            </aside>
            <img width={600} src={btc} alt="" />
          </div>
        </section>
      </header>
      <main>
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

export default Bitcoin;

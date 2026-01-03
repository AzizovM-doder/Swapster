import React from "react";
import { useTranslation } from "react-i18next";

const Card4 = ({ svg, num }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex flex-col w-full gap-7 p-5 rounded-2xl border-2 dark:bg-[#00000000] bg-[#330559] border-[#ffffff50]">
      <div className="flex gap-5 items-center">
        {svg}
        <p className="text-white font-bold text-lg">{num}</p>
      </div>
      <hr className="w-full bg-white"/>
      <h2 className="text-sm font-bold text-white opacity-70">{t("main2.3")}</h2>
    </div>
  );
};

export default Card4;

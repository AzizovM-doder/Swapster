import React from "react";
import { useTranslation } from "react-i18next";

const Card2 = ({ svg }) => {
  const { t } = useTranslation();

  return (
    <div className="flex w-full flex-col bg-[#121326] items-start p-10 gap-5 rounded-2xl">
      <div className="flex items-center w-full gap-5">
        {svg}
        <p className="text-xl font-bold text-white">{t("card2.0")}</p>
      </div>
      <hr className="w-full bg-white text-white" />
      <p className="text-white text-sm opacity-60">{t("card2.00")}</p>
  </div>
  );
};

export default Card2;

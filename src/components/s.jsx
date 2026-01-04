import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { changeLanguage } from "i18next";

import { useTranslation } from "react-i18next";

const LanguageSelect = () => {
  const { t, i18n } = useTranslation()
  function changeLang(lang){
    i18n.changeLanguage(lang)
  }
  return (
    <Select onValueChange={(value) => changeLang(value)}>
      <SelectTrigger className="w-20 font-bold">
        <SelectValue placeholder="EN" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="en">EN</SelectItem>
        <SelectItem value="ru">RU</SelectItem>
        <SelectItem value="tj">TJ</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelect;

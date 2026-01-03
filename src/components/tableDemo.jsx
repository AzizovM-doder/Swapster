import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTranslation } from "react-i18next";

function TableDemo() {
  const { t, i18n } = useTranslation();
  const invoices = [
    {
      invoice: "Bitcoin",
      paymentStatus: "0.00008371",
      totalAmount: "0",
      paymentMethod: "0.00006542",
      pros: "0.4%",
      aml: "0.00003456",
    },
    {
      invoice: "Ethereum",
      paymentStatus: "0.00008371",
      totalAmount: "0",
      paymentMethod: "0.00006542",
      pros: "0.4%",
      aml: "0.00003456",
    },
    {
      invoice: "BnB",
      paymentStatus: "0.00008371",
      totalAmount: "0",
      paymentMethod: "0.00006542",
      pros: "0.4%",
      aml: "0.00003456",
    },
    {
      
    invoice: 'TRON',
    paymentStatus: "0.00008371",
    totalAmount: "0",
    paymentMethod: "0.00006542",
    pros : "0.4%",
    aml : "0.00003456"
    },
  ];
  return (
    <Table>
      <TableHeader className={'bg-[#4C2B8E] font-bold text-white h-20'}>
        <TableRow>
          <TableHead className={"w-1/4"}>{t("table.0")}</TableHead>
          <TableHead className={"w-1/4"}>{t("table.1")}</TableHead>
          <TableHead className={"w-1/4"}>{t("table.2")}</TableHead>
          <TableHead className={"w-1/4"}>{t("table.3")}</TableHead>
          <TableHead className={"w-1/4"}>{t("table.4")}</TableHead>
          <TableHead className={"w-1/4"}>{t("table.5")}</TableHead>
          <TableHead className={"w-1/4"}>{t("table.6")}</TableHead>
          <TableHead className={"w-1/4"}>{t("table.7")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className={"h-20 font-bold text-white"}>{invoice.invoice}</TableCell>
            <TableCell className={"h-20"}>{invoice.paymentStatus}</TableCell>
            <TableCell className={"h-20"}>{invoice.paymentMethod}</TableCell>
            <TableCell className={"h-20 text-center"}>{invoice.totalAmount}</TableCell>
            <TableCell className={"h-20 text-center"}>-</TableCell>
            <TableCell className={"h-20 text-center"}>-</TableCell>
            <TableCell className={"h-20 text-center"}>{invoice.pros}</TableCell>
            <TableCell className={"h-20 text-end"}>{invoice.aml}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
export default TableDemo;

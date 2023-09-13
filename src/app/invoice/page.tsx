import Header from "../components/Header";
import Invoices from "../components/Invoices";
import plus from "../assets/carbon_add.svg";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Header />
      <main className="mt-[30px]">
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-[600]">Invoices</h2>
            <p>Invoice</p>
          </div>
          <Link
            className="flex items-center gap-2 bg-primary py-4 px-12 rounded-full text-white text-lg"
            href={""}>
            <Image src={plus} alt="/"></Image>
            Add Invoices
          </Link>
        </div>
        <Invoices></Invoices>
      </main>
    </div>
  );
};

export default page;

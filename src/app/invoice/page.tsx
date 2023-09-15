"use client";
import { useState } from "react";
import Header from "../components/Header";
import Invoices from "../components/Invoices";
import plus from "../assets/carbon_add.svg";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  const [click, setClick] = useState(false);
  const addInvoices = () => {
    setClick(true);
  };
  return (
    <div>
      <Header />
      <main className="mt-[30px]">
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-[600]">Invoices</h2>
            {click ? <p>New Invoice</p> : <>Inovice</>}
          </div>
          <Link
            onClick={addInvoices}
            className={`flex items-center gap-2 bg-primary py-4 px-12 rounded-full text-white text-lg ${
              click && "hidden"
            } `}
            href={""}>
            <Image src={plus} alt="/"></Image>
            Add Invoices
          </Link>
        </div>
        {click && <Invoices></Invoices>}
      </main>
    </div>
  );
};

export default page;

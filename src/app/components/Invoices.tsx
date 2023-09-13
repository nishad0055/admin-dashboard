"use client";
import React, { useState } from "react";
import { BsChevronDown, BsCalendar4, BsUpload } from "react-icons/bs";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import deletebutton from "../assets/deletebutton.png";
import Image from "next/image";

const Invoices = () => {
  const [startDate, setStartDate] = useState(null);
  return (
    <div className="mt-5 ">
      <section className="bg-white p-4 rounded-lg">
        <div className="flex gap-x-4">
          <div className="" id="select-client">
            <label className="block" htmlFor="">
              Select
            </label>
            <div className="relative">
              <select className="block appearance-none w-[560px] bg-white border border-gray-500 text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ">
                <option>Select Client</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 left-[500px] flex items-center  px-2">
                <BsChevronDown size={20} />
              </div>
            </div>
          </div>
          <div id="date">
            <label htmlFor="" className="block">
              Select Date
            </label>
            <div className="relative">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="select date"
                isClearable={true}
                className="block appearance-none w-[300px] bg-white border border-gray-500 text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              <BsCalendar4 className="pointer-events-none absolute inset-y-3 left-[250px] flex items-center" />
            </div>
          </div>
          <div id="upload-images">
            <div className="relative  border-2 border-dotted border-gray-400 w-32 h-32">
              <label
                htmlFor="image-upload"
                className="absolute inset-0 flex justify-center items-center cursor-pointer">
                <span className="text-gray-600 flex items-center gap-3">
                  <BsUpload />
                  <span className="block text-sm text-blue-600">
                    Upload <br />
                    Plan Image
                  </span>
                </span>
              </label>
              <input id="image-upload" type="file" className="hidden" />
            </div>
          </div>
        </div>
        <div className="pt-8" id="select-trip">
          <label className="block" htmlFor="">
            Trip
          </label>
          <div className="relative">
            <select className="block appearance-none w-[254px] bg-white border border-gray-500 text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ">
              <option>Select Client</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 left-[210px] flex items-center  px-2">
              <BsChevronDown size={20} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg p-4 mt-8">
        <div className="flex items-center gap-x-10">
          <div className="">
            <div className="flex items-center gap-x-3">
              <div className="" id="select-trip">
                <label className="block" htmlFor="">
                  Product type:
                </label>
                <div className="relative">
                  <select className="block appearance-none w-[150px] bg-white border border-gray-500 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ">
                    <option>Plan</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 left-[110px] flex items-center  px-2">
                    <BsChevronDown size={20} />
                  </div>
                </div>
              </div>
              <div className="" id="product">
                <label className="block" htmlFor="">
                  Products:
                </label>
                <div className="relative">
                  <select className="block appearance-none w-[240px] bg-white border border-gray-500 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ">
                    <option>Plan</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 left-[200px] flex items-center  px-2">
                    <BsChevronDown size={20} />
                  </div>
                </div>
              </div>
              <div className="" id="description">
                <label className="block" htmlFor="">
                  Description:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="block appearance-none w-[340px] bg-white border border-gray-500 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                    placeholder="Product for trip T2390"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex items-center gap-x-2">
              <div>
                <label className="block" htmlFor="">
                  total
                </label>
                <input
                  type="text"
                  className="block appearance-none  w-[150px] bg-white border border-gray-500 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                  placeholder="1100"
                />
              </div>

              <button>
                {" "}
                <Image src={deletebutton} alt="/" />{" "}
              </button>
            </div>
          </div>
        </div>
        <button className="text-blue-600 text-lg font-semibold py-5">
          + Add product
        </button>
        <hr />
        <div className="subtotal text-end py-7">
          <p className="text-lg font-semibold">
            Subtotal: <span className="pl-3 text-[#84878B]">16,050.500</span>{" "}
          </p>
          <p className="text-lg font-semibold">
            TVA: <span className="pl-3 text-[#84878B]">2800.500</span>{" "}
          </p>
        </div>
        <hr />
        <div className="flex items-center justify-between mt-7">
          <div>
            <button className="bg-primary w-[141px] h-[60px] text-center rounded-full text-white text-lg mr-7">
              Save
            </button>
            <button className="bg-transparent border border-black w-[141px] h-[60px] text-center rounded-full text-black text-lg mr-7">
              Cancel
            </button>
            <button className="bg-primary w-[249px] h-[60px] text-center rounded-full text-white text-lg">
              Download
            </button>
          </div>
          <p className="text-lg font-semibold text-blue-600 text-end">
            Total: <span className="pl-3">19.500</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Invoices;

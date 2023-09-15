"use client";
import React, { useState } from "react";
import { BsChevronDown, BsCalendar4, BsUpload } from "react-icons/bs";
import deletebutton from "../assets/deletebutton.png";
import Image from "next/image";
import Select from "react-select";

const ProductInput = ({ onChange, onRemove }) => {
  const [value, setValue] = useState(null);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <>
      <td>
        <div className=" w-[200px] rounded-lg">
          <Select
            options={options}
            defaultValue={value}
            placeholder="product type"
            isSearchable
            isMulti
            onChange={setValue}
          />
        </div>
      </td>
      <td>
        <div className="w-[200px]  rounded-lg">
          <Select
            options={options}
            defaultValue={value}
            placeholder="products"
            isMulti
            isSearchable
            onChange={setValue}
          />
        </div>
      </td>
      <td>
        <div className="" id="description">
          <div className="relative">
            <input
              type="text"
              className="block appearance-none w-[340px] bg-white border border-gray-500 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
              placeholder="Product for trip T2390"
              onChange={onChange}
            />
          </div>
        </div>
      </td>
      <td>
        <div>
          <input
            type="text"
            className="block appearance-none  w-[150px] bg-white border border-gray-500 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
            placeholder="1100"
            onChange={onChange}
          />
        </div>
      </td>
      <td>
        <button onClick={onRemove}>
          {" "}
          <Image src={deletebutton} alt="/" />{" "}
        </button>
      </td>
    </>
  );
};

export default ProductInput;

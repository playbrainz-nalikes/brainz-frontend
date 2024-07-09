import React, { useState, useRef, useEffect } from "react";
import { ArrowDownLightIcon } from "./Svgs";
import Image from "next/image";

const TokenSelectDropdown = ({ options, onChange, selected, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    selected ? options.find((option) => option.symbol === selected) : options[0]
  );
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (onChange) {
      onChange(option);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative cursor-pointer" ref={dropdownRef}>
      <div
        onClick={toggleDropdown}
        className="flex items-center relative w-full leading-tight focus:outline-none focus:shadow-outline z-[11] "
      >
        <div className=" bg-primary w-full flex items-center font-basement justify-between py-3 lg:py-4 pl-3 lg:pl-5 pr-4 border border-primary-275 rounded-[10px] ">
          <div className="flex items-center gap-3 text-white">
            <span className="mr-2">
              <Image
                src={selectedOption?.imageUrl}
                alt={selectedOption?.name}
                width={20}
                height={20}
                className="object-cover"
              />
            </span>
            <h1 className="text-sm lg:text-base">{selectedOption?.symbol}</h1>
          </div>

          <div className="flex items-center text-white ">
            <div className="ml-2.5">
              <ArrowDownLightIcon className={"text-grey-300"} />
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className={`absolute z-10 w-full -mt-1 rounded bg-dark-100 text-grey-200 overflow-y-auto overflow-x-hidden ${className}`}
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className={` py-2 hover:text-white  ${
                index === options.length - 1
                  ? "border-b-0 "
                  : "border-b-[0.5px] border-grey-200"
              }`}
            >
              <div className="flex items-center pb-2 pt-2.5 justify-between pl-3 lg:pl-6 pr-4">
                <div className="flex gap-3 font-normal font-basement">
                  <span>
                    <Image
                      src={option.imageUrl}
                      alt={option.name}
                      width={20}
                      height={20}
                      className="object-cover"
                    />
                  </span>
                  <p className="text-sm">{option.symbol}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-sm">{option.balance}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TokenSelectDropdown;

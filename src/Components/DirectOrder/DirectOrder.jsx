import React, { useState } from "react";

import style from "./DirectOrder.module.css";
import { injectIntl } from "react-intl";
import Sidebar from "../Sidebar/Sidebar";
import messages from "./../../locales/local";
function DirectOrder(props) {
  const messages = props.intl.messages;
  console.log(messages);

  return (
    <>
      <div className="flex  bg-white ">
        <Sidebar />
        <main className=" md:w-2/3 ">
          <div className="bg-white px-3 border-2 w-5/6 mx-auto shadow-md  rounded">
            <h2 className="text-xl font-bold my-4  px-1 bg-gray-300">
              {messages.activat}
            </h2>
            <div className="my-4  flex justify-between w-full">
              <label className="text-gray-700  md:w-1/3">
                {messages.activat}
              </label>
              <label class="inline-flex items-center cursor-pointer md:w-2/3 ">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-300"></div>
              </label>
            </div>
            {/* Thank You Message */}
            <div className="my-4  flex flex-wrap align-top justify-between w-full">
              <label className=" text-gray-700 mb-2 md:w-1/3">
                {messages.thanksMessage}
              </label>
              <input
                type="text"
                placeholder={messages.placeholderThankMessage}
                className="md:w-2/3 w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 border"
              />
            </div>
            {/* Max Orders per Day */}
            <div className="my-4  flex flex-wrap align-top justify-between w-full">
              <label className=" text-gray-700 mb-2 md:w-1/3">
                {messages.maxOrder}{" "}
              </label>
              <input
                type="number"
                placeholder="1"
                className="md:w-2/3  border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 border"
              />
            </div>
            {/* Allowed Countries */}
            <div className="my-4  flex flex-wrap align-top justify-between w-full">
              <label className="block text-gray-700 mb-2 md:w-1/3">
                {messages.contriesLabel}{" "}
              </label>
              <select className="md:w-2/3 w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 border">
                <option value="all">{messages.option1}</option>
              </select>
            </div>
            <div className="my-4  flex justify-between w-full">
              <label className="w-1/3 text-gray-700">
                {" "}
                {messages.emailLabel}{" "}
              </label>
              <label class="inline-flex items-center cursor-pointer w-2/3">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-300"></div>
              </label>
            </div>
            <div className="my-4  flex justify-between w-full">
              <label className="w-1/3 text-gray-700">
                {messages.showAcknowledgement}
              </label>

              <label class="inline-flex items-center cursor-pointer w-2/3">
                <input type="checkbox" value="" class="sr-only peer" checked />
                <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
              </label>
            </div>
            <div className="my-4  flex flex-wrap justify-between w-full">
              <label className=" text-gray-700 mb-2 md:w-1/3">
                {messages.thems}
              </label>
              <div className="md:w-2/3 w-full">
                <label className="">
                  <input type="radio" name="theme" className="mr-2" />
                  {messages.themsInput1}
                </label>
                <label className=" m-2">
                  <input type="radio" name="theme" className="mr-2" />
                  {messages.themsInput2}
                </label>
                <label className="">
                  <input type="radio" name="theme" className="mr-2" />
                  {messages.themsInput3}
                </label>
              </div>
            </div>
            <div className={`${style.centeredWord}`}>
              {messages.previewTheForm}
            </div>
            <div className="border-2 rounded shadow">
              <div className=" flex justify-between ">
                <div className=" md:w-2/3 m-2 ">
                  <div className="relative">
                    <div
                      className="w-6 h-6 p-1 rounded-full ring-2    bg-teal-600  absolute edite flex justify-center align-middle text-center "
                      alt="Bordered avatar"
                    >
                      <i class="fa-solid fa-pen-to-square text-white text-sm  "></i>
                    </div>

                    <p className="mx-4">{messages.label1}</p>
                  </div>
                  <div className="relative">
                    <div
                      className="w-6 h-6 p-1 rounded-full ring-2   edite  bg-teal-600 absolute  flex justify-center align-middle text-center "
                      alt="Bordered avatar"
                    >
                      <i class="fa-solid fa-pen-to-square text-white text-sm  "></i>
                    </div>
                    <p className="mx-4">{messages.label2}</p>
                  </div>
                </div>
                <div className="md:w-1/3 m-2 ">
                  <div className="relative">
                    <div
                      className="w-6 h-6 p-1 rounded-full ring-2       bg-teal-600  absolute ms-auto flex justify-center align-middle text-center  "
                      alt="Bordered avatar"
                    >
                      <i class="fa-solid fa-pen-to-square text-white text-sm  "></i>
                    </div>
                    <button
                      type="button"
                      class="text-end px-5 py-2.5 text-sm font-medium text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg  dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      {messages.buttons.orderNow}
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="m-2">
                  <input
                    type="text"
                    placeholder={messages.placeholder2}
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 border"
                  />
                </div>
                <div className="my-4   flex flex-wrap align-top justify-evenly w-full">
                  <input
                    type="text"
                    placeholder={messages.placeholder3}
                    className="md:w-1/3 w-full my-2  border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 border"
                  />
                  <input
                    type="text"
                    placeholder={messages.placeholder4}
                    className="md:w-1/3 w-full my-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 border"
                  />
                </div>
                <div className="relative">
                  <div
                    className="w-6 h-6 p-1 rounded-full ring-2    bg-teal-600  absolute right-0 flex justify-center align-middle text-center "
                    alt="Bordered avatar"
                  >
                    <i class="fa-solid fa-pen-to-square text-white text-sm  "></i>
                  </div>
                  <button className="w-full bg-gray-500 text-white py-2 rounded-lg shadow-md hover:bg-gray-600">
                    {messages.buttons.orderProduct}{" "}
                  </button>
                </div>{" "}
              </div>
            </div>
            {/* Preview Section */}
            <div>
              <button className="w-full my-4 bg-green-300 text-white py-2 rounded-lg shadow-md hover:bg-green-400">
                {messages.buttons.save}{" "}
              </button>
            </div>{" "}
          </div>
          {/* Submit Button */}
        </main>
      </div>
    </>
  );
}

export default injectIntl(DirectOrder);

import React, { Fragment, useState } from 'react';
import './App.css';
import { FaCheckCircle, FaPhoneAlt, FaTrashAlt, FaSignal, FaBuilding } from "react-icons/fa";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";


function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div className="h-full md:h-screen bg-gradient-to-r from-cyan-500 to-blue-500 p-10 xl:p-80 grid content-center">
      <div className="flex md:flex-row flex-col  items-center justify-between gap-6 sm:m-10">
        <div className="card md:w-2/4 w-full flex-grow flex flex-col p-5">
          <div>
            <img src="https://source.unsplash.com/UKO44cy2UcE" className="rounded-xl h-28 w-full object-cover" alt="" />
            <div className="flex justify-center relative">
              <img src="https://source.unsplash.com/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA" className="w-28 h-28 object-cover rounded-full border-4 border-white absolute -top-16" alt="" />
            </div>

            <div className="mb-4 flex flex-col justify-center items-center text-center gap-3 space-x-2">
              <h1 className="text-2xl mt-12 font-semibold flex items-center gap-2">Alexander Graham <FaCheckCircle color="#3b82f6" size="20"/> </h1>
              <p className="text-sm leading-5 font-normal">A Programming enthusiast with unwavering dedication. Turning technical challenges into opportunities for growth.</p>
            </div>
          </div>

                
          <div className="mb-8 border-t-[1px] border-dashed border-slate-300 pt-4">
              <span className="font-medium">Profile Card</span>

              <div className="mt-2">
                <label htmlFor="inputName" className="text-sm font-regular text-neutral-500">Name</label>
                <input type="text" id="inputName" value="Alexander Graham" className="block w-full border-b-[1px] py-1 focus:border-gray-500 focus:bg-white focus-visible:outline-0 focus:ring-0" />
              </div>

              <div className="mt-2">
                <label htmlFor="inputName" className="text-sm font-regular text-neutral-500">Email</label>
                <input type="text" id="inputName" value="alexander@mail.com" className="block w-full border-b-[1px] py-1 focus:border-gray-500 focus:bg-white focus-visible:outline-0 focus:ring-0" />
              </div>
          </div>

          <div className="flex justify-center space-x-2">
            <a className="font-semibold text-sm inline-flex items-center justify-center px-8 py-2 border-transparent rounded-md leading-5 shadow-sm transition duration-150 ease-in-out bg-blue-500 focus:outline-none focus-visible:ring-2 hover:bg-blue-600 text-white" href="#0">Edit</a>
          </div>

        </div>

        <div className="flex flex-col gap-6 w-full md:w-2/4"> 
          <div className="card p-0">
            <div className="flex items-center justify-between border-b-[1px] p-5">
              <h1 className="text-xl font-semibold">My Bills</h1>
              <button type="button" 
                className="bg-transparent border border-blue-500 text-blue-500 hover:border-blue-600 hover:text-blue-600 font-medium py-2 px-4 rounded-md"  
                onClick={handleOpen}
              >Edit</button>
            </div>
            <div className="p-5">
              <ul className="list-none pl-0 flex flex-col gap-4">
                <li className="flex items-center justify-between border-b-[1px] border-neutral-200 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-green-500 rounded-full p-2">
                      <FaPhoneAlt color="#fff"/>
                    </div>
                    <span >Phone Bill</span>
                  </div>
                  <button type="button" className="border-[1px] border-red-600 p-2 rounded-md">
                    <FaTrashAlt color="#dc2626" size="20"/>
                  </button>
                </li>
                <li className="flex items-center justify-between border-b-[1px] border-neutral-200 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-yellow-500 rounded-full p-2">
                      <FaSignal color="#fff"/>
                    </div>
                    <span >Internet Bill</span>
                  </div>
                  <button type="button" className="border-[1px] border-red-600 p-2 rounded-md">
                    <FaTrashAlt color="#dc2626" size="20"/>
                  </button>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-500 rounded-full p-2">
                      <FaBuilding color="#fff"/>
                    </div>
                    <span >House Rent</span>
                  </div>
                  <button type="button" className="border-[1px] border-red-600 p-2 rounded-md">
                    <FaTrashAlt color="#dc2626" size="20"/>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="card p-0">
            <div className="flex items-center justify-between border-b-[1px] p-5">
              <h1 className="text-xl font-semibold">My Bills</h1>
              <button type="button" className="bg-transparent border border-blue-500 text-blue-500 hover:border-blue-600 hover:text-blue-600 font-medium py-2 px-4 rounded-md">Edit</button>
            </div>
            <div className="p-5">
              <ul className="list-none pl-0 flex flex-col gap-4">
                <li className="flex items-center justify-between border-b-[1px] border-neutral-200 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-green-500 rounded-full p-2">
                      <FaPhoneAlt color="#fff"/>
                    </div>
                    <span >Phone Bill</span>
                  </div>
                  <button type="button" className="border-[1px] border-red-600 p-2 rounded-md">
                    <FaTrashAlt color="#dc2626" size="20"/>
                  </button>
                </li>
                <li className="flex items-center justify-between border-b-[1px] border-neutral-200 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-yellow-500 rounded-full p-2">
                      <FaSignal color="#fff"/>
                    </div>
                    <span >Internet Bill</span>
                  </div>
                  <button type="button" className="border-[1px] border-red-600 p-2 rounded-md">
                    <FaTrashAlt color="#dc2626" size="20"/>
                  </button>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-500 rounded-full p-2">
                      <FaBuilding color="#fff"/>
                    </div>
                    <span >House Rent</span>
                  </div>
                  <button type="button" className="border-[1px] border-red-600 p-2 rounded-md">
                    <FaTrashAlt color="#dc2626" size="20"/>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Fragment>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>Edit Bills</DialogHeader>
          <DialogBody divider>
            <ul className="list-none pl-0 flex flex-col gap-4">
              <li className="flex items-center justify-between">
                <label htmlFor="checkbox-1" className="w-11/12">
                  <div className="flex items-center gap-2">
                    <div className="bg-green-500 rounded-full p-2">
                      <FaPhoneAlt color="#fff"/>
                    </div>
                    <input type="text" value="Phone Bill" className="block w-full border-b-[1px] py-1 focus:border-gray-500 focus:bg-white focus-visible:outline-0 focus:ring-0" />
                  </div>
                </label>
                <input
                  className="w-1/12 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:outline-0 focus:ring-0 hover:cursor-pointer dark:bg-gray-700 dark:border-gray-600"
                  type="checkbox"
                  value=""
                  id="checkbox-1" 
                />
              </li>
              <li className="flex items-center justify-between">
                <label htmlFor="checkbox-2" className="w-11/12">
                  <div className="flex items-center gap-2">
                    <div className="bg-yellow-500 rounded-full p-2">
                      <FaSignal color="#fff"/>
                    </div>
                    <input type="text" value="Internet Bill" className="block w-full border-b-[1px] py-1 focus:border-gray-500 focus:bg-white focus-visible:outline-0 focus:ring-0" />
                  </div>
                </label>
                <input
                  className="w-1/12 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:outline-0 focus:ring-0 hover:cursor-pointer dark:bg-gray-700 dark:border-gray-600"
                  type="checkbox"
                  value=""
                  id="checkbox-2" 
                />
              </li>
              <li className="flex items-center justify-between">
                <label htmlFor="checkbox-3" className="w-11/12">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-500 rounded-full p-2">
                      <FaBuilding color="#fff"/>
                    </div>
                    <input type="text" value="House Rent" className="block w-full border-b-[1px] py-1 focus:border-gray-500 focus:bg-white focus-visible:outline-0 focus:ring-0" />
                  </div>
                </label>
                <input
                  className="w-1/12 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:outline-0 focus:ring-0 hover:cursor-pointer dark:bg-gray-700 dark:border-gray-600"
                  type="checkbox"
                  value=""
                  id="checkbox-3" 
                />
              </li>
            </ul>
          </DialogBody>
          <DialogFooter className="justify-between">
            <Button
              variant="outlined"
              color="gray"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="blue" onClick={handleOpen}>
              <span>Save Changes</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </Fragment>
    
    </div>
  );
}

export default App;

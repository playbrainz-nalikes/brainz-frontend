import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

const TermsConditionsModal = ({ openModal, closeModal }) => {
  return (
    <Transition show={openModal}>
      <Dialog
        as="div"
        open={openModal}
        className="relative z-50 focus:outline-none"
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="py-6 md:py-10 px-4 md:px-6 w-full md:max-w-xl h-80 md:h-96 text-white transform overflow-hidden rounded-[20px] bg-primary-275 shadow-xl transition-all">
                <div className="font-basement">
                  <h1 className="text-2xl font-bold text-white text-center">
                    Referral Terms
                  </h1>
                  <div className="flex flex-col justify-start mt-16">
                    <p className="flex gap-2 text-sm md:text-base mb-2">
                      <span>-</span>5% Commission on Lifetime Net Revenue
                    </p>
                    <p className="flex gap-2 text-sm md:text-base mb-2">
                      <span>-</span>Payments land on your Brainz account on the
                      first of each month
                    </p>
                    <p className="flex gap-2 text-sm md:text-base mb-2">
                      <span>-</span>Brainz reservers the right to zero
                      commission and close accounts on detection of any sharp
                      practices.
                    </p>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default TermsConditionsModal;

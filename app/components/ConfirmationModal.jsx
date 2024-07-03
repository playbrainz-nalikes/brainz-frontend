import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Button } from "./Button";

const ConfirmationModal = ({ showModal, onConfirm, onCancel, expired }) => {
  if (!showModal) return null;
  function closeModal() {
    // console.log("Modal not close ")
  }
  return (
    <Transition appear show={showModal} as={Fragment}>
      <Dialog as="div" className="relative z-50 " onClose={closeModal}>
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
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[724px] h-96 flex-col flex items-center justify-center text-center text-white transform overflow-hidden rounded-[20px] bg-primary-275  align-middle shadow-xl transition-all py-10">
                <h2 className="mb-10 text-lg font-medium font-basement md:text-2xl">
                  {expired
                    ? "Session not found or expired."
                    : "Are you sure you want to start the game?"}
                </h2>
                <div className="flex justify-center w-full gap-5 ">
                  <div className="">
                    <Button
                      variant={"outlined"}
                      onClick={onCancel}
                      className={"w-full"}
                    >
                      {expired ? "Back to Home" : "Cancel"}
                    </Button>
                  </div>
                  {!expired && (
                    <div className="">
                      <Button
                        variant={"outlined"}
                        onClick={onConfirm}
                        className={"w-full"}
                      >
                        Start
                      </Button>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ConfirmationModal;

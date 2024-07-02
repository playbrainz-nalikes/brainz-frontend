import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useRef } from "react";
import { ModalCrossIcon, WarningIcon } from "./Svgs";
import { Button } from "./Button";
import { Wheel } from "spin-wheel";
import { wheelColors } from "@/lib/config";

const WheelModal = ({
  showModal,
  setShowModal,
  wheelData,
  wheelRef,
  onSpin,
  spinning,
}) => {
  const wheelContainerRef = useRef(null);

  useEffect(() => {
    const items = [];
    const colorUsage = wheelColors.map(() => 0);
    wheelData.forEach((data) => {
      const minUsage = Math.min(...colorUsage);
      const colorIndex = colorUsage.indexOf(minUsage);
      const color = wheelColors[colorIndex];

      items.push({
        ...data,
        backgroundColor: color.backgroundColor,
        labelColor: color.labelColor,
      });
      colorUsage[colorIndex]++;
    });

    const props = {
      items,
      borderWidth: 0,
      lineWidth: 0,
      lineColor: "transparent",
      itemLabelRadius: 0.95,
      overlayImage: "/wheel.png",
      isInteractive: false,
      pointerAngle: 90,
    };
    const wheel = new Wheel(wheelContainerRef.current, props);
    wheelRef.current = wheel;
  }, []);

  return (
    <Transition appear show={showModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50 "
        onClose={() => setShowModal(false)}
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
          <div className="fixed inset-0 bg-primary/20" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[724px] text-center text-white transform overflow-hidden rounded-[20px] bg-primary-275 pb-6 md:pb-[48px] pt-[30px] md:pt-[90px] px-6 md:px-[86px] md:px-[50px] text-left align-middle shadow-xl transition-all">
                <div ref={wheelContainerRef} className="h-[500px]"></div>

                <Button
                  disabled={spinning}
                  variant={"outlined"}
                  size="text-lg"
                  onClick={onSpin}
                >
                  Spin the wheel
                </Button>

                <button
                  className="absolute top-[38px] right-[38px] cursor-pointer hover:text-secondary"
                  onClick={() => setShowModal(false)}
                >
                  <ModalCrossIcon />
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default WheelModal;

import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { ModalCrossIcon  } from "./Svgs";
import Slider from "react-slick";
import { Button } from "./Button";
import { usePrivy, useLogin  } from "@privy-io/react-auth"


const WelcomeModal = ({ showModal, setShowModal  }) => {

  const { ready, authenticated, user } = usePrivy()
  const { login } = useLogin({
    onComplete: () => {
      localStorage.removeItem("token")
    }
  })

  if (user || !showModal ) return null;

  const disableLogin = !ready || (ready && authenticated)
  const handleAuth = () => {
    setShowModal(false)
    login()
  }

  return (
    <Transition appear show={showModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
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
          <div className="bg-black/25 fixed inset-0 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="mx-7 md:mx-0 border border-secondary w-full max-w-[400px] md:max-w-[800px] text-white transform overflow-hidden rounded-[20px] bg-primary-275  shadow-xl transition-all">
              <div className="flex flex-col md:flex-row">
                <ImageSlider />
                <div className="flex flex-col px-5 pb-8 md:pt-5">
                  <p className="hidden md:block">Connect</p>
                  <p className="text-center md:text-start mt-6 text-lg font-semibold">
                    Welcome back! Connecting with your social accounts offers best experience without interruptions on Brainz.
                  </p>

                  <div className="flex items-center justify-center flex-grow mt-6">
                    <Button variant="outlined" disabled={disableLogin} onClick={handleAuth}> Log In or Sign Up
                    </Button>
                  </div>
                </div>
              </div>
              <button
                className="absolute top-5 right-5 cursor-pointer hover:text-secondary"
                onClick={() => setShowModal(false)}
              >
                <ModalCrossIcon width="16" height="16" />
              </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};


const ImageSlider = () => {
const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
  };

  return (
    <div classname="slider-container">
      <Slider className="modal-slider md:w-[400px]" {...settings}>
          <Image src="/images/welcome-image-1.png" alt="image-1" width={400} height={400} />
          <Image src="/images/welcome-image-2.png" alt="image-2" width={400} height={400} />
      </Slider>
    </div>
  )
}

export default WelcomeModal;

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { forwardRef, useImperativeHandle } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import XMarkIcon from "@root/public/svg/close-icon.svg";
import SwiperCore from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const GalleryModal = forwardRef(function GalleryModal(
  { images }: { images: string[] },
  ref
) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();
  const [currentSlide, setCurrentSlide] = useState(0);
  let [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(
    ref,
    () => {
      return {
        closeModal,
        openModal,
      };
    },
    []
  );

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
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
                <Dialog.Panel
                  className="relative flex justify-end items-end w-full max-w-4xl h-[441px] transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all"
                  style={{
                    background: `url(${images[currentSlide]}) center/cover no-repeat`,
                  }}
                >
                  {/* Close Button */}
                  <button
                    className="absolute left-6 top-6 cursor-pointer w-10 h-10 text-white"
                    onClick={closeModal}
                  >
                    <XMarkIcon />
                  </button>
                  {/* =========== */}
                  <Swiper
                    className="mySwiper w-full h-[88px] mb-8"
                    centeredSlides
                    spaceBetween={32}
                    onSlideChange={(swiper) => {
                      setCurrentSlide(swiper.activeIndex);
                    }}
                    slidesPerView={"auto"}
                    onSwiper={setSwiperInstance}
                  >
                    {images.map((image, index) => {
                      return (
                        <SwiperSlide
                          key={index}
                          style={{
                            width:
                              swiperInstance?.activeIndex === index
                                ? "88px"
                                : "72px",
                          }}
                          onClick={() => {
                            swiperInstance?.slideTo(index);
                            setCurrentSlide(index);
                          }}
                        >
                          <div className="w-full h-full flex items-center">
                            <img
                              src={image}
                              style={{
                                border:
                                  swiperInstance?.activeIndex === index
                                    ? "1px solid #fff"
                                    : "none",
                              }}
                              className="w-full aspect-square object-cover rounded"
                            />
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
});

export default GalleryModal;

import SearchInput from "@/common/components/SearchInput";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { forwardRef, useImperativeHandle } from "react";

const SearchModal = forwardRef(function SearchModal(props, ref) {
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
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
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
                <Dialog.Panel className="transform w-full max-w-[600px] overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all pb-12">
                  <div className="relative p-6 bg-neutral-400 mb-10">
                    <Dialog.Title
                      as="h6"
                      className="font-semibold text-center text-neutral-900 "
                    >
                      جستجو
                    </Dialog.Title>
                    <button
                      className="absolute left-0 top-1/2 mx-6 cursor-pointer -translate-y-1/2 w-10 h-10 text-neutral-800"
                      onClick={closeModal}
                    >
                      <svg width="40" height="40" viewBox="0 0 40 40">
                        <use
                          xlinkHref="/svg/close-icon.svg#x-mark"
                          href="/svg/close-icon.svg#x-mark"
                        ></use>
                      </svg>
                    </button>
                  </div>

                  <p className="body-md text-neutral-900 text-center mb-5">
                    لطفا متن خود را تایپ و سپس دکمه Enter را بزنید.
                  </p>
                  <SearchInput />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
});

export default SearchModal;

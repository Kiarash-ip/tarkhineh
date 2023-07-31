import SearchInput from "@/common/components/SearchInput";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import XMarkIcon from "@root/public/svg/close-icon.svg";
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
    [],
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
                <Dialog.Panel className="w-full max-w-[600px] transform overflow-hidden rounded-2xl bg-white  pb-12 text-left align-middle shadow-xl transition-all">
                  <div className="relative mb-10 bg-neutral-400 p-6">
                    <Dialog.Title
                      as="h6"
                      className="text-center font-semibold text-neutral-900 "
                    >
                      جستجو
                    </Dialog.Title>
                    <button
                      className="absolute left-0 top-1/2 mx-6 h-10 w-10 -translate-y-1/2 cursor-pointer text-neutral-800"
                      onClick={closeModal}
                    >
                      <XMarkIcon />
                    </button>
                  </div>

                  <p className="body-md mb-5 text-center text-neutral-900">
                    لطفا متن خود را تایپ و سپس دکمه Enter را بزنید.
                  </p>
                  <SearchInput className="max-w-[409px]" />
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

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { forwardRef, useImperativeHandle } from "react";
import BranchModalCart from "./BranchModalCart";

interface BranchList {
  id: number;
  branch_name: string;
  branch_address: string;
  href: string;
  src: string[];
}

const branchesList: BranchList[] = [
  {
    id: 0,
    branch_name: "شعبه اکباتان",
    branch_address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
    href: "",
    src: [
      "/images/branch-1.jpeg",
      "/images/branch-1.jpeg",
      "/images/branch-1.jpeg",
      "/images/branch-1.jpeg",
      "/images/branch-1.jpeg",
      "/images/branch-1.jpeg",
    ],
  },
  {
    id: 1,
    branch_name: "شعبه چالوس",
    branch_address:
      "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
    href: "",
    src: [
      "/images/branch-1.jpeg",
      "/images/branch-1.jpeg",
      "/images/branch-1.jpeg",
      "/images/branch-1.jpeg",
      "/images/branch-1.jpeg",
      "/images/branch-1.jpeg",
    ],
  },
  {
    id: 2,
    branch_name: "شعبه اقدسیه",
    branch_address: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
    href: "",
    src: [
      "/images/branch-2.jpeg",
      "/images/branch-1.jpeg",
      "/images/branch-2.jpeg",
      "/images/branch-1.jpeg",
      "/images/branch-2.jpeg",
      "/images/branch-1.jpeg",
      "/images/branch-2.jpeg",
      "/images/branch-1.jpeg",
      "/images/branch-2.jpeg",
      "/images/branch-1.jpeg",
      "/images/branch-2.jpeg",
      "/images/branch-1.jpeg",
      "/images/branch-2.jpeg",
    ],
  },
  {
    id: 3,
    branch_name: "شعبه ونک",
    branch_address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
    href: "",
    src: [
      "/images/branch-3.png",
      "/images/branch-3.png",
      "/images/branch-3.png",
      "/images/branch-3.png",
      "/images/branch-3.png",
      "/images/branch-3.png",
      "/images/branch-3.png",
    ],
  },
];

const BranchesModal = forwardRef(function BranchesModal(props, ref) {
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
                <Dialog.Panel className="transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="relative">
                    <Dialog.Title
                      as="h6"
                      className=" text-center font-medium text-neutral-900 mb-12"
                    >
                      انتخاب شعبه
                    </Dialog.Title>
                    <button
                      className="absolute left-0 top-1/2 cursor-pointer -translate-y-1/2 w-10 h-10 text-neutral-800"
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
                    برای دیدن منوی رستوران، لطفا شعبه مدنظر خود را انتخاب کنید:
                  </p>
                  <div className="flex gap-5 items-stretch">
                    {branchesList.map((branch) => {
                      return (
                        <BranchModalCart
                          key={branch.id}
                          src={branch.src}
                          branch_name={branch.branch_name}
                          branch_address={branch.branch_address}
                          href={branch.href}
                        />
                      );
                    })}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
});

export default BranchesModal;

import SearchIcon from "@root/public/svg/search-normal.svg";
import SearchModal from "./SearchModal";
import { useRef } from "react";
import type { ModalRef } from "@/common/types/modal";

export default function Search() {
  const modalRef = useRef<ModalRef>();
  return (
    <>
      <div
        className="flex items-center justify-center p-2 rounded bg-primary-50 cursor-pointer text-primary-400"
        onClick={() => {
          if (modalRef.current?.openModal) {
            modalRef.current?.openModal();
          }
        }}
      >
        <SearchIcon className="lg:w-6 lg:h-6 w-5 h-5" />
      </div>
      <SearchModal ref={modalRef} />
    </>
  );
}

import SearchIcon from "@public/svg/search-normal.svg";
import SearchModal from "./SearchModal";
import { useRef } from "react";
import type { ModalRef } from "@/common/types/modal";

export default function Search() {
  const modalRef = useRef<ModalRef>();
  return (
    <div className="hidden md:inline-block">
      <div
        className="flex cursor-pointer items-center justify-center rounded bg-primary-50 p-2 text-primary-400"
        onClick={() => {
          if (modalRef.current?.openModal) {
            modalRef.current?.openModal();
          }
        }}
      >
        <SearchIcon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
      </div>
      <SearchModal ref={modalRef} />
    </div>
  );
}

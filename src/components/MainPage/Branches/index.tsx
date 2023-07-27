import React, { useEffect, useRef } from "react";
import BranchCart from "./BranchCart";

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
      "/images/branch-3.png",
      "/images/branch-2.jpeg",
      "/images/branch-1.jpeg",
      "/images/branch-3.png",
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

export default function Branches() {
  return (
    <section className="container mx-auto my-12 flex flex-col gap-6 items-center">
      <h4 className="text-neutral-900">ترخینه گردی</h4>
      <div className="grid grid-cols-4 gap-6">
        {branchesList.map((branch) => {
          return (
            <BranchCart
              key={branch.id}
              branch_name={branch.branch_name}
              branch_address={branch.branch_address}
              src={branch.src}
              href={branch.href}
            />
          );
        })}
      </div>
    </section>
  );
}

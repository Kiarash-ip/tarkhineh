import Link from "next/link";
import MessageForm from "./MessageForm";

const footerLinks = [
  {
    id: 0,
    heading: "دسترسی آسان",
    sub_headings: [
      {
        id: 0,
        type: "text",
        heading: "پرسش‌های متداول",
        href: "",
      },
      {
        id: 1,
        type: "text",
        heading: "قوانین ترخینه",
        href: "",
      },
      {
        id: 2,
        type: "text",
        heading: "حریم خصوصی",
        href: "",
      },
      {
        id: 3,
        type: "icons",
        heading: "",
        href: "",
        icons: [
          {
            id: 0,
            src: "",
            href: "",
          },
          {
            id: 1,
            src: "",
            href: "",
          },
          {
            id: 2,
            src: "",
            href: "",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    heading: "شعبه‌های ترخینه",
    sub_headings: [
      {
        id: 0,
        type: "text",
        heading: "شعبه اکباتان",
        href: "",
      },
      {
        id: 1,
        type: "text",
        heading: "شعبه چالوس",
        href: "",
      },
      {
        id: 2,
        type: "text",
        heading: "شعبه اقدسیه",
        href: "",
      },
      {
        id: 3,
        type: "text",
        heading: "شعبه ونک",
        href: "",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-footer-background bg-no-repeat bg-cover bg-center py-8">
      <div className="container mx-auto flex justify-between">
        {footerLinks.map((col) => {
          return (
            <div className="flex flex-col gap-4" key={col.id}>
              <h5 className="text-white">{col.heading}</h5>
              {col.sub_headings.map((link) => {
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="caption-lg transition-colors text-neutral-400 hover:text-primary-400"
                  >
                    {link.heading}
                  </Link>
                );
              })}
            </div>
          );
        })}
        <MessageForm />
      </div>
    </footer>
  );
}

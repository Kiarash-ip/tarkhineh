import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import InfoCircle from "@@/public/svg/info-circle.svg";
import OutlineInput from "@/common/components/OutlineInput";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const MessageForm = () => (
  <div className="w-1/2">
    <h5 className="text-white mb-4">پیام به ترخینه </h5>
    <Formik
      initialValues={{ fullName: "", phoneNumber: "", email: "", message: "" }}
      validationSchema={Yup.object({
        fullName: Yup.string().required("این فیلد الزامی میباشد"),
        email: Yup.string().email("ایمیل نامعتبر میباشد"),
        phoneNumber: Yup.string()
          .matches(phoneRegExp, "شماره تلفن نامعتبر میباشد")
          .required(`${InfoCircle} پرکردن این فیلد الزامی است!`),
        message: Yup.string().required("این فیلد الزامی میباشد"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <div className="grid grid-cols-2 gap-x-6 mb-2">
          <div className="grid gap-y-3">
            <OutlineInput label="نام و نام خانوادگی" name="fullName" />
            <OutlineInput label="شماره تماس" name="phoneNumber" type="tel" />
            <OutlineInput
              label="آدرس ایمیل (اختیاری)"
              name="email"
              type="email"
            />
          </div>
          <div>
            <OutlineInput
              label="پیام شما"
              name="message"
              multiline={true}
              rows={5}
            />
          </div>
        </div>
        <button
          type="submit"
          className="button-sm text-white w-[183px] px-4 py-2 rounded border border-neutral-800 transition-colors hover:border-neutral-200 text-center mr-auto block"
        >
          ارسال پیام
        </button>
      </Form>
    </Formik>
  </div>
);

export default MessageForm;

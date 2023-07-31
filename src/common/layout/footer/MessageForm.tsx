import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import InfoCircle from "@public/svg/info-circle.svg";
import OutlineInput from "@/common/components/OutlineInput";
import OutlineButton from "@/common/components/OutlineButton";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const MessageForm = () => (
  <div className="w-1/2">
    <h5 className="mb-4 text-white">پیام به ترخینه </h5>
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
        <div className="mb-2 grid grid-cols-2 gap-x-3 lg:gap-x-6">
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
        <OutlineButton type="submit" clickHandler={() => {}}>
          ارسال پیام
        </OutlineButton>
      </Form>
    </Formik>
  </div>
);

export default MessageForm;

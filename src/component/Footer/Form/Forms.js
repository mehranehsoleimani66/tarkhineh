import { Button, Input, message } from "antd";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./form.css";
const Forms = () => {
  const [name, setName] = useState("");
  const [num, setNum] = useState();
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  //console.log(name)
  //console.log(email)
  //console.log(text)
  const SendEmailHandler = () => {
    setLoading(true);
    const templateParams = {
      name,
      email,
      text
    };
    emailjs
      .send(
        "service_8vcwirc",
        "template_7itoadq",
        templateParams,
        "gbXcI0OngCdAjqkAA"
      )

      .then(
        function (response) {
          message.success("با موفقیت انجام شد");
          setLoading(false);
          setName("");
          setNum("");
          setEmail("");
          setText("");
        },
        function (err) {
          console.log("مشکلی پیش امد", err);
          setLoading(false);
        }
      );
  };

  return (
    <>
      <div>
        <h4 className="font-bold cursor-pointer ">پیام به ترخینه</h4>
      </div>
      <div className=" flex flex-row-reverse justify-center items-center gap-5">
        <div className="flex flex-col gap-2 pl-2 ">
          <Input
            className="text-right  bg-transparent border rounded-sm inputID"
            type="text"
            placeholder="نام نام خانوادگی"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            className="text-right bg-transparent border rounded-sm inputID"
            type="integer"
            placeholder="شماره تماس"
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />
          <Input
            className="text-right bg-transparent border rounded-sm  inputID"
            type="email"
            placeholder="آدرس ایمیل(اختیاری)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <textarea
          className="text-right leading-10 rounded-sm bg-transparent inputID text-white border"
          type="text"
          placeholder="...پیام شما "
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className=" flex flex-col justify-center items-center gap-1">
        <Button
          className="w-25 text-white"
          loading={loading}
          onClick={SendEmailHandler}
        >
          ارسال پیام
        </Button>
      </div>
    </>
  );
};

export default Forms;

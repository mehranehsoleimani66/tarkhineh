import { Button, InputNumber } from "antd";
import { useEffect } from "react";

const Step1 = ({ phone, setPhone, setStep }) => {
  useEffect(() => {
    console.log(setStep, "setstep1");
  }, [setStep]);
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3">
        <div>
          <img src="/images/logo.png" />
        </div>
        <div className="flex flex-col justify-center items-center gap-5 ">
          <h4 className="text-lg">ورود / پبت نام</h4>
          <h4 className="text-slate-400">
            با وارد کردن شماره موبایل کد تاییدی براتون ارسال خواهد شد.
          </h4>
        </div>
        <div className="relative w-2/3 flex flex-col mt-5">
          <div className="absolute text-sm bottom-6 z-40 right-3 bg-white p-0.5">
            شماره همراه
          </div>
          <InputNumber
            value={phone}
            onChange={setPhone}
            maxLength={10}
            className="w-full"
          />
        </div>
        <div>
          <Button
            onClick={setStep}
            disabled={phone?.toString().length === 10 ? false : true}
          >
            {" "}
            ادامه
          </Button>
        </div>
        <div className="flex flex-row-reverse gap-0.5">
          ورود و عضویت در ترخینه به منزله قبول
          <h2 className="text-[#417F56]">قوانین و مقررات</h2> . است
        </div>
      </div>
    </>
  );
};

export default Step1;

import React, { useContext, useState } from "react";
import { cartContext, userContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal, message } from "antd";

const Profile = () => {
  const myUserContext = useContext(userContext);
  const myCartList = useContext(cartContext);
  const navigate = useNavigate();
  const LogOut = () => {
    myUserContext.setUserHandler({});
    myCartList.buyFoodHandler("");
    message.success("خارج شدید");
    navigate("/");
  };

  return (
    <div className="w-[300px] m-auto mt-20 mb-20 border border-black h-auto">
      <div className="flex flex-row-reverse justify-start items-center p-3">
        <img src="images/Ellipse.png" alt="profile image" />
        <div className="flex flex-col justify-start items-center pr-3">
          <p className="text-lg">
            {" "}
            {myUserContext.user.name}
            <span className="pr-2">{myUserContext.user.family}</span>
          </p>

          <p className="text-sm text-slate-400">{myUserContext.user.phone}</p>
        </div>
      </div>
      <div className="w-[260px] border border-b-2 m-auto"></div>
      <div className="flex flex-col justify-end items-end gap-4 mb-5 mt-5 pr-3">
        {myCartList.cardFood ? (
          <Link to="/Cardlist">
            {" "}
            <div className="flex flex-row-reverse justify-end items-center gap-2">
              <img
                src="images/cart.png"
                className="rounded-full w-5 h-5"
                alt="profile image"
              />
              {myCartList.cardFood.length}سبد خرید
            </div>
          </Link>
        ) : (
          <Link to="/CardPage">
            {" "}
            <div className="flex flex-row-reverse justify-end items-center gap-2">
              <img
                src="images/cart.png"
                className="rounded-full w-5 h-5"
                alt="profile image"
              />
              سبد خرید
            </div>
          </Link>
        )}

        <div className="flex flex-row-reverse justify-end items-center gap-2">
          <img
            src="images/Wallet-2.png"
            className="rounded-full"
            alt="profile image"
          />
          <p>
            <span>سفارشات ({myCartList.cardFood.length})</span>{" "}
          </p>
        </div>
        <div className="flex flex-row-reverse justify-end items-center gap-2">
          <img
            src="images/Wallet-2.png"
            className="rounded-full"
            alt="profile image"
          />
          <a href="/shop"> فروشگاه</a>
        </div>
        <div className="flex flex-row-reverse justify-end items-center gap-2">
          <img
            src="images/Logout.png"
            className="rounded-full"
            alt="profile image"
          />
          <button onClick={LogOut}> خروج</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

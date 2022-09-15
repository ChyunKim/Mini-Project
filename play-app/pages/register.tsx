import { useForm, SubmitHandler } from "react-hook-form";
import React from "react";
import { useRef } from "react";
import { useAppDispatch } from "../src/redux/hooks";
import { login } from "../src/redux/slice/authSlice";
import Router from "next/router";

interface User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  password_confirm: string;
}

const register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<User>();

  const dispatch = useAppDispatch();

  const passwordRef = useRef<string | null>(null);
  passwordRef.current = watch("password");

  const onSubmit: SubmitHandler<User> = (data) => {
    console.log(data);
    dispatch(login(data.firstname));
    Router.push("/my");
  };

  return (
    <div className="bg-gray-800 text-white w-full min-h-screen text-lg p-20">
      <form className="w-2/5 m-auto pt-20" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block text-xs font-bold mb-2">First Name</label>
            <input
              className="block w-full bg-gray-200 border text-black border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-red-500"
              {...register("firstname", { required: true, minLength: 2 })}
              name="firstname"
              type="text"
              placeholder="CH"
            />
            <p className="text-red-500 text-xs italic">
              {errors.firstname && "Please fill out this field"}
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block text-xs font-bold mb-2">Last Name</label>
            <input
              className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
              {...register("lastname", { required: true, minLength: 2 })}
              type="text"
              placeholder="Kim"
            />
            <p className="text-red-500 text-xs italic">
              {errors.lastname && "Please fill out this field"}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block text-xs font-bold mb-2">Email</label>
            <input
              className="block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              type="email"
              placeholder="@play.app"
            />
            <p className="text-red-500 text-xs italic">
              {errors.email && "Please fill out this field"}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block text-xs font-bold mb-2">Password</label>
            <input
              className="block w-full bg-gray-200 border text-black border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
              })}
              type="password"
              placeholder="Up to 20"
            />
            <p className="text-red-500 text-xs italic">
              {errors.password && "Please enter the password length 6-20"}
            </p>
            <input
              className="block w-full bg-gray-200 border text-black border-gray-200 rounded py-3 px-4 mt-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
              {...register("password_confirm", {
                required: true,
                validate: (value) => value === passwordRef.current,
              })}
              type="password"
              placeholder="Please re-enter your password"
            />
            <p className="text-red-500 text-xs italic">
              {errors.password_confirm && "please confirm password"}
            </p>
          </div>
        </div>
        <div className="w-1/5 m-auto">
          <button
            className="py-2 px-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded"
            type="submit"
          >
            Sing Up
          </button>
        </div>
      </form>
    </div>
  );
};
export default register;

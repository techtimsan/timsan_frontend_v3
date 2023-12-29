"use client";

import { CustomInputProps } from "@/types/app";
import { BASE_API_URL } from "@/utils/constants";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export type AddAttendeeProps = {
  email: string;
  membershipType: "TIMSANITE" | "IOTB" | "OTHERS";
};

const AddAttendeeForm = () => {
  const defaultValues: AddAttendeeProps = {
    email: "",
    membershipType: "TIMSANITE",
  };
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useForm<AddAttendeeProps>({
    defaultValues,
  });
  const formFields: CustomInputProps<AddAttendeeProps>[] = [
    {
      name: "email",
      type: "email",
      required: true,
      label: "Email Address",
      register,
    },
    {
      name: "membershipType",
      type: "password",
      required: true,
      label: "Password",
      register,
      iconRight: true,
    },
  ];

  const handleLogin: SubmitHandler<AddAttendeeProps> = async (data, e) => {
    e!.preventDefault();

    try {
      const res = await fetch(`${BASE_API_URL}/api/v1/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          //   password: data.password,
        }),
      });

      const responseData = await res.json();

      if (responseData.success !== true) {
        toast.error(responseData.message);
      } else {
        toast.success(responseData.message);
      }
      console.log("api response", responseData);
    } catch (error) {
      toast.error("Sorry! Something went wrong.");
      console.error("Error:", error);
    }
  };
  return <form action=""></form>;
};

export default AddAttendeeForm;

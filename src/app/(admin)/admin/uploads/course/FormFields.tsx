"use client";

import { CustomInput } from "@/components/custom";
import { CustomInputProps } from "@/types/app";
import { BASE_API_URL } from "@/utils/constants";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@nextui-org/button";
import { CircularProgress } from "@nextui-org/progress";
import toast from "react-hot-toast";

export type AddCourseProps = {
  title: string;
  desc: string;
  thumbnailUrl: string;
  // category: ""
  level: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
};

const FormFields = () => {
  const defaultValues: AddCourseProps = {
    title: "",
    desc: "",
    thumbnailUrl: "",
    level: "BEGINNER",
  };
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useForm<AddCourseProps>({
    defaultValues,
  });
  const formFields: CustomInputProps<AddCourseProps>[] = [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Title",
      register,
    },
    {
      name: "desc",
      type: "text",
      required: true,
      label: "Description",
      register,
    },
  ];

  const handleAddCourse: SubmitHandler<AddCourseProps> = async (data, e) => {
    e!.preventDefault();

    try {
      const res = await fetch(`${BASE_API_URL}/api/v1/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: data.title,
          desc: data.desc,
        }),
      });

      const responseData = await res.json();

      if (responseData.success !== true) {
        toast.error(responseData.message);
      } else {
        toast.success(responseData.message);

        // TODO:
      }
      console.log("api response", responseData);
    } catch (error) {
      toast.error("Sorry! Something went wrong.");
      console.error("Error:", error);
    }
  };

  return (
    <form action="" onSubmit={handleSubmit(handleAddCourse)} className="mt-20 gap-y-5">
      {formFields.map((field) => (
        <CustomInput key={field.name} {...field} customStyle="rounded-none" />
      ))}
      <Button
        size="lg"
        disabled={isSubmitting || !isValid}
        className="bg-white shadow-md px-20 font-semibold disabled:cursor-not-allowed"
        type="submit"
      >
        {isSubmitting ? <CircularProgress color="success" /> : "Login"}
      </Button>
    </form>
  );
};

export default FormFields;

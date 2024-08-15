"use client";

import React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import styles from "./registrationForm.module.scss";
import Select from "react-select/base";
import { SingleValue, Props as SelectProps } from "react-select";

const formSchema = z.object({
  name: z.string().min(1, { message: "*Name is required" }),
  email: z.string().email({ message: "*Invalid email address" }),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, { message: "*Invalid phone number" }),
  gender: z
    .enum(["MALE", "FEMALE", "OTHERS"])
    .nullable()
    .refine((value) => value !== undefined && value !== null, {
      message: "*Please select a gender",
    }),
  interests: z.string().min(1, { message: "*Please select an interest" }),
  events: z.string().min(1, { message: "*Please select an event" }),
  college: z.string().min(1, { message: "*Please select a college" }),
  yearOfStudy: z
    .enum(["1", "2", "3", "4", "5"])
    .nullable()
    .refine((value) => value !== undefined && value !== null, {
      message: "*Please select your year of study",
    }),
  state: z.string().min(1, { message: "*Please select a state" }),
  city: z.string().min(1, { message: "*Please select a city" }),
});

type FormData = z.infer<typeof formSchema>;

const RegistrationForm: React.FC = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  interface Option {
    value: string;
    label: string;
  }
  interface FormValues {
    interests: string | null; // Define the type for your form values
  }

  const interestOptions: Option[] = [
    { value: "", label: "Select Interest" },
    { value: "coding", label: "Coding" },
    { value: "design", label: "Design" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.registrationForm}>
      <div className={styles.formField}>
        <label htmlFor="name" className={styles.formFieldHeader}>
          NAME
        </label>
        <input id="name" {...register("name")} />
        <div className={styles.inputUnderline}>
          <svg
            width="904"
            height="33"
            viewBox="0 0 904 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M888.293 22.3075C895.265 19.5085 892.004 13.6209 889.118 12.2607C885.66 10.6306 875.637 12.2767 875.834 23.5311C877.338 32.6431 895.434 38.06 902.57 19.5421C905.43 11.2526 898.547 0.107649 882.739 1.05681H0"
              stroke="#F5E3AE"
              strokeWidth="1.58383"
            />
            <line
              x1="-7.14315e-08"
              y1="9.18292"
              x2="875"
              y2="9.18284"
              stroke="#F5E3AE"
              strokeWidth="1.63416"
              strokeDasharray="1.63 1.63"
            />
          </svg>
        </div>
        {errors.name && (
          <span className={styles.formErrorMessage}>{errors.name.message}</span>
        )}
      </div>

      <div className={styles.formField}>
        <label htmlFor="email" className={styles.formFieldHeader}>
          EMAIL ID
        </label>
        <input id="email" type="email" {...register("email")} />
        <div className={styles.inputUnderline}>
          <svg
            width="904"
            height="33"
            viewBox="0 0 904 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M888.293 22.3075C895.265 19.5085 892.004 13.6209 889.118 12.2607C885.66 10.6306 875.637 12.2767 875.834 23.5311C877.338 32.6431 895.434 38.06 902.57 19.5421C905.43 11.2526 898.547 0.107649 882.739 1.05681H0"
              stroke="#F5E3AE"
              strokeWidth="1.58383"
            />
            <line
              x1="-7.14315e-08"
              y1="9.18292"
              x2="875"
              y2="9.18284"
              stroke="#F5E3AE"
              strokeWidth="1.63416"
              strokeDasharray="1.63 1.63"
            />
          </svg>
        </div>
        {errors.email && (
          <span className={styles.formErrorMessage}>
            {errors.email.message}
          </span>
        )}
      </div>

      <div className={styles.formField}>
        <label htmlFor="phoneNumber" className={styles.formFieldHeader}>
          PHONE NUMBER
        </label>
        <input id="phoneNumber" type="tel" {...register("phoneNumber")} />
        <div className={styles.inputUnderline}>
          <svg
            width="904"
            height="33"
            viewBox="0 0 904 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M888.293 22.3075C895.265 19.5085 892.004 13.6209 889.118 12.2607C885.66 10.6306 875.637 12.2767 875.834 23.5311C877.338 32.6431 895.434 38.06 902.57 19.5421C905.43 11.2526 898.547 0.107649 882.739 1.05681H0"
              stroke="#F5E3AE"
              strokeWidth="1.58383"
            />
            <line
              x1="-7.14315e-08"
              y1="9.18292"
              x2="875"
              y2="9.18284"
              stroke="#F5E3AE"
              strokeWidth="1.63416"
              strokeDasharray="1.63 1.63"
            />
          </svg>
        </div>
        {errors.phoneNumber && (
          <span className={styles.formErrorMessage}>
            {errors.phoneNumber.message}
          </span>
        )}
      </div>

      <div className={`${styles.formField} ${styles.radioInput}`}>
        <label className={styles.formFieldHeader}>GENDER</label>
        <div className={styles.radioContainer}>
          <div className={styles.radioButtonContainer}>
            <label htmlFor="male" className={styles.radioLabel}>
              <input
                type="radio"
                id="male"
                value="MALE"
                {...register("gender")}
                className={styles.radioInput}
              />
              <span className={styles.radioCustom}></span>
              Male
            </label>
          </div>

          <div className={styles.radioButtonContainer}>
            <label htmlFor="female" className={styles.radioLabel}>
              <input
                type="radio"
                id="female"
                value="FEMALE"
                {...register("gender")}
                className={styles.radioInput}
              />
              <span className={styles.radioCustom}></span>
              Female
            </label>
          </div>

          <div className={styles.radioButtonContainer}>
            <label htmlFor="others" className={styles.radioLabel}>
              <input
                type="radio"
                id="others"
                value="OTHERS"
                {...register("gender")}
                className={styles.radioInput}
              />
              <span className={styles.radioCustom}></span>
              Others
            </label>
          </div>
        </div>
        {errors.gender && (
          <span className={styles.formErrorMessage}>
            {errors.gender.message}
          </span>
        )}
      </div>

      <div className={styles.formField}>
        <label htmlFor="interests" className={styles.formFieldHeader}>
          INTERESTS
        </label>

        {/* <Controller
          name="interests"
          control={control}
          rules={{ required: "Interest is required" }}
          render={({ field }) => (
            <>
              <Select
                inputValue={""}
                onInputChange={undefined}
                onMenuOpen={function (): void {
                  throw new Error("Function not implemented.");
                }}
                onMenuClose={function (): void {
                  throw new Error("Function not implemented.");
                }}
                {...field}
                options={interestOptions}
                placeholder="Select Interest"
              />
              {errors.interests && (
                <span style={{ color: "red" }}>{errors.interests.message}</span>
              )}
            </>
          )}
        /> */}

        {/* <Controller
          name="interests"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={interestOptions}
              placeholder="Select Interest"
              value={
                interestOptions.find(
                  (option) => option.value === field.value
                ) || null
              }
              onChange={(selectedOption: SingleValue<Option>) =>
                field.onChange(selectedOption ? selectedOption.value : null)
              }
              onBlur={field.onBlur}
              // No need to include these props if not used:
              // inputValue, onInputChange, onMenuOpen, onMenuClose
            />
          )}
        /> */}

        <select {...register("interests")}>
          <option value="">Select Interest</option>
          <option value="coding">Coding</option>
          <option value="design">Design</option>
        </select>
        <div className={styles.inputUnderline}>
          <svg
            width="904"
            height="33"
            viewBox="0 0 904 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M888.293 22.3075C895.265 19.5085 892.004 13.6209 889.118 12.2607C885.66 10.6306 875.637 12.2767 875.834 23.5311C877.338 32.6431 895.434 38.06 902.57 19.5421C905.43 11.2526 898.547 0.107649 882.739 1.05681H0"
              stroke="#F5E3AE"
              strokeWidth="1.58383"
            />
            <line
              x1="-7.14315e-08"
              y1="9.18292"
              x2="875"
              y2="9.18284"
              stroke="#F5E3AE"
              strokeWidth="1.63416"
              strokeDasharray="1.63 1.63"
            />
          </svg>
        </div>
        {errors.interests && (
          <span className={styles.formErrorMessage}>
            {errors.interests.message}
          </span>
        )}
      </div>

      <div className={styles.formField}>
        <label htmlFor="events" className={styles.formFieldHeader}>
          EVENTS
        </label>
        <select id="events" {...register("events")}>
          <option value="">Select Event</option>
          <option value="hackathon">Hackathon</option>
          <option value="workshop">Workshop</option>
        </select>
        <div className={styles.inputUnderline}>
          <svg
            width="904"
            height="33"
            viewBox="0 0 904 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M888.293 22.3075C895.265 19.5085 892.004 13.6209 889.118 12.2607C885.66 10.6306 875.637 12.2767 875.834 23.5311C877.338 32.6431 895.434 38.06 902.57 19.5421C905.43 11.2526 898.547 0.107649 882.739 1.05681H0"
              stroke="#F5E3AE"
              strokeWidth="1.58383"
            />
            <line
              x1="-7.14315e-08"
              y1="9.18292"
              x2="875"
              y2="9.18284"
              stroke="#F5E3AE"
              strokeWidth="1.63416"
              strokeDasharray="1.63 1.63"
            />
          </svg>
        </div>
        {errors.events && (
          <span className={styles.formErrorMessage}>
            {errors.events.message}
          </span>
        )}
      </div>

      <div className={styles.formField}>
        <label htmlFor="college" className={styles.formFieldHeader}>
          COLLEGE
        </label>
        <select id="college" {...register("college")}>
          <option value="">Select College</option>
          <option value="RAJASTHAN">Rajasthan</option>
        </select>
        <div className={styles.inputUnderline}>
          <svg
            width="904"
            height="33"
            viewBox="0 0 904 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M888.293 22.3075C895.265 19.5085 892.004 13.6209 889.118 12.2607C885.66 10.6306 875.637 12.2767 875.834 23.5311C877.338 32.6431 895.434 38.06 902.57 19.5421C905.43 11.2526 898.547 0.107649 882.739 1.05681H0"
              stroke="#F5E3AE"
              strokeWidth="1.58383"
            />
            <line
              x1="-7.14315e-08"
              y1="9.18292"
              x2="875"
              y2="9.18284"
              stroke="#F5E3AE"
              strokeWidth="1.63416"
              strokeDasharray="1.63 1.63"
            />
          </svg>
        </div>
        {errors.college && (
          <span className={styles.formErrorMessage}>
            {errors.college.message}
          </span>
        )}
      </div>

      <div className={`${styles.formField} ${styles.radioInput}`}>
        <label className={styles.formFieldHeader}>YEAR OF STUDY</label>
        <div className={styles.radioContainer}>
          {[1, 2, 3, 4, 5].map((year) => (
            <div key={year} className={styles.radioButtonContainer}>
              <label htmlFor={`year${year}`} className={styles.radioLabel}>
                <input
                  type="radio"
                  id={`year${year}`}
                  value={year.toString()}
                  {...register("yearOfStudy")}
                  className={styles.radioInput}
                />
                <span className={styles.radioCustom}></span>
                {year}
              </label>
            </div>
          ))}
        </div>
        {errors.yearOfStudy && (
          <span className={styles.formErrorMessage}>
            {errors.yearOfStudy.message}
          </span>
        )}
      </div>

      <div className={styles.formField}>
        <label htmlFor="state" className={styles.formFieldHeader}>
          STATE
        </label>
        <select id="state" {...register("state")}>
          <option value="">Select State</option>
          <option value="RAJASTHAN">Rajasthan</option>
        </select>
        <div className={styles.inputUnderline}>
          <svg
            width="904"
            height="33"
            viewBox="0 0 904 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M888.293 22.3075C895.265 19.5085 892.004 13.6209 889.118 12.2607C885.66 10.6306 875.637 12.2767 875.834 23.5311C877.338 32.6431 895.434 38.06 902.57 19.5421C905.43 11.2526 898.547 0.107649 882.739 1.05681H0"
              stroke="#F5E3AE"
              strokeWidth="1.58383"
            />
            <line
              x1="-7.14315e-08"
              y1="9.18292"
              x2="875"
              y2="9.18284"
              stroke="#F5E3AE"
              strokeWidth="1.63416"
              strokeDasharray="1.63 1.63"
            />
          </svg>
        </div>
        {errors.state && (
          <span className={styles.formErrorMessage}>
            {errors.state.message}
          </span>
        )}
      </div>

      <div className={styles.formField}>
        <label htmlFor="city" className={styles.formFieldHeader}>
          CITY
        </label>
        <select id="city" {...register("city")}>
          <option value="">Select City</option>
          <option value="PILANI">Pilani</option>
        </select>
        <div className={styles.inputUnderline}>
          <svg
            width="904"
            height="33"
            viewBox="0 0 904 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M888.293 22.3075C895.265 19.5085 892.004 13.6209 889.118 12.2607C885.66 10.6306 875.637 12.2767 875.834 23.5311C877.338 32.6431 895.434 38.06 902.57 19.5421C905.43 11.2526 898.547 0.107649 882.739 1.05681H0"
              stroke="#F5E3AE"
              strokeWidth="1.58383"
            />
            <line
              x1="-7.14315e-08"
              y1="9.18292"
              x2="875"
              y2="9.18284"
              stroke="#F5E3AE"
              strokeWidth="1.63416"
              strokeDasharray="1.63 1.63"
            />
          </svg>
        </div>
        {errors.city && (
          <span className={styles.formErrorMessage}>{errors.city.message}</span>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;

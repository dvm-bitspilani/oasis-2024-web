"use client";

import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import gsap from "gsap";
import { Select, Space } from "antd";
import type { SelectProps } from "antd";

import styles from "./registrationForm.module.scss";

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
  interests: z
    .array(z.string())
    .nonempty({ message: "*Please select an interest" }),
  events: z.array(z.string().min(1, { message: "*Please select an event" })),
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
    setValue,
    watch,
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
    { value: "coding", label: "Coding" },
    { value: "design", label: "Design" },
  ];
  const eventOptions: Option[] = [
    { value: "hackathon", label: "Hackathon" },
    { value: "workshop", label: "Workshop" },
  ];

  const collegeOptions: Option[] = [{ value: "BITS", label: "BITS" }];

  const stateOptions: Option[] = [{ value: "rajasthan", label: "Rajasthan" }];

  const cityOptions: Option[] = [{ value: "pilani", label: "Pilani" }];

  useEffect(() => {
    const bulbs = document.querySelectorAll(".bulb");

    for (let i = 0; i < bulbs.length; i += 2) {
      const tl = gsap.timeline({ repeat: -1.5, yoyo: true });
      tl.to(bulbs[i], { duration: 0.75, opacity: 0.5 });
      tl.to(bulbs[i], { duration: 0.75, opacity: 1 });
    }
    for (let i = 1; i < bulbs.length; i += 2) {
      const tl = gsap.timeline({ repeat: -1.5, yoyo: true });
      tl.to(bulbs[i], { duration: 0.75, opacity: 1 });
      tl.to(bulbs[i], { duration: 0.75, opacity: 0.5 });
    }
  }, []);

  const numberValue = watch("phoneNumber");

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
      return false;
    }
    return true;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 10) {
      setValue("phoneNumber", value);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.registrationForm}
        autoComplete="off"
      >
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
            <span className={styles.formErrorMessage}>
              {errors.name.message}
            </span>
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
          <input
            id="phoneNumber"
            inputMode="numeric"
            type="tel"
            onKeyPress={handleKeyPress}
            value={numberValue || ""}
            {...register("phoneNumber", {
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value;
                if (value.length <= 10) {
                  setValue("phoneNumber", value);
                } else {
                  e.target.value = value.slice(0, 10);
                }
              },
            })}
          />
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
            <span className={`${styles.formErrorMessage} ${styles.radioError}`}>
              {errors.gender.message}
            </span>
          )}
        </div>

        <div className={styles.formField}>
          <label htmlFor="interests" className={styles.formFieldHeader}>
            INTERESTS
          </label>
          <Controller
            name="interests"
            control={control}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Select
                mode="multiple"
                allowClear
                style={{
                  width: "100%",
                }}
                placeholder="Select Interests"
                dropdownStyle={{
                  backgroundImage:
                    "linear-gradient(180deg, #1B112A 0%, #160B27 49.5%, #1B102A 100%)",
                  color: "#F5E3AE",
                }}
                options={interestOptions}
                value={value}
                onChange={(newValue) => onChange(newValue)}
                onBlur={onBlur}
                ref={ref}
              />
            )}
          />
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
            <span
              className={`${styles.formErrorMessage} ${styles.dropDownError}}`}
            >
              {errors.interests.message}
            </span>
          )}
        </div>

        <div className={styles.formField}>
          <label htmlFor="events" className={styles.formFieldHeader}>
            EVENTS
          </label>
          <Controller
            name="events"
            control={control}
            render={({ field }) => (
              <Select
                mode="multiple"
                {...field}
                style={{
                  width: "100%",
                }}
                placeholder="Select Event"
                dropdownStyle={{
                  backgroundImage:
                    "linear-gradient(180deg, #1B112A 0%, #160B27 49.5%, #1B102A 100%)",
                  color: "#F5E3AE",
                }}
                options={eventOptions}
              />
            )}
          />
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
            <span
              className={`${styles.formErrorMessage} ${styles.dropDownError}}`}
            >
              {errors.events.message}
            </span>
          )}
        </div>

        <div className={styles.formField}>
          <label htmlFor="college" className={styles.formFieldHeader}>
            COLLEGE
          </label>
          <Controller
            name="college"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                style={{
                  width: "100%",
                }}
                placeholder="Select College"
                dropdownStyle={{
                  backgroundImage:
                    "linear-gradient(180deg, #1B112A 0%, #160B27 49.5%, #1B102A 100%)",
                  color: "#F5E3AE",
                }}
                options={collegeOptions}
              />
            )}
          />
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
            <span
              className={`${styles.formErrorMessage} ${styles.dropDownError}}`}
            >
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
            <span className={`${styles.formErrorMessage} ${styles.radioError}`}>
              {errors.yearOfStudy.message}
            </span>
          )}
        </div>

        <div className={styles.formField}>
          <label htmlFor="state" className={styles.formFieldHeader}>
            STATE
          </label>
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                style={{
                  width: "100%",
                }}
                placeholder="Select State"
                dropdownStyle={{
                  backgroundImage:
                    "linear-gradient(180deg, #1B112A 0%, #160B27 49.5%, #1B102A 100%)",
                  color: "#F5E3AE",
                }}
                options={stateOptions}
              />
            )}
          />
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
            <span
              className={`${styles.formErrorMessage} ${styles.dropDownError}}`}
            >
              {errors.state.message}
            </span>
          )}
        </div>

        <div className={styles.formField}>
          <label htmlFor="city" className={styles.formFieldHeader}>
            CITY
          </label>
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                style={{
                  width: "100%",
                }}
                placeholder="Select City"
                dropdownStyle={{
                  backgroundImage:
                    "linear-gradient(180deg, #1B112A 0%, #160B27 49.5%, #1B102A 100%)",
                  color: "#F5E3AE",
                }}
                options={cityOptions}
              />
            )}
          />
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
            <span
              className={`${styles.formErrorMessage} ${styles.dropDownError}}`}
            >
              {errors.city.message}
            </span>
          )}
        </div>
      </form>
      <button
        onClick={handleSubmit(onSubmit)}
        className={styles.btnwrapper}
        type="submit"
      >
        <div className={styles.btnborder}>
          <div className={`${styles.circlewrapper} ${styles.top}`}>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
          </div>
          <div className={`${styles.circlewrapper} ${styles.bottom}`}>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
          </div>
          <div className={`${styles.circlewrapper} ${styles.curve}`}>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
          </div>
          <div
            className={`${styles.circlewrapper} ${styles.curve} ${styles.left}`}
          >
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
          </div>
          <div className={styles.register}>Register</div>
        </div>
      </button>
    </>
  );
};

export default RegistrationForm;

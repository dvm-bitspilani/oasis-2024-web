"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import styles from "./registrationForm.module.scss";

const formSchema = z.object({
  name: z.string().min(1, { message: "*Name is required" }),
  email: z.string().email({ message: "*Invalid email address" }),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, { message: "*Invalid phone number" }),
  // gender: z.enum(["MALE", "FEMALE", "OTHERS"]),
  gender: z
    .enum(["MALE", "FEMALE"])
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.registrationForm}>
      <div className={styles.formField}>
        <label htmlFor="name" className={styles.formFieldHeader}>
          NAME
        </label>
        <input id="name" {...register("name")} />
        {errors.name && (
          <span className={styles.formErrorMessage}>{errors.name.message}</span>
        )}
      </div>

      <div className={styles.formField}>
        <label htmlFor="email" className={styles.formFieldHeader}>
          EMAIL ID
        </label>
        <input id="email" type="email" {...register("email")} />
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
        {errors.phoneNumber && (
          <span className={styles.formErrorMessage}>
            {errors.phoneNumber.message}
          </span>
        )}
      </div>

      <div className={styles.formField}>
        <label className={styles.formFieldHeader}>GENDER</label>
        <div>
          <input type="radio" id="male" value="MALE" {...register("gender")} />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="female"
            value="FEMALE"
            {...register("gender")}
          />
          <label htmlFor="female">Female</label>
          {/* <input
            type="radio"
            id="others"
            value="OTHERS"
            {...register("gender")}
          />
          <label htmlFor="others">Others</label> */}
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
        <select id="interests" {...register("interests")}>
          <option value="">Select Interest</option>
          <option value="coding">Coding</option>
          <option value="design">Design</option>
        </select>
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
        {errors.college && (
          <span className={styles.formErrorMessage}>
            {errors.college.message}
          </span>
        )}
      </div>

      <div className={styles.formField}>
        <label className={styles.formFieldHeader}>YEAR OF STUDY</label>
        <div>
          {[1, 2, 3, 4, 5].map((year) => (
            <React.Fragment key={year}>
              <input
                type="radio"
                id={`year${year}`}
                value={year.toString()}
                {...register("yearOfStudy")}
              />
              <label htmlFor={`year${year}`}>{year}</label>
            </React.Fragment>
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
        {errors.city && (
          <span className={styles.formErrorMessage}>{errors.city.message}</span>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;

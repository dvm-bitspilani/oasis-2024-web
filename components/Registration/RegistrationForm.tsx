'use client'

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z.string().regex(/^\d{10}$/, { message: "Invalid phone number" }),
  gender: z.enum(["MALE", "FEMALE", "OTHERS"]),
  interests: z.string().min(1, { message: "Please select an interest" }),
  events: z.string().min(1, { message: "Please select an event" }),
  college: z.string().min(1, { message: "Please select a college" }),
  yearOfStudy: z.enum(["1", "2", "3", "4", "5"]),
  state: z.string().min(1, { message: "Please select a state" }),
  city: z.string().min(1, { message: "Please select a city" }),
});

type FormData = z.infer<typeof formSchema>;

const RegistrationForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <label htmlFor="email">Email ID</label>
        <input id="email" type="email" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input id="phoneNumber" type="tel" {...register("phoneNumber")} />
        {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
      </div>

      <div>
        <label>Gender</label>
        <div>
          <input type="radio" id="male" value="MALE" {...register("gender")} />
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" value="FEMALE" {...register("gender")} />
          <label htmlFor="female">Female</label>
          <input type="radio" id="others" value="OTHERS" {...register("gender")} />
          <label htmlFor="others">Others</label>
        </div>
        {errors.gender && <span>{errors.gender.message}</span>}
      </div>

      <div>
        <label htmlFor="interests">Interests</label>
        <select id="interests" {...register("interests")}>
          <option value="">Select Interest</option>
          <option value="coding">Coding</option>
          <option value="design">Design</option>
        </select>
        {errors.interests && <span>{errors.interests.message}</span>}
      </div>

      <div>
        <label htmlFor="events">Events</label>
        <select id="events" {...register("events")}>
          <option value="">Select Event</option>
          <option value="hackathon">Hackathon</option>
          <option value="workshop">Workshop</option>
        </select>
        {errors.events && <span>{errors.events.message}</span>}
      </div>

      <div>
        <label htmlFor="college">College</label>
        <select id="college" {...register("college")}>
          <option value="">Select College</option>
          <option value="RAJASTHAN">Rajasthan</option>
        </select>
        {errors.college && <span>{errors.college.message}</span>}
      </div>

      <div>
        <label>Year of Study</label>
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
        {errors.yearOfStudy && <span>{errors.yearOfStudy.message}</span>}
      </div>

      <div>
        <label htmlFor="state">State</label>
        <select id="state" {...register("state")}>
          <option value="">Select State</option>
          <option value="RAJASTHAN">Rajasthan</option>
        </select>
        {errors.state && <span>{errors.state.message}</span>}
      </div>

      <div>
        <label htmlFor="city">City</label>
        <select id="city" {...register("city")}>
          <option value="">Select City</option>
          <option value="PILANI">Pilani</option>
        </select>
        {errors.city && <span>{errors.city.message}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
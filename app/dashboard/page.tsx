"use client";

import { useEffect, useState } from "react";
import styles from "./dashboard.module.scss";
import { useCookies } from "react-cookie";

export default function DashboardPage() {
  const [cookies, setCookies, removeCookie] = useCookies(["user-auth"]);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    console.log(cookies["user-auth"]);
    setEmail(cookies["user-auth"].email);
  }, []);
  return (
    <>
      <h1 style={{ color: "white" }}>{email}</h1>
    </>
  );
}

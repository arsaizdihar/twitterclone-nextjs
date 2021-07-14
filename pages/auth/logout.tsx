import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetUser } from "../../src/redux/slices/userSlice";

const Logout: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.clear();
    dispatch(resetUser);
    router.push("/auth/login");
  }, [router, dispatch]);
  return <div></div>;
};

export default Logout;

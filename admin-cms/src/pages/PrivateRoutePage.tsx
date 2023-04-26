import React from "react";
import { useAppSelector } from "../features/hooks";
interface IPrivate {
  children: React.ReactNode;
}

const PrivateRoutePage = (props: IPrivate) => {
  const user = useAppSelector((state) => state.auth.user);

  if (!user) {
    <div> This page needs athentication</div>;
  }
  return <div>{props.children}</div>;
};

export default PrivateRoutePage;

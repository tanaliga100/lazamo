import React from "react";
interface IPrivate {
  children: React.ReactNode;
}

const PrivateRoutePage = (props: IPrivate) => {
  return <div>{props.children}</div>;
};

export default PrivateRoutePage;

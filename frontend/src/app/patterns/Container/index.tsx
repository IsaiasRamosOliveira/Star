import React from "react";

interface IContainer {
  children: React.ReactNode;
}

const Container = ({ children }: IContainer) => {
  return <main>{children}</main>;
};

export default Container;

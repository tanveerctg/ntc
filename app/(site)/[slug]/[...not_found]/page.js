import React from "react";
import { notFound } from "next/navigation";

const page = () => {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Not Found
    </div>
  );
};

export default page;

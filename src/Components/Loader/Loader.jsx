import React from "react";
import { useLoading } from "../hooks/useLoading";

function Loader() {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
}

export default Loader;

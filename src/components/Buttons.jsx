import React from "react";
import { Link } from "react-router-dom";

export function SolidButton({ text, link, onClick }) {
  return (
    <button
      className="m-2 bg-teal-500 text-white px-5 py-2 rounded-md font-bold"
      onClick={onClick}
    >
      <Link to={link}>{text}</Link>
    </button>
  );
}

export function OutlineButton({ text, link, onClick }) {
  return (
    <button
      className="m-2 outline-teal-500 text-teal-500 outline outline-2 px-5 py-2 rounded-md font-bold"
      onClick={onClick}
    >
      <Link to={link}>{text}</Link>
    </button>
  );
}

import React from "react";

export function Button({
  className,
  variant,
  children,
  onClick,
  type,
  id,
  isDisabled,
}) {
  const addClassName = className ? `${className}` : "";

  const variants = {
    solid: "bg-teal-500 text-white",
    outline: "border-teal-500 text-teal-500 border",
    warning: " bg-amber-500 text-white",
    danger: "bg-red-500 text-white",
  };

  const pickedVariant = variants[variant];

  return (
    <button
      id={id}
      className={`px-5 py-2 rounded-md font-bold ${pickedVariant} ${addClassName}`}
      onClick={onClick}
      type={type}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

export function miniButton({
  className,
  variant,
  children,
  onClick,
  id,
  type,
}) {
  const addClassName = className ? `${className}` : "";
  const variants = {
    approve: "bg-emerald-600 ",
    reject: "bg-red-600",
    pending: "bg-yellow-400",
  };
  const pickedVariant = variants[variant];

  return (
    <button
      id={id}
      className={`w-28 px-6 py-1 rounded-full mr-20 text-white bg-slate-700 ${pickedVariant} ${addClassName}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

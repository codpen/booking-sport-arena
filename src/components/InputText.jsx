import React from "react";

export function InputText(props) {
  const { type, placeholder, onChange, value, className, id } = props;

  const addClassName = className ? `${className}` : "";
  return (
		<input
			id={id}
			className={`bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500 ${addClassName}`}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
  );
}

// export function InputText({ type, placeholder, onChange }) {
//   return (
//     <input
//       className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
//       type={type}
//       placeholder={placeholder}
//       // value={value}
//       onChange={onChange}
//     />
//   );
// }

// export function InputText(props) {
//   return (
//     <input
//       className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
//       type={props.type}
//       placeholder={props.placeholder}
//       // value={props.value}
//       onChange={props.onChange}
//     />
//   );
// }

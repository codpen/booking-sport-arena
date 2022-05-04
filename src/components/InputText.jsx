import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export function InputText(props) {
	const { type, placeholder, onChange, value, className, id } = props;

	const addClassName = className ? `${className}` : "";
	return (
		<input
			className={`bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500 ${addClassName}`}
			id={id}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
}

export function TextArea(props) {
	const { placeholder, onChange, value, className, id } = props;
	const addClassName = className ? `${className}` : "";
	return (
		<textarea
			className={`border-2 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-teal-500 ${addClassName}`}
			type="text"
			id={id}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			cols="30"
			rows="5"
		/>
	);
}

export function InputFile(props) {
	const { accept, onChange, value, className, id } = props;
	const addClassName = className ? `${className}` : "";
	return (
		<input
			type="file"
			accept={accept}
			className={`bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-teal-500 leading-tight focus:outline-none focus:bg-white focus:border-teal-500 justify-center file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-teal-500 hover:file:bg-violet-100 ${addClassName}`}
			id={id}
			value={value}
			onChange={onChange}
		/>
	);
}

export function RadioCategory() {
	const [value, setValue] = React.useState("");
	const handleChange = (event) => {
		setValue(event.target.value);
	};
	return (
		<FormControl>
			<RadioGroup
				aria-label="category"
				name="category"
				row
				className="justify-evenly gap-4 lg:gap-20"
				value={value}
				onChange={handleChange}>
				<FormControlLabel
					value="Soccer"
					control={<Radio color="success" />}
					label="Soccer"
				/>
				<FormControlLabel
					value="Basketball"
					control={<Radio color="success" />}
					label="Basketball"
				/>
				<FormControlLabel
					value="Tennis"
					control={<Radio color="success" />}
					label="Tennis"
				/>
				<FormControlLabel
					value="Volleyball"
					control={<Radio color="success" />}
					label="Volleyball"
				/>
			</RadioGroup>
		</FormControl>
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

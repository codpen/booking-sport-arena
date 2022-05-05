import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import { FormGroup } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";

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
			className={`bg-white appearance-none border-gray-200 rounded w-full py-2 px-4 text-teal-500 leading-tight focus:outline-none focus:bg-white focus:border-teal-500 justify-center file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-teal-500 hover:file:bg-violet-100 ${addClassName}`}
			id={id}
			value={value}
			onChange={onChange}
		/>
	);
}

export function RadioCategory({ value, setValue }) {
	const handleChange = (event) => {
		setValue(event.target.value);
	};
	return (
		<RadioGroup
			sx={{
				justifyContent: {
					lg: "space-between",
					md: "space-between",
					sm: "left",
					xs: "left",
				},
				flexDirection: {
					lg: "row",
					md: "row",
					sm: "column",
					xs: "column",
				},
			}}
			aria-label="category"
			name="category"
			value={value}
			onChange={handleChange}>
			<FormControlLabel
				value={1}
				className="basis-2/12"
				control={<Radio color="success" />}
				label="Soccer"
			/>
			<FormControlLabel
				value={2}
				className="basis-2/12"
				control={<Radio color="success" />}
				label="Basketball"
			/>
			<FormControlLabel
				value={3}
				className="basis-2/12"
				control={<Radio color="success" />}
				label="Tennis"
			/>
			<FormControlLabel
				value={4}
				className="basis-2/12"
				control={<Radio color="success" />}
				label="Volleyball"
			/>
		</RadioGroup>
	);
}

export function CheckDay({ value, setValue }) {
	const AvailableDays = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];
	return (
		<FormControl
			sx={{
				display: "block",
			}}>
			<FormGroup
				sx={{
					display: "flex",
					justifyContent: {
						lg: "space-between",
						md: "space-between",
						sm: "left",
						xs: "left",
					},
					flexDirection: {
						lg: "row",
						md: "row",
						sm: "column",
						xs: "column",
					},
				}}>
				{AvailableDays.map((day, index) => (
					<FormControlLabel
						key={index}
						control={
							<Checkbox
								checked={value.indexOf(day) !== -1}
								onChange={(event) => {
									setValue(
										event.target.checked
											? [...value, day]
											: value.filter((v) => v !== day)
									);
								}}
								name={day}
								id={day}
								color="success"
							/>
						}
						label={day}
					/>
				))}
			</FormGroup>
		</FormControl>
	);
}

export function PickTime({ value, setValue }) {
	return (
		<LocalizationProvider dateAdapter={AdapterMoment}>
			<MobileTimePicker
				value={value}
				onChange={(newValue) => {
					setValue(newValue);
				}}
				renderInput={(params) => (
					<TextField {...params} color="success" />
				)}
			/>
		</LocalizationProvider>
	);
}

export function AddFacilities({ value, setValue }) {
	const AvailableFacilities = [1, 2, 3, 4, 5, 6, 7];
	const NameFacilities = [
		"Masjid",
		"Tempat Parkir",
		"Toilet",
		"Cafe",
		"Loker",
		"Wifi",
		"Peminjaman Alat Olahraga",
	];
	return (
		<FormControl
			sx={{
				display: "block",
			}}>
			<FormGroup
				sx={{
					display: "flex",
					justifyContent: {
						lg: "space-between",
						md: "space-between",
						sm: "left",
						xs: "left",
					},
					flexDirection: {
						lg: "row",
						md: "row",
						sm: "column",
						xs: "column",
					},
				}}>
				{AvailableFacilities.map((facility, index) => (
					<FormControlLabel
						key={index}
						control={
							<Checkbox
								checked={value.indexOf(facility) !== -1}
								onChange={(event) => {
									setValue(
										event.target.checked
											? [...value, facility]
											: value.filter(
													(v) => v !== facility
											  )
									);
								}}
								name={NameFacilities[index]}
								id={`facility-number-${facility}`}
								color="success"
							/>
						}
						label={NameFacilities[index]}
					/>
				))}
			</FormGroup>
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

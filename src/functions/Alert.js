import * as React from "react";
import Alert from "@mui/material/Alert";
import Swal from "sweetalert2";

// Alert Related to of Axios
export function successMessage(res) {
	Swal.fire({
		position: "center",
		icon: "success",
		title: res.data.message,
		showConfirmButton: false,
		timer: 1500,
	});
}

export function errorMessage(err) {
	Swal.fire({
		position: "center",
		icon: "error",
		title: err.message,
		showConfirmButton: false,
		timer: 1500,
	});
}

// User Required to Login
export function loginAlert(navigate) {
	Swal.fire({
		title: "Please login first",
		icon: "warning",
		confirmButtonColor: "#3085d6",
		confirmButtonText: "Login",
	})
		.then((result) => {
			if (result.value) {
				navigate("/login");
			}
		})
		.catch((err) => {
			console.log(err);
		});
}

// Notification to fill the text input
export function fillAll() {
	Swal.fire({
		position: "center",
		icon: "error",
		title: "Please fill all the required fields",
		showConfirmButton: false,
		timer: 1500,
	});
}

export function minimumCharacter(number) {
	Swal.fire({
		icon: "error",
		title: "Oops...",
		text: `Password must be at least ${number} characters`,
		showConfirmButton: true,
		confirmButtonColor: "#3085d6",
	});
}

export function passwordConfirmation() {
	Swal.fire({
		icon: "error",
		title: "Oops...",
		text: "Password does not match",
	});
}

export function emptyInput() {
	Swal.fire({
		position: "center",
		icon: "error",
		title: "This field cannot be empty",
		showConfirmButton: false,
		timer: 1500,
	});
}

export function timeError() {
	Swal.fire({
		title: "Error",
		text: "Close time must be greater than open time",
		icon: "error",
		confirmButtonText: "OK",
	});
}
export function minimumDay() {
	Swal.fire({
		title: "Error",
		text: "Minimum one day must be selected",
		icon: "error",
		confirmButtonText: "OK",
	});
}
export function notForFree() {
	Swal.fire({
		title: "Error",
		text: "Price must be greater than 0",
		icon: "error",
		confirmButtonText: "OK",
	});
}
export function minimumFacility() {
	Swal.fire({
		title: "Error",
		text: "Is there really no facility here?",
		icon: "error",
		confirmButtonText: "OK",
	});
}

export function MuiError(err) {
	return <Alert severity="error">{err.message}</Alert>;
}

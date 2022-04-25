import Swal from 'sweetalert2';

// Alert Related to of Axios
export function successMessage(res) {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: res.data.message,
		showConfirmButton: false,
		timer: 1500,
	});
}

export function errorMessage(err) {
	Swal.fire({
		position: 'center',
		icon: 'error',
		title: err.response.data.message,
		showConfirmButton: false,
		timer: 1500,
	});
}

// User Required to Login
export function loginAlert(navigate) {
	Swal.fire({
		title: 'Please login first',
		icon: 'warning',
		confirmButtonColor: '#3085d6',
		confirmButtonText: 'Login',
	}).then((result) => {
		if (result.value) {
			navigate('/login');
		}
	});
}

// Notification to fill the text input
export function fillAll() {
	Swal.fire({
		position: 'center',
		icon: 'error',
		title: 'Please fill all the required fields',
		showConfirmButton: false,
		timer: 1500,
	});
}

export function minimumCharacter(number) {
	Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: `Password must be at least ${number} characters`,
	});
}

export function passwordConfirmation() {
	Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: 'Password does not match',
	});
}

export function emptyInput() {
	Swal.fire({
		position: 'center',
		icon: 'error',
		title: 'This field cannot be empty',
		showConfirmButton: false,
		timer: 1500,
	});
}

export function verifyOwner(navigate) {
	Swal.fire({
		position: 'center',
		icon: 'warning',
		title: 'Are you sure?',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Yes',
		cancelButtonText: 'No',
	}).then((result) => {
		if (result.value) {
			navigate('/verify');
		}
	});
}

// for swagger dummy
export function errorMessageSwagger(err) {
	Swal.fire({
		position: 'center',
		icon: 'error',
		title: err.message,
		showConfirmButton: false,
		timer: 1500,
	});
}

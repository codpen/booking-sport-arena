import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
	className,
	variant,
	children,
	link,
	onClick,
	type,
}) {
	const addClassName = className ? `${className}` : '';

	const variants = {
		solid: 'bg-teal-500 text-white',
		outline: 'border-teal-500 text-teal-500 border',
	};

	const pickedVariant = variants[variant];

	return (
		<button
			className={`px-5 py-2 rounded-md font-bold my-3 mx-2 ${pickedVariant} ${addClassName}`}
			onClick={onClick}
			type={type}>
			<Link to={link}>{children}</Link>
		</button>
	);
}
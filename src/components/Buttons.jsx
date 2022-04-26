
import React from 'react';

export default function Button({
	className,
	variant,
	children,
	onClick,
	type,
}) {
	const addClassName = className ? `${className}` : '';

	const variants = {
		solid: 'bg-teal-500 text-white',
		outline: 'border-teal-500 text-teal-500 border',
		warning: ' bg-amber-500 text-white',
		danger: 'bg-red-500 text-white',
	};

	const pickedVariant = variants[variant];

	return (
		<button
			className={`px-5 py-2 rounded-md font-bold ${pickedVariant} ${addClassName}`}
			onClick={onClick}
			type={type}>
			{children}
		</button>
	);
  
  
  
}

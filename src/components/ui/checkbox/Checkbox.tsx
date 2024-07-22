import React from 'react';

interface CheckboxProps {
	id?: string;
	extra?: string;
	color?:
		| 'red'
		| 'blue'
		| 'green'
		| 'yellow'
		| 'orange'
		| 'teal'
		| 'navy'
		| 'lime'
		| 'cyan'
		| 'pink'
		| 'purple'
		| 'amber'
		| 'indigo'
		| 'gray';
	[x: string]: any;
}

const colorClasses = {
	red: 'checked:bg-red-500 dark:checked:bg-red-400',
	blue: 'checked:bg-blue-500 dark:checked:bg-blue-400',
	green: 'checked:bg-green-500 dark:checked:bg-green-400',
	yellow: 'checked:bg-yellow-500 dark:checked:bg-yellow-400',
	orange: 'checked:bg-orange-500 dark:checked:bg-orange-400',
	teal: 'checked:bg-teal-500 dark:checked:bg-teal-400',
	navy: 'checked:bg-navy-500 dark:checked:bg-navy-400',
	lime: 'checked:bg-lime-500 dark:checked:bg-lime-400',
	cyan: 'checked:bg-cyan-500 dark:checked:bg-cyan-400',
	pink: 'checked:bg-pink-500 dark:checked:bg-pink-400',
	purple: 'checked:bg-purple-500 dark:checked:bg-purple-400',
	amber: 'checked:bg-amber-500 dark:checked:bg-amber-400',
	indigo: 'checked:bg-indigo-500 dark:checked:bg-indigo-400',
	gray: 'checked:bg-gray-500 dark:checked:bg-gray-400',
};

const Checkbox: React.FC<CheckboxProps> = ({
	id,
	extra = '',
	color,
	...rest
}) => {
	const colorClass =
		(!!color && colorClasses[color]) ||
		'checked:bg-brand-400 dark:checked:bg-brand-400';
	const baseClass = `defaultCheckbox relative inline-flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center justify-center rounded-md border border-gray-300 text-white/0 outline-none transition ease-linear checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10`;

	return (
		<input
			id={id}
			type='checkbox'
			className={`${baseClass} ${colorClass} ${extra}`}
			{...rest}
		/>
	);
};

export default Checkbox;

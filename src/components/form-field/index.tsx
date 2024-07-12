import React from 'react'

import { FormFieldProps } from '@/types'

export const FormField: React.FC<FormFieldProps> = ({
	error,
	name,
	placeholder,
	register,
	type,
	valueAsNumber,
	className
}) => {
	return (
		<>
			<input
				type={type}
				placeholder={placeholder}
				{...register(name, { valueAsNumber })}
				className={className}
			/>
			{error && <span className='error-message'>{error.message}</span>}
		</>
	)
}

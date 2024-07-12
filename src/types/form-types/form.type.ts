import { FieldError, UseFormRegister } from 'react-hook-form'

export type FormData = {
	name: string
	email: string
	password: string
	confirmPassword: string
	avatar: File
}

export type FormFieldProps = {
	type: string
	placeholder: string
	name: ValidFieldNames
	register: UseFormRegister<FormData>
	error: FieldError | undefined
	valueAsNumber?: boolean
	className?: string
}

export type ValidFieldNames =
	| 'email'
	| 'password'
	| 'name'
	| 'avatar'
	| 'confirmPassword'

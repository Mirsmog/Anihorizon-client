'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'

import { FormField } from '@/components/form-field'
import { GithubIcon } from '@/components/ui/icons/github'
import { GoogleIcon } from '@/components/ui/icons/google'

import { FormData } from '@/types'

interface SignUpPage {}

const SignUpPage: React.FC<SignUpPage> = ({}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError
	} = useForm<FormData>()
	const onSubmit = (data: FormData) => {
		console.log(data)
	}

	return (
		<div className='w-full max-w-[400px] pt-12 pb-6'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='flex flex-col gap-6'>
					<h2 className='text-center text-2xl mb-2 select-none'>Регистрация</h2>
					<div className='flex flex-col gap-4'>
						<label className='w-full'>
							<p className='labelForm'>Логин</p>
							<FormField
								className='inputForm'
								type='text'
								name='name'
								placeholder='Ваше имя'
								register={register}
								error={errors.email}
							/>
						</label>
						<label className='w-full'>
							<p className='labelForm'>Email</p>
							<FormField
								className='inputForm'
								type='email'
								name='email'
								placeholder='Ваша электронная почта'
								register={register}
								error={errors.email}
							/>
						</label>
						<label className='w-full'>
							<p className='labelForm'>Пароль</p>
							<FormField
								className='inputForm'
								type='password'
								name='password'
								placeholder='Ведите ваш пароль'
								register={register}
								error={errors.email}
							/>
						</label>

						<label className='w-full'>
							<p className='labelForm'>пароль</p>
							<FormField
								className='inputForm'
								type='password'
								name='password'
								placeholder='Повторите пароль'
								register={register}
								error={errors.email}
							/>
						</label>
					</div>
					<button
						className='w-full bg-indigo-600 py-2 px-4 rounded-[4px] font-normal text-base hover:bg-indigo-700 transition-all duration-75'
						type='submit'
					>
						Создать аккаунт
					</button>
					<div>
						<div className='text-center select-none relative before:absolute before:w-full before:h-[1px] before:bg-slate-600 before:left-0 before:top-[calc(50%-0.5px)] before:z-10 opacity-100'>
							<span className='bg-cool-black px-4 relative z-10 uppercase text-slate-600'>
								Другое
							</span>
						</div>
						<div className='flex gap-4 mt-6'>
							<button
								type='button'
								title='Продолжить через Google аккаунт'
								className='flex justify-center items-center gap-2 text-center w-full py-2 px-4 bg-primary-black rounded-[4px] border border-solid border-opacity-20 border-accent-blue group'
							>
								<GoogleIcon
									width={20}
									className='fill-white opacity-50 group-hover:opacity-100 transition-opacity'
								/>
							</button>
							<button
								type='button'
								title='Продолжить через Github аккаунт'
								className='flex justify-center items-center gap-2 text-center w-full py-2 px-4 bg-primary-black rounded-[4px] border border-solid border-opacity-20 border-accent-blue group'
							>
								<GithubIcon
									width={22}
									className='fill-white opacity-50 group-hover:opacity-100 transition-opacity'
								/>
							</button>
						</div>
						<div className='flex gap-2 justify-center py-6'>
							<span className='text-opacity-50 text-white'>
								Уже есть аккаунт?
							</span>
							<Link
								className='text-opacity-80 text-white hover:underline'
								href='/'
							>
								Войти
							</Link>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default SignUpPage

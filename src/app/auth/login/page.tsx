import { Metadata } from 'next'
import React from 'react'

interface LoginPage {}

export const metadata: Metadata = {
	title: 'loginPage'
}

const LoginPage: React.FC<LoginPage> = ({}) => {
	return <div>Im login</div>
}

export default LoginPage

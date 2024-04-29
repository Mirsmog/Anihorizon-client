'use client'

import React from 'react'

import AnimeTitle from '@/components/title'

import { useRandomTitle } from '@/services/queries'

interface Random {}

const Random: React.FC<Random> = ({}) => {
	const { data } = useRandomTitle()
	if (!data) return
	const title = data.data
	return <AnimeTitle {...title} />
}

export default Random

'use client'

import { useSearchParams } from 'next/navigation'
import React from 'react'

import AnimeTitle from '@/components/title'

import { useTitle } from '@/services/queries'

interface WatchPage {}

const WatchPage: React.FC<WatchPage> = ({}) => {
	const searchParams = useSearchParams()
	const titleCode = searchParams.get('n') || ''
	const { data } = useTitle({ code: titleCode })
	const title = data?.data
	if (!title) return
	return <AnimeTitle {...title} />
}

export default WatchPage

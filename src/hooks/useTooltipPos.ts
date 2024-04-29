import React from 'react'

export const useTooltipPosition = (
	parentRef: React.RefObject<HTMLElement>,
	tooltipRef: React.RefObject<HTMLDivElement>
): [Position: React.CSSProperties | null, h: () => void] => {
	const [position, setPosition] = React.useState({
		top: '60%',
		left: '50%',
		right: 'auto',
		bottom: 'auto'
	} as React.CSSProperties | null)

	const handleTooltipPos = () => {
		if (!tooltipRef.current || !parentRef.current) return
		const tooltipPos = tooltipRef.current.getBoundingClientRect()
		const parentPos = parentRef.current.getBoundingClientRect()
		if (!tooltipPos || !parentPos) return
		const isRightEnd = tooltipPos.right > parentPos.width - 100
		const isLeftEnd = tooltipPos.left < parentPos.left
		const isTopEnd = tooltipPos.top < parentPos.top + 56
		const isBottomEnd = tooltipPos.bottom > parentPos.bottom - 100

		setPosition(prevPosition => {
			let newPosition = { ...prevPosition }

			if (isRightEnd) {
				newPosition = { ...newPosition, left: 'auto', right: '50%' }
			} else if (isLeftEnd) {
				newPosition = { ...newPosition, left: '50%', right: 'auto' }
			}

			if (isBottomEnd) {
				newPosition = { ...newPosition, top: 'auto', bottom: '60%' }
			} else if (isTopEnd) {
				newPosition = { ...newPosition, top: '60%', bottom: 'auto' }
			}
			if ((isBottomEnd && isTopEnd) || (isRightEnd && isLeftEnd)) return null
			return newPosition
		})
	}

	React.useEffect(() => {
		if (!parentRef.current) return
		const resizeObserver = new ResizeObserver(() => {
			handleTooltipPos()
		})
		resizeObserver.observe(parentRef.current)
		return () => resizeObserver.disconnect()
	}, [])

	return [position, handleTooltipPos]
}

'use client'

import { motion, type Variants } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'

interface InViewProps {
	children: React.ReactNode
	variants?: Variants
	className?: string
	viewOptions?: {
		threshold?: number
		once?: boolean
	}
}

export function InView({
	children,
	variants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	},
	className,
	viewOptions = { threshold: 0.1, once: true },
}: InViewProps) {
	const ref = useRef(null)
	const isInView = useInView(ref, viewOptions)

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={isInView ? 'visible' : 'hidden'}
			variants={variants}
			className={className}
		>
			{children}
		</motion.div>
	)
}

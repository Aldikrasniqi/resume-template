'use client'

import { motion, type Variants } from 'motion/react'

interface TextEffectProps {
	children: string
	per?: 'word' | 'char'
	delay?: number
	className?: string
	preset?: 'blur' | 'slide' | 'fade'
	variants?: {
		container?: Variants
		item?: Variants
	}
}

const presetVariants = {
	blur: {
		container: {
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: {
					staggerChildren: 0.02,
				},
			},
		},
		item: {
			hidden: {
				opacity: 0,
				filter: 'blur(10px)',
			},
			visible: {
				opacity: 1,
				filter: 'blur(0px)',
				transition: {
					duration: 0.4,
				},
			},
		},
	},
	slide: {
		container: {
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: {
					staggerChildren: 0.02,
				},
			},
		},
		item: {
			hidden: {
				opacity: 0,
				y: 20,
			},
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.4,
				},
			},
		},
	},
	fade: {
		container: {
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: {
					staggerChildren: 0.05,
				},
			},
		},
		item: {
			hidden: {
				opacity: 0,
			},
			visible: {
				opacity: 1,
				transition: {
					duration: 0.3,
				},
			},
		},
	},
}

export function TextEffect({
	children,
	per = 'word',
	delay = 0,
	className = '',
	preset,
	variants: customVariants,
}: TextEffectProps) {
	const words = children.split(' ')
	const chars = children.split('')

	const variants = preset
		? presetVariants[preset]
		: customVariants || presetVariants.fade

	const items = per === 'word' ? words : chars

	return (
		<motion.span
			className={`inline-block ${className}`}
			initial="hidden"
			animate="visible"
			variants={variants.container}
			style={{
				animationDelay: `${delay}s`,
			}}
		>
			{items.map((item, index) => (
				<motion.span
					key={index}
					className="inline-block"
					variants={variants.item}
					style={{
						marginRight: per === 'word' ? '0.25rem' : '0',
					}}
				>
					{item === ' ' ? '\u00A0' : item}
				</motion.span>
			))}
		</motion.span>
	)
}

'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DisclosureProps {
	children: React.ReactNode
	trigger: React.ReactNode
	defaultOpen?: boolean
	className?: string
}

const Disclosure = React.forwardRef<HTMLDivElement, DisclosureProps>(
	({ children, trigger, defaultOpen = false, className }, ref) => {
		const [isOpen, setIsOpen] = React.useState(defaultOpen)

		return (
			<div ref={ref} className={cn('', className)}>
				<motion.button
					onClick={() => setIsOpen(!isOpen)}
					className="flex items-center gap-2 w-full text-left focus:outline-none group"
					whileTap={{ scale: 0.98 }}
					transition={{ duration: 0.1 }}
				>
					{trigger}
					<motion.div
						animate={{ rotate: isOpen ? 180 : 0 }}
						transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
						className="opacity-60 group-hover:opacity-100 transition-opacity duration-200"
					>
						<ChevronDown size={12} />
					</motion.div>
				</motion.button>

				<AnimatePresence mode="wait">
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0, marginTop: 0 }}
							animate={{
								opacity: 1,
								height: 'auto',
								marginTop: 8,
								transition: {
									duration: 0.3,
									ease: [0.23, 1, 0.32, 1],
									opacity: { delay: 0.1 },
								},
							}}
							exit={{
								opacity: 0,
								height: 0,
								marginTop: 0,
								transition: {
									duration: 0.2,
									ease: [0.23, 1, 0.32, 1],
									opacity: { duration: 0.1 },
								},
							}}
							style={{ overflow: 'hidden' }}
						>
							{children}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		)
	}
)

Disclosure.displayName = 'Disclosure'

export { Disclosure }

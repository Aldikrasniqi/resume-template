'use client'
import { InView } from '@/components/core/in-view'
import { Disclosure } from '@/components/ui/disclosure'
import { motion } from 'motion/react'

export const ProjectCard = ({
	projectName,
	description,
	bullets,
	dateRange,
	image,
}: {
	projectName: string
	description: string
	bullets: string[]
	dateRange: string
	image: string
}) => (
	<InView
		variants={{
			hidden: { opacity: 0, y: 50, scale: 0.9 },
			visible: {
				opacity: 1,
				y: 0,
				scale: 1,
				transition: {
					duration: 0.6,
					ease: [0.23, 1, 0.32, 1],
				},
			},
		}}
		viewOptions={{ threshold: 0.1, once: true }}
		className="relative aspect-[4/3] w-full overflow-hidden rounded-lg"
	>
		<motion.img
			src={image}
			alt={projectName}
			className="absolute inset-0 h-full w-full object-cover"
			initial={{ scale: 1.1 }}
			whileInView={{ scale: 1 }}
			transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
			viewport={{ once: true }}
		/>
		<motion.div
			className="pointer-events-none absolute bottom-0 left-0 h-[60%] w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[1px]"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.6, delay: 0.2 }}
			viewport={{ once: true }}
		/>

		<motion.div
			className="absolute bottom-0 left-0 w-full"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: 0.3 }}
			viewport={{ once: true }}
		>
			<div className="flex flex-col gap-1 px-4 py-4">
				<div className="flex items-start justify-between gap-2">
					<h3 className="text-base font-semibold text-white leading-tight">
						{projectName}
					</h3>
					<span className="text-xs text-zinc-300 font-medium">{dateRange}</span>
				</div>
				<p className="text-sm text-zinc-300 mb-2 leading-relaxed">
					{description}
				</p>
				{bullets.length > 0 && (
					<div className="space-y-1">
						{bullets.slice(0, 1).map((point, i) => (
							<motion.div
								key={i}
								className="flex items-start gap-2"
								initial={{ opacity: 0, x: -10 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
								viewport={{ once: true }}
							>
								<div className="w-1 h-1 rounded-full bg-zinc-300 mt-2 opacity-80 flex-shrink-0"></div>
								<p className="text-xs text-zinc-200 leading-relaxed">{point}</p>
							</motion.div>
						))}

						{bullets.length > 1 && (
							<Disclosure
								trigger={
									<motion.span
										className="text-xs text-zinc-400 hover:text-zinc-300 transition-colors duration-200 cursor-pointer select-none"
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										transition={{ duration: 0.4, delay: 0.6 }}
										viewport={{ once: true }}
									>
										{bullets.length === 2
											? '1 more feature'
											: `${bullets.length - 1} more features`}
									</motion.span>
								}
								className="mt-1"
							>
								<div className="space-y-1">
									{bullets.slice(1).map((point, i) => (
										<motion.div
											key={i + 1}
											className="flex items-start gap-2"
											initial={{ opacity: 0, x: -10 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.3, delay: i * 0.05 }}
										>
											<div className="w-1 h-1 rounded-full bg-zinc-300 mt-2 opacity-80 flex-shrink-0"></div>
											<p className="text-xs text-zinc-200 leading-relaxed">
												{point}
											</p>
										</motion.div>
									))}
								</div>
							</Disclosure>
						)}
					</div>
				)}
			</div>
		</motion.div>
	</InView>
)

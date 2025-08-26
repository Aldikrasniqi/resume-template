export const CommunityRow = ({
	organization,
	bullets,
	dateRange,
}: {
	organization: string
	bullets: string[]
	dateRange: string
}) => (
	<div className="w-full p-4 rounded-xl hover:bg-[#f5f5f7] transition-all duration-200 border border-transparent hover:border-[#d2d2d7] group">
		<div className="flex justify-between items-start">
			<div className="flex-1">
				<h3 className="font-medium text-lg text-[#1d1d1f]">{organization}</h3>
				<ul className="mt-2 space-y-1">
					{bullets.map((point, index) => (
						<li key={index} className="text-[#424245] text-sm tracking-tight">
							• {point}
						</li>
					))}
				</ul>
			</div>
			<span className="text-sm text-[#6e6e73] whitespace-nowrap ml-4">
				{dateRange}
			</span>
		</div>
	</div>
)

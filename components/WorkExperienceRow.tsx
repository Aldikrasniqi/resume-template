export const WorkExperienceRow = ({
	companyName,
	content,
	year,
	details,
}: {
	companyName: string
	content: string
	year: string
	details?: string[]
}) => (
	<div className="w-full flex flex-col gap-2 mb-5 p-4 rounded-xl hover:bg-[#f5f5f7] transition-colors duration-200 border border-transparent hover:border-[#d2d2d7] group">
		<div className="flex justify-between items-center">
			<div>
				<h3 className="text-medium font-medium text-lg text-[#1d1d1f]">
					{companyName}
				</h3>
				<span className="font-light text-[#424245] tracking-tight">
					{content}
				</span>
			</div>
			<div>
				<span className="text-[#6e6e73] text-sm">{year}</span>
			</div>
		</div>
		{details && (
			<ul className="list-disc list-inside ml-4 tracking-tight leading-relaxed text-[#424245] space-y-1">
				{details.map((point, i) => (
					<li key={i} className="font-light">
						{point}
					</li>
				))}
			</ul>
		)}
	</div>
)

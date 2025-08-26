export const EducationRow = ({
	title,
	content,
	year,
}: {
	title: string
	content: string
	year: string
}) => (
	<div className="w-full flex justify-between items-center p-4 mb-2 rounded-xl hover:bg-[#f5f5f7] transition-colors duration-200 border border-transparent hover:border-[#d2d2d7] group">
		<div>
			<h3 className="font-medium text-lg text-[#1d1d1f]">{title}</h3>
			<span className="text-sm text-[#6e6e73] tracking-tight">{content}</span>
		</div>
		<div>
			<span className="text-sm text-[#6e6e73]">{year}</span>
		</div>
	</div>
)

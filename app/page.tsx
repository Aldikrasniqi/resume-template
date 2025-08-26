import { EducationRow } from '@/components/Educationrow'
import { WorkExperienceRow } from '@/components/WorkExperienceRow'
import { CommunityRow } from '@/components/CommunityRow'
import { ProjectCard } from '@/components/ProjectCard'
import { TextEffect } from '@/components/core/text-effect'
import { resumeData } from '@/data/resume-data'

export default function Home() {
	return (
		<div className="font-sans min-h-screen max-w-4xl mx-auto pt-12 flex flex-col gap-6 p-4 sm:p-8">
			<div className="w-full flex flex-col items-center gap-3">
				<img
					src={resumeData.image}
					alt="Profile"
					className="w-24 h-24 rounded-2xl object-cover shadow-sm"
				/>
				<div className="text-center">
					<h3 className="text-xl font-semibold text-[#1d1d1f]">
						<TextEffect
							per="char"
							delay={0.3}
							variants={{
								container: {
									hidden: { opacity: 0 },
									visible: {
										opacity: 1,
										transition: { staggerChildren: 0.05 },
									},
								},
								item: {
									hidden: { opacity: 0, rotateX: 90, y: 10 },
									visible: {
										opacity: 1,
										rotateX: 0,
										y: 0,
										transition: { duration: 0.2 },
									},
								},
							}}
						>
							{resumeData.name}
						</TextEffect>
					</h3>
					<p className="text-sm text-[#6e6e73] font-medium">
						<TextEffect per="char" delay={1.0} preset="fade">
							{resumeData.role}
						</TextEffect>
					</p>
				</div>
			</div>
			<div className="space-y-5">
				<div>
					<h1 className="font-medium text-lg mb-3 text-[#1d1d1f]">
						<TextEffect per="char" delay={1.5} preset="slide">
							About
						</TextEffect>
					</h1>
					<p className="text-sm leading-relaxed text-[#424245]">
						{resumeData.description}
					</p>
				</div>
				<div>
					<h1 className="font-medium text-lg mb-3 text-[#1d1d1f]">
						<TextEffect per="char" delay={2.0} preset="slide">
							Work
						</TextEffect>
					</h1>
					{resumeData.work.map((work) => (
						<WorkExperienceRow
							key={work.companyName}
							companyName={work.companyName}
							content={work.jobTitle}
							year={work.dateRange}
							details={work.bullets}
						/>
					))}
				</div>
				<div>
					<h1 className="font-medium text-lg mb-3 text-[#1d1d1f]">
						<TextEffect per="char" delay={2.5} preset="slide">
							Education
						</TextEffect>
					</h1>
					{resumeData.education.map((education) => (
						<EducationRow
							key={education.schoolName}
							title={education.schoolName}
							content={education.degree}
							year={education.dateRange}
						/>
					))}
				</div>
				<div>
					<h1 className="font-medium text-lg mb-3 text-[#1d1d1f]">
						<TextEffect per="char" delay={3.0} preset="slide">
							Community
						</TextEffect>
					</h1>
					<div className="space-y-2">
						{resumeData.community.map((involvement, i) => (
							<CommunityRow
								key={i}
								organization={involvement.organization}
								bullets={involvement.bullets}
								dateRange={involvement.dateRange}
							/>
						))}
					</div>
				</div>
				<div>
					<h1 className="font-medium text-lg mb-3 text-[#1d1d1f]">
						<TextEffect per="char" delay={3.5} preset="slide">
							Skills
						</TextEffect>
					</h1>
					<div className="flex flex-wrap gap-1.5">
						{resumeData.skills.map((skill, i) => (
							<div
								key={i}
								className="bg-[#f5f5f7] px-3 py-1 rounded text-xs text-[#1d1d1f]"
							>
								{skill}
							</div>
						))}
					</div>
				</div>
				<div>
					<h1 className="font-medium text-lg mb-3 text-[#1d1d1f]">
						<TextEffect per="char" delay={4.0} preset="slide">
							Projects
						</TextEffect>
					</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{resumeData.projects.map((project, i) => (
							<ProjectCard
								key={i}
								projectName={project.projectName}
								description={project.description}
								bullets={project.bullets}
								dateRange={project.dateRange}
								image={project.image}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export type ResumeData = {
	name: string
	location: string
	locationLink: string
	role: string
	image: string
	about: string
	description: string
	work: WorkExperience[]
	education: Education[]
	community: Community[]
	skills: string[]
	projects: Project[]
}

interface WorkExperience {
	companyName: string
	jobTitle: string
	bullets: string[]
	dateRange: string
}

interface Education {
	schoolName: string
	degree: string
	dateRange: string
}

interface Community {
	organization: string
	bullets: string[]
	dateRange: string
}

interface Project {
	projectName: string
	description: string
	bullets: string[]
	dateRange: string
	image: string
}

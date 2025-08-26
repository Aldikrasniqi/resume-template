import { ResumeData } from '@/lib/types'

export const resumeData: ResumeData = {
	name: 'John Doe',
	location: 'New York, NY',
	role: 'Software Engineer',
	image: '/image/aldi.jpeg',
	locationLink: 'https://www.google.com/maps/place/New+York,+NY',
	about:
		'I am a software engineer with a passion for building scalable and efficient systems.',
	description:
		"As a dedicated Software Engineer, I specialize in crafting elegant and maintainable code solutions. With extensive experience in full-stack development, I architect scalable systems using modern technologies. I'm passionate about clean code principles and test-driven development, and I thrive in collaborative environments where I can solve challenging problems.",
	work: [
		{
			companyName: 'Google',
			jobTitle: 'Software Engineer',
			bullets: [
				'Developed and maintained web applications',
				'Collaborated with cross-functional teams to deliver high-quality products',
			],
			dateRange: '2020-2023',
		},
		{
			companyName: 'Apple',
			jobTitle: 'Software Engineer',
			bullets: [
				'Developed and maintained web applications',
				'Collaborated with cross-functional teams to deliver high-quality products',
			],
			dateRange: '2020-2023',
		},
	],
	education: [
		{
			schoolName: 'University of California, Berkeley',
			degree: 'Bachelor of Science in Computer Science',
			dateRange: '2016-2020',
		},
		{
			schoolName: 'Stanford University',
			degree: 'Master of Science in Software Engineering',
			dateRange: '2020-2022',
		},
	],
	community: [
		{
			organization: 'Cacttus Education',
			bullets: ['Organized hackathons and workshops'],
			dateRange: '2018-2020',
		},
		{
			organization: 'ACM',
			bullets: ['Organized hackathons and workshops'],
			dateRange: '2022-2023',
		},
		{
			organization: 'ACM',
			bullets: ['Organized hackathons and workshops'],
			dateRange: '2022-2023',
		},
	],
	skills: [
		'React',
		'Node.js',
		'TypeScript',
		'JavaScript',
		'HTML',
		'CSS',
		'Python',
		'Java',
	],
	projects: [
		{
			projectName: 'E-Commerce Platform',
			description: 'Full-stack web application with modern payment integration',
			bullets: [
				'Built with React and Node.js',
				'Integrated Stripe payment system',
				'Implemented real-time inventory management',
			],
			dateRange: '2023',
			image:
				'https://i.pinimg.com/1200x/4c/d3/cd/4cd3cd5f51be7c59e23dcdcd44b42cab.jpg',
		},
		{
			projectName: 'AI Chat Assistant',
			description: 'Intelligent conversational AI',
			bullets: [
				'Developed using Python and TensorFlow',
				'Natural language processing capabilities',
				'Deployed on AWS with scalable architecture',
			],
			dateRange: '2022-2023',

			image:
				'https://i.pinimg.com/736x/f5/03/d9/f503d96ec6c8f24fd1baad5c2a41f124.jpg',
		},
		{
			projectName: 'Mobile Task Manager',
			description: 'Cross-platform productivity app with offline capabilities',
			bullets: [
				'Built with React Native and TypeScript',
				'Offline-first architecture with data sync',
				'Push notifications and calendar integration',
			],
			dateRange: '2022',
			image:
				'https://i.pinimg.com/736x/b6/f5/72/b6f572915d28fe52f2fb996d1b92d5fe.jpg',
		},
	],
}

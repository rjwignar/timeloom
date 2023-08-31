import { ProfileType, TimelineType } from "@/types/index";

export const PROFILE: ProfileType = {
	name: "Adarsh Dubey",
	username: "adarsh",
	tags: ["Founder", "First 100", "Dev"],
	bio: "Founder @BIO-S, Team @WeMakeDevs & @CNCF_Nashik, UX Designer, Full Stack Web Dev, Machine Learning Enthusiast.",
	socials: {
		email: "dubeyadarshmain@gmail.com",
		github: "inclinedadarsh",
		twitter: "inclinedadarsh",
		instagram: "inclinedadarsh",
		linkedin: "dubeyadarsh",
		web: "https://adarshdubey.com",
	},
	button: {
		text: "Sponsor Me",
		link: "https://github.com/sponsors/inclinedadarsh",
	},
};

export const TIMELINE: TimelineType = [
	{
		title: "Finished the Toy version of Timeloom",
		icon: "Zap",
		date: new Date("2023-08-31"),
		isFirst: true,
		isLast: false,
	},
	{
		title: "Failed to submit week 2 update in Nights & Weekends S4",
		icon: "ThumbsDown",
		date: new Date("2023-08-22"),
		isFirst: false,
		isLast: false,
	},
	{
		title: "Started working on the Toy version of Timeloom",
		description:
			"Building the toy version of Timeloom using NextJS and TypeScript. Checkout the toy branch in GitHub for the source code.",
		date: new Date("2023-08-22"),
		icon: "Star",
		link: {
			text: "Timeloom Repo",
			url: "https://github.com/inclinedadarsh/timeloom",
		},
		location: "GitHub",
		isFirst: false,
		isLast: false,
	},
	{
		title: "Got high engagement on my tweet about Timeloom",
		link: {
			text: "Tweet Link",
			url: "https://twitter.com/inclinedadarsh/status/1689287740297302016?s=20",
		},
		date: new Date("2023-08-20"),
		icon: "Twitter",
		isFirst: false,
		isLast: false,
	},
	{
		title: "Started a GitHub repo for Timeloom",
		description:
			"The GitHub repo includes Discussions, Wiki, and Projects. I am planning to make it open-source and build it in public. The discussions is open for new ideas and criticism.",
		location: "GitHub",
		link: {
			text: "GitHub Repo",
			url: "https://github.com/inclinedadarsh/timeloom",
		},
		date: new Date("2023-08-19"),
		icon: "GitHub",
		isFirst: false,
		isLast: false,
	},
	{
		title: "Posted V1 Design of Timeloom (previously JourTech)",
		link: {
			text: "Design Link",
			url: "https://twitter.com/inclinedadarsh/status/1692588358537519381?s=20",
		},
		date: new Date("2023-08-18"),
		icon: "Zap",
		isFirst: false,
		isLast: false,
	},
	{
		title: "Completed 200 followers on Twitter 🎉",
		date: new Date("2023-08-18"),
		icon: "Twitter",
		link: {
			text: "Twitter Profile",
			url: "https://twitter.com/inclinedadarsh",
		},
		isFirst: false,
		isLast: false,
	},
	{
		title: "Published a blog on my first week in Nights & Weekends S4",
		date: new Date("2023-08-15"),
		icon: "Quote",
		link: {
			text: "Blog Link",
			url: "https://blog.adarshdubey.com/nights-weekends-chronicles-igniting-the-spark-of-ideas",
		},
		isFirst: false,
		isLast: false,
	},
	{
		title: "Decided to build Timeloom",
		description:
			"JourTech: A website where you can log every achievement, failure and whatnot. You can show if off to the world or just keep it as a personal inspiration.",
		date: new Date("2023-08-9"),
		icon: "Star",
		link: {
			text: "Idea Tweet",
			url: "https://twitter.com/inclinedadarsh/status/1689287740297302016?s=20",
		},
		location: "Buildspace",
		isFirst: false,
		isLast: false,
	},
	{
		title: "Participated in Nights & Weekends S4",
		date: new Date("2023-08-05"),
		icon: "Zap",
		link: {
			text: "Buildspace's website",
			url: "https://buildspace.so/",
		},
		isFirst: false,
		isLast: true,
	},
];

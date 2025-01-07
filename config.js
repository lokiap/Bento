// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Mohamed',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '9febf54afe4862ee656d582ea9aae37b', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'fr', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '47.383331',
	defaultLongitude: '0.68333',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://gmail.com',
		},
		{
			id: '3',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://www.youtube.com',
		},
		{
			id: '4',
			name: 'ENT',
			icon: 'calendar',
			link: 'https://cas.univ-tours.fr/cas/login?service=https://ent.univ-tours.fr/uPortal/Login',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'Trading',
			icon: 'align-horizontal-distribute-center',
			link: 'https://app.trading212.com/',
		},
	
	],

	
	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	// firstlistsContainer: [
	// 	{
	// 		icon: 'music',
	// 		id: '1',
	// 		links: [
	// 			{
	// 				name: 'Inspirational',
	// 				link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
	// 			},
	// 			{
	// 				name: 'Classic',
	// 				link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
	// 			},
	// 			{
	// 				name: 'Oldies',
	// 				link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
	// 			},
	// 			{
	// 				name: 'Rock',
	// 				link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
	// 			},
	// 		],
	// 	},
	// 	{
	// 		icon: 'coffee',
	// 		id: '2',
	// 		links: [
	// 			{
	// 				name: 'Linkedin',
	// 				link: 'https://www.linkedin.com',
	// 			},
	// 			{
	// 				name: 'Dribbble',
	// 				link: 'https://www.dribbble.com',
	// 			},
	// 			{
	// 				name: 'Trello',
	// 				link: 'https://www.trello.com',
	// 			},
	// 			{
	// 				name: 'Slack',
	// 				link: 'https://www.slack.com',
	// 			},
	// 		],
	// 	},
	// ],
	//
	// // Second Links Container
	// secondListsContainer: [
	// 	{
	// 		icon: 'binary',
	// 		id: '1',
	// 		links: [
	// 			{
	// 				name: 'Spotify',
	// 				link: 'https://www.spotify.com',
	// 			},
	// 			{
	// 				name: 'Reddit',
	// 				link: 'https://www.reddit.com',
	// 			},
	// 			{
	// 				name: 'Hashnode',
	// 				link: 'https://www.hashnode.com',
	// 			},
	// 			{
	// 				name: 'Pocket',
	// 				link: 'https://www.pocket.com',
	// 			},
	// 		],
	// 	},
	// 	{
	// 		icon: 'github',
	// 		id: '2',
	// 		links: [
	// 			{
	// 				name: 'Front',
	// 				link: 'https://www.reddit.com/r/Frontend/',
	// 			},
	// 			{
	// 				name: 'Rust',
	// 				link: 'https://www.reddit.com/r/rust/',
	// 			},
	// 			{
	// 				name: 'Go',
	// 				link: 'https://www.reddit.com/r/golang/',
	// 			},
	// 			{
	// 				name: 'Repos',
	// 				link: 'https://github.com/migueravila',
	// 			},
	// 		],
	// 	},
	// ],
};

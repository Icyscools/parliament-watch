import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	corePlugins: {
		preflight: false
	},
	theme: {
		fontFamily: {
			serif: ['Kondolar Thai', ...defaultTheme.fontFamily.serif],
			sans: ['IBM Plex Sans Thai Looped', ...defaultTheme.fontFamily.sans]
		},
		colors: {
			'blue-10': '#cbdaff',
			'blue-100': '#16015c',
			'blue-20': '#aac2fe',
			'blue-30': '#7b9bee',
			'blue-40': '#5075f8',
			'blue-50': '#334fe3',
			'blue-60': '#3904e9',
			'blue-70': '#2e03bd',
			'blue-80': '#2600a3',
			'blue-90': '#1e027e',
			'cool-gray-10': '#f2f4f8',
			'cool-gray-100': '#121619',
			'cool-gray-20': '#dde1e6',
			'cool-gray-30': '#c1c7cd',
			'cool-gray-40': '#a2a9b0',
			'cool-gray-50': '#878d96',
			'cool-gray-60': '#697077',
			'cool-gray-70': '#4d5358',
			'cool-gray-80': '#343a3f',
			'cool-gray-90': '#21272a',
			'cyan-10': '#e5f6ff',
			'cyan-100': '#061727',
			'cyan-20': '#bae6ff',
			'cyan-30': '#82cfff',
			'cyan-40': '#33b1ff',
			'cyan-50': '#1192e8',
			'cyan-60': '#0072c3',
			'cyan-70': '#00539a',
			'cyan-80': '#003a6d',
			'cyan-90': '#012749',
			'gray-10': '#f4f4f4',
			'gray-100': '#161616',
			'gray-20': '#e0e0e0',
			'gray-30': '#c6c6c6',
			'gray-40': '#a8a8a8',
			'gray-50': '#8d8d8d',
			'gray-60': '#6f6f6f',
			'gray-70': '#525252',
			'gray-80': '#393939',
			'gray-90': '#262626',
			'green-10': '#defbe6',
			'green-100': '#071908',
			'green-20': '#a7f0ba',
			'green-30': '#6fdc8c',
			'green-40': '#42be65',
			'green-50': '#24a148',
			'green-60': '#198038',
			'green-70': '#0e6027',
			'green-80': '#044317',
			'green-90': '#022d0d',
			'magenta-10': '#fff0f7',
			'magenta-100': '#2a0a18',
			'magenta-20': '#ffd6e8',
			'magenta-30': '#ffafd2',
			'magenta-40': '#ff7eb6',
			'magenta-50': '#ee5396',
			'magenta-60': '#d02670',
			'magenta-70': '#9f1853',
			'magenta-80': '#740937',
			'magenta-90': '#510224',
			'neutral-black': '#000000',
			'neutral-white': '#ffffff',
			'orange-10': '#fff2e8',
			'orange-100': '#231000',
			'orange-20': '#ffd9be',
			'orange-30': '#ffb784',
			'orange-40': '#ff832b',
			'orange-50': '#eb6200',
			'orange-60': '#ba4e00',
			'orange-70': '#8a3800',
			'orange-80': '#5e2900',
			'orange-90': '#3e1a00',
			'purple-10': '#f6f2ff',
			'purple-100': '#1c0f30',
			'purple-20': '#e8daff',
			'purple-30': '#d4bbff',
			'purple-40': '#be95ff',
			'purple-50': '#a56eff',
			'purple-60': '#8a3ffc',
			'purple-70': '#6929c4',
			'purple-80': '#491d8b',
			'purple-90': '#31135e',
			'red-10': '#fdece8',
			'red-100': '#631200',
			'red-20': '#ffcdc2',
			'red-30': '#fca08c',
			'red-40': '#ff4d26',
			'red-50': '#e52900',
			'red-60': '#c72502',
			'red-70': '#b12000',
			'red-80': '#981b00',
			'red-90': '#801700',
			'teal-10': '#eaf8f8',
			'teal-100': '#003f43',
			'teal-20': '#abf4f4',
			'teal-30': '#0ee2e2',
			'teal-40': '#00b9c4',
			'teal-50': '#00a1ab',
			'teal-60': '#00838b',
			'teal-70': '#007279',
			'teal-80': '#006268',
			'teal-90': '#005257',
			'warm-gray-10': '#f7f3f2',
			'warm-gray-100': '#171414',
			'warm-gray-20': '#e5e0df',
			'warm-gray-30': '#cac5c4',
			'warm-gray-40': '#ada8a8',
			'warm-gray-50': '#8f8b8b',
			'warm-gray-60': '#726e6e',
			'warm-gray-70': '#565151',
			'warm-gray-80': '#3c3838',
			'warm-gray-90': '#272525',
			'yellow-10': '#fcf4d6',
			'yellow-100': '#1c1500',
			'yellow-20': '#fddc69',
			'yellow-30': '#f1c21b',
			'yellow-40': '#d2a106',
			'yellow-50': '#b28600',
			'yellow-60': '#8e6a00',
			'yellow-70': '#684e00',
			'yellow-80': '#483700',
			'yellow-90': '#302400'
		},
		extend: {}
	},
	plugins: []
};

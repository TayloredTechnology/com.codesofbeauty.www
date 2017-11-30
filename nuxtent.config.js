// sanity notes
// page = a route to add to the actual router overiding normal route
// permalink is the path that would be typed to map into the actual content directory
module.exports = {
	content: [
		[ 'wholesome/recipes', {
			page: '/wholesome/recipes/_section/_slug',
			permalink: '/wholesome/recipes/:section/:slug',
			isPost: false,
			anchorLevel: 3,
			generate: [ 'get' ]
		} ],
		[ 'itstarts', {
			page: '/itstarts/_section/_slug',
			permalink: '/itstarts/:section/:slug',
			isPost: false,
			anchorLevel: 3,
			generate: [ 'get' ]
		} ]
		// [ '', {
		// 	permalink: '/:slug',
		// 	page: '/_content',
		// 	isPost: false,
		// 	anchorLevel: 3,
		// 	generate: [
		// 		'get', 'getAll'
		// 	]
		// } ]
	],

	api: {
		baseURL: process.env.NODE_ENV === 'production' ?
			'https://' + process.env.DOMAIN : 'http://localhost:3000'
	}
}
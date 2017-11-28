module.exports = {
	/*
	 ** Headers of the page
	 */
	head: {
		title: 'imortal nutrition',
		meta: [ {
				charset: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: 'Nuxt.js project'
			}
		],
		link: [ {
			rel: 'icon',
			type: 'image/x-icon',
			href: '/favicon.ico'
		} ]
	},
	/*
	 ** Customize the progress bar color
	 */
	loading: {
		color: '#3B8070'
	},
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** Run ESLint on save
		 */
		extend( config, ctx ) {
			if ( ctx.dev && ctx.isClient ) {
				config.module.rules.push( {
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				} )
			}
		}
	},
	modules: [
		'nuxtent',
		'nuxt-netlify-cms'
	],
	netlifyCms: {
		cmsConfig: {
			backend: {
				name: 'git-gateway',
				branch: 'master'
			},
			publish_mode: 'editorial_workflow',
			media_folder: 'content/images',
			collections: [ {
				name: 'blog',
				label: 'Blog',
				folder: 'content',
				create: true,
				slug: '{{slug}}',
				fields: [ {
						label: 'Layout',
						name: 'layout',
						widget: 'hidden',
						default: 'blog'
					},
					{
						label: 'Title',
						name: 'title',
						widget: 'string'
					},
					{
						label: 'Publish Date',
						name: 'date',
						widget: 'datetime'
					},
					{
						label: 'Featured Image',
						name: 'thumbnail',
						widget: 'image'
					},
					{
						label: 'Rating (scale of 1-5)',
						name: 'rating',
						widget: 'number'
					},
					{
						label: 'Body',
						name: 'body',
						widget: 'markdown'
					}
				]
			} ]
		},
		adminPath: 'cms'
	}
}

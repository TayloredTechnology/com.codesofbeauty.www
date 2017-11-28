module.exports = {
	// content/HelloWorld.md --> posts/hello-world
	content: {
		page: '/posts/_slug',
		permalink: ':slug',
		isPost: false,
		generate: [
			'get',
			'getAll'
		]
	}
}

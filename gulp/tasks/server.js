export const server = function(params){
	app.plugins.browsersync.init({
		server:{
			baseDir: `${app.path.build.html}`
		},
		notify: false,
		port: 3000,
	})
}
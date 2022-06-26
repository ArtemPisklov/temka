import  webpack  from "webpack-stream";
import { buildFolder } from "../config/path.js";


export const js = function(){
	return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
		.pipe(webpack({
			mode: app.isBuild ? 'production' : 'development',
			output: {
				filename: 'app.min.js',
			}
		}))
		.pipe(app.gulp.dest(`${buildFolder}/js/`))
		.pipe(app.plugins.browsersync.stream());
}

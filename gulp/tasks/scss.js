import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import GulpCleanCss from 'gulp-clean-css';
import webpcss from 'gulp-webpcss';
import autoPrefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';



const sass = gulpSass(dartSass);

export const scss = function(){
	return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
		.pipe(sass({
			outputStyle: 'expanded'
		}))
		.pipe(
			app.plugins.if(
				app.isBuild,
				autoPrefixer({
					grid: true,
					overrideBrowserlist: ['last 3 versions'],
					cascade: true
		}))
		)
		.pipe(app.gulp.dest(app.path.build.scss)) //-- НЕ сжатая версия
		.pipe(
			app.plugins.if(
				app.isBuild,
				GulpCleanCss()
				)
		)
		.pipe(rename({
			extname: ".min.css"
		}))
		.pipe(app.plugins.replace(/@img\//g, '../img/'))
		.pipe(app.gulp.dest(app.path.build.scss))
		.pipe(app.plugins.browsersync.stream());
}

import del from "del";
import GulpZip from "gulp-zip";


export const zip = function(){
	del(`./${app.path.rootFolder}.zip`);
	return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
		.pipe(GulpZip(`${app.path.rootFolder}.zip`))
		.pipe(app.gulp.dest('./'));
}
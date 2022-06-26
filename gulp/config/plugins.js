import replace from "gulp-replace";
import newer from "gulp-newer";
import browsersync from "browser-sync";
import ifPlugin from "gulp-if";

export const plugins = {
	replace: replace, 
	browsersync: browsersync,
	newer: newer,
	if: ifPlugin,
}
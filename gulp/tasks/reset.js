import del from "del";
export const reset = function(){
	return del(app.path.clean);
}
export default class Student{
	/**
	 * [constructor description]
	 * @param  {[type]} firstname [description]
	 * @param  {[type]} lastname  [description]
	 * @param  {[type]}           [description]
	 * @return {[type]}           [description]
	 */
	constructor(firstname, lastname, age, sexe ){
		this.firstname  = firstname || Jhon;
		this.lastname 	= lastname || Smith;
		this.age 		= age || 0;
		this.sexe 		= sexe || "indeterminer";
		this.score      = 0;
		this.present_number = 0;
		this.absent_number = 0;
		this.retard_number = 0;
		this.participation = 0;
		this.photo         = "images/profile_default";
	}
}
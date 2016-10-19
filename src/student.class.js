export default class Student{
	/**
	 * [constructor description]
	 * @param  {[type]} firstname [description]
	 * @param  {[type]} lastname  [description]
	 * @param  {[type]}           [description]
	 * @return {[type]}           [description]
	 */
	constructor(firstname, lastname, age , photo_url){
		this.firstname  		   = firstname || "John";
		this.lastname 			   = lastname || "Doe";
		this.age 				   = age || 0;
	    this.photo_url      	   = photo_url || "images/profile_default.png" ;
		this.score          	   = 0;
		this.present_number 	   = 0;
		this.absent_number  	   = 0;
		this.retard_number  	   = 0;
		this.participation_number  = 0;
	}
}
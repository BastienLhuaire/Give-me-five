import Student from './student.class';
import {student_list} from './student_list';
import {student_display} from './student_display';

var moment = require('moment');
console.log(moment().format("dddd, MMMM Do"))
var give_me_five = {

	init: function(){

		// ajout des élèves a l'appli
		let students = [
			new Student('Bastien', "Lhuaire", 19, "M"),
			new Student('Stan','Xiong', 17, "M"),
			new Student('Joel','Alves', 22, "M"),
			new Student('Clement', "Teboul", 19, "M"),
		];

		student_list.init(students)		

		console.log("Give me Five is initiated and  ready");
	}

};
student_display.draw();
give_me_five.init()

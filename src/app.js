import Student from './student.class';
import {student_list} from './student_list';
import {student_display} from './student_display';

let moment = require('moment');
let give_me_five = {

	init: function(){

		// ajout des élèves a l'appli
		let students = [
			new Student('Bastien', "Lhuaire", 19, "M","images/bastien.jpg"),
			new Student('Stan','Xiong', 17, "M"),
			new Student('Joel','Alves', 22, "M","images/joel.jpg"),
			new Student('Clement', "Teboul", 19, "M"),
		];

		student_list.init(students,student_display);
		popup_add_student(student_list,Student);
		console.log("Give me Five is initiated and  ready");
	}

};
function popup_add_student(){
	$( "#form_add" ).on("submit",function( event ) {
		event.preventDefault();
		let firstname = $( "input#firstname" ).val(),
		    lastname = $( "input#lastname" ).val(),
		    photo = "images/";
		photo+=$("input#photo").val();
	  	student_list.add_student(new Student(firstname,lastname,18,"M",photo),student_display);
	  	$("#popup_add_student").modal('hide');
	});
}
give_me_five.init();

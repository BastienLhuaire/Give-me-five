import Student from './student.class';
import {student_list} from './student_list';
import {student_display} from './student_display';

let moment = require('moment');
let give_me_five = {

	init: function(){

		// ajout des élèves a l'appli
		let students = [
			new Student('Bastien', "Lhuaire", 19,"images/bastien.jpg"),
			new Student('Stan','Xiong', 17),
			new Student('Joel','Alves', 22,"images/joel.jpg"),
			new Student('Clement', "Teboul", 19),
		];

		student_list.init(students,student_display);
		student_display.init();
		popup_add_student();
		popup_del_student();
		console.log("Give me Five is initiated and  ready");
	}

};
function popup_del_student(){
	$( "#popup_delete .confirm_del" ).on("click",function(){
		let id = student_list.student_selected.id;
		student_list.students.splice(id,1);
		student_list.delet_student(student_display);
		$("#popup_delete").modal('hide');
		$('#partie_display').empty();
	});
}
function popup_add_student(){
	$( "#form_add" ).on("submit",function( event ) {
		event.preventDefault();
		let firstname = $( "input#firstname" ).val(),
		    lastname = $( "input#lastname" ).val(),
		    age = $( "input#age" ).val(),
		    photo = "images/";
		photo+=$("input#photo").val();
	  	student_list.add_student(new Student(firstname,lastname,age,photo),student_display);
	  	$("#popup_add_student").modal('hide');
	});
}
give_me_five.init();

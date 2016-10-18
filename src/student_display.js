import {student_list} from './student_list';

let student_display = {

	draw: function( ){

		let student = student_list.get_selected(),
		    $display = $('#partie_display'),
			$one 	= $display.children().detach();
		if (student!=null) {

		//  création de la représentation de la partie affichage
		let div 		= $one.clone();
		$display.append(div);
		$("#partie_display .nom_titre").empty();
		console.log(student)
		$("#partie_display .nom_titre").append(student.firstname+" "+student.lastname);
	};
		// gestion des click
	/*	
		let self = this;
		
		$('#students').on('click', 'li', function(){

			let index = $( "#students li" ).index( this );
			self.select_student(self.students[index]);		
		});*/
	}
};

export {student_display};
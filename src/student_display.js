import {student_list} from './student_list';

let student_display = {

	div_display:$('#partie_display').children().detach(),

	draw: function(){
		let student = student_list.get_selected(),
			$display = $("#partie_display");
		$display.empty();
		if (student!=null) {
			//  création de la représentation de la partie affichage
			let div 		= this.div_display.clone();
			$('#partie_display').append(div);
			$("#partie_display .nom_titre").empty();
			$("#partie_display .nom_titre").append(student.firstname+" "+student.lastname);
			//changement de l'image
			$(".image_profile").attr("src",student.photo_url);
		}
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
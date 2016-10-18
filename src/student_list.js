let student_list = {

	students: [],
	student_selected: null,

	select_student:  function( student ){

		this.student_selected = student;
		$('#students li').removeClass('selected_student')
						.eq(student.id)
						.addClass('selected_student');
	},

	get_selected: function(){
		return this.student_selected;
	},

	init: function( students , display_student){
		this.students = students;
		//  création de la représentation de la liste
		
		let $students = $('#students'),
			$one 	= $students.children('li').detach();

		for(let j=0; j<students.length; j++){

			let li 		= $one.clone(),
			    student 	= this.students[j];
			student.id 	= j;

			li.attr('title', student.firstname);
			li.attr('id',j);
			$students.append(li);
			$("#"+j+" .nom").append(student.firstname+" "+student.lastname);
			$("#"+j).removeClass('selected_student');
		}

		// eleve par defaut
		
		this.select_student(this.students[0]);

		// gestion des click
		
		let self = this;
		
		$('#students').on('click', 'li', function(){

			let index = $( "#students li" ).index( this );
			self.select_student(self.students[index]);	
			display_student.draw();
		});


		console.log('Liste : students ready');
	}
};

export {student_list};
let student_list = {

	students: [],
	student_selected: null,
	li_student:$('#students').children('li').detach(),

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
		
		let $one = this.li_student;

		for(let j=0; j<students.length; j++){

			let li 		= $one.clone(),
			    student 	= this.students[j];
			student.id 	= j;

			li.attr('title', student.firstname);
			li.attr('id',j);
			$("#students").append(li);
			//changement du nom
			$("#"+j+" .nom").append(student.firstname+" "+student.lastname);
		}

		// gestion des click
		
		let self = this;
		
		$('#students').on('click', 'li', function(){

			let index = $( "#students li" ).index( this );
			self.select_student(self.students[index]);	
			display_student.draw();
		});


		console.log('Liste : students ready');
	},
	add_student: function(student){
		this.students.push(student);
		let $new_student = this.li_student,
			new_id		 = this.students.length-1;
		$new_student.attr("id",new_id);
		$new_student.attr('title', student.firstname);
		$("#students").append($new_student);
		$("#"+new_id+" .nom").append(student.firstname+" "+student.lastname);
	}
};

export {student_list};
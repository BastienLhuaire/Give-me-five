function tri(a,b)
{
return (a.lastname > b.lastname)?1:-1;
}
let student_list = {

	students: [],
	student_selected: null,
	li_student:$('#students_ul').children('li').detach(),

	select_student:  function( student ){

		this.student_selected = student;
		$('#students_ul li').removeClass('selected_student')
						.eq(student.id)
						.addClass('selected_student');
	},

	get_selected: function(){
		return this.student_selected;
	},

	init: function( students , display_student){
		this.students = students;
		this.students.sort(tri);
		//  création de la représentation de la liste
		
		let $one = this.li_student;
		$("#students_ul").empty();
		for(let j=0; j<students.length; j++){

			let li 		= $one.clone(),
			    student = this.students[j];
			student.id 	= j;

			li.attr('title', student.firstname);
			li.attr('id',j);
			$("#students_ul").append(li);
			//changement du nom
			$("#"+j+" .nom").append(student.firstname+" "+student.lastname);
		}

		// gestion des click
		
		let self = this;
		
		$('#students_ul').on('click', 'li', function(){

			let index = $( "#students_ul li" ).index( this );
			self.select_student(self.students[index]);	
			display_student.draw();
		});


		console.log('Liste : students ready');
	},
	add_student: function(student,display_student){
		this.students.push(student);
		this.init(this.students,display_student);
	},
	delet_student: function(display_student){
		this.init(this.students,display_student);
	}
};

export {student_list};
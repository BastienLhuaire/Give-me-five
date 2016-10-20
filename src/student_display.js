import {student_list} from './student_list';

let student_display = {

	div_display:$('#partie_display').children().detach(),
	draw: function(type){
		let student = student_list.get_selected(),
			$display = $("#partie_display");
		$display.empty();
		if (student!=null) {
			//  création de la représentation de la partie affichage
			let div 		= this.div_display.clone();
			$('#partie_display').append(div);
			//gestion du clik info
			$(".info_button").on("click",function(){student_display.draw("info")});
			$("#partie_display .nom_titre").empty();
			$("#partie_display .nom_titre").append(student.firstname+" "+student.lastname);
			//changement de l'image
			$(".image_profile").attr("src",student.photo_url);
		}
		//partie display info
		if (type=="info") {
			let student = student_list.get_selected();
			$("#partie_display tr").empty();
			$("#partie_display .info_button").html('<');
			$(".info_button").on("click",function(){student_display.draw()});

			//rempli le tableau des infos
			let c = 0;
			for (var i in student) {
				//ferme le for pour les propriétées non affichées
				if (i=="firstname") break;
				c++;
				if (c%2!=1) {
					$("#partie_display tr.success").append("<td>"+i+" : "+student[i]+"</td>");
				}else{
					$("#partie_display tr.active").append("<td>"+i+" : "+student[i]+"</td>");
				}				
			};
		};
	}
};
export {student_display};
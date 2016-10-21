export default function init_score(student,student_list){
	let $td = $(".score_tab td");
	for (let i = 0; i < $td.length; i++) {
		let td = $td[i];
		let prop = $(td).attr("id");
		//permet de changer les valeur avant d'appuyer sur un bouton
		$(td).children("span").html(student[prop]);
		calcul_score(student,score_tab,student_list);
		//ajoute 1 a la propriété dans laquelle est le bouton
		$(td).on("click", '.plus',function(){
			student[prop]++;
			$(td).children("span").html(student[prop]);
			calcul_score(student,score_tab,student_list);
		});
		//enlève 1 a la propriété dans laquelle est le bouton (min 0)
		$(td).on("click", '.moins',function(){	
			if (student[prop]>0) {
				student[prop]--;
				$(td).children("span").html(student[prop]);
				calcul_score(student,score_tab);
			};
		});
	};

};

function calcul_score(student,score_tab,student_list){
	let id = student.id;
	student.score=0;
	for (let pt in score_tab) {
		student.score += score_tab[pt]*student[pt];
	};
	$(".score").children("span").html(student.score);
	$("#"+id+" .score_list").children("span").html(student.score);
	localStorage.setItem("list_student",JSON.stringify(student_list.students));
}

let score_tab = {
	presence 	  : 10,
	absence		  : -10,
	retard		  : -2,
	participation : 2,
	passage		  : 4
}
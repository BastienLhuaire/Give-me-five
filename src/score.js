export default function init_score(student){
	let $td = $(".score_tab td");
	for (let i = 0; i < $td.length; i++) {
		let td = $td[i];
		let prop = $(td).attr("id");
		$(td).on("click", '.plus',function(){
			student[prop]++;
			$(td).children("span").html(student[prop]);
			calcul_score(student,score_tab);
		});
		$(td).on("click", '.moins',function(){	
			if (student[prop]>0) {
				student[prop]--;
				$(td).children("span").html(student[prop]);
				calcul_score(student,score_tab);
			};
		});
	};

};

function calcul_score(student,score_tab){
	let id = student.id;
	student.score=0;
	for (let pt in score_tab) {
		student.score += score_tab[pt]*student[pt];
	};
	$(".score").children("span").html(student.score);
	$("#"+id+" .score_list").children("span").html(student.score);
}

let score_tab = {
	presence 	  : 10,
	absence		  : -10,
	retard		  : -2,
	participation : 2,
	passage		  : 4
}
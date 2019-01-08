var user;
var m = ('Nam')
var fm = ('Nữ')
var race_default = ('Kinh')
function pos(number){
//thông tin học sinh
    if (number == "1") {
    user = ('Dương Huyền Anh')
    gender = fm
    birth = ('27/08/2003')
	bev = ('Tốt')
	str = ('Giỏi')
	score = ('8.8')
	ach = ('Học sinh giỏi')
	//điểm các môn
		//điểm miệng
	diemmiengtoan = ('8')
	diemmiengvatly = ('9')
	diemmienghoahoc = ('7')
	diemmiengsinhhoc = ('10')
	diemmiengtin = ('10')
	diemmiengvan = ('9')
	diemmiengsu = ('9')
	diemmiengdia = ('9')
	diemmiengnga = ('9,10')
	diemmienggdcd = ('10')
	diemmiengcongnghe = ('9')
	diemmiengquocphong = ('10')
	diemmiengtheduc = ('Đ')
		//điểm 15p
	diem15ptoan = ('9,10,9')
	diem15pvatly = ('8,9')
	diem15phoahoc = ('7.5,8,9')
	diem15psinhhoc = ('9')
	diem15ptin = ('10,8')
	diem15pvan = ('8,9,9')
	diem15psu = ('9,8')
	diem15pdia = ('8,10')
	diem15pnga = ('10,9,9')
	diem15pgdcd = ('10')
	diem15pcongnghe = ('10,9')
	diem15pquocphong = ('9')
	diem15ptheduc = ('Đ')
		//điểm 45p
	diem45ptoan = ('9,10,9')
	diem45pvatly = ('9,7.5')
	diem45phoahoc = ('8,7,8')
	diem45psinhhoc = ('9.5')
	diem45ptin = ('9,7')
	diem45pvan = ('8,8,8')
	diem45psu = ('9')
	diem45pdia = ('9')
	diem45pnga = ('9,10,9,9')
	diem45pgdcd = ('10')
	diem45pcongnghe = ('9.5')
	diem45pquocphong = ('9')
	diem45ptheduc = ('Đ')
		//điểm học kì
	diemhocki1toan = ('10')
	diemhocki1vatly = ('8.5')
	diemhocki1hoahoc = ('9')
	diemhocki1sinhhoc = ('8.5')
	diemhocki1tin = ('7')
	diemhocki1van = ('7.5')
	diemhocki1su = ('8.5')
	diemhocki1dia = ('8')
	diemhocki1nga = ('9')
	diemhocki1gdcd = ('9')
	diemhocki1congnghe = ('8.5')
	diemhocki1quocphong = ('9')
	diemhocki1theduc = ('Đ')
		//điểm trung bình
	diemtbtoan = ('9.4')
	diemtbvatly = ('8.5')
	diemtbhoahoc = ('8')
	diemtbsinhhoc = ('9.1')
	diemtbtin = ('8.1')
	diemtbvan = ('8.1')
	diemtbsu = ('8.7')
	diemtbdia = ('8.6')
	diemtbnga = ('9.3')
	diemtbgdcd = ('9.6')
	diemtbcongnghe = ('9.1')
	diemtbquocphong = ('9.1')
	diemtbtheduc = ('Đ')
    }
    if (number == "2") {
    user = ('Dương Tùng Anh')
    gender = m
    birth = ('21/11/2003')
	bev = ('Tốt')
	str = ('Khá')
	score = ('8.0')
	ach = ('Học sinh tiên tiến')
  	//điểm các môn
		//điểm miệng
	diemmiengtoan = ('8')
	diemmiengvatly = ('9')
	diemmienghoahoc = ('7')
	diemmiengsinhhoc = ('10')
	diemmiengtin = ('10')
	diemmiengvan = ('9')
	diemmiengsu = ('9')
	diemmiengdia = ('9')
	diemmiengnga = ('9,10')
	diemmienggdcd = ('10')
	diemmiengcongnghe = ('9')
	diemmiengquocphong = ('10')
	diemmiengtheduc = ('Đ')
		//điểm 15p
	diem15ptoan = ('9,10,9')
	diem15pvatly = ('8,9')
	diem15phoahoc = ('7.5,8,9')
	diem15psinhhoc = ('9')
	diem15ptin = ('10,8')
	diem15pvan = ('8,9,9')
	diem15psu = ('9,8')
	diem15pdia = ('8,10')
	diem15pnga = ('10,9,9')
	diem15pgdcd = ('10')
	diem15pcongnghe = ('10,9')
	diem15pquocphong = ('9')
	diem15ptheduc = ('Đ')
		//điểm 45p
	diem45ptoan = ('9,10,9')
	diem45pvatly = ('9,7.5')
	diem45phoahoc = ('8,7,8')
	diem45psinhhoc = ('9.5')
	diem45ptin = ('9,7')
	diem45pvan = ('8,8,8')
	diem45psu = ('9')
	diem45pdia = ('9')
	diem45pnga = ('9,10,9,9')
	diem45pgdcd = ('10')
	diem45pcongnghe = ('9.5')
	diem45pquocphong = ('9')
	diem45ptheduc = ('Đ')
		//điểm học kì
	diemhocki1toan = ('10')
	diemhocki1vatly = ('8.5')
	diemhocki1hoahoc = ('9')
	diemhocki1sinhhoc = ('8.5')
	diemhocki1tin = ('7')
	diemhocki1van = ('7.5')
	diemhocki1su = ('8.5')
	diemhocki1dia = ('8')
	diemhocki1nga = ('9')
	diemhocki1gdcd = ('9')
	diemhocki1congnghe = ('8.5')
	diemhocki1quocphong = ('9')
	diemhocki1theduc = ('Đ')
		//điểm trung bình
	diemtbtoan = ('9.4')
	diemtbvatly = ('8.5')
	diemtbhoahoc = ('8')
	diemtbsinhhoc = ('9.1')
	diemtbtin = ('8.1')
	diemtbvan = ('8.1')
	diemtbsu = ('8.7')
	diemtbdia = ('8.6')
	diemtbnga = ('9.3')
	diemtbgdcd = ('9.6')
	diemtbcongnghe = ('9.1')
	diemtbquocphong = ('9.1')
	diemtbtheduc = ('Đ')
    }
}

function show_student_info(click){
    document.getElementById("student_fullname").innerHTML = user;
    document.getElementById("student_gender").innerHTML = gender;
    document.getElementById("student_dob").innerHTML = birth;
    document.getElementById("student_race").innerHTML = race_default;
	document.getElementById("student_behaviour").innerHTML = bev;
	document.getElementById("student_study_strength").innerHTML = str;
	document.getElementById("student_overall_score").innerHTML = score;
	document.getElementById("student_achievement").innerHTML = ach;
  //inclass score điểm kiểm tra miệng
  	document.getElementById("student_score_inclass_math").innerHTML = im;
    document.getElementById("student_score_inclass_physic").innerHTML = ip;
    document.getElementById("student_score_inclass_chemistry").innerHTML = ic;
    document.getElementById("student_score_inclass_bio").innerHTML = ib;
    document.getElementById("student_score_inclass_IT").innerHTML = ii;
    document.getElementById("student_score_inclass_literature").innerHTML = il;
    document.getElementById("student_score_inclass_history").innerHTML = ih;
    document.getElementById("student_score_inclass_geography").innerHTML = ig;
    document.getElementById("student_score_inclass_russian").innerHTML = ir;
    document.getElementById("student_score_inclass_cilvic_education").innerHTML = ice;
    document.getElementById("student_score_inclass_technology").innerHTML = it;
    document.getElementById("student_score_inclass_defense_education").innerHTML = ide;
    document.getElementById("student_score_inclass_physical_education").innerHTML = ipe;
  //15min score điểm 15 phút
    document.getElementById("student_score_15_minutes_math").innerHTML = 15m;
    document.getElementById("student_score_15_minutes_physic").innerHTML = 15p;
    document.getElementById("student_score_15_minutes_chemistry").innerHTML = 15c;
    document.getElementById("student_score_15_minutes_bio").innerHTML = 15b;
    document.getElementById("student_score_15_minutes_IT").innerHTML = 15i;
    document.getElementById("student_score_15_minutes_literature").innerHTML = 15l;
    document.getElementById("student_score_15_minutes_history").innerHTML = 15h;
    document.getElementById("student_score_15_minutes_geography").innerHTML = 15g;
    document.getElementById("student_score_15_minutes_russian").innerHTML = 15r;
    document.getElementById("student_score_15_minutes_cilvic_education").innerHTML = 15ce;
    document.getElementById("student_score_15_minutes_technology").innerHTML = 15t;
    document.getElementById("student_score_15_minutes_defense_education").innerHTML = 15de;
    document.getElementById("student_score_15_minutes_physical_education").innerHTML = 15pe;
  //45min score điểm 45 phút
    document.getElementById("student_score_45_minutes_math").innerHTML = 45m;
    document.getElementById("student_score_45_minutes_physic").innerHTML = 45p;
    document.getElementById("student_score_45_minutes_chemistry").innerHTML = 45c;
    document.getElementById("student_score_45_minutes_bio").innerHTML = 45b;
    document.getElementById("student_score_45_minutes_IT").innerHTML = 45i;
    document.getElementById("student_score_45_minutes_literature").innerHTML = 45l;
    document.getElementById("student_score_45_minutes_history").innerHTML = 45h;
    document.getElementById("student_score_45_minutes_geography").innerHTML = 45g;
    document.getElementById("student_score_45_minutes_russian").innerHTML = 45r;
    document.getElementById("student_score_45_minutes_cilvic_education").innerHTML = 45ce;
    document.getElementById("student_score_45_minutes_technology").innerHTML = 45t;
    document.getElementById("student_score_45_minutes_defense_education").innerHTML = 45de;
    document.getElementById("student_score_45_minutes_physical_education").innerHTML = 45pe;
  //course score điểm học kì
    document.getElementById("student_score_course_math").innerHTML = cm;
    document.getElementById("student_score_course_physic").innerHTML = cp;
    document.getElementById("student_score_course_chemistry").innerHTML = cc;
    document.getElementById("student_score_course_bio").innerHTML = cb;
    document.getElementById("student_score_course_IT").innerHTML = ci;
    document.getElementById("student_score_course_literature").innerHTML = cl;
    document.getElementById("student_score_course_history").innerHTML = ch;
    document.getElementById("student_score_course_geography").innerHTML = cg;
    document.getElementById("student_score_course_russian").innerHTML = cr;
    document.getElementById("student_score_course_cilvic_education").innerHTML = cce;
    document.getElementById("student_score_course_technology").innerHTML = ct;
    document.getElementById("student_score_course_defense_education").innerHTML = cde;
    document.getElementById("student_score_course_physical_education").innerHTML = cpe;
  //overall score điểm trung bình
    document.getElementById("student_score_overall_math").innerHTML = om;
    document.getElementById("student_score_overall_physic").innerHTML = op;
    document.getElementById("student_score_overall_chemistry").innerHTML = oc;
    document.getElementById("student_score_overall_bio").innerHTML = ob;
    document.getElementById("student_score_overall_IT").innerHTML = oi;
    document.getElementById("student_score_overall_literature").innerHTML = ol;
    document.getElementById("student_score_overall_history").innerHTML = oh;
    document.getElementById("student_score_overall_geography").innerHTML = og;
    document.getElementById("student_score_overall_russian").innerHTML = or;
    document.getElementById("student_score_overall_cilvic_education").innerHTML = oce;
    document.getElementById("student_score_overall_technology").innerHTML = ot;
    document.getElementById("student_score_overall_defense_education").innerHTML = ode;
    document.getElementById("student_score_overall_physical_education").innerHTML = ope;
}

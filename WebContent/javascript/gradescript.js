/**
 * 
 */
	function check(){
		
		if(document.all.name.value==""){
			alert("请输入员工姓名!");
			document.myform.name.focus();
		}
		else if(document.all.dept.value==""){
			alert("请输入所属部门!");
			document.myform.dept.focus();
		}
		else if(document.all.date.value==""){
			alert("请输入考核期限!");
			document.myform.date.focus();
		}
		else if(document.getElementById("score").value==""){
			alert("请输入分数!");
			document.myform.grade.focus();
		}
		else {
			alert("提交成功！")
			var frm = document.myform;
		    frm.action = "EmpGradeServlet";
		    frm.submit();
		}
	}
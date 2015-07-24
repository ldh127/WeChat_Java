view_tmp = "{\"type\":\"view\",\"name\":\"{name}\",\"url\":\"{url}\"}";
click_tmp = "{\"type\":\"click\",\"name\":\"{name}\",\"key\":\"{key}\"}";
//sub_button_tmp=" {\"name\": \"{sub_name}\", \"sub_button\": [{items}]}";
sub_button_tmp=" {\"name\": \"{sub_name}\", \"sub_button\": [";

btn_total=0;
sub_btn_total=0;

result="";

json_head=" {\"button\":[";

json_end="]}";

sub_button_end = json_end;

end_state=0;//编辑状态 若编辑完成则替换为1

sub_menu_edit=1//子菜单编辑状态 若编辑完成则置为1 未编辑完成置为0

menu_head = "<div class=\"menu_head\"><input type=\"text\" name=\"sub_name\" id=\"sub_name\" value=\"\" /></div>";
$(document).ready(function(){
	$("input[name=sub_button_event]").css("display","none");
	
	$("input[name=button_event]").css("display","none");
	
	$("#add_conan").click(function(){
		$("div.menu_detail").append(menu_head);
	});
	//左边菜单详情栏目
	$(".menu_head").on("click",function(){
		$(".menu_detail").append(menu_head);
	});
	
	$("#button_type").change(function(){
		var type=$(this).val();
		if(type=="click"){
			$("#sub_menu_set").css("display","none");
			$("input[name=button_event]").css("display","");
			$("input[name=button_event]").attr("placeholder","请输入回复信息");
		}else if(type=="view"){
			$("#sub_menu_set").css("display","none");
			$("input[name=button_event]").css("display","");
			$("input[name=button_event]").attr("placeholder","请输入跳转URL");
		}else{
			
			$("input[name=button_event]").css("display","none");
			$("#sub_menu_set").css("display","");
		}
		sub_menu_edit=1;
	});
	
	$("#sub_button_type").change(function(){
		var type=$(this).val();
		if(type=="click"){
			$("input[name=sub_button_event]").css("display","");
			$("input[name=sub_button_event]").attr("placeholder","请输入回复关键字");
		}else if(type=="view"){
			$("input[name=sub_button_event]").css("display","");
			$("input[name=sub_button_event]").attr("placeholder","请输入跳转URL");
		}else{
			$("input[name=sub_button_event]").css("display","none");
		}
	});
	//结束当前编辑
	$("#end_curr").click(function(){
		end_state=1
		result = result.substring(0,result.length-1);
		result+=json_end;
		console.log(result);
	});
	//保存当前
	$("#save_curr").click(function(){
		var type = $("#button_type").val();
		var Event = $("input[name=button_event]").val();
		var name = $("input[name=button_name]").val();
		if(result==""){
			result+=json_head;
		}
		
		if(type=="click"){
			var tmp = click_tmp;
			tmp = tmp.replace("{name}",name);
			tmp = tmp.replace("{key}",Event);	
			result+=tmp+",";
		}else if(type=="view"){
			var tmp = view_tmp;
			tmp = tmp.replace("{name}",name);
			tmp = tmp.replace("{url}",Event);	
			result+=tmp+","
		}else if(type=="sub_menu"){
			alert("若完成子菜单编辑请点击\n完成子菜单编辑");
//			var tmp = sub_button_tmp;
//			var name = $("input[name=button_name]").val();
//			tmp = tmp.replace("{sub_name}",name);
//			result+=tmp+",";
		}
		
		console.log(result);
	}
	);
	//添加子菜单按钮
	$("#add_sub_menu_btn").click(function(){
		if(sub_menu_edit==1){
			alert("请先点击添加子菜单");return;
		}
		var type = $("#sub_button_type").val();
		var sub_menu_name=$("input[name=sub_menu_name]").val();
		var sub_menu_key=$("input[name=sub_button_event]").val();
		
		if(type=="click"){
			var tmp = click_tmp;
			tmp = tmp.replace("{name}",sub_menu_name);
			tmp = tmp.replace("{key}",sub_menu_key);	
			result+=tmp+",";
		}else if(type=="view"){
			var tmp = view_tmp;
			tmp = tmp.replace("{name}",sub_menu_name);
			tmp = tmp.replace("{url}",sub_menu_key);	
			result+=tmp+",";
		}
		console.log(result);
	});
	//添加子菜单
	$("#add_sub_menu").click(function(){
		sub_menu_edit=0;//转换成编辑状态
		var sub_name=$("input[name=button_name]").val();
		if(result!=""){
			result+=sub_button_tmp;	
		}else{
			result+=json_head+sub_button_tmp;
		}
		
		var tmp = result;
		result = tmp.replace("{sub_name}",sub_name);
		console.log(result);
	});
	//添加子菜单结束 （完成子菜单编辑）
	$("#add_sub_menu_end").click(function(){
		if(sub_menu_edit==1){
			alert("当前并没有子菜单在编辑中");
			return;
		}
		result = result.substring(0,result.length-1);
		result+=sub_button_end+",";
		console.log(result);
	});
	//发布
	$("#pubBt").click(function(){
		if(end_state==0){
			alert("请点击结束当前按钮编辑");
			return;
		}
		$.post("menu_make_menu",{
			json_code:result
		},function(data,status){
			alert(data+"\n"+status);
		});
	});
	
});
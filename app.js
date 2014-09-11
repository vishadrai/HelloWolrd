var _arrList=[0,0,0];
var _hight=0;
var _htmlArr = [];
$(document).on('click', '[name=user]', function (e) {
	var _val = $(this).val();
	switch(_val) {
	    case 'A':
	       _arrList[0] +=1;
	        break;
	    case 'B':
	        _arrList[1] +=1;
	        break;
	    default:
	        _arrList[2] +=1;
	}
});

function doneHandler1() {
	debugger;
	var _htmlArr = [];
	for (i = 0; i < _arrList.length; i++){
		_hight = _arrList[i]*10;
		_htmlArr.push("<td bgcolor='#fff' align='center' valign='bottom' width='29'>"+_arrList[i]+"<br><div class='chartContent' style='height:"+_hight+";'></div></td>");	
	}
	$("tr#tblContent").append(_htmlArr);
	$('#tblgraph1').removeClass('clsNone');
	$('#tblgraph1').addClass('clsEle');
	$('input[name=user]').attr("disabled",true);
	//$('#Stage_jbeeb_3').hide();
}

$(document).on('click', '#startClick', function () {
	var handler = setInterval(function () {
		alert("Timeup");
		$("#startClick").attr("disabled", true);
		clearInterval(handler);
		doneHandler1();
	}, 60000);

});




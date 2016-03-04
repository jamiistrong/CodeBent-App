$(document).ready(function(){


	
	// Thanks to http://www.quirksmode.org/js/cookies.html for the below functions
	function createCookie(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}

	function readCookie(name) {
    var cookie = document.cookie.split(';'),
        length = cookie.length,
        i,
        cookie,
        nameEQ = name + '=';
    for (i = 0; i < length; i += 1) {
        cookie = cookie[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}
 
function eraseCookie(name) {
    createCookie(name, '', -1);
}
	
	
    
    
    
	var htmlCode = '<!--CODEBENT HTML5 TEMPLATE-->\n<!--Please do not rename or remove div named codeBentWrapper.\nThis allows you to render your code within the app properly-->\n<doctype! html> \n<html>\n    <head> \n        <title>Codebent Project1</title> \n        <meta name="viewport" \n            content="width=device-width,\n            user-scalable=no" />\n        <link/>\n        <script>\n        </script>\n    </head>\n    <body> \n        <div id="codeBentWrapper">\n            Hello World \n        </div>\n    </body>\n</html>';
	$('#editBox').val(htmlCode);
	$('#openModal').hide();
	$('.buttonBox').hide();
	$('.buttonBox2').hide();
	$('#toggleMenu').hide();
	$('#fontBox').hide();
	$('#closeMeNow').hide();
	//$('#editBox').focus();
	
	
	/* This works with the highlighttextarea JS plugin code, 
	realigns my default code and unformats it
	$('#editBox').highlightTextarea({
	    	words: ['<', '>']
	  	});
	*/



			//$('#promptLabel').css('opacity',0);
			$('#promptLabel').text('Start Coding!');
			$('#promptLabel').css('opacity',1);
			$('#promptLabel').css('color','white');
			$('#promptLabel').animate({opacity:0},6500);
	var randomMsg;
	var tap = 0;
	
	$('#setting').click(function(){
		tap++;
		if(tap == 1){
			$('#promptLabel').css('opacity',0);
			$('#promptLabel').text('Settings');
			$('#promptLabel').animate({opacity:1},300);
			$('#promptLabel').css('color','green');
		}
		if(tap == 2){
			$('#promptLabel').text('settings');
			//$('#promptLabel').animate({opacity:0},300);
			$('#promptLabel').css('color','gray');
			tap = 0;
		}
		if(tap == 0){
		$('#promptLabel').css('opacity',0);
			var quotes = new Array("Use images!", "Don't stop coding.","Keep Calm & Code","Back to work...", "C'est la code","Code it out","Eat. Sleep. Code.","Keep at it...", "Code big!","Add pizazz...", "Almost got it...");
			randno = quotes[Math.floor( Math.random() * quotes.length )];
			$('#promptLabel').text(randno);
			$('#promptLabel').animate({opacity:1},2000);
			$('#promptLabel').css('color','white');
			$('#promptLabel').animate({opacity:0},1500);
			
	}
		//$('#toggleMenu').slideToggle('slow');
		//this.style.border = this.style.border == '1px solid gray' ? '0px solid pink' : '1px solid gray';
		//$('#promptLabel').text('') = $('#promptLabel').text('') == $('#promptLabel').text('green') ? $('#promptLabel').text('qwer') : $('#promptLabel').text('green');
		this.style.backgroundColor = this.style.backgroundColor == 'green' ? '' : 'green';
		$('#toggleMenu').toggle(
		function(){
			$('.toggleMe').animate({
				height: "45", 
				padding:"2px 0",
				opacity:1
			}, 500);
		});
			
	});
	
	
	
	
	$('.toggleMe').click(function(){
		
		$('#toggleMenu').toggle(
			function(){
				$('.toggleMe').animate({
					height: "67", 
					padding:"2px 0",
				   
					opacity:.8
				}, 500);
				
			});
	});
	
	
	$('.toggleMe').click(function(){
		$('#promptLabel').css('font-size','1.25rem');
		$('#setting').css('background-color','');
		tap = 0;
		//$('#promptLabel').animate({opacity:0},600);
	});
	
	
	$('#sectionTags').click(function(){
		$('#promptLabel').css('opacity', 0);
		$('#promptLabel').animate({opacity:1},300);
		$('#promptLabel').text('Section Tags');
		$('#promptLabel').css('color', 'green');
		$('#loadBox').hide();
		$('#groupButtons').hide();
		$('#embedButtons').hide();
		$('#textButtons').hide();
		$('#tableButtons').hide();
		$('#formButtons').hide();
		$('#sectionButtons').show();
		
		$('#loadBox').hide();
		$('#decorButtons').hide();
		$('#spacingButtons').hide();
		$('#sizingButtons').hide();
		$('#webkitButtons').hide();
		$('#moreButtons').hide();
		$('#stylingButtons').hide();
	});
	
	$('#groupTags').click(function(){
		$('#promptLabel').css('opacity', 0);
		$('#promptLabel').animate({opacity:1},300);
		$('#promptLabel').text('Group Tags');
		$('#promptLabel').css('color', 'green');
		$('#loadBox').hide();
		$('#sectionButtons').hide();
		$('#embedButtons').hide();
		$('#textButtons').hide();
		$('#tableButtons').hide();
		$('#formButtons').hide();
		$('#groupButtons').show();
		
		$('#loadBox').hide();
		$('#decorButtons').hide();
		$('#spacingButtons').hide();
		$('#sizingButtons').hide();
		$('#webkitButtons').hide();
		$('#moreButtons').hide();
		$('#stylingButtons').hide();
	});
	
	$('#embedTags').click(function(){
		$('#promptLabel').css('opacity', 0);
		$('#promptLabel').animate({opacity:1},300);
		$('#promptLabel').text('Embed Tags');
		$('#promptLabel').css('color', 'green');
		$('#loadBox').hide();
		$('#sectionButtons').hide();
		$('#groupButtons').hide();
		$('#textButtons').hide();
		$('#tableButtons').hide();
		$('#formButtons').hide();
		$('#embedButtons').show();
		
		$('#loadBox').hide();
		$('#decorButtons').hide();
		$('#spacingButtons').hide();
		$('#sizingButtons').hide();
		$('#webkitButtons').hide();
		$('#moreButtons').hide();
		$('#stylingButtons').hide();
	});
	
	$('#textTags').click(function(){
		$('#promptLabel').css('opacity', 0);
		$('#promptLabel').animate({opacity:1},300);
		$('#promptLabel').text('Text Tags');
		$('#promptLabel').css('color', 'green');
		$('#loadBox').hide();
		$('#sectionButtons').hide();
		$('#groupButtons').hide();
		$('#embedButtons').hide();
		$('#tableButtons').hide();
		$('#formButtons').hide();
		$('#textButtons').show();
		
		$('#loadBox').hide();
		$('#decorButtons').hide();
		$('#spacingButtons').hide();
		$('#sizingButtons').hide();
		$('#webkitButtons').hide();
		$('#moreButtons').hide();
		$('#stylingButtons').hide();
	});
	
	$('#tableTags').click(function(){
		$('#promptLabel').css('opacity', 0);
		$('#promptLabel').animate({opacity:1},300);
		$('#promptLabel').text('Table Tags');
		$('#promptLabel').css('color', 'green');
		$('#loadBox').hide();
		$('#sectionButtons').hide();
		$('#groupButtons').hide();
		$('#embedButtons').hide();
		$('#textButtons').hide();
		$('#formButtons').hide();
		$('#tableButtons').show();
		
		$('#loadBox').hide();
		$('#decorButtons').hide();
		$('#spacingButtons').hide();
		$('#sizingButtons').hide();
		$('#webkitButtons').hide();
		$('#moreButtons').hide();
		$('#stylingButtons').hide();
	});
	
	$('#formTags').click(function(){
		$('#promptLabel').css('opacity', 0);
		$('#promptLabel').animate({opacity:1},300);
		$('#promptLabel').text('Form Tags');
		$('#promptLabel').css('color', 'green');
		$('#loadBox').hide();
		$('#sectionButtons').hide();
		$('#groupButtons').hide();
		$('#embedButtons').hide();
		$('#textButtons').hide();
		$('#tableButtons').hide();
		$('#formButtons').show();
		
		$('#loadBox').hide();
		$('#decorButtons').hide();
		$('#spacingButtons').hide();
		$('#sizingButtons').hide();
		$('#webkitButtons').hide();
		$('#moreButtons').hide();
		$('#stylingButtons').hide();
	});
	
	
	
	
	//HIDE ALL BUTTONS except those under the font styling CSS category
	$('#fontstylingCss').click(function(){
		$('#promptLabel').css('opacity',0);
			$('#promptLabel').text('Text Properties');
			$('#promptLabel').animate({opacity:1},300);
			$('#promptLabel').css('color','green');
		$('#sectionButtons').hide();
		$('#groupButtons').hide();
		$('#embedButtons').hide();
		$('#textButtons').hide();
		$('#tableButtons').hide();
		$('#formButtons').hide();
	
		$('#loadBox').hide();
		$('#decorButtons').hide();
		$('#spacingButtons').hide();
		$('#sizingButtons').hide();
		$('#webkitButtons').hide();
		$('#moreButtons').hide();
		$('#stylingButtons').show();
	});
	//HIDE ALL BUTTONS except those under the Decor CSS category
	$('#decorCss').click(function(){
		$('#promptLabel').css('opacity',0);
			$('#promptLabel').text('Styling Properties');
			$('#promptLabel').animate({opacity:1},300);
			$('#promptLabel').css('color','green');
		$('#sectionButtons').hide();
		$('#groupButtons').hide();
		$('#embedButtons').hide();
		$('#textButtons').hide();
		$('#tableButtons').hide();
		$('#formButtons').hide();
	
		$('#loadBox').hide();
		$('#decorButtons').show();
		$('#spacingButtons').hide();
		$('#sizingButtons').hide();
		$('#webkitButtons').hide();
		$('#moreButtons').hide();
		$('#stylingButtons').hide();
	});
	//HIDE ALL BUTTONS except those under the Spacing CSS category
	$('#spacingCss').click(function(){
		$('#promptLabel').css('opacity',0);
			$('#promptLabel').text('Position Properties');
			$('#promptLabel').animate({opacity:1},300);
			$('#promptLabel').css('color','green');
		$('#sectionButtons').hide();
		$('#groupButtons').hide();
		$('#embedButtons').hide();
		$('#textButtons').hide();
		$('#tableButtons').hide();
		$('#formButtons').hide();
	
		$('#loadBox').hide();
		$('#decorButtons').hide();
		$('#spacingButtons').show();
		$('#sizingButtons').hide();
		$('#webkitButtons').hide();
		$('#moreButtons').hide();
		$('#stylingButtons').hide();
	});
	//HIDE ALL BUTTONS except those under the Sizing CSS category
	$('#sizingCss').click(function(){
		$('#promptLabel').css('opacity',0);
			$('#promptLabel').text('Sizing Properties');
			$('#promptLabel').animate({opacity:1},300);
			$('#promptLabel').css('color','green');
		$('#sectionButtons').hide();
		$('#groupButtons').hide();
		$('#embedButtons').hide();
		$('#textButtons').hide();
		$('#tableButtons').hide();
		$('#formButtons').hide();
	
		$('#loadBox').hide();
		$('#decorButtons').hide();
		$('#spacingButtons').hide();
		$('#sizingButtons').show();
		$('#webkitButtons').hide();
		$('#moreButtons').hide();
		$('#stylingButtons').hide();
	});
	//HIDE ALL BUTTONS except those under the Webkit CSS category
	$('#webkitCss').click(function(){
		$('#promptLabel').css('opacity',0);
			$('#promptLabel').text('Webkit Properties');
			$('#promptLabel').animate({opacity:1},300);
			$('#promptLabel').css('color','green');
		$('#sectionButtons').hide();
		$('#groupButtons').hide();
		$('#embedButtons').hide();
		$('#textButtons').hide();
		$('#tableButtons').hide();
		$('#formButtons').hide();
	
		$('#loadBox').hide();
		$('#decorButtons').hide();
		$('#spacingButtons').hide();
		$('#sizingButtons').hide();
		$('#webkitButtons').show();
		$('#moreButtons').hide();
		$('#stylingButtons').hide();
	});
	//HIDE ALL BUTTONS except those under the more CSS category
	$('#moreCss').click(function(){
		$('#promptLabel').css('opacity',0);
			$('#promptLabel').text('More Properties');
			$('#promptLabel').animate({opacity:1},300);
			$('#promptLabel').css('color','green');
		$('#sectionButtons').hide();
		$('#groupButtons').hide();
		$('#embedButtons').hide();
		$('#textButtons').hide();
		$('#tableButtons').hide();
		$('#formButtons').hide();
	
		$('#loadBox').hide();
		$('#decorButtons').hide();
		$('#spacingButtons').hide();
		$('#sizingButtons').hide();
		$('#webkitButtons').hide();
		$('#moreButtons').show();
		$('#stylingButtons').hide();
	});
	
	
	
	//on click of HTML buttons, insert into text area
	$(".buttons").on('click', function() {
		var caretPos = document.getElementById("editBox").selectionStart;
		var textAreaTxt = $("#editBox").val();
		var addon = $(this).text();
		var styling = ' style="width: ; height: ; \n            background-color: ; border: ;\n            color: ;">'
		var insertMe = textAreaTxt.substring(0, caretPos) + '       <' + addon + styling+'\n              SampleText'+'\n' +'      </'+addon + '>\n'+ textAreaTxt.substring(caretPos) 
		$("#editBox").val(insertMe);
		
	});
	
	//on click of CSS buttons, insert into text area
	$(".buttons2").on('click', function() {
		var caretPos2 = document.getElementById("editBox").selectionStart;
		var textAreaTxt2 = $("#editBox").val();
		var addon2 = $(this).text();
		var styling2 = ':--- ;'
		var insertMe2 = textAreaTxt2.substring(0, caretPos2) + '\n'+ addon2 + styling2+ textAreaTxt2.substring(caretPos2) 
		$("#editBox").val(insertMe2);
		$('#editBox').focus(insertMe2);
		$(this).css('color', '#00FF00');
	});
	//on click of OTHER buttons, insert into text area
	$(".buttons3").on('click', function() {
		var caretPos3 = document.getElementById("editBox").selectionStart;
		var textAreaTxt3 = $("#editBox").val();
		var addon3 = $(this).text();
		//var styling3 = ';'
		var insertMe3 = textAreaTxt3.substring(0, caretPos3) + addon3 + textAreaTxt3.substring(caretPos3) 
		$("#editBox").val(insertMe3);
		$('#editBox').focus(insertMe3);
		$(this).css('color', '#00FF00');
	});
	
	
	
	//line break function
	$('#lineBreak').click(function(){
		//alert("hello world");
		//$("#editBox").val().after(" some text with some <b>bold</b> and and linebreak<br>");
		//var insertMe = $("#editBox").val($('#editBox').val() +'\n');
		var caretPos = document.getElementById("editBox").selectionStart;
		var textAreaTxt = $("#editBox").val();
		var addon2 = '\n            '
		$("#editBox").val(textAreaTxt.substring(0, caretPos) + addon2 + textAreaTxt.substring(caretPos) );
	});
	
	//indent function
	$('#indentText').click(function(){
		var caretPos = document.getElementById("editBox").selectionStart;
		var textAreaTxt = $("#editBox").val();
		var addon2 = '    '
		$("#editBox").val(textAreaTxt.substring(0, caretPos) + addon2 + textAreaTxt.substring(caretPos) );
	
	});
	
	//reset function to original template
	$('#resetText').click(function(){
		//alert("hello world");
		$('#editBox').val(htmlCode);
	});
	
	//run 
	$('#runButton').click(function(){
		var myCode = $('#editBox').val();
		$('#openModal').html(myCode);
		$('#openModal').show();
	});
	
	//copy function NEEDS UPDATE
	$('button#copyText').zclip({
		path: 'scripts/ZeroClipboard.swf',
		copy: function(){
			return $('#editBox').val();
		}
	});

	//userText will be used as cookie/local storage
	var userText;
	
	$('#toggle2').click(function(){//LOAD PROJECT
		//userText = readCookie("editbox_txt");
		userText = window.localStorage.getItem("editbox_txt")
		if (userText){
			$('#editBox').val(userText);
			$('#promptLabel').css('opacity',0);
			$('#promptLabel').text('Last saved project loaded!');
			$('#promptLabel').animate({opacity:1},1500);
			$('#promptLabel').css('font-size','1.2rem');
			$('#promptLabel').css('color','white');
			$('#promptLabel').animate({opacity:0},1500);
		}
		else{
			//alert('Sorry you did not save your last project. This feature may not be supported on your device.');
			$('#promptLabel').css('opacity',0);
			$('#promptLabel').text('Project not saved...');
			$('#promptLabel').animate({opacity:1},1500);
			$('#promptLabel').css('font-size','1rem');
			$('#promptLabel').css('color','white');
			$('#promptLabel').animate({opacity:0},1500);
		}	
	});	
	
	
	$('#toggle3').click(function(){//SAVE PROJECT
		//var txt = $('#editBox').val();
		userText = $('#editBox').val();
		 window.localStorage.setItem("editbox_txt", userText);
		if (userText){
			//alert('The save feature is not compatible with this device.');
			$('#promptLabel').css('opacity',0);
			$('#promptLabel').text('Your project has been saved!');
			$('#promptLabel').animate({opacity:1},1500);
			$('#promptLabel').css('font-size','1.2rem');
			$('#promptLabel').css('color','white');
			$('#promptLabel').animate({opacity:0},1500);
			//writeCookie("editbox_txt", txt2, 5 * 365);
		}
	});
	
	//Click Browse Fonts
	$('#toggle4').click(function(){
		$('#promptLabel').css('opacity',0);
			$('#promptLabel').text('Browse Fonts');
			$('#promptLabel').animate({opacity:1},300);
			$('#promptLabel').css('font-size','1.25rem');
			$('#promptLabel').css('color','green');
		$('#fontBox').show();
		$('a#runButton.templateOption').hide();
		$('#setting').hide();
		$('#closeMeNow').show();
		//$('#setting').css('background','url(../images/return.png)');
		
	});


	//On click New Project
	$('#toggle5').click(function(){
		$('#promptLabel').css('opacity',0);
		$('#promptLabel').text('New Project');
		$('#promptLabel').animate({opacity:1},300);
		$('#promptLabel').css('font-size','1.25rem');
		$('#promptLabel').css('color','silver');
		$('#editBox').val(htmlCode);
		
	});
	
	$('.font').each(function(){
		var thisFont = $(this).text();
		$(this).css('font-family','"'+thisFont+'"');
	});
	
	$('#closeMeNow').click(function(){
		$('#promptLabel').css('opacity',0);
		$('#promptLabel').animate({opacity: 1}, 1500);
		$('#promptLabel').text('Back to the grind...');
		$('#promptLabel').animate({opacity:0},1500);
		$('#fontBox').hide();
		$('a#runButton.templateOption').show();
		$('#closeMeNow').hide();
		$('#setting').show()
		return false;
	});
	
	$('#toggle1t').click(function(){
			$('#promptLabel').css('opacity',0);
			$('#promptLabel').text('Template Loaded');
			$('#promptLabel').animate({opacity:1},900);
			$('#promptLabel').css('color','white');
			$('#promptLabel').animate({opacity:0},900);
	var onLoad = ' <!--CODEBENT HTML5 GREYSQUARE TEMPLATE-->\n<doctype! html>\n<html>\n<head>\n<title>Codebent Project1</title>\n<script>\n$(document).ready(function(){ $(".openMe").click(function(){ var id =$(this).text(); return false; });\n$(".openMe").mouseover(function(){ $(this).css("background-color", "#969696"); return false; });\n$(".openMe").click(function(){ $(this).css("background-color", "#232323"); return false; });\n$("#pImage1").mouseover(function(){ var ideaText = $(this).html("<br><br><br>Idea #1 : Sample Idea<br><br><br>Idea #2: Sample Idea<br><br><br>Idea #3 : Sample Idea<br><br><br>Idea #4 : Sample Idea<br><br></div>"); $("p#pImage1").text(ideaText); return false; });\n$("#pImage1").mouseout(function(){ $(this).html("<br><br><br><br><br><br><br><br><br>My Ideas"); $(this).css("background-color", "#3d3d3d"); return false; });\n$("#pImage2").mouseover(function(){ var ideaText = $(this).html("<br><br><br>Design #1 : <br>Sample Design<br><br><br>Design #2: <br>Sample Design<br><br><br>Design #3 : <br>Sample Design<br><br></div>"); $("p#pImage1").text(ideaText); return false; });\n$("#pImage2").mouseout(function(){ $(this).html("<br><br><br><br><br><br><br><br><br>My Designs"); $(this).css("background-color", "#434343"); return false; });\n$("#pImage3").mouseover(function(){ var ideaText = $(this).html("<br><br><br>Contact this Professional<br><br><br>Jamie Smith<br><br><br>(555)555-5555<br><br><br>contact@anytime.com<br><br></div>"); $("p#pImage1").text(ideaText); $(this).css("color","#2987db"); return false; });\n$("#pImage3").mouseout(function(){ $(this).html("<br><br><br><br><br><br><br><br><br>My Portfolio"); $(this).css("background-color", "#434343"); return false; });\n$("#pImage4").mouseover(function(){ var ideaText = $(this).html("<br><br><br>Project #1 : <br>Sample Project<br><br><br>Project #2: <br>Sample Project<br><br><br>Project #3 : <br>Sample Project<br><br></div>"); $("p#pImage1").text(ideaText); return false; });\n$("#pImage4").mouseout(function(){ $(this).html("<br><br><br><br><br><br><br><br><br>My Projects"); $(this).css("background-color", "#3d3d3d"); return false; });\n});\n</script>\n</head>\n<body>\n<div id="codeBentWrapper" style=" font-size:22px; width: 100%; color:#454545; text-align:center ; font-family:sue ellen francisco; opacity:1 ; background-color:#abcabc ;">\n<div class="openMe" id="pImage1" style="width:50% ; height:50%; position: absolute; background-color: #3d3d3d; background-size: 100%; background-repeat: no-repeat; left: 0px; color: silver; top:0px;">\n<p style="position: relative; top: 50%;">My Ideas</p>\n</div>\n<div class="openMe" id="pImage2" style="width:50% ; height:50%; position: absolute; background-color: #434343; background-size: 100%; background-repeat: no-repeat; left: 50%; color: white; top:0px;">\n<p style="position: relative; top: 50%;">My Designs</p>\n</div>\n<div class="openMe" id="pImage3" style="width:50% ; height:50%; position: absolute; background-color: #434343; background-size: 100%; background-repeat: no-repeat; left: 0px; color: white; top:50%;">\n<p style="position: relative; top: 50%;">My Portfolio</p>\n</div>\n<div class="openMe" id="pImage4" style="width:50% ; height:50%; position: absolute; background-color: #3d3d3d;; background-size: 100%; background-repeat: no-repeat; left: 50%; color: silver; top:50%">\n<p style="position: relative; top: 50%;">My Projects</p>\n</div>\n</div>\n</body>\n</html>\n';

		$('#editBox').val(onLoad);
	});
	
	$('#toggle2t').click(function(){
			$('#promptLabel').css('opacity',0);
			$('#promptLabel').text('Template Loaded');
			$('#promptLabel').animate({opacity:1},900);
			$('#promptLabel').css('color','white');
			$('#promptLabel').animate({opacity:0},900);
	var newTemplate = '<!--CODEBENT HTML5 REDLABEL TEMPLATE-->\n <doctype! html>\n <html>\n <head>\n <title>\nCodebent Project 1</title>\n <meta name="viewport" content="width=device-width, user-scalable=no" />\n<script>\n </script>\n </head>\n <body>\n <div id="codeBentWrapper" style=" padding:0px ; font-size:12px; width: 100%; color:#454545; text-align:center ; font-family:Meddon; opacity:1 ; background-color:#abcabc ;">\n <div id="pImage" style="width:150px ; height:110px; position: absolute; background: url(https://www.threebar.net/images/icons/person.png); background-size: 100%; background-repeat: no-repeat; border:2px solid #e3e3e3; border-top: 23px solid white; border-bottom: 23px solid white; left: 10px; top:68px;">\n </div>\n <h4 style="position: relative; padding-bottom:9px; padding-top:9px ; font-size: 18px; border-bottom: 1px solid #4f4f4f; color:gray ;">\n My Portfolio </h4>\n <h3 style="position: relative; top: 15px; left:20%;color: white;font-size:14px;">\n About Me </h3>\n<br>\n <div style="position : relative; left: 45%; top : 14px; height : 25%; width:50%; background-color: none; border: ; color:red ; font-size: 12px;">\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec cursus dui. Curabitur ullamcorper urna in lorem adipiscing suscipit ut et lorem. Nunc nec diam sit amet lacus posuere mollis. </div>\n<br>\n <hr style="color :pink;">\n <h3 style="width: 43%; position: relative; top: 5px; left:2%;text-align: left; background-color: red; color: white;font-size:14px;">\n Career #1 </h3>\n<br>\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec cursus dui. Curabitur ullamcorper urna in lorem adipiscing suscipit ut et lorem. Nunc nec diam sit amet lacus posuere mollis.  <h3 style="width: 43%; position: relative; top: 5px; left:2%;text-align: left; background-color: red; color: white;font-size:14px;">\n Career #2 </h3>\n<br>\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec cursus dui. Curabitur ullamcorper urna in lorem adipiscing suscipit ut et lorem. Nunc nec diam sit amet lacus posuere mollis. <h3 style="width: 43%; position: relative; top: 5px; left:2%;text-align: left; background-color: red; color: white;font-size:14px;">\n Career#3 </h3>\n<br>\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec cursus dui. Curabitur ullamcorper urna in lorem adipiscing suscipit ut et lorem. Nunc nec diam sit amet lacus posuere mollis.<h3 style="width: 43%; position: relative; top: 5px; left:2%;text-align: left; background-color: red; color: white;font-size:14px;">\n Career #4 </h3>\n<br>\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec cursus dui. Curabitur ullamcorper urna in lorem adipiscing suscipit ut et lorem. Nunc nec diam sit amet lacus posuere mollis.</div>\n </body>\n </html>\n';
	$('#editBox').val(newTemplate);
	});
	
	$('#toggle3t').click(function(){
			$('#promptLabel').css('opacity',0);
			$('#promptLabel').text('Template Loaded');
			$('#promptLabel').animate({opacity:1},900);
			$('#promptLabel').css('color','white');
			$('#promptLabel').animate({opacity:0},900);
				var newTemplate2 = '<!--CODEBENT HTML5 YELLOWROUND TEMPLATE-->\n <doctype! html>\n <html>\n <head>\n <title>\n Codebent Project4</title>\n <script>\n $(document).ready(function(){ $("#past").click(function(){ $("#h3info").text("past successes"); $("#pInfo").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec cursus dui. Curabitur ullamcorper urna in lorem adipiscing suscipit ut et lorem. Nunc nec diam sit amet lacus posuere mollis. Fusce vel massa varius, elementum felis auctor, euismod tellus"); $("#pInfo").css("color","gray"); return false; });\n $("#present").click(function(){ $("#h3info").text("current careerpath"); $("#pInfo").text("Fusce condimentum et nulla ac rutrum. Integer et lorem velit. Praesent vel rhoncus diam. Vivamus sodales sodales lorem nec sagittis. Phasellus non neque ac orci commodo rhoncus sit amet ut velit."); $("#pInfo").css("color","white"); return false; });\n $("#future").click(function(){ $("#h3info").text("future endeavors"); $("#pInfo").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec cursus dui. Curabitur ullamcorper urna in lorem adipiscing suscipit ut et lorem. Nunc nec diam sit amet lacus posuere mollis. Fusce vel massa varius, elementum felis auctor, euismod tellus"); $("#pInfo").css("color","#cebb3e"); return false; });\n });\n </script>\n <style>\n #buttons { text-align: center; overflow: hidden; position: relative; top: 25%; } #buttons a:nth-child(1){ background: #fff311;} #buttons a:nth-child(2){ background: #fff311;} #buttons a:nth-child(3){ background: #fff311;} #buttons a{ display: inline-block; height: 100px; width: 100px; overflow: hidden; text-decoration: none; -webkit-border-radius:5px; -moz-border-radius:5px; border-radius:50%; border: 1px solid #fff; } #buttons h6 { color: #fff; margin: 0px; padding: 0px; font: 1em/100px Helvetica, sans-serif; text-transform: uppercase; text-shadow: 1px 1px 1px #000; -webkit-transition: all 0.3s linear; -moz-transition: all 0.3s linear; -o-transition: all 0.3s linear; transition: all 0.3s linear; } #buttons div { overflow: hidden; opacity: 0; color: #fff; height: 100px; background: #000; line-height: 100px; -webkit-transition: all 0.6s linear; -moz-transition: all 0.6s linear; -o-transition: all 0.6s linear; transition: all 0.6s linear; -webkit-border-radius:25px; -moz-border-radius:25px; border-radius:50%; border: 2px solid #fff; } </style>\n </head>\n <body>\n <div id="codeBentWrapper" style=" font-size:22px; width: 100%; color:#454545; text-align:center ; font-family:sue ellen francisco; opacity:1 ; background-color:#abcabc ;">\n <div class="half" id="topPage" style="width:100% ; height:50%; position: absolute; background-color: #3d3d3d; background-size: 100%; background-repeat: no-repeat; left: 0px; color: silver; top:0px;">\n <h6 id="port" style="position: relative; top: 11%; left:9px; color:#fff311; font-weight: strong; font-family: Arial;">\n My Portfolio App </h6>\n <h3 style="position: relative; top: 18%; left:9px; font-weight: strong;">\n text that sums me up </h3>\n <div id="buttons">\n <a href="#" id="past" class="hoverLink">\n <h6 class="headingTxt">\n past </h6>\n </a>\n <a href="#" id="present" class="hoverLink">\n <h6 class="headingTxt">\n now</h6>\n </a>\n <a href="#" id="future" class="hoverLink">\n <h6 class="headingTxt">\n future</h6>\n </a>\n </div>\n </div>\n <div class="half" id="bottomPage" style="width:100% ; height:50%; position: absolute; background-color: #434343; left: 0%; color: white; top:50%;">\n <div id="showInfo">\n <h3 id="h3info" style="width: 43%; position: relative; top: 5px; left:31%; text-align: center; color: black;font-size:28px;padding-top:4px;revert : false">\nSkillset </h3>\n <br>\n <p id="pInfo">\n Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...<br>\n<br>\n<br>\n Fusce condimentum et nulla ac rutrum. Integer et lorem velit. Praesent vel rhoncus diam. Vivamus sodales sodales lorem nec sagittis. Phasellus non neque ac orci commodo rhoncus sit amet ut velit. Lorem ipsum dolor sit amet...<br>\n<br>\n<br>\n Lorem ipsum dolor sit amet... </p>\n </div>\n </div>\n </div>\n </body>\n </html>\n ';

		$('#editBox').val(newTemplate2);
	});
		
	//end of script
});
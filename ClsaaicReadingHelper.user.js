// ==UserScript==
// @name         ClassicReadingHelper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://ibook.cslg.edu.cn/*
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
	var questionName = $('.question-title');
	var questionOption = $('.question-option');
	// for(var i = 0; i<questionName.length;i++){
	// 	//console.log(i+questionName[i].innerText.replace(/\d+、\[..题\]/,''));
	// 	console.log(questionOption);
	// }
	console.log(questionOption[0].getElementsByTagName('li'));
	// window.onload = function(){
	// 	questionOption[0].getElementsByTagName('li').item(0);
	// };
	//.match( /value=\D\d+\D/)

	//console.log(newvalue[0]);
	//console.log(aLi[0].innerHTML.match(/value=\D\d+\D/)[0].match(/\d+/));
	console.log(questionOption.length);
	for(var j = 0;j < questionOption.length; j++){

		var aLi=questionOption[j].getElementsByTagName('li');
		var arr=[];
		 for(var i=0;i<aLi.length;i++){
			   arr[i]=aLi[i];
		 }
		arr.sort(function(li1,li2){

			var value1 = li1.innerHTML.match(/value=\D\d+\D/);
			var newvalue1 = value1[0].match(/\d+/);
			var value2 = li2.innerHTML.match(/value=\D\d+\D/);
			var newvalue2 = value2[0].match(/\d+/);

			return newvalue1-newvalue2;
		});
		 for(var k=0;k<arr.length;k++){
			 questionOption[j].appendChild(arr[k]);
		 }

	}
    // Your code here...
})();

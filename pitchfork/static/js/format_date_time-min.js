/*
 * jQuery Format Date/Time - v1.0.11 - 2013-10-06
 * https://github.com/agschwender/jquery.formatDateTime
 * Copyright (c) 2013 Adam Gschwender
 * Licensed MIT, GPLv2
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(window.jQuery||window.$)}(function(a){var b={monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],ampmNames:["AM","PM"],attribute:"data-datetime",formatAttribute:"data-dateformat"},c=1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),d=function(a,b,d){var e="",f=!1,g=0,h=function(b){var c=g+1<a.length&&a.charAt(g+1)==b;return c&&g++,c},i=function(a,b,c){var d=""+b;if(h(a))for(;d.length<c;)d="0"+d;return d},j=function(a,b,c,d){return h(a)?d[b]:c[b]};for(g=0;g<a.length;g++)if(f)"'"!=a.charAt(g)||h("'")?e+=a.charAt(g):f=!1;else switch(a.charAt(g)){case"a":e+=b.getHours()<12?d.ampmNames[0]:d.ampmNames[1];break;case"d":e+=i("d",b.getDate(),2);break;case"D":e+=j("D",b.getDay(),d.dayNamesShort,d.dayNames);break;case"o":var k=new Date(b.getFullYear(),b.getMonth(),b.getDate()).getTime(),l=new Date(b.getFullYear(),0,0).getTime();e+=i("o",Math.round((k-l)/864e5),3);break;case"g":var m=b.getHours()%12;e+=i("g",0===m?12:m,2);break;case"h":e+=i("h",b.getHours(),2);break;case"u":e+=i("u",b.getMilliseconds(),3);break;case"i":e+=i("i",b.getMinutes(),2);break;case"m":e+=i("m",b.getMonth()+1,2);break;case"M":e+=j("M",b.getMonth(),d.monthNamesShort,d.monthNames);break;case"s":e+=i("s",b.getSeconds(),2);break;case"y":e+=h("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case"@":e+=b.getTime();break;case"!":e+=1e4*b.getTime()+c;break;case"'":h("'")?e+="'":f=!0;break;default:e+=a.charAt(g)}return e};a.fn.formatDateTime=function(c,e){e=a.extend({},b,e);var f=a(this).attr(e.attribute);return c=c||a(this).attr(e.formatAttribute),("undefined"==typeof f||f===!1)&&(f=a(this).text()),""===f?a(this).text(""):a(this).text(d(c,new Date(f),e)),this},a.formatDateTime=function(c,e,f){return f=a.extend({},b,f),e?d(c,e,f):""}});
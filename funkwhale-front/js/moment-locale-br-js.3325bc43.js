(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["moment-locale-br-js"],{6887:function(e,r,n){(function(e,r){r(n("c1df"))})(0,(function(e){"use strict";
//! moment.js locale configuration
function r(e,r,n){var a={mm:"munutenn",MM:"miz",dd:"devezh"};return e+" "+u(a[n],e)}function n(e){switch(a(e)){case 1:case 3:case 4:case 5:case 9:return e+" bloaz";default:return e+" vloaz"}}function a(e){return e>9?a(e%10):e}function u(e,r){return 2===r?i(e):e}function i(e){var r={m:"v",b:"v",d:"z"};return void 0===r[e.charAt(0)]?e:r[e.charAt(0)]+e.substring(1)}var o=[/^gen/i,/^c[ʼ\']hwe/i,/^meu/i,/^ebr/i,/^mae/i,/^(mez|eve)/i,/^gou/i,/^eos/i,/^gwe/i,/^her/i,/^du/i,/^ker/i],s=/^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,t=/^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,d=/^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,m=[/^sul/i,/^lun/i,/^meurzh/i,/^merc[ʼ\']her/i,/^yaou/i,/^gwener/i,/^sadorn/i],h=[/^Sul/i,/^Lun/i,/^Meu/i,/^Mer/i,/^Yao/i,/^Gwe/i,/^Sad/i],_=[/^Su/i,/^Lu/i,/^Me([^r]|$)/i,/^Mer/i,/^Ya/i,/^Gw/i,/^Sa/i],M=e.defineLocale("br",{months:"Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort:"Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdays:"Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"),weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),weekdaysParse:_,fullWeekdaysParse:m,shortWeekdaysParse:h,minWeekdaysParse:_,monthsRegex:s,monthsShortRegex:s,monthsStrictRegex:t,monthsShortStrictRegex:d,monthsParse:o,longMonthsParse:o,shortMonthsParse:o,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY HH:mm",LLLL:"dddd, D [a viz] MMMM YYYY HH:mm"},calendar:{sameDay:"[Hiziv da] LT",nextDay:"[Warcʼhoazh da] LT",nextWeek:"dddd [da] LT",lastDay:"[Decʼh da] LT",lastWeek:"dddd [paset da] LT",sameElse:"L"},relativeTime:{future:"a-benn %s",past:"%s ʼzo",s:"un nebeud segondennoù",ss:"%d eilenn",m:"ur vunutenn",mm:r,h:"un eur",hh:"%d eur",d:"un devezh",dd:r,M:"ur miz",MM:r,y:"ur bloaz",yy:n},dayOfMonthOrdinalParse:/\d{1,2}(añ|vet)/,ordinal:function(e){var r=1===e?"añ":"vet";return e+r},week:{dow:1,doy:4},meridiemParse:/a.m.|g.m./,isPM:function(e){return"g.m."===e},meridiem:function(e,r,n){return e<12?"a.m.":"g.m."}});return M}))}}]);
/*!
 * Fonksiyonlarım
 *
 * Fonksiyon isimlerinde, kelimeler arasında alt çizgi kullan.
 * Bütün harfler küçük olsun. get_site_cookie gibi
 *
 * Değişken isimlerinde kelimeleri birleştir. İlk kelimenin baş harfi küçük,
 * diğerlerinin ki büyük olsun. Diğer harfler küçük olsun.
 * Kısaltmalarda da aynı kelimenin diğer harfleri küçük olsun; cookieNectTId gibi.
 *
 *
 */


var siteUrlAdress="http://www.tayangu.com.tr/anel";

document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is loaded and it is now safe to make calls PhoneGap methods
//
function onDeviceReady() {
	// Now safe to use the PhoneGap API
	alert("Device is ready");
	$.support.cors=true;
}



//Her sayfanın başında kullanılacak
function user_control(){	
	
	$.ajax({
		async: false,		
		type: "GET",
		crossDomain: true,
		url: siteUrlAdress+"/xmls/xml_login_control.php",
		timeout: 260000,
		data: {un:"mci",
				p:"123456",
				s:"user_login_control"
			},
		dataType: "xml"
	})
	.done(function(r){
		var uc = $(r).find('result').text();
		alert("uc="+uc);
		if(uc==1){
			$("#ajax-result").html(uc);
		}		
	})
	.fail(function(){
		alert("Sunucuya bağlaılamadı");
	});
}










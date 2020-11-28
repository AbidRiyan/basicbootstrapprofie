
/*========jquery start===============*/



	
function myfocus(x){
		 x.style.backgroundColor="#00ff9359";
	  }

		
 function myvalidation(){
		var name = document.forms['contactFrom']['name'].value;
		var email = document.forms['contactFrom']['email'].value;
		var phone = document.forms['contactFrom']['phone'].value;
		var mess = document.forms['contactFrom']['mess'].value; 
		var error =[];
	
		if (name == '' || name.length <3){
		
		  error[0]="Name must be at least 3	latter";
			
		  document.getElementById('name-error').innerHTML= error[0];
		}else{
			document.getElementById('name-error').innerHTML= '';
			}
			
		if (email == '' || email.length <10){
		
		  error[0]="Please insert a valid email ";
			
		  document.getElementById('email-error').innerHTML= error[0];
		}else{
			document.getElementById('email-error').innerHTML= '';
			}
			
		if (phone == '' || phone.length <11){
		
		  error[0]="Please insert a valid Phone number";
			
		  document.getElementById('phone-error').innerHTML= error[0];
		}else{
			document.getElementById('phone-error').innerHTML= '';
			}
			
		if (mess == '' || mess.length <30){
		
		  error[0]="Message must be at least 30	latter";
			
		  document.getElementById('mess-error').innerHTML= error[0];
		}else{
			document.getElementById('mess-error').innerHTML= '';
			}
	  
	if(error.length>0){
			return false;
	  }
	}
/*=====upper buttom===*/
$(document).ready(function(){
	$(window).scroll(function(){
		var x =$(window).scrollTop();
		if( x >1000){
			$('#upper').fadeIn(1000);
		}else{
			$('#upper').fadeOut(1000);
		}
	});
	$('#upper').click(function(){
		$('html').animate({scrollTop:0},2000);
	});
});


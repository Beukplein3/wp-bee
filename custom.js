$('#1').css('background', '#d2cca1');

function myFunction(){

	var element = document.querySelector('.explain2');
	element.classList.remove('aktief');
	var element = document.querySelector('.explain3');
	element.classList.remove('aktief');
	var element = document.querySelector('.explain4');
	element.classList.remove('aktief');
	var element = document.querySelector('.explain5');
	element.classList.remove('aktief');

	var element = document.querySelector('.explain');
	element.classList.add('aktief');

}

	$("#1").click(function(){
	$('#1').css('background', '#d2cca1');
	$('#2').css('background', '#dbd4d3');
	$('#3').css('background', '#dbd4d3');
	$('#4').css('background', '#dbd4d3');
	$('#5').css('background', '#dbd4d3');
    })


function myFunction2(){
	var element = document.querySelector('.explain');
	element.classList.remove('aktief');
	var element = document.querySelector('.explain3');
	element.classList.remove('aktief');
	var element = document.querySelector('.explain4');
	element.classList.remove('aktief');
	var element = document.querySelector('.explain5');
	element.classList.remove('aktief');

	var element = document.querySelector('.explain2');
	element.classList.add('aktief');

}

	$("#2").click(function(){
	$('#2').css('background', '#d2cca1');
	$('#1').css('background', '#dbd4d3');
	$('#3').css('background', '#dbd4d3');
	$('#4').css('background', '#dbd4d3');
	$('#5').css('background', '#dbd4d3');
    })



function myFunction3(){
	var element = document.querySelector('.explain');
	element.classList.remove('aktief');
	var element = document.querySelector('.explain2');
	element.classList.remove('aktief');
	var element = document.querySelector('.explain4');
	element.classList.remove('aktief');
	var element = document.querySelector('.explain5');
	element.classList.remove('aktief');

	var element = document.querySelector('.explain3');
	element.classList.add('aktief');

}

	$("#3").click(function(){
	$('#3').css('background', '#d2cca1');
	$('#1').css('background', '#dbd4d3');
	$('#2').css('background', '#dbd4d3');
	$('#4').css('background', '#dbd4d3');
	$('#5').css('background', '#dbd4d3');
    })

function myFunction4(){
	var element = document.querySelector('.explain');
	element.classList.remove('aktief');
	var element = document.querySelector('.explain2');
	element.classList.remove('aktief');
	var element = document.querySelector('.explain3');
	element.classList.remove('aktief');
	var element = document.querySelector('.explain5');
	element.classList.remove('aktief');

	var element = document.querySelector('.explain4');
	element.classList.add('aktief');

}

	$("#4").click(function(){
	$('#4').css('background', '#d2cca1');
	$('#1').css('background', '#dbd4d3');
	$('#2').css('background', '#dbd4d3');
	$('#3').css('background', '#dbd4d3');
	$('#5').css('background', '#dbd4d3');
    })

function myFunction5(){
	var element = document.querySelector('.explain');
	element.classList.remove('aktief');
	var element = document.querySelector('.explain2');
	element.classList.remove('aktief');
	var element = document.querySelector('.explain3');
	element.classList.remove('aktief');
	var element = document.querySelector('.explain4');
	element.classList.remove('aktief');

	var element = document.querySelector('.explain5');
	element.classList.add('aktief');

}

	$("#5").click(function(){
	$('#5').css('background', '#d2cca1');
	$('#1').css('background', '#dbd4d3');
	$('#2').css('background', '#dbd4d3');
	$('#3').css('background', '#dbd4d3');
	$('#4').css('background', '#dbd4d3');
    })


// ACCORDION
$(document).ready(function() {
  $('.accordion').find('.accordion-toggle').click(function() {
    $(this).next().slideToggle('600');
    $(".accordion-content").not($(this).next()).slideUp('600');
  });
  $('.accordion-toggle').on('click', function() {
    $(this).toggleClass('active').siblings().removeClass('active');
  });
});


//Bootstrap columns gelijk houden d.m.v. toevoegen class /col-eq-height

jQuery(document).ready(function( $ ){
  
jQuery( document ).ready(function() {
    var heights = jQuery(".col-eq-height").map(function() {
        return jQuery(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights);    
    jQuery(".col-eq-height").height(maxHeight);
   });

// jquery t.b.v. mobiele menu 

  $('#sidebar-btn').click(function(){
    $('#overlay').toggleClass('visible');
  });

  
});


// change nav background-color and link color on scroll

    // $(window).on('scroll', function() {
    //   if ($(window).scrollTop()) {
    //     $('.logo-nav-row').addClass('white');
    //   } else {
    //     $('.logo-nav-row').removeClass('white');
    //   }

    // })










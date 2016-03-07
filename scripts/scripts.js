//brad tough
//alert('working');
//console.log ($(this));
//**check for scipts file and jquery**

// scrolling
// var scrollPos = $(window).scrollTop();
// var pos_on_page;

// console.log(scrollPos);
// $("html, body").animate({ scrollTop: "300px" });

$('#nav-stuff').append("Brad's JQuery Tutorials").hide();
// $('#top').hide();
// console.log($('body'));

$(window).scroll(function(){
  
  var pos_on_page = $(window).scrollTop();
  
  console.log($('#top').offset());
  switch(pos_on_page) {
     case 0:
        $('#nav-stuff').hide();
        console.log('zero');
        break;
     case 100:
        // code block
        $('#nav-stuff').show();
        console.log('1 hundred');
        break;
     case 600:
        // code block
        console.log('6 hundred');
        break;
     default:
      //console.log(pos_on_page);
         
 } 
  
  
  
});
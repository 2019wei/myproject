$(document).ready(function() {
   $('.box1').click(function(event){
    event.preventDefault();   
    $('.box1').addClass('shake').delay(1000).hide(800);
    $('.box2').delay(1000).fadeIn(8000);
   });

   $('.top a').click(function(event){
    event.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    },3000);
   });


// UV api 
var item_template="<li>{{County}}-({{PublishTime}})-{{SiteName}}-UV值:{{UVI}}</li>";
var data_url="http://opendata2.epa.gov.tw/UV/UV.json";
var tododata;


$.ajax(
  {
    url: data_url,

    success: function(res){
      console.log(res); 
      for(var i=0;i<res.length;i++){
        console.log(res.length)
        var now_item =
        item_template.replace('{{County}}',res[i].County)
                     .replace('{{PublishTime}}',res[i].PublishTime)
                     .replace('{{SiteName}}',res[i].SiteName)
                     .replace('{{UVI}}',res[i].UVI)
                     
                     
        
  $('.modal-body1').append(now_item);
        
        
     
      }
     
      
      }
    }
  
);



$('[data-dismiss="modal"][data-toggle="modal"]').on('click',function(){
 var target = $(this).data('target');
 $(target).on('shown.bs.modal',function(){
 $('body').addClass('modal-open');
 });
});


  });
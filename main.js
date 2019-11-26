$(document).ready(function(){


    $('.items').click(function(){

        if($( this).children('.dropdown').is(':visible')){
            $('.dropdown').slideUp();
        }else {
            $('.dropdown').slideUp(0);
            $(this).children('.dropdown').slideToggle();
        }


    })

        $('#freccia').html('<i class="fas fa-sort-down"></i>');



        if($('#lingua').children('.dropdown').is(':visible')){
            
            $('#freccia').html('<i class="fas fa-sort-up"></i>');

        }







})

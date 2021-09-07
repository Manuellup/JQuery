$(() => {
    $('div.poem-stanza').addClass('highlight')
    $('.author').addClass('highlight')
    //chaining o encadenado de funciones
    $('#paragraph1').css('color','red').css('background-color','yellow').slideUp(5000).slideDown(5000)
});


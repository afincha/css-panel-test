function toggleLeft() {
    var leftOffset = $('.container').css('left');
    $('.container').css('left', leftOffset === '0px' ? '-180px' : '0px');
}

function toggleRight() {
    var leftOffset = $('.container').css('left');
    $('.container').css('left', leftOffset === '-180px' ? '-360px' : '-180px');
}

$(document).ready(function(){
    $('#left-panel').click(toggleLeft);
    $('#right-panel').click(toggleRight);
    $('.content').click(function() {
        $('.container').css('left', '-180px');
    });
});

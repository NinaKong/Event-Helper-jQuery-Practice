/*Nina Kong*/
function hightlight(event) {
    $('#binding').toggleClass('hightlightPart');
}
function singleClick(event) {
    $('#binding').html('Single Click');
}
function doubleClick(event) {
    $('#binding').html('Double Click');
}
function windowResize(event) {
    $('#binding').html('Resize Window');
}
$(document).ready(function () {
    var windowHeight = $( window ).height();
    var con = $(".Content");
    con.parentsUntil($("body")).css("height", windowHeight);

    $('#binding').hover(hightlight);
    $('#binding').click(singleClick);
    $('#binding').dblclick(doubleClick);
    $(window).resize(windowResize);

    $('#binding').one('click', function() {
        $(this).css({
            background: 'red',
            color: '#fff'
        });
    });

});

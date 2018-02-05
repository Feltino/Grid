$(document).ready(function () {
    $(".progres").circularProgress({
        color:"#f0650d",
        line_width: 18,
        height: "350px",
        width: "350px",
        percent: 0,
        starting_position: 35
    }).circularProgress('animate', 100, 1800)
});

    $(window).on('load', function () {
        var $preloader = $('#preloader');
        $preloader.delay(1800).fadeOut('slow');
    });
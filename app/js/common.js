$(document).ready(function() {
    $('.btn-choose').click(function (e) {
        e.preventDefault();
        $('.photo-edit__box').removeClass('box-active');
        var selectTab = $(this).attr("href");
        $(selectTab).addClass('box-active');

        if($('#photo-edit__box-2').hasClass('box-active')) {
            $('.list-stages > li').removeClass('active');
            $('.list-stages > li.stages-two').addClass('active');
        } else if ($('#photo-edit__box-3').hasClass('box-active')) {
            $('.list-stages > li').removeClass('active');
            $('.list-stages > li.stages-three').addClass('active');
        } else {
            $('.list-stages > li').removeClass('active');
            $('.list-stages > li.stages-one').addClass('active');
        }
    });

});

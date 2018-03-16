$(function() {
    function loadImages(images) {
        $(images).each(function(){
            (new Image()).src = this;
        });
    }

    loadImages(['/assets/AUFC.svg', '/assets/Braves.svg', '/assets/THFC.svg', '/assets/UGA.svg']);

    $('.pop').hover(function() {
        $(this).addClass('popped');
    });

    $('.pop').focus(function() {
        $(this).addClass('popped');
    });
});

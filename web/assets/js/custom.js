!function ($) {
    $(function(){
        //$('#running-box, #bg-car').carousel({});

        var $root = $('html, body');

        $('a').click(function() {
            var href = $.attr(this, 'href');
            $root.animate({
                scrollTop: $(href).offset().top
            }, 500, function () {
                window.location.hash = href;
            });
            return false;
        });
        
        //Scrollspy
        $('#navbar').scrollspy();  
    })
}(window.jQuery)
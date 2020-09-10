// Preloader Area
$(document).ready(function() {
    // Loader
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 2000);

    // Menu
	$(".pos-menu").click(function () {
		var options = { direction: "right" };
		var duration = 2000;

		$('.posMenu').toggle(options, duration);
    });
    
    // Add number
    (function () {
        window.inputNumber = function (el) {
        var min = el.attr("min") || false;
        var max = el.attr("max") || false;

        var els = {};

        els.dec = el.prev();
        els.inc = el.next();

        el.each(function () {
            init($(this));
        });

        function init(el) {
            els.dec.on("click", decrement);
            els.inc.on("click", increment);

            function decrement() {
            var value = el[0].value;
            value--;
            if (!min || value >= min) {
                el[0].value = value;
            }
            }

            function increment() {
            var value = el[0].value;
            value++;
            if (!max || value <= max) {
                el[0].value = value++;
            }
            }
        }
        };
    })();
    inputNumber($(".input-number"));

    // Search From 
    $('.search_btn').on('click',function(){
        $(".search_open, .search_close").toggleClass("search_open search_close");
        $('.search').toggleClass('search_active');
        $('.go_btn').toggleClass('search_active_go_btn');
    });

    // Tender 
    $('.tenderShow').click(function () {
        $('.posBill').hide();
        $('.tender').show();
    });

    // Toggle Btn
    $('.modules__toggle').click(function(){
        $(this).toggleClass('switched-on');
    });
});
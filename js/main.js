"use strict";
var init, menu, scroll, formHelper, tabsScroll;

$(function(){
    if(navigator.userAgent.match(/Trident\/7\./)) {
        $('body').addClass('ie');
    }
});

$(function(){
  console.log('init');
  menu();
  scroll();
  formHelper = new form();
  formHelper.init();
  
  tabsScroll();

  setTimeout(function () {
      $(window).trigger('resize');
  });
});

menu = function () {
    var menuContainer = $('#touchSideSwipe');
    var overlayContainer = $('.overlay-container');
    menuContainer.on('click', function (e) {
        if ($(e.target).hasClass('hamburger-element')) {
            if (menuContainer.hasClass('open')) {
                menuContainer.removeClass('open');
                overlayContainer.removeClass('overlay');
            } else {
                menuContainer.addClass('open');
                overlayContainer.addClass('overlay');
            }
        } else if (!menuContainer.hasClass('open')) {
            menuContainer.addClass('open');
            overlayContainer.addClass('overlay');
        }
    });
    $('body').on('click', '.overlay-container.overlay', function () {
        menuContainer.removeClass('open');
        overlayContainer.removeClass('overlay');
    });
};



jQuery(function(){
	const urlParams = new URLSearchParams(window.location.search);
	const myParam = urlParams.get('test');
	console.log(myParam);
	if(myParam==1){
		console.log(myParam);
		jQuery(".ukryte").show();
	}
});
scroll = function () {
    var menuContainer = $('#touchSideSwipe');
    var overlayContainer = $('.overlay-container');
    $(document).on('click', 'a[href^="#"], a.smooth, .col-right a', function (event) {
        if ($($(this).data('target')).length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).data('target')).offset().top
            }, 1000, "swing", function () {
                if (menuContainer.hasClass('open')) {
                    menuContainer.removeClass('open');
                    overlayContainer.removeClass('overlay');
                }
            });
        }
    });
};



/*
form = function () {
    if ($('.needs-validation').length) {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }
    if ($('.custom-file-input').length) {
        document.querySelector('.custom-file-input').addEventListener('change',function(e){
            var fileName = document.getElementById("customFile").files[0].name;
            var nextSibling = e.target.nextElementSibling
            nextSibling.innerText = fileName
        })
    }

    var leftColumn = $('#firstCol');
    var secondColumn = $('#secondCol');
    if ($('#firstCol').length) {
        var data = $.getJSON('/media/1052/form.json', function (data) {
            $.each(data, function (index, value) {
                var id = (value.id || value.label).replace(/\./g, '-').replace(/ /g, '-');
                leftColumn.append(
                    '<div data-id="' + id + '"><div class="label">' + value.label + '</div></div>'
                );
                console.log(id, value.items);
                secondColumn.append(generateCheckboxes(id, value.items, index === 0));
                $('#firstCol > div:first').addClass('active');
            });

            $('#firstCol > div').on('click', function (e) {
                e.preventDefault();
                $('#firstCol .active').removeClass('active');
                $(this).addClass('active');
                $('#secondCol > div').addClass('d-none');
                $('#secondCol > div[data-id="' + $(this).data('id') + '"]').removeClass('d-none');
            });

            $('#secondCol input[type="checkbox"]').on('change', function () {
                var currentCheckbox = $(this);
                var childCheckboxContainer = $(this).parent().next();
                if (childCheckboxContainer.hasClass('checkbox-list-container')) {
                    if (currentCheckbox.is(':checked')) {
                        childCheckboxContainer.find('input[type="checkbox"]').prop('checked', true);
                    } else {
                        childCheckboxContainer.find('input[type="checkbox"]').prop('checked', false);
                    }
                }
            });
        });
    }

    var generateCheckboxes = function (id, items, show) {
        var content = $('<div class="checkbox-list-container' + (!show ? ' d-none' : '') +'" data-id="' + id + '"></div>');
        if (items && items.length) {
            $.each(items, function (index, value) {
                console.log(value.id, value.label);
                var idSanitized = (value.id || value.label).replace(/\./g, '-').replace(/ /g, '-');
                var block = $('<div class="block">');
                if (value.label.length) {
                    block.append('<div class="custom-control custom-checkbox">\n' +
                        '  <input type="checkbox" class="custom-control-input" id="' + idSanitized + '">\n' +
                        '  <label class="custom-control-label" for="' + idSanitized + '">' + value.label + '</label>\n' +
                        '</div>');
                    if (value.items && value.items.length) {
                        block.append(generateCheckboxes(value.id, value.items, true));
                    }
                }
                content.append(block);
            });
        }

        return content;
    }
}
*/



tabsScroll = function ( ){
    var box = document.querySelector('#nav-tabs-container');

    document.querySelectorAll('.nav-link').forEach(function (el) {
        el.addEventListener('click', function(e){
            scrollToElm( box, e.target , 600 );
        });
    })


    function scrollToElm(container, elm, duration){
        var pos = getRelativePos(elm, container);
        scrollTo( container, pos.left , 1);  // duration in seconds
    }

    function getRelativePos(elm, parent){
        var pPos = parent.getBoundingClientRect(), // parent pos
            cPos = elm.getBoundingClientRect(), // target pos
            pos = {};

            pos.left   = elm.offsetLeft - pPos.left - 30;

        return pos;
    }

    function scrollTo(element, to, duration, onDone) {
        console.log(element, to);
        var start = element.scrollLeft,
            change = to - start,
            startTime = performance.now(),
            val, now, elapsed, t;

        function animateScroll(){
            now = performance.now();
            elapsed = (now - startTime)/1000;
            t = (elapsed/duration);

            element.scrollLeft = start + change * easeInOutQuad(t);

            if( t < 1 )
                window.requestAnimationFrame(animateScroll);
            else
                onDone && onDone();
        };

        animateScroll();
    }

    function easeInOutQuad(t){ return t<.5 ? 2*t*t : -1+(4-2*t)*t };
}

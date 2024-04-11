$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        let target = this.hash;
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1100, function () {
            window.location.hash = target;
        });
    });

    $('[data-bs-toggle="tooltip"]').tooltip({
        placement: 'top'
    });
});
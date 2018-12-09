$(document).ready(function() {
    $("button.note-button").on('click', function(event) {
        var hash = $(this).data("hash");
        if (hash) {
            $('html, body').animate({
                scrollTop: $(document.getElementById(hash)).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});

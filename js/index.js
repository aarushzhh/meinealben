$(document) .ready(function() {
$ ("#search") .keyup (function() {
});
});

var albums = $(".album");
$(albums).show();

var searchterm = $(this).val().toLocaleLowerCase()

albums.each (function() {
if ($ (this) .text().toLocaleLowerCase().search(searchterm) == -1) {
$(this) .hide();
}
});

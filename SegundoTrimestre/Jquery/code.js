var working = true;
var pagina = 2;
function search() {
    $('#loading').hide();
    $("#content").empty();
        $.ajax({
            url: 'http://www.omdbapi.com/?s=' + $("#searchVar").val() + '&page=1&type=movie&apikey=e257c65c',
            success: function (result) {
                if (result.Response === 'True') {
                    showFilms(result);
                } else {
                    error()
                }
            },
            error: function () {
                error();
            }

        });
}

function showFilms(result) {
    for (var n = 0; n <= 9; n++) {
        $('#content').append('<div class="card col-4" style="width: 18rem;">\n' +
            '                    <img class="card-img-top" src="' + (result.Search[n].Poster !== 'N/A' ? result.Search[n].Poster : 'no-image-found.jpg') + '" alt="' + result.Search[n].Poster + '" id="POSTER">\n' +
            '                    <div class="card-body">\n' +
            '                        <h5 class="card-title">' + result.Search[n].Title + '</h5>\n' +
            '                        <p class="card-text">' + result.Search[n].Year + '</p>\n' +
            '                        <button type="button" class="btn btn-primary" onclick="detallar(\''+result.Search[n].imdbID +'\')">Primary</button>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>')
    }
}
function error(){
    $("#peliculas").empty();
    $("#peliculas").append('<div class="alert alert-danger col-12" role="alert">\n' +
        '  No se han encontrado peliculas con el nombre: ' + $("#searchVar").val() +
        '</div>')
}
function detallar(idDetalle){
    $.ajax({
        url: 'http://www.omdbapi.com/?i=' + idDetalle + '&apikey=e257c65c',
        success: function (result) {
            if (result.Response === 'True') {
                $('#content').empty();
                $('#content').append(' <div class="col-6">\n' +
                    '            <img src="'+ result.Poster +'">\n' +
                    '        </div>\n' +
                    '        <div class="col-6">\n' +
                    '            <div class="content-fluid">Titulo: ' + result.Title + '</div>\n' +
                    '            <div class="content-fluid">Duracion: ' + result.Runtime + '</div>\n' +
                    '            <div class="content-fluid">Genero: ' + result.Genre + '</div>\n' +
                    '            <div class="content-fluid">Actores: ' + result.Actors + '</div>\n' +
                    '            <div class="content-fluid">Trama: ' + result.Plot + '</div>\n' +
                    '    </div>')
            }
        }
    })
}
$(window).scroll(function() {
    // End of the document reached?
    if ($(document).height() - $(window).height() <= ($(window).scrollTop() + 80) && working === true) {
        $('#loading').show();
        working = false;
        $.ajax({
            url: 'http://www.omdbapi.com/?s=' + $("#searchVar").val() + '&page=' + pagina + '&type=movie&apikey=e257c65c',
            success: function(result) {
                if (result.Response === 'True') {
                    pagina ++;
                    working = true;
                    showFilms(result,scroll);
                    $('#loading').hide();
                }

            }
        });
    }
});

window.onload = function (){
    search();
    $('#inicio').click(function(){
        $('#content').empty()
    })
};



$(document).ready(function() {
    //uso Handlebars per creare un tampleate;
    // recupero la struttura html del template di base;
    var template_html = $('#entry-template').html();

    // preparo la funzione da utilizzare per utilizzare il template
    var template_function = Handlebars.compile(template_html);

    //uso ajax per importare i dati;
    $.ajax({
        'url' : 'https://flynn.boolean.careers/exercises/api/array/music',
        'method' : 'GET',
        'success' : function(data){
            console.log(data);
            //prendo ciò che mi ha restituito il sito;
            var array_oggetti = data.response;
            console.log(array_oggetti);

            //leggo cosa ce in ogni singolo oggetto;
            for (var i = 0; i < array_oggetti.length; i++) {
                //leggo l'oggetto nella posizione ciclata al momento;
                var oggetto = array_oggetti[i];
                console.log(oggetto);

                //tramite handlebars preparo l'html finale con i dati dei dischi all'interno;
                var html = template_function(oggetto);

                //aggiungo il template compilato nell html;
                $('.cds-container').append(html);
                }
            },
        'error' : function () {
            allert('si è verificato un errore!');
        }
    });


        $('#ricerca').change(function() {
        var val = $("#ricerca option:selected").text();
        console.log(val);
        var genre = $(this).attr('value');
        console.log(genre);
        // if (val == d) {
            // $('.genere').hide()
            // $(this).show()
        // }
});






    // //intercetto il focus sull'imput
    // $('#ricerca').keyup(function() {
    //     //leggo cio che ha scritto l'utente nell'imput;
    //     var testodiricerca = $('#ricerca').val().trim().toLowerCase();
    //
    //     if ( testodiricerca != '') {
    //
    //         //recupero il testo per ogni h1;
    //         $('.genre').each(function() {
    //             var nomecontatto = $(this).text().toLowerCase();
    //
    //             // confronto cio che ha scritto l'utente con i contatti;
    //             //se è uguale visualizzo;
    //             if (nomecontatto.includes(testodiricerca)) {
    //                    $(this).parents('.cd').show();
    //                } else {
    //                    $(this).parents('.cd').hide();
    //                }
    //            })
    //        } else {
    //            $('.cd').show();
    //         }
    // });
});

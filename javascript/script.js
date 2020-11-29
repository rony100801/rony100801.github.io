// event pada saat linkn di klik
$('.page-scroll').on('click', function(){

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);
    
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top
    });

});

$('.scrolltop').on('click', function(){

    $('html, body').animate({
        scrollTop: 0
    });

});

$('.galery-zoom').on('click', function(){
    alert('Coming Soon');
});
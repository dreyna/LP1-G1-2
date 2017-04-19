$(function() {
  var imagenes = ['moda1.jpg', 'moda2.jpg', 'moda3.jpg', 'moda4.jpg'];
  $('#fondo').css({'background-image': 'url(imagenes/' + imagenes[Math.floor(Math.random() * imagenes.length)] + ')'});
  });


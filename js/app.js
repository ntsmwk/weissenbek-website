

$('.carousel').carousel({
  interval: 6000,
  pause: 'hover'
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
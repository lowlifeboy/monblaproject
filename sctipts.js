$(function() {
  $('.post-hidden')
    .slice(0, 9)
    .show();

  $('#loadMore').on('click', function(e) {
    e.preventDefault();

    $('.post-hidden:hidden')
      .slice(0, 3)
      .slideDown();

    if ($('.post-hidden:hidden').length === 0) {
      $('#loadMore').fadeOut('slow');
    }

    $('html, body').animate(
      {
        scrollTop: $(this).offset().top,
      },
      1500
    );
  });
});

$('#maxDate').on('click', function(e) {
  e.preventDefault();

  let minDate = $('#minDate')
    .val()
    .split('.');

  $('#maxDate').datepicker({
    minDate: new Date(+minDate[2], +minDate[1], +minDate[0]),
  });
});

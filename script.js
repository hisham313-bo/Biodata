$(function () {
  // Saved theme
  try { var t = localStorage.getItem('theme'); if (t) document.documentElement.setAttribute('data-theme', t); } catch (e) {}

  // Highlight current page in the navbar
  var file = location.pathname.split('/').pop() || 'index.html';
  $('nav a').each(function () { if ($(this).attr('href') === file) $(this).addClass('active'); });

  // Theme toggle
  $('#theme').on('click', function () {
    var next = $('html').attr('data-theme') === 'light' ? 'dark' : 'light';
    $('html').attr('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  // Animate skill bars
  setTimeout(function () {
    $('.fill').each(function () { $(this).css('width', $(this).data('w') + '%'); });
  }, 120);

  // Contact form
  $('#cform').on('submit', function (e) {
    e.preventDefault();
    $('#msg').text('Thanks, ' + $('#cn').val() + '. Your message has been noted.');
    this.reset();
  });
});

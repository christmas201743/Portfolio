$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });

  document.querySelector('button').addEventListener('click', function() {
    this.classList.toggle('open');
    document.querySelector('nav').classList.toggle('open');
  })
$(document).ready(function(){
          $("#search").keyup(function(){
              _this = this;
              $.each($("#menu nav a"), function() {
                  if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
                       $(this).hide();

                  else
                     $(this).show();
              });
              $.each($("#menu div"), function() {
                  if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
                     $(this).hide();
                  else
                     $(this).show();
              });
              $(".grid").masonry({
                itemSelector:'.grid-item',
                columnWidth: '.white-flex-block',
                percentPosition: true,
                gutter: 20
              });
          });
      });
var links = document.querySelectorAll('.link-text');
var input = document.querySelector('#search');
links.forEach(el => {
  el.addEventListener('click', function() {
    input.value = el.text;
    input.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true }));
    input.dispatchEvent(new KeyboardEvent('keypress', { bubbles: true }));
    input.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true }));
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
  })
})

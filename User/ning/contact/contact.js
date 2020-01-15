var old;

$("#phone, #cs, #email").hover(
  function() {
    old = $(this).text();
    $(this).text("(855)326-9945");
  },
  function() {
    $(this).text(old);
  }
);

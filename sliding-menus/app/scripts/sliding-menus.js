$(() => {
  function showSubMenu(event) {
    $(event.target).next().slideDown();
  }

  function hideSubMenu(event) {
    $($(this).find('.sub-nav')[0]).slideUp();
  }

  $('.nav-item').hover(showSubMenu, hideSubMenu);
});

(function() {

  function initialize() {
    var container = document.querySelector('body > .container');
    var game = new Game();
    game.run();
  }

  window.addEventListener('load', initialize);
})();

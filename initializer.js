(function() {

  function initialize() {
    var container = document.querySelector('body > .container');
    var game = new Game();
    var canvas = game.getCanvas();
    container.appendChild(canvas);
    game.run();
  }

  window.addEventListener('load', initialize);
})();

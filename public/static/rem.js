(function (){
  var docEl = document.documentElement;
  function setRemUtil(){
    var rem = docEl.clientWidth / 10;
    docEl.style.fontSize = rem + 'px';
  }
  setRemUtil();
  window.addEventListener('resize', setRemUtil);
})();
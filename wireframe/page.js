/* Shared per-page script for Moody Pines wireframes.
   Listens for the viewer shell's annotation toggle. */
(function(){
  function apply(show){
    document.body.classList.toggle('no-notes', !show);
  }
  // honor ?notes=0 on initial load
  var p = new URLSearchParams(location.search);
  if(p.get('notes') === '0') apply(false);

  window.addEventListener('message', function(e){
    if(e.data && e.data.type === 'mp-annotations'){ apply(!!e.data.show); }
  });
})();

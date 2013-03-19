$(function () {
    function set(elem, property, value) {
      property = Modernizr.prefixed(property);
      if (elem.style.hasOwnProperty(property))
        elem.style[property] = value;
    }
    function get(elem, property) {
      property = Modernizr.prefixed(property);
      return elem.style.hasOwnProperty(property) && elem.style[property];
    }
    Modernizr.addTest('regions-shapes', function() {
      var elem = document.createElement('div');
      set(elem, 'shapeInside', 'rectangle(0,0,0,0)');
      set(elem, 'shapeOutside', 'rectangle(0,0,0,0)');
      set(elem, 'flowFrom', 'article');

      return get(elem, 'shapeInside') &&
        get(elem, 'shape-outside') &&
        get(elem, 'flow-from');
    });
    $('head').append("<style type='text/css'> .regions-excluions-support { display: none; background-color: #f2dede; padding: .5em; color: #b94a48; margin: 1em; border-radius: .5em; } .no-regions-shapes .support { display: block; }");
    $('body').prepend("<div class='regions-exclusions-support'> <h4>Warning</h4> <p>It looks like CSS Regions and Exclusions are not currently enabled by your browser. Find out more about <a href='http://adobe.github.com/web-platform/samples/css-exclusions/index.html#browser-support'>browser support</a>.</p> </div>");
});

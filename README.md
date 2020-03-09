# UsefulHtmlElements
Some useful custom elements
## Using these elements
To use these elements, type in their tag name. If you want to get tags inside them, write this: 
var <em>variable</em> = <em>customElement</em>.shadowRoot; 
var <em>otherVariable</em> = <em>variable</em>.<em>elementToGet</em>;
The custom element isn't the element you want to get, it's the element that was defined in this library.
Say you have this code: \<pop-up id="hello">\<p id="hi">stuff\</p>\</pop-up>
In order to get the p element, you would write this: 
var popUp = document.getElementById("hello").shadowRoot;
var p = popUp.getElementById("hi");
Make sense?
## \<pop-up>
In order to use the popup element, type \<pop-up>\</pop-up>. The stuff to display inside the box goes in the custom element. This element has one custom attribute: button-id. The button-id attribute gives the button used to show the popup an id. 

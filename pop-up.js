class PopUp extends HTMLElement {
        constructor() {
          // Always call super first in constructor
          super();
          var shadow = this.attachShadow({mode: 'open'});
          const styleElem = document.createElement("style");
          const buttonElem = document.createElement("button");
          if (this.hasAttribute("button-id")){
              buttonElem.setAttribute("id", this.getAttribute("button-id"))
              }
          buttonElem.innerHTML = "Open";
          buttonElem.setAttribute("class", "button")
          styleElem.innerHTML=`

            .hidden {

        font-size: 0.8rem;
        width: 200px;
        display: inline-block;
        border: 1px solid black;
        padding: 10px;
        background: white;
        border-radius: 10px;
        opacity: 0;
        transition: 0.6s all;
        position: absolute;
        bottom: 20px;
        left: 10px;
        z-index: 3;
      

             
            }

.button:hover + .hidden, button:focus + .hidden, .hidden:focus-within, .hidden:focus  {
   opacity: 1;
}
            
`
         
          const divElem = document.createElement('span');
          divElem.setAttribute("class", "modal");
          const textElem = document.createElement('div');
          textElem.setAttribute("class", "hidden");
          textElem.innerHTML = this.innerHTML + "<br>Click anywhere to close";
          this.innerHTML = "";                                          
          // Element functionality written in here
          shadow.appendChild(styleElem);
              console.log(styleElem.isConnected);
          shadow.appendChild(divElem);
          divElem.appendChild(buttonElem);
          divElem.appendChild(textElem);
        }
        }
      customElements.define('pop-up', PopUp);

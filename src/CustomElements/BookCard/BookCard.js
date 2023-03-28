import style from "./BookCardStyle.css";
import html from "./BookCard.html";

export class Bookcard extends HTMLElement{
    constructor(){
        super()
        let shadowDOM = this.attachShadow({ mode: 'open' });
        shadowDOM.innerHTML = html    
        const styler = document.createElement('style')
        styler.innerHTML = style
        shadowDOM.appendChild(styler);
    }
    connectedCallback() {
      console.log("Custom component element added from page.");
      let {shadowDOM, shadowRoot} = this;
      if(this.hasAttribute("data")){
        let book = JSON.parse(this.getAttribute("data"))
        let title = shadowRoot.getElementById("title");
        let author = shadowRoot.getElementById("author");
        let description = shadowRoot.getElementById("description");
        let url = shadowRoot.getElementById("url");
        title.innerHTML = book.title;
        author.innerHTML = book.author;
        description.innerHTML = book.description;
        url.href = book.url

      }
    }
    disconnectedCallback() {
    
      console.log("Custom component element removed from page.");

    }

    adoptedCallback() {
      console.log("Custom component element moved to new page.");
    }

    attributeChangedCallback(name, oldValue, newValue) {
      console.log("Custom component element attributes changed.");
    }
};
    



    
    
    
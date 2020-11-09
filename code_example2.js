class MyElement2 extends HTMLElement {

    constructor() {
      super();
      this.name;
      this.surname;
    }
  
    static get observedAttributes() {
      return ['name', "surname"];
    }
  
    attributeChangedCallback(nameAttr, oldValue, newValue) {
      switch (nameAttr) {
        case "name":
          this.name = newValue;
          break;
        case "surname":
          this.surname = newValue;
          break;
      }
    }

    connectedCallback() {
      this.innerHTML = `
        <div>
        <span>Recibiendo parametros</span>
        <div ${this.name}> Informacion Venndelo</div>
        <div ${this.surname}> Ventas de productos por la página web</div>
        </div>
          `;
      this.style.color = 'blue';
      //this.dispatchEvent(new CustomEvent('my-event'));
      //const componentNuevo = document.getElementsByTagName('recibe-element')[0];
      //componentNuevo.dato1 = 'jeison';
      //componentNuevo.dato2 = 'Julian';
  
    }
  
  }
  customElements.define('custom-element2', MyElement2);
  

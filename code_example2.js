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
      case "name": {
        this.name = newValue;
        break;
      }
      case "surname": {
        this.surname = newValue;
        break;
      }
    }

    this.connectedCallback();
    // const componentOne = document.getElementsByTagName('custom-element2')[0];
    // const div = document.querySelectorAll('div.oculto')
    // div.forEach(data => {
    //   data.style = `visibility: ${componentOne.getAttribute('name')}`
    // });
  }

  connectedCallback() {
    //let shadowRoot = this.attachShadow({mode: 'open'});


    this.innerHTML = `
    <style>
    .mostrar {
      color: blue;
      height: 100vh;
      width: 100%;
      background-color: gray;
      visibility: visible;
      top:2,
      left:0; 
      z-indez: 10;
      box-shadow: 1px 3px 10px 0px #c7c7c7
    }
    .ocultar {
      visibility: hidden;
    }
    </style>
        <div>
          <span>Recibiendo parametros</span> 
          <div  class="oculto"> Tus producto son:  ${this.name}</div>
          <div  class="oculto"> Los productos adquiridos son:   ${this.surname}</div>
        </div>
          `;

    this.style.position = 'relative';
    //this.dispatchEvent(new CustomEvent('my-event'));
    //const componentNuevo = document.getElementsByTagName('recibe-element')[0];
  }
}
customElements.define('custom-element2', MyElement2);

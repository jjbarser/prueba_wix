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
    const divModificar = document.querySelector('.mostrar');
    divModificar.style.backgroundColor = 'red';
    divModificar.style.height = '500px'

    // const componentOne = document.getElementsByTagName('custom-element2')[0];
    // const div = document.querySelectorAll('div.oculto')
    // div.forEach(data => {
    //   data.style = `visibility: ${componentOne.getAttribute('name')}`
    // });
  }

  connectedCallback() {
    //let shadowRoot = this.attachShadow({mode: 'open'});
    this.innerHTML = `
        <div class="mostrar">
          <span>Recibiendo parametros</span> 
          <div style="visibility: ${this.name};" class="oculto"> Tus producto son:  ${this.name}</div>
          <div style="visibility: ${this.name};" class="oculto"> Los productos adquiridos son:   ${this.surname}</div>
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

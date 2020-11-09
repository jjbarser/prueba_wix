class MyElement extends HTMLElement {

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
        <button id="button">${this.name}</button>
      </div>
        `;
    this.style.color = 'blue';
     //this.dispatchEvent(new CustomEvent('my-event'));

     const button = document.querySelector('#button');
     button.addEventListener('click', () => {
       console.log('Se lanzó la alerta');
      this.dispatchEvent(new CustomEvent('my-event'));
     });
    //const componentNuevo = document.getElementsByTagName('recibe-element')[0];
    //componentNuevo.dato1 = 'jeison';
    //componentNuevo.dato2 = 'Julian';

  }



  cambiarEfecto= () => {
    alert('hola click');
    document.dispatchEvent(new CustomEvent('my-event'));
  }

}
customElements.define('custom-element', MyElement);

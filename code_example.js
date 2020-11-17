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
        <div class="contenedor">
        <button style="background-color:gray; color:withe; padding: 5px;"  id="button">${this.surname}</button>
        <button style="background-color:gray; color:withe; padding: 5px;"  id="button2">${this.name}</button>
        <button style="background-color:gray; color:withe; padding: 5px;"  id="button3"> Enviar información</button>
        <button style="background-color:gray; color:withe; padding: 5px;"  id="button4"> mostrar componente</button>
        <button style="background-color:gray; color:withe; padding: 5px;"  id="button5"> ocultar componente</button>
        <a href="https://devel.venndelo.com/tienda/juanfernandoe/checkout?variation_id=128">Visit Venndelo</a>

      </div>
        `;
    //this.dispatchEvent(new CustomEvent('my-event'));

    const button = document.querySelector('#button');
    button.addEventListener('click', () => {
      const componentOne = document.getElementsByTagName('custom-element2')[0];
      componentOne.setAttribute('name', 'camisas');
      componentOne.setAttribute('surname', 'pantalones');
      console.log('Se lanzó la alerta 3');
      this.dispatchEvent(new CustomEvent('my-event'));

    });

    const button2 = document.querySelector('#button2');
    button2.addEventListener('click', () => {
      const componentOne = document.getElementsByTagName('custom-element2')[0];
      componentOne.setAttribute('name', 'tenis');
      componentOne.setAttribute('surname', 'tecnología');
      console.log('Se lanzó la alerta 3');
      this.dispatchEvent(new CustomEvent('my-event2'));
    });

    const button3 = document.querySelector('#button3');
    button3.addEventListener('click', () => {
      console.log('Se lanzó la alerta 3');
      //const componentOne = document.getElementsByTagName('custom-element2')[0];
      //componentOne.setAttribute('name', 'ropa');
      //componentOne.setAttribute('surname', 'camisas');
      console.log(this);
      this.dispatchEvent(new CustomEvent('my-event3'));
    });
    const button4 = document.querySelector('#button4');
    button4.addEventListener('click', () => {
      const componentOne = document.getElementsByTagName('custom-element2')[0];
      componentOne.classList.remove('ocultar');
      componentOne.classList.add('mostrar');
    });

    const button5 = document.querySelector('#button5');
    button5.addEventListener('click', () => {
      const componentOne = document.getElementsByTagName('custom-element2')[0];
      componentOne.classList.remove('mostrar');
      componentOne.classList.add('ocultar');
    });
    //const componentNuevo = document.getElementsByTagName('recibe-element')[0];
    //componentNuevo.dato1 = 'jeison';
    //componentNuevo.dato2 = 'Julian';

  }

}
customElements.define('custom-element', MyElement);

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
        <button style="background-color:gray; color:withe; padding: 5px;"  id="button">${this.surname}</button>
        <button style="background-color:gray; color:withe; padding: 5px;"  id="button2">${this.name}</button>
        <a href="https://devel.venndelo.com/tienda/juanfernandoe/checkout?variation_id=128">Visit Venndelo</a>

      </div>
        `;
    this.style.color = 'blue';
     //this.dispatchEvent(new CustomEvent('my-event'));

     const button = document.querySelector('#button');
     button.addEventListener('click', () => {
     // const componentOne = document.getElementsByTagName('custom-element2')[0];
     // componentOne.name = 'hidden';
     // componentOne.surname = 'hidden';
       console.log('Se lanzó la alerta');
      this.dispatchEvent(new CustomEvent('my-event'));
      
     });

     const button2 = document.querySelector('#button2');
     button2.addEventListener('click', () => {
      //const componentOne = document.getElementsByTagName('custom-element2')[0];
      //componentOne.name = 'show';
      //componentOne.surname = 'show';
       console.log('Se lanzó la alerta');
      this.dispatchEvent(new CustomEvent('my-event2'));
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

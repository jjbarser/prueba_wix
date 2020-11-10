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
    this.attachShadow({mode: 'open'});
     this.innerHTML = `
        <div>
        <button style="background-color:gray; color:withe; padding: 5px;"  id="button">${this.surname}</button>
        <button style="background-color:gray; color:withe; padding: 5px;"  id="button2">${this.name}</button>
      </div>
        `;
    this.style.color = 'blue';
     //this.dispatchEvent(new CustomEvent('my-event'));

     const button = document.querySelector('#button');
     button.addEventListener('click', () => {
       console.log('Se lanzó la alerta');
      this.dispatchEvent(new CustomEvent('my-event'));
     });

     const button2 = document.querySelector('#button2');
     button2.addEventListener('click', () => {
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

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

  cambiarEfecto() {
    alert('hola click');
    document.dispatchEvent(new CustomEvent('my-event'));
  }


  connectedCallback() {
    this.innerHTML = `
        <div>
        <label for="price" class="block text-sm leading-5 font-medium text-gray-700"
          >Price</label
        >
        <div class="mt-1 relative rounded-md shadow-sm">
          <div
            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
          >
            <span class="text-gray-500 sm:text-sm sm:leading-5">
              $
            </span>
          </div>
          <input
            id="price"
            class="form-input block w-full pl-7 pr-12 sm:text-sm sm:leading-5"
            placeholder="0.00"
          />
          <div class="absolute inset-y-0 right-0 flex items-center">
            <select
              onchange="cambiarEfecto()"
              aria-label="Currency"
              class="form-select h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm sm:leading-5"
            >
              <option>${this.name}</option>
              <option>${this.surname}</option>
              <option>EUR</option>
            </select>
          </div>
        </div>
        <button id="button">Open comp </button>
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

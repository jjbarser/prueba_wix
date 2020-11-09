class RecibeElement extends HTMLElement {

    constructor() {
        super();
        this.dato1;
        this.dato2;
    }

    static get observedAttributes() {
        return ['dato1', "dato2"];
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
        switch (nameAttr) {
            case "name":
                this.dato1 = newValue;
                break;
            case "surname":
                this.dato2 = newValue;
                break;
        }
    }

    connectedCallback() {
        this.innerHTML = `
    <div>
    <span>mostrar dato emitido</span>
    <strong>${this.dato1}</strong>
    <strong>${this.dato2}</strong>
</div>
          `;
        this.dispatchEvent(new CustomEvent('my-event2'));

    }

    getPicture() {
        this.dispatchEvent(new CustomEvent('my-event2'));
    }

}
customElements.define('recibe-element', RecibeElement);

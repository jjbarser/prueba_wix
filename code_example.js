class MyElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 'Hello World!';
    // Trigger an event that Corvid can watch for
    // and handle using the [`on()`] function.
    this.dispatchEvent(new CustomEvent('my-event'));
  }
}
customElements.define('my-custom-element', MyElement);

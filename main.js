import {
  LitElement,
  html
} from 'https://unpkg.com/lit-element@2.1.0/lit-element.js?module'
import Navigo from 'https://unpkg.com/navigo@7.1.2/lib/navigo.es.js'

console.log('Hello WebComponents')

class MyButton extends LitElement {
  render() {
    return html`
      <button>My Button</button>
    `
  }
}

customElements.define('my-button', MyButton)

class PageA extends LitElement {
  render() {
    return html`
      <div>
        Page A
        <div></div>
      </div>
    `
  }
}
customElements.define('my-pagea', PageA)

class PageB extends LitElement {
  render() {
    return html`
      <div>
        Page B
        <div></div>
      </div>
    `
  }
}
customElements.define('my-pageb', PageB)

class MyAwesomeApp extends LitElement {
  static get properties() {
    return {
      route: { type: Object }
    }
  }
  constructor() {
    super()
    let router = new Navigo('/', true, '#!')
    router
      .on('pagea', () => {
        this.route = html`
          <my-pagea></my-pagea>
        `
      })
      .on('pageb', () => {
        this.route = html`
          <my-pageb></my-pageb>
        `
      })
      .on('*', () => {
        console.log('kevin')
        this.route = html`
          This is home.
        `
      })
    router.resolve()
  }
  render() {
    return html`
      <div>
        <h1>MyAwesomeApp</h1>
        <a href="#!/pagea">Page A</a> <a href="#!/pageb">Page B</a>
        <a href="#!/">Home</a> ${this.route}
      </div>
    `
  }
}
customElements.define('my-awesome-app', MyAwesomeApp)

import Search from '@/components/search'

class Header extends HTMLElement {
  constructor() {
    super()
    this.search = new Search()
    this.classList.add('bg-green-500')
  }

  connectedCallback() {
    console.log('Module: Header')
  }
}

if (!customElements.get('module-header')) {
  customElements.define(Header, 'module-header')
}

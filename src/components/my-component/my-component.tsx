import { Component, h, Element, State, getAssetPath } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
  assetsDirs: ['assets']
})
export class MyComponent {
  @Element() el: HTMLElement;
  @State() private _isSticky = false;
  componentDidLoad() {
    const options = {
      root: document.querySelector('[data-scroll-root]'),
      rootMargin: '5px',
      threshold: 1.0
    }
    const observer = new IntersectionObserver((entries: any) => {
      entries.forEach(entry => {
        console.log(entry);
        this._isSticky = !entry.isIntersecting ? true: false;
      })
    }, options);

    observer.observe(this.el);
  }
  render() {
    return [
      <div class={`toolbar  ${this._isSticky ? 'fixed' : ''}`}>
        <img src={getAssetPath('./assets/menu-hamburger.svg')}/>
        <p>Title</p>
        <img src={getAssetPath(`./assets/user.svg`)}/>
      </div>,
    ];
  }
}

import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ChassisElement } from '../../base/base-element.js';
import { resetStyles } from '../../styles/shared.styles.js';
import { avatarStyles } from './avatar.styles.js';

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away';

@customElement('chassis-avatar')
export class ChassisAvatar extends ChassisElement {
  static styles = [resetStyles, avatarStyles];

  @property({ type: String })
  src = '';

  @property({ type: String })
  alt = '';

  @property({ type: String })
  initials = '';

  @property({ type: String, reflect: true })
  override size: AvatarSize = 'md';

  @property({ type: String, reflect: true })
  status: AvatarStatus | '' = '';

  render() {
    const classes = {
      avatar: true,
      [`size-${this.size}`]: true,
    };

    return html`
      <span
        part="base"
        class=${classMap(classes)}
        role="img"
        aria-label=${this.alt || this.initials || 'Avatar'}
      >
        ${this.src
          ? html`<img part="image" class="image" src=${this.src} alt=${this.alt} @error=${this._onImageError} />`
          : html`<span part="initials" class="initials">${this.initials}</span>`}
        ${this.status
          ? html`<span part="status" class="status status-${this.status}"></span>`
          : nothing}
      </span>
    `;
  }

  _onImageError() {
    this.src = '';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chassis-avatar': ChassisAvatar;
  }
}

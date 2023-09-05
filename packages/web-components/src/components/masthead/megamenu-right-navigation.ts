/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import ArrowRight16 from '../../internal/vendor/@carbon/web-components/icons/arrow--right/16';
import settings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import { MEGAMENU_RIGHT_NAVIGATION_STYLE_SCHEME } from './defs';
import styles from './masthead.scss';
import './megamenu-link-with-icon';
import { carbonElement as customElement } from '../../internal/vendor/@carbon/web-components/globals/decorators/carbon-element.js';

export { MEGAMENU_RIGHT_NAVIGATION_STYLE_SCHEME };

const { prefix, stablePrefix: c4dPrefix } = settings;

/**
 * MegaMenu right navigation section
 *
 * @element c4d-megamenu-right-navigation
 */
@customElement(`${c4dPrefix}-megamenu-right-navigation`)
class C4DMegaMenuRightNavigation extends LitElement {
  /**
   * `true` to render left (highlighted) section layout.
   */
  @property({ reflect: true, attribute: 'style-scheme' })
  styleScheme = MEGAMENU_RIGHT_NAVIGATION_STYLE_SCHEME.REGULAR;

  /**
   * view all link href.
   */
  @property({ attribute: 'view-all-href', reflect: true })
  viewAllHref = '';

  /**
   * view all link title.
   */
  @property({ attribute: 'view-all-title', reflect: true })
  viewAllTitle = '';

  /**
   * Returns a class-name(s) for megamenu container
   */
  protected _getClassNames() {
    return classMap({
      [`${prefix}--masthead__megamenu--hasHighlights`]:
        this.styleScheme ===
        MEGAMENU_RIGHT_NAVIGATION_STYLE_SCHEME.LEFT_SECTION,
      [`${prefix}--masthead__megamenu--hasViewAllLink`]: this.viewAllHref,
      [`${prefix}--masthead__megamenu__categories`]: true,
    });
  }

  render() {
    return html`
      <div class="${this._getClassNames()}">
        <slot></slot>
      </div>
      ${this.viewAllHref &&
      html`
        <c4d-megamenu-link-with-icon
          href="${this.viewAllHref}"
          style-scheme="view-all"
          part="view-all">
          <span>${this.viewAllTitle}</span>${ArrowRight16({ slot: 'icon' })}
        </c4d-megamenu-link-with-icon>
      `}
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default C4DMegaMenuRightNavigation;

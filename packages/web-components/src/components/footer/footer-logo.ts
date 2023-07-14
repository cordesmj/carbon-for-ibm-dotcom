/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, LitElement, svg } from 'lit';
import { property } from 'lit/decorators.js';
import settings from 'carbon-components/es/globals/js/settings.js';
import FocusMixin from '../../internal/vendor/@carbon/web-components/globals/mixins/focus.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import IBM8BarLogoH65White from '@carbon/ibmdotcom-styles/icons/svg/IBM-8bar-logo--h65-white.svg';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import styles from './footer.scss';
import { carbonElement as customElement } from '../../internal/vendor/@carbon/web-components/globals/decorators/carbon-element.js';

const { prefix } = settings;
const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * The IBM logo UI in footer.
 *
 * @element dds-footer-logo
 */
@customElement(`${ddsPrefix}-footer-logo`)
class DDSFooterLogo extends StableSelectorMixin(FocusMixin(LitElement)) {
  /**
   * Link `href`.
   */
  @property()
  href = 'https://www.ibm.com/';

  /**
   * The shadow slot this logo UI should be in.
   */
  @property({ reflect: true })
  slot = 'brand';

  render() {
    const { href } = this;
    return html`
      <a
        class="${prefix}--footer-logo__link"
        aria-label="IBM logo"
        href="${ifDefined(href)}">
        ${IBM8BarLogoH65White({
          class: `${prefix}--footer-logo__logo`,
          role: 'img',
          'aria-labelledby': 'footer-logo',
          children: svg`<title id="footer-logo">IBM Logo</title>`,
        })}
        <slot></slot>
      </a>
    `;
  }

  static get stableSelector() {
    return `${ddsPrefix}--footer-logo`;
  }

  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };
  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default DDSFooterLogo;

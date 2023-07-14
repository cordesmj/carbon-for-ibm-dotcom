/**
 * @license
 *
 * Copyright IBM Corp. 2021, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ifDefined } from 'lit/directives/if-defined.js';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import settings from 'carbon-components/es/globals/js/settings.js';
import User20 from '../../../internal/vendor/@carbon/web-components/icons/user/20.js';
import ddsSettings from '../../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import styles from './cloud-masthead.scss';
import DDSMastheadProfile from '../masthead-profile';

const { prefix } = settings;
const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * The Cloud-specific profile menu UI in the masthead.
 *
 * @element dds-cloud-masthead-profile
 */
@customElement(`${ddsPrefix}-cloud-masthead-profile`)
class DDSCloudMastheadProfile extends DDSMastheadProfile {
  render() {
    const {
      expanded,
      menuLabel,
      triggerLabel,
      _handleClick: handleClick,
    } = this;
    return html`
      <a
        tabindex="0"
        class="${prefix}--header__menu-item ${prefix}--header__menu-title"
        href="javascript:void 0"
        aria-haspopup="menu"
        aria-expanded="${String(Boolean(expanded))}"
        aria-label="${ifDefined(triggerLabel)}"
        @click=${handleClick}>
        ${User20()}
      </a>
      <ul class="${prefix}--header__menu" aria-label="${ifDefined(menuLabel)}">
        <slot></slot>
      </ul>
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default DDSCloudMastheadProfile;

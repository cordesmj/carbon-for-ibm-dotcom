/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import settings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import { carbonElement as customElement } from '../../internal/vendor/@carbon/web-components/globals/decorators/carbon-element';
import styles from './masthead.scss';

const { stablePrefix: c4dPrefix } = settings;

/**
 * MegaMenu Category Group Description.
 *
 * @element c4d-megamenu-category-group-desc
 */
@customElement(`${c4dPrefix}-left-nav-menu-category-heading`)
class C4DLeftNavMenuCategoryHeading extends LitElement {
  render() {
    return html` <slot></slot> `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default C4DLeftNavMenuCategoryHeading;

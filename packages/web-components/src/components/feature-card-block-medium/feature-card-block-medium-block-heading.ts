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
import settings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import { carbonElement as customElement } from '../../internal/vendor/@carbon/web-components/globals/decorators/carbon-element';
import styles from './feature-card-block-medium.scss';

const { stablePrefix: c4dPrefix } = settings;

/**
 * The block heading content of feature card block medium.
 *
 * @element c4d-feature-card-block-medium-block-heading
 */
@customElement(`${c4dPrefix}-feature-card-block-medium-block-heading`)
class C4DFeatureCardBlockMediumBlockHeading extends LitElement {
  /**
   * The shadow slot this block heading should be in.
   */
  @property({ reflect: true })
  slot = 'block-heading';

  connectedCallback() {
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'heading');
    }
    if (!this.hasAttribute('aria-level')) {
      this.setAttribute('aria-level', '3');
    }
    super.connectedCallback();
  }

  render() {
    return html` <slot></slot> `;
  }

  // `styles` here is a `CSSResult` generated by custom WebPack loader
  static styles = styles;
}

export default C4DFeatureCardBlockMediumBlockHeading;

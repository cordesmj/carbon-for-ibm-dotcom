/**
 * @license
 *
 * Copyright IBM Corp. 2021, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import settings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import { carbonElement as customElement } from '../../internal/vendor/@carbon/web-components/globals/decorators/carbon-element';
import styles from './quote.scss';

const { stablePrefix: c4dPrefix } = settings;

/**
 * The source heading content of quote.
 *
 * @element c4d-quote-source-heading
 */
@customElement(`${c4dPrefix}-quote-source-heading`)
class C4DQuoteSourceHeading extends LitElement {
  /**
   * The shadow slot this source copy content should be in.
   */
  @property({ reflect: true })
  slot = 'source-heading';

  render() {
    return html` <slot></slot> `;
  }

  // `styles` here is a `CSSResult` generated by custom WebPack loader
  static styles = styles;
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default C4DQuoteSourceHeading;

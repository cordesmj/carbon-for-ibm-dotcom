/**
 * @license
 *
 * Copyright IBM Corp. 2021, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, property, customElement, LitElement } from 'lit-element';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import styles from './quote.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * The source heading content of quote.
 *
 * @element dds-quote-source-heading
 */
@customElement(`${ddsPrefix}-quote-source-heading`)
class DDSQuoteSourceHeading extends LitElement {
  /**
   * The shadow slot this source copy content should be in.
   */
  @property({ reflect: true })
  slot = 'source-heading';

  render() {
    return html`
      <slot></slot>
    `;
  }

  // `styles` here is a `CSSResult` generated by custom WebPack loader
  static styles = styles;
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSQuoteSourceHeading;

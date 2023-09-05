/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import settings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import C4DContentItemCopy from '../content-item/content-item-copy';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import styles from './content-item-horizontal.scss';
import { carbonElement as customElement } from '../../internal/vendor/@carbon/web-components/globals/decorators/carbon-element';

const { stablePrefix: c4dPrefix } = settings;

/**
 * The copy content of content item horizontal.
 *
 * @element c4d-content-item-horizontal-copy
 */
@customElement(`${c4dPrefix}-content-item-horizontal-copy`)
class C4DContentItemHorizontalCopy extends StableSelectorMixin(
  C4DContentItemCopy
) {
  render() {
    return html` <slot></slot> `;
  }

  static get stableSelector() {
    return `${c4dPrefix}--content-item-horizontal-copy`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default C4DContentItemHorizontalCopy;

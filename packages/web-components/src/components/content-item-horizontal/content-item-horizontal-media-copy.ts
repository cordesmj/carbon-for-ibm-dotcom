/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, customElement } from 'lit-element';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import DDSContentItemCopy from '../content-item/content-item-copy';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import styles from './content-item-horizontal-media.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * The copy content of content item horizontal with media.
 *
 * @element dds-content-item-horizontal-media-copy
 */
@customElement(`${ddsPrefix}-content-item-horizontal-media-copy`)
class DDSContentItemHorizontalMediaCopy extends StableSelectorMixin(DDSContentItemCopy) {
  render() {
    return html`
      <slot></slot>
    `;
  }

  static get stableSelector() {
    return `${ddsPrefix}--content-item-horizontal-media-copy`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSContentItemHorizontalMediaCopy;

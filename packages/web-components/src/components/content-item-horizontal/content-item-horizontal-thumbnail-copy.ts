/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import DDSContentItemCopy from '../content-item/content-item-copy';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import styles from './content-item-horizontal.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * The copy content of content item horizontal with thumbnail.
 *
 * @element dds-content-item-horizontal-thumbnail-copy
 */
@customElement(`${ddsPrefix}-content-item-horizontal-thumbnail-copy`)
class DDSContentItemHorizontalThumbnailCopy extends StableSelectorMixin(
  DDSContentItemCopy
) {
  render() {
    return html` <slot></slot> `;
  }

  static get stableSelector() {
    return `${ddsPrefix}--content-item-horizontal-thumbnail-copy`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSContentItemHorizontalThumbnailCopy;

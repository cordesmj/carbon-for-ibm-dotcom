/**
 * @license
 *
 * Copyright IBM Corp. 2021, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { css } from 'lit';
import { customElement } from 'lit/decorators.js';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import DDSContentBlockCopy from '../content-block/content-block-copy';
import styles from './callout-with-media.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * The copy content of callout with media.
 *
 * @element dds-callout-with-media-copy
 */
@customElement(`${ddsPrefix}-callout-with-media-copy`)
class DDSCalloutWithMediaCopy extends DDSContentBlockCopy {
  static get stableSelector() {
    return `${ddsPrefix}--callout-with-media-copy`;
  }

  // `styles` here is a `CSSResult` generated by custom WebPack loader
  static get styles() {
    return css`
      ${super.styles}${styles}
    `;
  }
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSCalloutWithMediaCopy;

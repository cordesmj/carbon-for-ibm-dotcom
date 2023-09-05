/**
 * @license
 *
 * Copyright IBM Corp. 2021, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { css } from 'lit';
import settings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import C4DImage from '../image/image';
import styles from './universal-banner.scss';
import { carbonElement as customElement } from '../../internal/vendor/@carbon/web-components/globals/decorators/carbon-element';

const { stablePrefix: c4dPrefix } = settings;

/**
 * Universal banner image.
 *
 * @element c4d-universal-banner-image
 */

@customElement(`${c4dPrefix}-universal-banner-image`)
class C4DUniversalBannerImage extends C4DImage {
  static get stableSelector() {
    return `${c4dPrefix}-universal-banner-image`;
  }

  static get styles() {
    return css`
      ${super.styles}${styles}
    `;
  }
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default C4DUniversalBannerImage;

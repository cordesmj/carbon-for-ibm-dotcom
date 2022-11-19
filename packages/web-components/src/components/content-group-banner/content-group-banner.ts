/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { css, customElement } from 'lit-element';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import DDSContentGroup from '../content-group/content-group';
import styles from './content-group-banner.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Content Group - Banner.
 *
 * @element dds-content-group-banner
 */
@customElement(`${ddsPrefix}-content-group-banner`)
class DDSContentGroupBanner extends StableSelectorMixin(DDSContentGroup) {
  static get stableSelector() {
    return `${ddsPrefix}--content-group-banner`;
  }

  // `styles` here is a `CSSResult` generated by custom WebPack loader
  static get styles() {
    return css`${super.styles}${styles}`;
  }
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSContentGroupBanner;

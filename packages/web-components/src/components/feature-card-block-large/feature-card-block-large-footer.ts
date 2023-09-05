/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import settings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import { carbonElement as customElement } from '../../internal/vendor/@carbon/web-components/globals/decorators/carbon-element';
import C4DFeatureCardFooter from '../feature-card/feature-card-footer';
import styles from './feature-card-block-large.scss';

const { stablePrefix: c4dPrefix } = settings;

/**
 * Feature card block large footer.
 *
 * @element c4d-feature-card-block-large-footer
 */
@customElement(`${c4dPrefix}-feature-card-block-large-footer`)
class C4DFeatureCardBlockLargeFooter extends C4DFeatureCardFooter {
  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default C4DFeatureCardBlockLargeFooter;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { customElement } from 'lit/decorators.js';
import BXBreadcrumb from '../../internal/vendor/@carbon/web-components/components/breadcrumb/breadcrumb.js';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import styles from './leadspace.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Breadcrumb.
 *
 * @element dds-breadcrumb
 */
@customElement(`${ddsPrefix}-breadcrumb`)
class DDSBreadcrumb extends StableSelectorMixin(BXBreadcrumb) {
  // `styles` here is a `CSSResult` generated by custom WebPack loader
  static styles = styles;
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSBreadcrumb;

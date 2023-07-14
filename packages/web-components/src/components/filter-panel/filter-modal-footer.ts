/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import CDSModalFooter from '../../internal/vendor/@carbon/web-components/components/modal/modal-footer.js';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import './filter-panel-input-select';
import styles from './filter-panel.scss';
import { carbonElement as customElement } from '../../internal/vendor/@carbon/web-components/globals/decorators/carbon-element.js';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * extends the CDSModalFooter
 *
 * @element dds-filter-modal-footer
 */
@customElement(`${ddsPrefix}-filter-modal-footer`)
class DDSFilterModalFooter extends StableSelectorMixin(CDSModalFooter) {
  static get stableSelector() {
    return `${ddsPrefix}-filter-modal-footer`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSFilterModalFooter;

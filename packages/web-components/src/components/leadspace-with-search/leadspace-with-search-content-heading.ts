/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { customElement } from 'lit/decorators.js';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import styles from './leadspace-with-search.scss';
import DDSContentBlockHeading from '../content-block/content-block-heading';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Heading in the content section of Leadspace with search
 *
 * @element dds-leadspace-with-search-content-heading
 */
@customElement(`${ddsPrefix}-leadspace-with-search-content-heading`)
class DDSLeadspaceWithSearchContentHeading extends StableSelectorMixin(
  DDSContentBlockHeading
) {
  static get stableSelector() {
    return `${ddsPrefix}--leadspace-with-search-content-heading`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSLeadspaceWithSearchContentHeading;

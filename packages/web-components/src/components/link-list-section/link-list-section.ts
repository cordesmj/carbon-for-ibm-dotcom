/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { html } from 'lit';
import settings from 'carbon-components/es/globals/js/settings.js';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import styles from './link-list-section.scss';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import DDSContentSection from '../content-section/content-section';
import { carbonElement as customElement } from '../../internal/vendor/@carbon/web-components/globals/decorators/carbon-element';

const { prefix } = settings;
const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Link list.
 *
 * @element dds-link-list
 * @slot heading - The heading content.
 */
@customElement(`${ddsPrefix}-link-list-section`)
class DDSLinkListSection extends StableSelectorMixin(DDSContentSection) {
  _handleSlotChange = (event: Event) => {
    const slot = (event.target as HTMLSlotElement)
      .assignedElements()
      .filter(
        (elem) =>
          elem.localName ===
          (this.constructor as typeof DDSLinkListSection).linkListSelector
      )[0];
    if (
      slot &&
      (!slot.hasAttribute('type') || slot.getAttribute('type') !== 'end')
    ) {
      slot.setAttribute('type', 'end');
    }
  };

  render() {
    const { _handleSlotChange: handleSlotChange } = this;
    return html`
      <div class="${prefix}--content-section__grid">
        <div class="${prefix}--content-section__row">
          <div class="${prefix}--content-section__left">
            <slot name="heading"></slot>
          </div>
          <div class="${prefix}--content-section__children">
            <slot @slotchange="${handleSlotChange}"></slot>
          </div>
        </div>
      </div>
    `;
  }

  static get linkListSelector() {
    return `${ddsPrefix}-link-list`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader

  static get stableSelector() {
    return `${ddsPrefix}--link-list-section`;
  }
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSLinkListSection;

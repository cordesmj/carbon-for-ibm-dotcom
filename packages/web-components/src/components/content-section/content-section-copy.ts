/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { property } from 'lit/decorators.js';
import settings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import styles from './content-section.scss';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import C4DMarkdown from '../markdown/markdown';
import { carbonElement as customElement } from '../../internal/vendor/@carbon/web-components/globals/decorators/carbon-element';

const { stablePrefix: c4dPrefix } = settings;

/**
 * Copy content in content section.
 *
 * @element c4d-content-section-copy
 */
@customElement(`${c4dPrefix}-content-section-copy`)
class C4DContentSectionCopy extends StableSelectorMixin(C4DMarkdown) {
  @property({ reflect: true })
  slot = 'copy';

  render() {
    return html` <slot></slot> `;
  }

  firstUpdated() {
    this.querySelector('p')?.setAttribute('style', 'all:unset;');

    this.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        this.removeChild(node);
      }
    });
  }

  static get stableSelector() {
    return `${c4dPrefix}--content-section-copy`;
  }

  static styles = styles;
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default C4DContentSectionCopy;

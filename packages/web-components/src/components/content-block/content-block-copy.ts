/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import DDSMarkdown from '../markdown/markdown';
import { CONTENT_BLOCK_COPY_SIZE } from './defs';
import './content-block-paragraph';
import styles from './content-block.scss';

export { CONTENT_BLOCK_COPY_SIZE };

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * The copy content of content block.
 *
 * @element dds-content-block-copy
 */
@customElement(`${ddsPrefix}-content-block-copy`)
class DDSContentBlockCopy extends StableSelectorMixin(DDSMarkdown) {
  protected get _customTags() {
    const tags = new Set(super._customTags);
    tags.add(`${ddsPrefix}-content-block-paragraph`);
    return tags;
  }

  protected get _renderer() {
    this.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        this.removeChild(node);
      }
    });

    return Object.assign(super._renderer, {
      paragraph(text) {
        return `<${ddsPrefix}-content-block-paragraph>${text}</${ddsPrefix}-content-block-paragraph>`;
      },
    });
  }

  /**
   * The default slot for all content-block-copy use cases.
   * The content size.
   */
  @property({ reflect: true })
  size = CONTENT_BLOCK_COPY_SIZE.REGULAR;

  /**
   * The shadow slot this copy content should be in.
   */
  @property({ reflect: true })
  slot = 'copy';

  static get stableSelector() {
    return `${ddsPrefix}--content-block__copy`;
  }

  // `styles` here is a `CSSResult` generated by custom WebPack loader
  static get styles() {
    return css`
      ${super.styles}${styles}
    `;
  }
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSContentBlockCopy;

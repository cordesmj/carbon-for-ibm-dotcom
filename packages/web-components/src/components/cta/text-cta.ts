/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import {
  formatVideoCaption,
  formatVideoDuration,
} from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/formatVideoCaption/formatVideoCaption.js';
import DDSLinkWithIcon from '../link-with-icon/link-with-icon';
import CTAMixin from '../../component-mixins/cta/cta';
import VideoCTAMixin from '../../component-mixins/cta/video';
import { CTA_TYPE } from './defs';
import styles from './cta.scss';

export { CTA_TYPE };

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Text CTA.
 *
 * @element dds-text-cta
 */
@customElement(`${ddsPrefix}-text-cta`)
class DDSTextCTA extends VideoCTAMixin(CTAMixin(DDSLinkWithIcon)) {
  /**
   * `true` if there is a non-empty default slot content.
   */
  @state()
  protected _hasContent = false;

  /**
   * Handles `slotchange` event on the default `<slot>`.
   */
  protected _handleSlotChange({ target }: Event) {
    this._hasContent = (target as HTMLSlotElement)
      .assignedNodes()
      .some(
        (node) =>
          node.nodeType !== Node.COMMENT_NODE &&
          (node.nodeType !== Node.TEXT_NODE || node.nodeValue?.trim())
      );
  }

  protected _renderContent() {
    const { ctaType, _hasContent: hasContent } = this;
    if (ctaType !== CTA_TYPE.VIDEO) {
      return super._renderContent();
    }
    const {
      videoDuration,
      videoName,
      formatVideoCaption: formatVideoCaptionInEffect,
      formatVideoDuration: formatVideoDurationInEffect,
    } = this;

    const caption = hasContent
      ? undefined
      : formatVideoCaptionInEffect({
          duration: formatVideoDurationInEffect({
            duration: !videoDuration ? videoDuration : videoDuration * 1000,
          }),
          name: videoName,
        });
    return html`
      <span
        ><slot @slotchange="${this._handleSlotChange}"></slot>${caption}</span
      >
    `;
  }

  /**
   * The CTA type.
   */
  @property({ reflect: true, attribute: 'cta-type' })
  ctaType = CTA_TYPE.REGULAR;

  /**
   * The formatter for the video caption, composed with the video name and the video duration.
   * Should be changed upon the locale the UI is rendered with.
   */
  @property({ attribute: false })
  formatVideoCaption = formatVideoCaption;

  /**
   * The formatter for the video duration.
   * Should be changed upon the locale the UI is rendered with.
   */
  @property({ attribute: false })
  formatVideoDuration = formatVideoDuration;

  /**
   * The video duration.
   */
  @property({ type: Number, attribute: 'video-duration' })
  videoDuration?: number;

  /**
   * The video name.
   */
  @property({ attribute: 'video-name' })
  videoName?: string;

  /**
   * The video description.
   */
  @property({ attribute: 'video-description' })
  videoDescription?: string;

  /**
   * The video thumbnail URL.
   * Text CTA does not support video thumbnail, and this property should never be set.
   */
  videoThumbnailUrl?: never;

  static get stableSelector() {
    return `${ddsPrefix}--text-cta`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSTextCTA;

/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { carbonElement as customElement } from '../../internal/vendor/@carbon/web-components/globals/decorators/carbon-element.js';
import settings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings.js';
import DDSLinkWithIcon, {
  ICON_PLACEMENT,
} from '../link-with-icon/link-with-icon';
import { BASIC_COLOR_SCHEME } from '../../globals/defs';
import styles from './card.scss';

const { prefix, stablePrefix: ddsPrefix } = settings;

/**
 * Card footer.
 *
 * @element dds-card-footer
 */
@customElement(`${ddsPrefix}-card-footer`)
class DDSCardFooter extends DDSLinkWithIcon {
  /**
   * The non-link container node, used when the link of parent `<dds-card>` should be used.
   */
  @query(`.${ddsPrefix}-ce--card__footer--static`)
  private _staticNode?: HTMLSpanElement;

  /**
   * `true` if there is copy content.
   */
  @state()
  protected _hasCopy = false;

  /**
   * `true` if the link of parent `<dds-card>` should be used.
   */
  protected get _shouldUseParentLink() {
    const { href, parentHref } = this;
    return Boolean(parentHref) && (!href || parentHref === href);
  }

  /**
   * Handles `slotchange` event on the default `<slot>`.
   */
  protected _handleSlotChange({ target }: Event) {
    if (!(target as HTMLSlotElement).name) {
      const hasContent = (target as HTMLSlotElement)
        .assignedNodes()
        .some(
          (node) =>
            node.nodeType !== Node.TEXT_NODE || node!.textContent!.trim()
        );
      this._hasCopy = hasContent;
    }
  }

  /**
   * @returns The main content.
   */
  _renderContent() {
    const { _hasCopy: hasCopy } = this;
    return html`
      <span ?hidden="${!hasCopy}" class="${prefix}--card__cta__copy">
        <slot @slotchange="${this._handleSlotChange}"></slot>
      </span>
    `;
  }

  _renderInner() {
    return this.iconPlacement === ICON_PLACEMENT.LEFT
      ? html` ${this._renderIcon()}${this._renderContent()} `
      : html` ${this._renderContent()}${this._renderIcon()} `;
  }

  /**
   * Alternative aria label if no text in footer.
   */
  @property({ reflect: false })
  altAriaLabel?: string | null;

  /**
   * The color scheme.
   */
  @property({ attribute: 'color-scheme', reflect: true })
  colorScheme = BASIC_COLOR_SCHEME.REGULAR;

  /**
   * The `href` in parent `<dds-card>`.
   * `<dds-card>` sets this automatically.
   */
  @property({ attribute: 'parent-href', reflect: true })
  parentHref?: string;

  /**
   * Positions the icon inline with text when `true`
   */
  @property({ type: Boolean })
  iconInline = true;

  /**
   * The slot in parent `<dds-card>`.
   */
  @property({ reflect: true })
  slot = 'footer';

  updated(changedProperties) {
    super.updated(changedProperties);

    if (!this._hasCopy) {
      this.shadowRoot
        ?.querySelector(`a`)
        ?.setAttribute(
          'aria-label',
          this.altAriaLabel ? this.altAriaLabel : ''
        );
    } else {
      this.shadowRoot?.querySelector(`a`)?.removeAttribute('aria-label');
    }

    const {
      iconInline,
      iconPlacement,
      _staticNode: staticNode,
      _linkNode: linkNode,
    } = this;
    const targetNode = linkNode ?? staticNode;
    targetNode!.classList.add(`${prefix}--card__footer`);
    targetNode!.classList.add(`${ddsPrefix}-ce--card__footer`);
    targetNode!.classList.toggle(
      `${prefix}--card__footer__icon-left`,
      iconPlacement === ICON_PLACEMENT.LEFT
    );

    if (iconInline && iconPlacement === ICON_PLACEMENT.RIGHT) {
      targetNode!.classList.add(`${prefix}--link-with-icon--inline-icon`);
    }
  }

  static get stableSelector() {
    return `${ddsPrefix}--card-footer`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSCardFooter;

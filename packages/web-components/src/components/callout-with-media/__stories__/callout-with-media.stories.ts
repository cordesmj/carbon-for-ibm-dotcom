/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import '../index';
import '../callout-with-media-image';
import '../callout-with-media-video';
import { html } from 'lit';
import { select } from '@storybook/addon-knobs';
import { CONTENT_BLOCK_COPY_SIZE } from '../../content-block/content-block-copy';
import imgLg16x9 from '../../../../../storybook-images/assets/720/fpo--16x9--720x405--005.jpg';
import readme from './README.stories.mdx';
import textNullable from '../../../../.storybook/knob-text-nullable';

const image = html`
  <c4d-callout-with-media-image
    alt="Image alt text"
    default-src="${imgLg16x9}"
    heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
  </c4d-callout-with-media-image>
`;

const video = html`
  <c4d-callout-with-media-video
    video-id="0_uka1msg4"></c4d-callout-with-media-video>
`;

export const Default = (args) => {
  const { copy, heading, mediaType } = args?.CalloutWithMedia ?? {};
  return html`
    <c4d-callout-with-media>
      <c4d-content-block-heading>${heading}</c4d-content-block-heading>
      <c4d-callout-with-media-copy size="${CONTENT_BLOCK_COPY_SIZE.SMALL}"
        >${copy}</c4d-callout-with-media-copy
      >
      ${mediaType === 'image' ? image : ``}
      ${mediaType === 'video' ? video : ``}
    </c4d-callout-with-media>
  `;
};

export default {
  title: 'Components/Callout with media',
  decorators: [
    (story) => html`
      <div class="cds--grid">
        <div class="cds--row">
          <div class="cds--col-lg-12 cds--no-gutter">${story()}</div>
        </div>
      </div>
    `,
  ],
  parameters: {
    ...readme.parameters,
    hasStoryPadding: true,
    knobs: {
      CalloutWithMedia: () => ({
        mediaType: select(
          'mediaType (optional)',
          ['image', 'video', 'none'],
          'image'
        ),
        heading: textNullable(
          'Heading',
          'Curabitur malesuada varius mi eu posuere'
        ),
        copy: `Lorem ipsum *dolor* sit amet, consectetur adipiscing elit. Aenean et ultricies est.
  Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales
  nulla quis, *consequat* libero. Here are
  some common categories:`,
      }),
    },
    propsSet: {
      default: {
        CalloutWithMedia: {
          mediaType: 'image',
          heading: 'Curabitur malesuada varius mi eu posuere',
          copy: `Lorem ipsum *dolor* sit amet, consectetur adipiscing elit. Aenean et ultricies est.
  Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales
  nulla quis, *consequat* libero. Here are
  some common categories:`,
        },
      },
    },
  },
};

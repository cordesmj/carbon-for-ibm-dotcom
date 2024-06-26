/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { boolean, text } from '@storybook/addon-knobs';
import React from 'react';
import C4DVideoPlayerContainer from '@carbon/ibmdotcom-web-components/es/components-react/video-player/video-player-container';
import readme from './README.stories.react.mdx';

export const Default = (args) => {
  const { aspectRatio, caption, hideCaption, videoId } =
    args?.VideoPlayerContainer ?? {};
  return (
    <C4DVideoPlayerContainer
      aspectRatio={aspectRatio}
      caption={caption}
      hideCaption={hideCaption}
      videoId={videoId}
    />
  );
};

export const aspectRatio1x1 = (args) => {
  const { aspectRatio, caption, hideCaption, videoId } =
    args?.VideoPlayerContainer ?? {};
  return (
    <C4DVideoPlayerContainer
      aspectRatio={aspectRatio}
      caption={caption}
      hideCaption={hideCaption}
      videoId={videoId}
    />
  );
};

aspectRatio1x1.story = {
  name: 'Aspect ratio 1:1',
  parameters: {
    knobs: {
      VideoPlayerContainer: () => {
        return {
          aspectRatio: '1x1',
          caption: text('Custom caption (caption):', ''),
          hideCaption: boolean('Hide caption (hideCaption):', false),
          thumbnail: text('Custom thumbnail (thumbnail):', ''),
          videoId: '0_ibuqxqbe',
        };
      },
    },
  },
};

export const aspectRatio4x3 = (args) => {
  const { aspectRatio, caption, hideCaption, videoId } =
    args?.VideoPlayerContainer ?? {};
  return (
    <C4DVideoPlayerContainer
      aspectRatio={aspectRatio}
      caption={caption}
      hideCaption={hideCaption}
      videoId={videoId}
    />
  );
};

aspectRatio4x3.story = {
  name: 'Aspect ratio 4:3',
  parameters: {
    knobs: {
      VideoPlayerContainer: () => {
        return {
          aspectRatio: '4x3',
          caption: text('Custom caption (caption):', ''),
          hideCaption: boolean('Hide caption (hideCaption):', false),
          thumbnail: text('Custom thumbnail (thumbnail):', ''),
          videoId: '0_ibuqxqbe',
        };
      },
    },
  },
};

export default {
  title: 'Components/Video Player',
  decorators: [
    (story) => (
      <div className="cds--grid">
        <div className="cds--row">
          <div className="cds--col-sm-4 cds--col-lg-8">{story()}</div>
        </div>
      </div>
    ),
  ],
  parameters: {
    ...readme.parameters,
    knobs: {
      VideoPlayerContainer: () => ({
        caption: text('Custom caption (caption):', ''),
        hideCaption: boolean('Hide caption (hideCaption):', false),
        thumbnailUrl: text('Custom thumbnail (thumbnail):', ''),
        videoId: '0_ibuqxqbe',
      }),
    },
  },
};

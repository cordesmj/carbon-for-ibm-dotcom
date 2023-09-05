/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import '../index';

import { select, text } from '@storybook/addon-knobs';

import { action } from '@storybook/addon-actions';
import { html } from 'lit-element';
import readme from './README.stories.mdx';

const questionChoices = {
  Email: '1',
  'Email + Phone': '1,2',
};
const locales = {
  'English [en]': 'en',
  'Arabic [ar]': 'ar',
  'Chinese (PRC) [zh-cn]': 'zh-cn',
  'Chinese (Taiwan) [zh-tw]': 'zh-tw',
  'French [fr]': 'fr',
  'German [de]': 'de',
  'Greek [el]': 'el',
  'Hebrew [he]': 'he',
  'Hungarian [hu]': 'hu',
  'Indonesian [id]': 'id',
  'Italian [it]': 'it',
  'Japanese [ja]': 'ja',
  'Korean [ko]': 'ko',
  'Malaysian [ms]': 'ms',
  'Polish [pl]': 'pl',
  'Portuguese [pt]': 'pt',
  'Slovenian [sl]': 'sl',
  'Spanish [es]': 'es',
  'Spanish-Latin America [es-la]': 'es-la',
  'Turkish [tr]': 'tr',
  'Ukrainian [uk]': 'uk',
};
const countryList = {
  'Unites States': 'US',
  Germany: 'DE',
  India: 'IN',
  China: 'CN',
  Japan: 'JP',
};
const stateList = {
  Unknown: '',
  Alabama: 'AL',
  California: 'CA',
};
const onChange = (event: CustomEvent) => {
  console.log(event.detail);
};
const props = () => ({
  locale: select('Language', locales, 'en'),
  country: select('Country', countryList, 'US'),
  state: select('State', stateList, ''),
  questionchoices: select('Question Choices', questionChoices, '1,2'),
  email: text('Email', ''),
  termsConditionLink: text(
    'Terms & Condition Link',
    'https://www.ibm.com/legal'
  ),
  bpidLegalText: text('BPID Legal Text', ''),
  onChange: action('c4d-notice-choice-change'),
});

export const Default = (args) => {
  const {
    locale,
    country,
    state,
    email,
    termsConditionLink,
    questionchoices,
    enableAllOptIn,
    bpidLegalText,
  } = args?.NoticeChoice ?? {};
  return html`
    <c4d-notice-choice
      locale="${locale}"
      country="${country}"
      question-choices="${questionchoices}"
      state="${state}"
      email=${email}
      terms-condition-link="${termsConditionLink}"
      ?enable-all-opt-in=${enableAllOptIn}
      bpid-legal-text="${bpidLegalText}"
      @c4d-notice-choice-change=${onChange}></c4d-notice-choice>
  `;
};

export default {
  title: 'Components/Notice Choice',
  decorators: [
    (story) => html`
      <div class="cds--grid">
        <div class="cds--row">
          <div
            class="cds--col-sm-4 cds--col-md-8 cds--col-lg-12 cds--offset-lg-2">
            ${story()}
          </div>
        </div>
      </div>
    `,
  ],
  parameters: {
    ...readme.parameters,
    hasStoryPadding: true,
    knobs: {
      NoticeChoice: () => props(),
    },
    propsSet: {
      default: {
        NoticeChoice: {
          'question-choices': [1, 2],
          onChange: 'c4d-notice-choice-change',
        },
      },
    },
  },
};

/**
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

describe('cds-feature-card', () => {
  it('should load the default cds-feature-card example', () => {
    cy.visit('/feature-card');

    // Take a snapshot for visual diffing
    cy.percySnapshot('cds-feature-card | default');
  });
});

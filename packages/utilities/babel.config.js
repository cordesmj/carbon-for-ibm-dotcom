/**
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  presets: ['./scripts/env'],
  plugins: [
    'dev-expression',
    'macros',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    '@babel/plugin-transform-class-properties',
    '@babel/plugin-transform-export-namespace-from',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-transform-nullish-coalescing-operator',
    '@babel/plugin-transform-optional-chaining',
  ],
};

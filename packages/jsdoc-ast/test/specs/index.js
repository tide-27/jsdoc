/*
  Copyright 2020 the JSDoc Authors.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
const ast = require('../../index');

describe('@jsdoc/ast', () => {
  it('is an object', () => {
    expect(ast).toBeObject();
  });

  describe('AstBuilder', () => {
    it('is lib/ast-builder.AstBuilder', () => {
      const { AstBuilder } = require('../../lib/ast-builder');

      expect(ast.AstBuilder).toBe(AstBuilder);
    });
  });

  describe('astNode', () => {
    it('is lib/ast-node', () => {
      const astNode = require('../../lib/ast-node');

      expect(ast.astNode).toBe(astNode);
    });
  });

  describe('Syntax', () => {
    it('is lib/syntax.Syntax', () => {
      const { Syntax } = require('../../lib/syntax');

      expect(ast.Syntax).toBe(Syntax);
    });
  });

  describe('Walker', () => {
    it('is lib/walker.Walker', () => {
      const { Walker } = require('../../lib/walker');

      expect(ast.Walker).toBe(Walker);
    });
  });
});

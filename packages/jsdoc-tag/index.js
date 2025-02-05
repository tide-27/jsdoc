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
const definitions = require('./lib/definitions');
const { Dictionary } = require('./lib/dictionary');
const inline = require('./lib/inline');
const { Tag } = require('./lib/tag');
const type = require('./lib/type');
const { validate } = require('./lib/validator');

module.exports = {
  definitions,
  Dictionary,
  inline,
  Tag,
  type,
  validate,
};

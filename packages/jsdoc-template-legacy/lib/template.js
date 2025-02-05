/*
  Copyright 2012 the JSDoc Authors.

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
/**
 * Wrapper for Lodash's template utility to allow loading templates from files.
 */
const _ = require('lodash');
const fs = require('fs');
const path = require('path');

/**
 * Template helper.
 */
class Template {
  /**
   * @param {string} filepath - Templates directory.
   */
  constructor(filepath) {
    this.path = filepath;
    this.layout = null;
    this.cache = {};
    // override default template tag settings
    this.settings = {
      evaluate: /<\?js([\s\S]+?)\?>/g,
      interpolate: /<\?js=([\s\S]+?)\?>/g,
      escape: /<\?js~([\s\S]+?)\?>/g,
    };
  }

  /**
   * Loads template from given file.
   * @param {string} file - Template filename.
   * @return {function} Returns template closure.
   */
  load(file) {
    return _.template(fs.readFileSync(file, 'utf8'), this.settings);
  }

  /**
   * Renders template using given data.
   *
   * This is low-level function, for rendering full templates use {@link Template.render()}.
   *
   * @param {string} file - Template filename.
   * @param {object} data - Template variables.
   * @return {string} Rendered template.
   */
  partial(file, data) {
    file = path.resolve(this.path, file);

    // load template into cache
    if (!(file in this.cache)) {
      this.cache[file] = this.load(file);
    }

    // keep template helper context
    return this.cache[file].call(this, data);
  }

  /**
   * Renders template with given data.
   *
   * This method automaticaly applies layout if set.
   *
   * @param {string} file - Template filename.
   * @param {object} data - Template variables.
   * @return {string} Rendered template.
   */
  render(file, data) {
    // main content
    let content = this.partial(file, data);

    // apply layout
    if (this.layout) {
      data.content = content;
      content = this.partial(this.layout, data);
    }

    return content;
  }
}
exports.Template = Template;

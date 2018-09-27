"use strict";

define('dummy/adapters/-addon-docs', ['exports', 'ember-cli-addon-docs/adapters/-addon-docs'], function (exports, _addonDocs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _addonDocs.default;
    }
  });
});
define('dummy/adapters/class', ['exports', 'ember-cli-addon-docs/adapters/class'], function (exports, _class) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _class.default;
    }
  });
});
define('dummy/adapters/component', ['exports', 'ember-cli-addon-docs/adapters/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/adapters/module', ['exports', 'ember-cli-addon-docs/adapters/module'], function (exports, _module) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _module.default;
    }
  });
});
define('dummy/adapters/project', ['exports', 'ember-cli-addon-docs/adapters/project'], function (exports, _project) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _project.default;
    }
  });
});
define('dummy/app', ['exports', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  // BEGIN-SNIPPET sample-snippet.js
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  // END-SNIPPET

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('dummy/breakpoints', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    mobile: '(max-width: 767px)',
    tablet: '(min-width: 768px) and (max-width: 991px)',
    desktop: '(min-width: 992px) and (max-width: 1200px)',
    jumbo: '(min-width: 1201px)'
  };
});
define("dummy/components/-lf-get-outlet-state", ["exports", "liquid-fire/components/-lf-get-outlet-state"], function (exports, _lfGetOutletState) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _lfGetOutletState.default;
    }
  });
});
define('dummy/components/api/x-class', ['exports', 'ember-cli-addon-docs/components/api/x-class/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/api/x-component', ['exports', 'ember-cli-addon-docs/components/api/x-component/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/api/x-import-path', ['exports', 'ember-cli-addon-docs/components/api/x-import-path/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/api/x-meta-panel', ['exports', 'ember-cli-addon-docs/components/api/x-meta-panel/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/api/x-meta-panel/header', ['exports', 'ember-cli-addon-docs/components/api/x-meta-panel/header/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/api/x-module', ['exports', 'ember-cli-addon-docs/components/api/x-module/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/api/x-section', ['exports', 'ember-cli-addon-docs/components/api/x-section/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/api/x-sections', ['exports', 'ember-cli-addon-docs/components/api/x-sections/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/api/x-toggles', ['exports', 'ember-cli-addon-docs/components/api/x-toggles/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("dummy/components/code-snippet", ["exports", "dummy/snippets"], function (exports, _snippets) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  /* global require */
  var Highlight = self.require('highlight.js');

  exports.default = Ember.Component.extend({
    tagName: 'pre',
    classNameBindings: ['language'],
    unindent: true,

    _unindent: function (src) {
      if (!this.get('unindent')) {
        return src;
      }
      var match,
          min,
          lines = src.split("\n").filter(l => l !== '');
      for (var i = 0; i < lines.length; i++) {
        match = /^[ \t]*/.exec(lines[i]);
        if (match && (typeof min === 'undefined' || min > match[0].length)) {
          min = match[0].length;
        }
      }
      if (typeof min !== 'undefined' && min > 0) {
        src = src.replace(new RegExp("^[ \t]{" + min + "}", 'gm'), "");
      }
      return src;
    },

    source: Ember.computed('name', function () {
      var snippet = this.get('name').split('/').reduce((dir, name) => dir && dir[name], _snippets.default);

      return this._unindent((snippet || "").replace(/^(\s*\n)*/, '').replace(/\s*$/, ''));
    }),

    didInsertElement: function () {
      Highlight.highlightBlock(this.get('element'));
    },

    language: Ember.computed('name', function () {
      var m = /\.(\w+)$/i.exec(this.get('name'));
      if (m) {
        switch (m[1].toLowerCase()) {
          case 'js':
            return 'javascript';
          case 'coffee':
            return 'coffeescript';
          case 'hbs':
            return 'htmlbars';
          case 'css':
            return 'css';
          case 'scss':
            return 'scss';
          case 'less':
            return 'less';
          case 'emblem':
            return 'emblem';
          case 'ts':
            return 'typescript';
        }
      }
    })
  });
});
define('dummy/components/copy-button', ['exports', 'ember-cli-clipboard/components/copy-button'], function (exports, _copyButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _copyButton.default;
    }
  });
});
define('dummy/components/docs-demo', ['exports', 'ember-cli-addon-docs/components/docs-demo/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/docs-demo/x-example', ['exports', 'ember-cli-addon-docs/components/docs-demo/x-example/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/docs-demo/x-snippet', ['exports', 'ember-cli-addon-docs/components/docs-demo/x-snippet/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/docs-header', ['exports', 'ember-cli-addon-docs/components/docs-header/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/docs-header/link', ['exports', 'ember-cli-addon-docs/components/docs-header/link/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/docs-header/search-box', ['exports', 'ember-cli-addon-docs/components/docs-header/search-box/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/docs-header/search-result', ['exports', 'ember-cli-addon-docs/components/docs-header/search-result/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/docs-header/search-results', ['exports', 'ember-cli-addon-docs/components/docs-header/search-results/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/docs-header/version-selector', ['exports', 'ember-cli-addon-docs/components/docs-header/version-selector/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/docs-hero', ['exports', 'ember-cli-addon-docs/components/docs-hero/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/docs-keyboard-shortcuts', ['exports', 'ember-cli-addon-docs/components/docs-keyboard-shortcuts/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/docs-link', ['exports', 'ember-cli-addon-docs/components/docs-link/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/docs-logo', ['exports', 'ember-cli-addon-docs/components/docs-logo/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/docs-snippet', ['exports', 'ember-cli-addon-docs/components/docs-snippet/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/docs-svg-icon', ['exports', 'ember-cli-addon-docs/components/docs-svg-icon/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/docs-viewer', ['exports', 'ember-cli-addon-docs/components/docs-viewer/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/docs-viewer/x-main', ['exports', 'ember-cli-addon-docs/components/docs-viewer/x-main/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/docs-viewer/x-nav-item', ['exports', 'ember-cli-addon-docs/components/docs-viewer/x-nav-item/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/docs-viewer/x-nav-list', ['exports', 'ember-cli-addon-docs/components/docs-viewer/x-nav-list/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/docs-viewer/x-nav', ['exports', 'ember-cli-addon-docs/components/docs-viewer/x-nav/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/docs-viewer/x-page-index', ['exports', 'ember-cli-addon-docs/components/docs-viewer/x-page-index/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/docs-viewer/x-section', ['exports', 'ember-cli-addon-docs/components/docs-viewer/x-section/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/ember-modal-dialog-positioned-container', ['exports', 'ember-modal-dialog/components/positioned-container'], function (exports, _positionedContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _positionedContainer.default;
    }
  });
});
define('dummy/components/ember-modal-dialog/-basic-dialog', ['exports', 'ember-modal-dialog/components/basic-dialog'], function (exports, _basicDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDialog.default;
    }
  });
});
define('dummy/components/ember-modal-dialog/-in-place-dialog', ['exports', 'ember-modal-dialog/components/in-place-dialog'], function (exports, _inPlaceDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inPlaceDialog.default;
    }
  });
});
define('dummy/components/ember-modal-dialog/-liquid-dialog', ['exports', 'ember-modal-dialog/components/liquid-dialog'], function (exports, _liquidDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidDialog.default;
    }
  });
});
define('dummy/components/ember-modal-dialog/-liquid-tether-dialog', ['exports', 'ember-modal-dialog/components/liquid-tether-dialog'], function (exports, _liquidTetherDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidTetherDialog.default;
    }
  });
});
define('dummy/components/ember-modal-dialog/-tether-dialog', ['exports', 'ember-modal-dialog/components/tether-dialog'], function (exports, _tetherDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tetherDialog.default;
    }
  });
});
define('dummy/components/ember-tether', ['exports', 'ember-tether/components/ember-tether'], function (exports, _emberTether) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberTether.default;
    }
  });
});
define('dummy/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
define('dummy/components/esdoc-component', ['exports', '@ember-decorators/object', '@ember-decorators/argument', '@ember-decorators/argument/type', '@ember-decorators/argument/types'], function (exports, _object, _argument, _type, _types) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _desc, _value, _class, _descriptor, _descriptor2, _class2, _temp2;

  let ESDocComponent = (_dec = (0, _type.type)('number'), _dec2 = (0, _type.type)(_types.Action), (_class = (_temp2 = _class2 = class ESDocComponent extends Ember.Component {
    constructor(...args) {
      var _temp;

      return _temp = super(...args), _initDefineProp(this, 'count', _descriptor, this), _initDefineProp(this, 'onEvent', _descriptor2, this), this._privateField = 123, _temp;
    }

    /**
      The best method ever made, anywhere.
      @param {Object} features the features of the user
      @param {String} name the name of the user
      @return {String} the welcome message
    */
    impressUser(features, name) {
      return `${name} has features ${features}`;
    }

    /**
      Increments the count property
    */

    increment() {
      this.incrementProperty('count');
    }
  }, _class2.isESDocComponent = true, _temp2), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'count', [_argument.argument, _dec], {
    enumerable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'onEvent', [_argument.argument, _dec2], {
    enumerable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, 'increment', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'increment'), _class.prototype)), _class));
  exports.default = ESDocComponent;
});
define('dummy/components/etw/module-style-detail', ['exports', 'ember-cli-tailwind/utils/classes-for-module-style'], function (exports, _classesForModuleStyle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    etwTailwindStyleguide: Ember.inject.service(),
    moduleStyle: Ember.computed.reads('etwTailwindStyleguide.selectedModuleStyle'),

    activeResponsiveClass: 'all',
    activeState: 'none',

    detailStyles: Ember.computed('moduleStyle', 'activeResponsiveClass', 'activeState', function () {
      let moduleStyle = this.moduleStyle;
      let activeResponsiveClass = this.activeResponsiveClass;
      let responsivePrefix = activeResponsiveClass === 'all' ? '' : `${activeResponsiveClass}:`;
      let activeState = this.activeState;
      let statePrefix = activeState === 'none' ? '' : `${activeState}:`;

      return (0, _classesForModuleStyle.default)(moduleStyle).map(cssClass => {
        return `${responsivePrefix}${statePrefix}${cssClass}`;
      });
    }),

    actions: {
      highlightStyle(style) {
        this.set('highlightedStyle', style);
        Ember.run.later(() => {
          this.set('highlightedStyle', null);
        }, 1500);
      }
    }

  });
});
define('dummy/components/etw/module-style-example', ['exports', 'ember-cli-tailwind/utils/classes-for-module-style'], function (exports, _classesForModuleStyle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: '',
    etwTailwindStyleguide: Ember.inject.service(),

    // Passed in
    moduleStyle: null,

    classesForModuleStyle: Ember.computed('moduleStyle', function () {
      return (0, _classesForModuleStyle.default)(this.moduleStyle);
    }),

    actions: {
      selectModuleStyle() {
        this.etwTailwindStyleguide.set('selectedModuleStyle', this.moduleStyle);
      }
    }

  });
});
define("dummy/components/illiquid-model", ["exports", "liquid-fire/components/illiquid-model"], function (exports, _illiquidModel) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _illiquidModel.default;
    }
  });
});
define("dummy/components/liquid-bind", ["exports", "liquid-fire/components/liquid-bind"], function (exports, _liquidBind) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidBind.default;
    }
  });
});
define("dummy/components/liquid-child", ["exports", "liquid-fire/components/liquid-child"], function (exports, _liquidChild) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidChild.default;
    }
  });
});
define("dummy/components/liquid-container", ["exports", "liquid-fire/components/liquid-container"], function (exports, _liquidContainer) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidContainer.default;
    }
  });
});
define("dummy/components/liquid-if", ["exports", "liquid-fire/components/liquid-if"], function (exports, _liquidIf) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidIf.default;
    }
  });
});
define("dummy/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], function (exports, _liquidMeasured) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidMeasured.default;
    }
  });
  Object.defineProperty(exports, "measure", {
    enumerable: true,
    get: function () {
      return _liquidMeasured.measure;
    }
  });
});
define("dummy/components/liquid-outlet", ["exports", "liquid-fire/components/liquid-outlet"], function (exports, _liquidOutlet) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidOutlet.default;
    }
  });
});
define("dummy/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], function (exports, _liquidSpacer) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidSpacer.default;
    }
  });
});
define('dummy/components/liquid-sync', ['exports', 'liquid-fire/components/liquid-sync'], function (exports, _liquidSync) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidSync.default;
    }
  });
});
define("dummy/components/liquid-unless", ["exports", "liquid-fire/components/liquid-unless"], function (exports, _liquidUnless) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidUnless.default;
    }
  });
});
define("dummy/components/liquid-versions", ["exports", "liquid-fire/components/liquid-versions"], function (exports, _liquidVersions) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidVersions.default;
    }
  });
});
define('dummy/components/modal-dialog-overlay', ['exports', 'ember-modal-dialog/components/modal-dialog-overlay'], function (exports, _modalDialogOverlay) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _modalDialogOverlay.default;
    }
  });
});
define('dummy/components/modal-dialog', ['exports', 'ember-cli-addon-docs/components/modal-dialog/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/simple-list/component', ['exports', '@ember-decorators/argument', '@ember-decorators/argument/type'], function (exports, _argument, _type) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _desc, _value, _class, _descriptor;

  let SimpleList = (_dec = (0, _type.type)('object'), (_class = class SimpleList extends Ember.Component {
    constructor(...args) {
      var _temp;

      return _temp = super(...args), _initDefineProp(this, 'items', _descriptor, this), _temp;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'items', [_argument.argument, _dec], {
    enumerable: true,
    initializer: null
  })), _class));
  exports.default = SimpleList;
});
define('dummy/components/simple-list/item/component', ['exports', '@ember-decorators/argument', '@ember-decorators/argument/type'], function (exports, _argument, _type) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _desc, _value, _class, _descriptor;

  let SimpleListItem = (_dec = (0, _type.type)('object'), (_class = class SimpleListItem extends Ember.Component {
    constructor(...args) {
      var _temp;

      return _temp = super(...args), _initDefineProp(this, 'value', _descriptor, this), _temp;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'value', [_argument.argument, _dec], {
    enumerable: true,
    initializer: null
  })), _class));
  exports.default = SimpleListItem;
});
define('dummy/components/tether-dialog', ['exports', 'ember-modal-dialog/components/deprecated-tether-dialog'], function (exports, _deprecatedTetherDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _deprecatedTetherDialog.default;
    }
  });
});
define('dummy/components/yuidoc-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  /**
    Pretty cool component, right?
  
    To use it, you could enter the following in your template:
  
    ```handlebars
    {{yuidoc-component foo='bar'}}
    ```
  
    @class YUIDocComponent
    @public
  */
  let YUIDocComponent = Ember.Component.extend({
    /**
      The count
      @argument count
      @type number
    */
    count: 0,

    /**
      An action that sends on events
      @argument onEvent
      @type Action
    */
    onEvent: null,

    /**
      PRIVATE DO NOT TOUCH
       @field _privateField
      @private
      @type number
    */
    _privateField: 123,

    /**
      The best method ever made, anywhere.
      @method impressUser
      @param {Object} features the features of the user
      @param {String} name the name of the user
      @return {String} the welcome message
      @public
    */
    impressUser(features, name) {
      return `${name} has features ${features}`;
    }

  }); /** @documenter yuidoc */

  YUIDocComponent.reopenClass({
    /**
      An awesome static value
       @field isYUIDocComponent
      @static
      @type boolean
    */
    isYUIDocComponent: true
  });

  exports.default = YUIDocComponent;
});
define('dummy/controllers/application-tailwind', ['exports', 'dummy/tailwind/config/colors', 'dummy/tailwind/config/screens', 'dummy/tailwind/config/fonts', 'dummy/tailwind/config/text-sizes', 'dummy/tailwind/config/font-weights', 'dummy/tailwind/config/line-height', 'dummy/tailwind/config/letter-spacing', 'dummy/tailwind/config/border-widths', 'dummy/tailwind/config/border-radius', 'dummy/tailwind/config/width', 'dummy/tailwind/config/height', 'dummy/tailwind/config/min-width', 'dummy/tailwind/config/min-height', 'dummy/tailwind/config/max-width', 'dummy/tailwind/config/max-height', 'dummy/tailwind/config/padding', 'dummy/tailwind/config/margin', 'dummy/tailwind/config/negative-margin', 'dummy/tailwind/config/shadows', 'dummy/tailwind/config/z-index', 'dummy/tailwind/config/opacity', 'dummy/tailwind/config/svg-fill', 'dummy/tailwind/config/svg-stroke'], function (exports, _colors, _screens, _fonts, _textSizes, _fontWeights, _lineHeight, _letterSpacing, _borderWidths, _borderRadius, _width, _height, _minWidth, _minHeight, _maxWidth, _maxHeight, _padding, _margin, _negativeMargin, _shadows, _zIndex, _opacity, _svgFill, _svgStroke) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const modules = {
    colors: _colors.default,
    screens: _screens.default,
    fonts: _fonts.default,
    textSizes: _textSizes.default,
    fontWeights: _fontWeights.default,
    leading: _lineHeight.default,
    tracking: _letterSpacing.default,
    borderWidths: _borderWidths.default,
    borderRadius: _borderRadius.default,
    width: _width.default,
    height: _height.default,
    minWidth: _minWidth.default,
    minHeight: _minHeight.default,
    maxWidth: _maxWidth.default,
    maxHeight: _maxHeight.default,
    padding: _padding.default,
    margin: _margin.default,
    negativeMargin: _negativeMargin.default,
    shadows: _shadows.default,
    zIndex: _zIndex.default,
    opacity: _opacity.default,
    svgFill: _svgFill.default,
    svgStroke: _svgStroke.default
  };

  exports.default = Ember.Controller.extend({

    /*
      A module style is an object that looks like
       {
        module: 'border-radius',
        name: 'lg',
        value: '.5rem'
      }
    */
    moduleStyles: Ember.computed(function () {
      return Object.keys(modules).reduce((allModules, moduleName) => {
        let hash = modules[moduleName];
        allModules[moduleName] = Object.keys(hash).map(key => {
          return {
            module: Ember.String.dasherize(moduleName),
            name: key,
            value: hash[key]
          };
        });

        return allModules;
      }, {});
    })

  });
});
define('dummy/controllers/application', ['exports', 'ember-cli-addon-docs/controllers/application'], function (exports, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _application.default;
    }
  });
});
define('dummy/controllers/docs/api/class', ['exports', 'ember-cli-addon-docs/controllers/docs/api/class'], function (exports, _class) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _class.default;
    }
  });
});
define('dummy/ember-cli-addon-docs/tests/addon.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | addon');

  QUnit.test('addon/adapters/-addon-docs.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/adapters/-addon-docs.js should pass ESLint\n\n');
  });

  QUnit.test('addon/adapters/class.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/adapters/class.js should pass ESLint\n\n');
  });

  QUnit.test('addon/adapters/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/adapters/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/adapters/module.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/adapters/module.js should pass ESLint\n\n');
  });

  QUnit.test('addon/adapters/project.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/adapters/project.js should pass ESLint\n\n');
  });

  QUnit.test('addon/breakpoints.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/breakpoints.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/api/x-class/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/api/x-class/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/api/x-component/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/api/x-component/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/api/x-import-path/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/api/x-import-path/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/api/x-meta-panel/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/api/x-meta-panel/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/api/x-meta-panel/header/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/api/x-meta-panel/header/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/api/x-module/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/api/x-module/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/api/x-section/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/api/x-section/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/api/x-sections/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/api/x-sections/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/api/x-toggles/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/api/x-toggles/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/docs-demo/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/docs-demo/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/docs-demo/x-example/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/docs-demo/x-example/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/docs-demo/x-snippet/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/docs-demo/x-snippet/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/docs-header/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/docs-header/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/docs-header/link/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/docs-header/link/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/docs-header/search-box/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/docs-header/search-box/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/docs-header/search-result/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/docs-header/search-result/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/docs-header/search-results/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/docs-header/search-results/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/docs-header/version-selector/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/docs-header/version-selector/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/docs-hero/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/docs-hero/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/docs-keyboard-shortcuts/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/docs-keyboard-shortcuts/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/docs-link/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/docs-link/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/docs-logo/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/docs-logo/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/docs-snippet/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/docs-snippet/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/docs-svg-icon/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/docs-svg-icon/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/docs-viewer/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/docs-viewer/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/docs-viewer/x-main/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/docs-viewer/x-main/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/docs-viewer/x-nav-item/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/docs-viewer/x-nav-item/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/docs-viewer/x-nav-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/docs-viewer/x-nav-list/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/docs-viewer/x-nav/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/docs-viewer/x-nav/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/docs-viewer/x-page-index/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/docs-viewer/x-page-index/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/docs-viewer/x-section/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/docs-viewer/x-section/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/modal-dialog/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/modal-dialog/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('addon/controllers/docs/api/class.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/controllers/docs/api/class.js should pass ESLint\n\n');
  });

  QUnit.test('addon/helpers/break-on.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/break-on.js should pass ESLint\n\n');
  });

  QUnit.test('addon/helpers/type-signature.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/type-signature.js should pass ESLint\n\n');
  });

  QUnit.test('addon/initializers/inject-media.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/initializers/inject-media.js should pass ESLint\n\n');
  });

  QUnit.test('addon/keyboard-config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/keyboard-config.js should pass ESLint\n\n');
  });

  QUnit.test('addon/models/class.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/models/class.js should pass ESLint\n\n');
  });

  QUnit.test('addon/models/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/models/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/models/module.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/models/module.js should pass ESLint\n\n');
  });

  QUnit.test('addon/models/project.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/models/project.js should pass ESLint\n\n');
  });

  QUnit.test('addon/router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/router.js should pass ESLint\n\n');
  });

  QUnit.test('addon/routes/docs.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/routes/docs.js should pass ESLint\n\n');
  });

  QUnit.test('addon/routes/docs/api/item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/routes/docs/api/item.js should pass ESLint\n\n');
  });

  QUnit.test('addon/serializers/-addon-docs.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/serializers/-addon-docs.js should pass ESLint\n\n');
  });

  QUnit.test('addon/services/docs-fetch.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/services/docs-fetch.js should pass ESLint\n\n');
  });

  QUnit.test('addon/services/docs-routes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/services/docs-routes.js should pass ESLint\n\n');
  });

  QUnit.test('addon/services/docs-search.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/services/docs-search.js should pass ESLint\n\n');
  });

  QUnit.test('addon/services/project-version.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/services/project-version.js should pass ESLint\n\n');
  });

  QUnit.test('addon/tailwind/config/background-colors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tailwind/config/background-colors.js should pass ESLint\n\n');
  });

  QUnit.test('addon/tailwind/config/background-size.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tailwind/config/background-size.js should pass ESLint\n\n');
  });

  QUnit.test('addon/tailwind/config/border-colors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tailwind/config/border-colors.js should pass ESLint\n\n');
  });

  QUnit.test('addon/tailwind/config/border-radius.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tailwind/config/border-radius.js should pass ESLint\n\n');
  });

  QUnit.test('addon/tailwind/config/border-widths.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tailwind/config/border-widths.js should pass ESLint\n\n');
  });

  QUnit.test('addon/tailwind/config/colors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tailwind/config/colors.js should pass ESLint\n\n');
  });

  QUnit.test('addon/tailwind/config/font-weights.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tailwind/config/font-weights.js should pass ESLint\n\n');
  });

  QUnit.test('addon/tailwind/config/fonts.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tailwind/config/fonts.js should pass ESLint\n\n');
  });

  QUnit.test('addon/tailwind/config/height.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tailwind/config/height.js should pass ESLint\n\n');
  });

  QUnit.test('addon/tailwind/config/letter-spacing.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tailwind/config/letter-spacing.js should pass ESLint\n\n');
  });

  QUnit.test('addon/tailwind/config/line-height.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tailwind/config/line-height.js should pass ESLint\n\n');
  });

  QUnit.test('addon/tailwind/config/margin.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tailwind/config/margin.js should pass ESLint\n\n');
  });

  QUnit.test('addon/tailwind/config/max-height.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tailwind/config/max-height.js should pass ESLint\n\n');
  });

  QUnit.test('addon/tailwind/config/max-width.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tailwind/config/max-width.js should pass ESLint\n\n');
  });

  QUnit.test('addon/tailwind/config/min-height.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tailwind/config/min-height.js should pass ESLint\n\n');
  });

  QUnit.test('addon/tailwind/config/min-width.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tailwind/config/min-width.js should pass ESLint\n\n');
  });

  QUnit.test('addon/tailwind/config/negative-margin.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tailwind/config/negative-margin.js should pass ESLint\n\n');
  });

  QUnit.test('addon/tailwind/config/opacity.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tailwind/config/opacity.js should pass ESLint\n\n');
  });

  QUnit.test('addon/tailwind/config/padding.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tailwind/config/padding.js should pass ESLint\n\n');
  });

  QUnit.test('addon/tailwind/config/screens.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tailwind/config/screens.js should pass ESLint\n\n');
  });

  QUnit.test('addon/tailwind/config/shadows.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tailwind/config/shadows.js should pass ESLint\n\n');
  });

  QUnit.test('addon/tailwind/config/svg-fill.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tailwind/config/svg-fill.js should pass ESLint\n\n');
  });

  QUnit.test('addon/tailwind/config/svg-stroke.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tailwind/config/svg-stroke.js should pass ESLint\n\n');
  });

  QUnit.test('addon/tailwind/config/tailwind.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tailwind/config/tailwind.js should pass ESLint\n\n');
  });

  QUnit.test('addon/tailwind/config/text-colors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tailwind/config/text-colors.js should pass ESLint\n\n');
  });

  QUnit.test('addon/tailwind/config/text-sizes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tailwind/config/text-sizes.js should pass ESLint\n\n');
  });

  QUnit.test('addon/tailwind/config/width.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tailwind/config/width.js should pass ESLint\n\n');
  });

  QUnit.test('addon/tailwind/config/z-index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/tailwind/config/z-index.js should pass ESLint\n\n');
  });

  QUnit.test('addon/transitions/fade-and-drop.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/transitions/fade-and-drop.js should pass ESLint\n\n');
  });

  QUnit.test('addon/utils/computed.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/computed.js should pass ESLint\n\n');
  });
});
define('dummy/ember-cli-addon-docs/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app/initializers/inject-media.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/initializers/inject-media.js should pass ESLint\n\n');
  });

  QUnit.test('app/transitions.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/transitions.js should pass ESLint\n\n');
  });
});
define('dummy/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
define('dummy/helpers/append', ['exports', 'ember-composable-helpers/helpers/append'], function (exports, _append) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _append.default;
    }
  });
  Object.defineProperty(exports, 'append', {
    enumerable: true,
    get: function () {
      return _append.append;
    }
  });
});
define('dummy/helpers/array', ['exports', 'ember-composable-helpers/helpers/array'], function (exports, _array) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _array.default;
    }
  });
  Object.defineProperty(exports, 'array', {
    enumerable: true,
    get: function () {
      return _array.array;
    }
  });
});
define('dummy/helpers/break-on', ['exports', 'ember-cli-addon-docs/helpers/break-on'], function (exports, _breakOn) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _breakOn.default;
    }
  });
});
define('dummy/helpers/camelize', ['exports', 'ember-cli-string-helpers/helpers/camelize'], function (exports, _camelize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _camelize.default;
    }
  });
  Object.defineProperty(exports, 'camelize', {
    enumerable: true,
    get: function () {
      return _camelize.camelize;
    }
  });
});
define('dummy/helpers/cancel-all', ['exports', 'ember-concurrency/helpers/cancel-all'], function (exports, _cancelAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
  Object.defineProperty(exports, 'cancelAll', {
    enumerable: true,
    get: function () {
      return _cancelAll.cancelAll;
    }
  });
});
define('dummy/helpers/capitalize', ['exports', 'ember-cli-string-helpers/helpers/capitalize'], function (exports, _capitalize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _capitalize.default;
    }
  });
  Object.defineProperty(exports, 'capitalize', {
    enumerable: true,
    get: function () {
      return _capitalize.capitalize;
    }
  });
});
define('dummy/helpers/chunk', ['exports', 'ember-composable-helpers/helpers/chunk'], function (exports, _chunk) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _chunk.default;
    }
  });
  Object.defineProperty(exports, 'chunk', {
    enumerable: true,
    get: function () {
      return _chunk.chunk;
    }
  });
});
define('dummy/helpers/classify', ['exports', 'ember-cli-string-helpers/helpers/classify'], function (exports, _classify) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _classify.default;
    }
  });
  Object.defineProperty(exports, 'classify', {
    enumerable: true,
    get: function () {
      return _classify.classify;
    }
  });
});
define('dummy/helpers/compact', ['exports', 'ember-composable-helpers/helpers/compact'], function (exports, _compact) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _compact.default;
    }
  });
  Object.defineProperty(exports, 'compact', {
    enumerable: true,
    get: function () {
      return _compact.compact;
    }
  });
});
define('dummy/helpers/compute', ['exports', 'ember-composable-helpers/helpers/compute'], function (exports, _compute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _compute.default;
    }
  });
  Object.defineProperty(exports, 'compute', {
    enumerable: true,
    get: function () {
      return _compute.compute;
    }
  });
});
define('dummy/helpers/contains', ['exports', 'ember-composable-helpers/helpers/contains'], function (exports, _contains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contains.default;
    }
  });
  Object.defineProperty(exports, 'contains', {
    enumerable: true,
    get: function () {
      return _contains.contains;
    }
  });
});
define('dummy/helpers/dasherize', ['exports', 'ember-cli-string-helpers/helpers/dasherize'], function (exports, _dasherize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dasherize.default;
    }
  });
  Object.defineProperty(exports, 'dasherize', {
    enumerable: true,
    get: function () {
      return _dasherize.dasherize;
    }
  });
});
define('dummy/helpers/dec', ['exports', 'ember-composable-helpers/helpers/dec'], function (exports, _dec) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dec.default;
    }
  });
  Object.defineProperty(exports, 'dec', {
    enumerable: true,
    get: function () {
      return _dec.dec;
    }
  });
});
define('dummy/helpers/drop', ['exports', 'ember-composable-helpers/helpers/drop'], function (exports, _drop) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _drop.default;
    }
  });
  Object.defineProperty(exports, 'drop', {
    enumerable: true,
    get: function () {
      return _drop.drop;
    }
  });
});
define('dummy/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(exports, 'equal', {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
define('dummy/helpers/esdoc-class-helper', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  let ESDocClassHelper = class ESDocClassHelper extends Ember.Helper {
    /**
      returns the absolute value of a number
       @param {number} [number] the passed number
      @return {number}
    */
    compute([number]) {
      return Math.abs(number);
    }
  };
  exports.default = ESDocClassHelper;
});
define('dummy/helpers/esdoc-helper', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.esdocHelper = esdocHelper;


  /**
    returns the absolute value of a number
  
    @param {number} [number] the passed number
    @return {number}
  */
  function esdocHelper([number]) {
    return Math.abs(number);
  } /** @documenter esdoc */

  exports.default = Ember.Helper.helper(esdocHelper);
});
define('dummy/helpers/filter-by', ['exports', 'ember-composable-helpers/helpers/filter-by'], function (exports, _filterBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _filterBy.default;
    }
  });
  Object.defineProperty(exports, 'filterBy', {
    enumerable: true,
    get: function () {
      return _filterBy.filterBy;
    }
  });
});
define('dummy/helpers/filter', ['exports', 'ember-composable-helpers/helpers/filter'], function (exports, _filter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _filter.default;
    }
  });
  Object.defineProperty(exports, 'filter', {
    enumerable: true,
    get: function () {
      return _filter.filter;
    }
  });
});
define('dummy/helpers/find-by', ['exports', 'ember-composable-helpers/helpers/find-by'], function (exports, _findBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _findBy.default;
    }
  });
  Object.defineProperty(exports, 'findBy', {
    enumerable: true,
    get: function () {
      return _findBy.findBy;
    }
  });
});
define('dummy/helpers/flatten', ['exports', 'ember-composable-helpers/helpers/flatten'], function (exports, _flatten) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flatten.default;
    }
  });
  Object.defineProperty(exports, 'flatten', {
    enumerable: true,
    get: function () {
      return _flatten.flatten;
    }
  });
});
define('dummy/helpers/group-by', ['exports', 'ember-composable-helpers/helpers/group-by'], function (exports, _groupBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _groupBy.default;
    }
  });
  Object.defineProperty(exports, 'groupBy', {
    enumerable: true,
    get: function () {
      return _groupBy.groupBy;
    }
  });
});
define('dummy/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
define('dummy/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
define('dummy/helpers/has-next', ['exports', 'ember-composable-helpers/helpers/has-next'], function (exports, _hasNext) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasNext.default;
    }
  });
  Object.defineProperty(exports, 'hasNext', {
    enumerable: true,
    get: function () {
      return _hasNext.hasNext;
    }
  });
});
define('dummy/helpers/has-previous', ['exports', 'ember-composable-helpers/helpers/has-previous'], function (exports, _hasPrevious) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasPrevious.default;
    }
  });
  Object.defineProperty(exports, 'hasPrevious', {
    enumerable: true,
    get: function () {
      return _hasPrevious.hasPrevious;
    }
  });
});
define('dummy/helpers/href-to', ['exports', 'ember-href-to/helpers/href-to'], function (exports, _hrefTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hrefTo.default;
    }
  });
  Object.defineProperty(exports, 'hrefTo', {
    enumerable: true,
    get: function () {
      return _hrefTo.hrefTo;
    }
  });
});
define('dummy/helpers/html-safe', ['exports', 'ember-cli-string-helpers/helpers/html-safe'], function (exports, _htmlSafe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _htmlSafe.default;
    }
  });
  Object.defineProperty(exports, 'htmlSafe', {
    enumerable: true,
    get: function () {
      return _htmlSafe.htmlSafe;
    }
  });
});
define('dummy/helpers/humanize', ['exports', 'ember-cli-string-helpers/helpers/humanize'], function (exports, _humanize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _humanize.default;
    }
  });
  Object.defineProperty(exports, 'humanize', {
    enumerable: true,
    get: function () {
      return _humanize.humanize;
    }
  });
});
define('dummy/helpers/ignore-children', ['exports', 'ember-ignore-children-helper/helpers/ignore-children'], function (exports, _ignoreChildren) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ignoreChildren.default;
    }
  });
  Object.defineProperty(exports, 'ignoreChildren', {
    enumerable: true,
    get: function () {
      return _ignoreChildren.ignoreChildren;
    }
  });
});
define('dummy/helpers/inc', ['exports', 'ember-composable-helpers/helpers/inc'], function (exports, _inc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inc.default;
    }
  });
  Object.defineProperty(exports, 'inc', {
    enumerable: true,
    get: function () {
      return _inc.inc;
    }
  });
});
define('dummy/helpers/intersect', ['exports', 'ember-composable-helpers/helpers/intersect'], function (exports, _intersect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _intersect.default;
    }
  });
  Object.defineProperty(exports, 'intersect', {
    enumerable: true,
    get: function () {
      return _intersect.intersect;
    }
  });
});
define('dummy/helpers/invoke', ['exports', 'ember-composable-helpers/helpers/invoke'], function (exports, _invoke) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _invoke.default;
    }
  });
  Object.defineProperty(exports, 'invoke', {
    enumerable: true,
    get: function () {
      return _invoke.invoke;
    }
  });
});
define('dummy/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
define('dummy/helpers/is-clipboard-supported', ['exports', 'ember-cli-clipboard/helpers/is-clipboard-supported'], function (exports, _isClipboardSupported) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isClipboardSupported.default;
    }
  });
  Object.defineProperty(exports, 'isClipboardSupported', {
    enumerable: true,
    get: function () {
      return _isClipboardSupported.isClipboardSupported;
    }
  });
});
define('dummy/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('dummy/helpers/join', ['exports', 'ember-composable-helpers/helpers/join'], function (exports, _join) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _join.default;
    }
  });
  Object.defineProperty(exports, 'join', {
    enumerable: true,
    get: function () {
      return _join.join;
    }
  });
});
define('dummy/helpers/lf-lock-model', ['exports', 'liquid-fire/helpers/lf-lock-model'], function (exports, _lfLockModel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lfLockModel.default;
    }
  });
  Object.defineProperty(exports, 'lfLockModel', {
    enumerable: true,
    get: function () {
      return _lfLockModel.lfLockModel;
    }
  });
});
define('dummy/helpers/lf-or', ['exports', 'liquid-fire/helpers/lf-or'], function (exports, _lfOr) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lfOr.default;
    }
  });
  Object.defineProperty(exports, 'lfOr', {
    enumerable: true,
    get: function () {
      return _lfOr.lfOr;
    }
  });
});
define('dummy/helpers/lowercase', ['exports', 'ember-cli-string-helpers/helpers/lowercase'], function (exports, _lowercase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lowercase.default;
    }
  });
  Object.defineProperty(exports, 'lowercase', {
    enumerable: true,
    get: function () {
      return _lowercase.lowercase;
    }
  });
});
define('dummy/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
define('dummy/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
define('dummy/helpers/map-by', ['exports', 'ember-composable-helpers/helpers/map-by'], function (exports, _mapBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mapBy.default;
    }
  });
  Object.defineProperty(exports, 'mapBy', {
    enumerable: true,
    get: function () {
      return _mapBy.mapBy;
    }
  });
});
define('dummy/helpers/map', ['exports', 'ember-composable-helpers/helpers/map'], function (exports, _map) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _map.default;
    }
  });
  Object.defineProperty(exports, 'map', {
    enumerable: true,
    get: function () {
      return _map.map;
    }
  });
});
define('dummy/helpers/media', ['exports', 'ember-responsive/helpers/media'], function (exports, _media) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _media.default;
    }
  });
  Object.defineProperty(exports, 'media', {
    enumerable: true,
    get: function () {
      return _media.media;
    }
  });
});
define('dummy/helpers/next', ['exports', 'ember-composable-helpers/helpers/next'], function (exports, _next) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _next.default;
    }
  });
  Object.defineProperty(exports, 'next', {
    enumerable: true,
    get: function () {
      return _next.next;
    }
  });
});
define('dummy/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(exports, 'notEq', {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
define('dummy/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
define('dummy/helpers/object-at', ['exports', 'ember-composable-helpers/helpers/object-at'], function (exports, _objectAt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _objectAt.default;
    }
  });
  Object.defineProperty(exports, 'objectAt', {
    enumerable: true,
    get: function () {
      return _objectAt.objectAt;
    }
  });
});
define('dummy/helpers/optional', ['exports', 'ember-composable-helpers/helpers/optional'], function (exports, _optional) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _optional.default;
    }
  });
  Object.defineProperty(exports, 'optional', {
    enumerable: true,
    get: function () {
      return _optional.optional;
    }
  });
});
define('dummy/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
define('dummy/helpers/perform', ['exports', 'ember-concurrency/helpers/perform'], function (exports, _perform) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
  Object.defineProperty(exports, 'perform', {
    enumerable: true,
    get: function () {
      return _perform.perform;
    }
  });
});
define('dummy/helpers/pipe-action', ['exports', 'ember-composable-helpers/helpers/pipe-action'], function (exports, _pipeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pipeAction.default;
    }
  });
});
define('dummy/helpers/pipe', ['exports', 'ember-composable-helpers/helpers/pipe'], function (exports, _pipe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pipe.default;
    }
  });
  Object.defineProperty(exports, 'pipe', {
    enumerable: true,
    get: function () {
      return _pipe.pipe;
    }
  });
});
define('dummy/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('dummy/helpers/previous', ['exports', 'ember-composable-helpers/helpers/previous'], function (exports, _previous) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _previous.default;
    }
  });
  Object.defineProperty(exports, 'previous', {
    enumerable: true,
    get: function () {
      return _previous.previous;
    }
  });
});
define('dummy/helpers/queue', ['exports', 'ember-composable-helpers/helpers/queue'], function (exports, _queue) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _queue.default;
    }
  });
  Object.defineProperty(exports, 'queue', {
    enumerable: true,
    get: function () {
      return _queue.queue;
    }
  });
});
define('dummy/helpers/range', ['exports', 'ember-composable-helpers/helpers/range'], function (exports, _range) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _range.default;
    }
  });
  Object.defineProperty(exports, 'range', {
    enumerable: true,
    get: function () {
      return _range.range;
    }
  });
});
define('dummy/helpers/reduce', ['exports', 'ember-composable-helpers/helpers/reduce'], function (exports, _reduce) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _reduce.default;
    }
  });
  Object.defineProperty(exports, 'reduce', {
    enumerable: true,
    get: function () {
      return _reduce.reduce;
    }
  });
});
define('dummy/helpers/reject-by', ['exports', 'ember-composable-helpers/helpers/reject-by'], function (exports, _rejectBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rejectBy.default;
    }
  });
  Object.defineProperty(exports, 'rejectBy', {
    enumerable: true,
    get: function () {
      return _rejectBy.rejectBy;
    }
  });
});
define('dummy/helpers/repeat', ['exports', 'ember-composable-helpers/helpers/repeat'], function (exports, _repeat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _repeat.default;
    }
  });
  Object.defineProperty(exports, 'repeat', {
    enumerable: true,
    get: function () {
      return _repeat.repeat;
    }
  });
});
define('dummy/helpers/reverse', ['exports', 'ember-composable-helpers/helpers/reverse'], function (exports, _reverse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _reverse.default;
    }
  });
  Object.defineProperty(exports, 'reverse', {
    enumerable: true,
    get: function () {
      return _reverse.reverse;
    }
  });
});
define('dummy/helpers/shuffle', ['exports', 'ember-composable-helpers/helpers/shuffle'], function (exports, _shuffle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _shuffle.default;
    }
  });
  Object.defineProperty(exports, 'shuffle', {
    enumerable: true,
    get: function () {
      return _shuffle.shuffle;
    }
  });
});
define('dummy/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('dummy/helpers/slice', ['exports', 'ember-composable-helpers/helpers/slice'], function (exports, _slice) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slice.default;
    }
  });
  Object.defineProperty(exports, 'slice', {
    enumerable: true,
    get: function () {
      return _slice.slice;
    }
  });
});
define('dummy/helpers/sort-by', ['exports', 'ember-composable-helpers/helpers/sort-by'], function (exports, _sortBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sortBy.default;
    }
  });
  Object.defineProperty(exports, 'sortBy', {
    enumerable: true,
    get: function () {
      return _sortBy.sortBy;
    }
  });
});
define('dummy/helpers/svg-jar', ['exports', 'ember-svg-jar/utils/make-helper', 'ember-svg-jar/utils/make-svg'], function (exports, _makeHelper, _makeSvg) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.svgJar = svgJar;


  function getInlineAsset(assetId) {
    try {
      /* eslint-disable global-require */
      return require(`ember-svg-jar/inlined/${assetId}`).default;
    } catch (err) {
      return null;
    }
  }

  function svgJar(assetId, svgAttrs) {
    return (0, _makeSvg.default)(assetId, svgAttrs, getInlineAsset);
  }

  exports.default = (0, _makeHelper.default)(svgJar);
});
define('dummy/helpers/take', ['exports', 'ember-composable-helpers/helpers/take'], function (exports, _take) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _take.default;
    }
  });
  Object.defineProperty(exports, 'take', {
    enumerable: true,
    get: function () {
      return _take.take;
    }
  });
});
define('dummy/helpers/task', ['exports', 'ember-concurrency/helpers/task'], function (exports, _task) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
  Object.defineProperty(exports, 'task', {
    enumerable: true,
    get: function () {
      return _task.task;
    }
  });
});
define('dummy/helpers/titleize', ['exports', 'ember-cli-string-helpers/helpers/titleize'], function (exports, _titleize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _titleize.default;
    }
  });
  Object.defineProperty(exports, 'titleize', {
    enumerable: true,
    get: function () {
      return _titleize.titleize;
    }
  });
});
define('dummy/helpers/toggle-action', ['exports', 'ember-composable-helpers/helpers/toggle-action'], function (exports, _toggleAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggleAction.default;
    }
  });
});
define('dummy/helpers/toggle', ['exports', 'ember-composable-helpers/helpers/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
  Object.defineProperty(exports, 'toggle', {
    enumerable: true,
    get: function () {
      return _toggle.toggle;
    }
  });
});
define('dummy/helpers/truncate', ['exports', 'ember-cli-string-helpers/helpers/truncate'], function (exports, _truncate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _truncate.default;
    }
  });
  Object.defineProperty(exports, 'truncate', {
    enumerable: true,
    get: function () {
      return _truncate.truncate;
    }
  });
});
define('dummy/helpers/type-signature', ['exports', 'ember-cli-addon-docs/helpers/type-signature'], function (exports, _typeSignature) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _typeSignature.default;
    }
  });
});
define('dummy/helpers/underscore', ['exports', 'ember-cli-string-helpers/helpers/underscore'], function (exports, _underscore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _underscore.default;
    }
  });
  Object.defineProperty(exports, 'underscore', {
    enumerable: true,
    get: function () {
      return _underscore.underscore;
    }
  });
});
define('dummy/helpers/union', ['exports', 'ember-composable-helpers/helpers/union'], function (exports, _union) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _union.default;
    }
  });
  Object.defineProperty(exports, 'union', {
    enumerable: true,
    get: function () {
      return _union.union;
    }
  });
});
define('dummy/helpers/uppercase', ['exports', 'ember-cli-string-helpers/helpers/uppercase'], function (exports, _uppercase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uppercase.default;
    }
  });
  Object.defineProperty(exports, 'uppercase', {
    enumerable: true,
    get: function () {
      return _uppercase.uppercase;
    }
  });
});
define('dummy/helpers/w', ['exports', 'ember-cli-string-helpers/helpers/w'], function (exports, _w) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _w.default;
    }
  });
  Object.defineProperty(exports, 'w', {
    enumerable: true,
    get: function () {
      return _w.w;
    }
  });
});
define('dummy/helpers/without', ['exports', 'ember-composable-helpers/helpers/without'], function (exports, _without) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _without.default;
    }
  });
  Object.defineProperty(exports, 'without', {
    enumerable: true,
    get: function () {
      return _without.without;
    }
  });
});
define('dummy/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
define('dummy/helpers/yuidoc-class-helper', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  /**
    A class based YUIDoc helper
  
    @class YUIDocClassHelper
   */
  const YUIDocClassHelper = Ember.Helper.extend({
    /**
      returns the absolute value of a number
       @method compute
      @param {number} [number] the passed number
      @return {number}
    */
    compute([number]) {
      return Math.abs(number);
    }
  }); /** @documenter yuidoc */

  exports.default = YUIDocClassHelper;
});
define('dummy/helpers/yuidoc-helper', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.yuidocHelper = yuidocHelper;


  /**
    returns the absolute value of a number
  
    @function yuidocHelper
    @param {number} [number] the passed number
    @return {number}
  */
  function yuidocHelper([number]) {
    return Math.abs(number);
  } /** @documenter yuidoc */

  exports.default = Ember.Helper.helper(yuidocHelper);
});
define('dummy/initializers/add-modals-container', ['exports', 'ember-modal-dialog/initializers/add-modals-container'], function (exports, _addModalsContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'add-modals-container',
    initialize: _addModalsContainer.default
  };
});
define('dummy/initializers/component-styles', ['exports', 'ember-component-css/pod-names', 'dummy/mixins/style-namespacing-extras'], function (exports, _podNames, _styleNamespacingExtras) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;


  const {
    Component,
    ComponentLookup,
    computed,
    getOwner
  } = Ember;

  ComponentLookup.reopen({
    componentFor(name, owner) {
      owner = owner.hasRegistration ? owner : getOwner(this);

      if (_podNames.default[name] && !owner.hasRegistration(`component:${name}`)) {
        owner.register(`component:${name}`, Component);
      }
      return this._super(...arguments);
    }
  });

  Component.reopen(_styleNamespacingExtras.default, {
    componentCssClassName: computed({
      get() {
        return _podNames.default[this.get('_componentIdentifier')] || '';
      }
    }),

    init() {
      this._super(...arguments);

      if (this.get('_shouldAddNamespacedClassName')) {
        this.classNames = this.classNames.concat(this.get('componentCssClassName'));
      }
    }
  });

  function initialize() {}

  exports.default = {
    name: 'component-styles',
    initialize
  };
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/ember-cli-mirage', ['exports', 'dummy/config/environment', 'dummy/mirage/config', 'ember-cli-mirage/get-rfc232-test-context', 'ember-cli-mirage/start-mirage'], function (exports, _environment, _config, _getRfc232TestContext, _startMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.startMirage = startMirage;
  exports.default = {
    name: 'ember-cli-mirage',
    initialize(application) {
      if (_config.default) {
        application.register('mirage:base-config', _config.default, { instantiate: false });
      }
      if (_config.testConfig) {
        application.register('mirage:test-config', _config.testConfig, { instantiate: false });
      }

      _environment.default['ember-cli-mirage'] = _environment.default['ember-cli-mirage'] || {};
      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }
  };
  function startMirage(env = _environment.default) {
    return (0, _startMirage.default)(null, { env, baseConfig: _config.default, testConfig: _config.testConfig });
  }

  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }
    if ((0, _getRfc232TestContext.default)()) {
      return false;
    }
    let userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    let defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    let usingInDev = env === 'development' && !addonConfig.usingProxy;
    let usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
define('dummy/initializers/ember-concurrency', ['exports', 'ember-concurrency/initializers/ember-concurrency'], function (exports, _emberConcurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.initialize;
    }
  });
});
define('dummy/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('dummy/initializers/ember-keyboard-first-responder-inputs', ['exports', 'ember-keyboard/initializers/ember-keyboard-first-responder-inputs'], function (exports, _emberKeyboardFirstResponderInputs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberKeyboardFirstResponderInputs.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _emberKeyboardFirstResponderInputs.initialize;
    }
  });
});
define('dummy/initializers/ember-responsive-breakpoints', ['exports', 'ember-responsive/initializers/responsive'], function (exports, _responsive) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _responsive.default;
});
define('dummy/initializers/export-application-global', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/inject-media', ['exports', 'ember-cli-addon-docs/initializers/inject-media'], function (exports, _injectMedia) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _injectMedia.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _injectMedia.initialize;
    }
  });
});
define("dummy/initializers/liquid-fire", ["exports", "liquid-fire/ember-internals", "liquid-fire/velocity-ext"], function (exports, _emberInternals) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  (0, _emberInternals.initialize)();

  exports.default = {
    name: 'liquid-fire',
    initialize: function () {}
  };
});
define('dummy/instance-initializers/ember-cli-mirage-autostart', ['exports', 'ember-cli-mirage/instance-initializers/ember-cli-mirage-autostart'], function (exports, _emberCliMirageAutostart) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberCliMirageAutostart.default;
    }
  });
});
define('dummy/instance-initializers/ember-data', ['exports', 'ember-data/initialize-store-service'], function (exports, _initializeStoreService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
});
define('dummy/instance-initializers/ember-href-to', ['exports', 'ember-href-to/href-to'], function (exports, _hrefTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  function closestLink(el) {
    if (el.closest) {
      return el.closest('a');
    } else {
      el = el.parentElement;
      while (el && el.tagName !== 'A') {
        el = el.parentElement;
      }
      return el;
    }
  }
  exports.default = {
    name: 'ember-href-to',
    initialize(applicationInstance) {
      // we only want this to run in the browser, not in fastboot
      if (typeof FastBoot === "undefined") {
        let hrefToClickHandler = function _hrefToClickHandler(e) {
          let link = e.target.tagName === 'A' ? e.target : closestLink(e.target);
          if (link) {
            let hrefTo = new _hrefTo.default(applicationInstance, e, link);
            hrefTo.maybeHandle();
          }
        };

        document.body.addEventListener('click', hrefToClickHandler);

        // Teardown on app destruction: clean up the event listener to avoid
        // memory leaks.
        applicationInstance.reopen({
          willDestroy() {
            document.body.removeEventListener('click', hrefToClickHandler);
            return this._super(...arguments);
          }
        });
      }
    }
  };
});
define('dummy/locations/router-scroll', ['exports', 'ember-router-scroll/locations/router-scroll'], function (exports, _routerScroll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _routerScroll.default;
    }
  });
});
define('dummy/mirage/config', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    this.get('/versions.json', () => {
      return {
        "-latest": {
          "sha": "53b73465d31925f26fd1f77881aefcaccce2915a",
          "tag": projectTag,
          "path": "",
          "name": "-latest"
        },
        "master": {
          "sha": "12345",
          "tag": null,
          "path": "master",
          "name": "master"
        }
      };
    });

    this.passthrough();
  };

  const projectTag = _environment.default['ember-cli-addon-docs'].projectTag;
});
define("dummy/mirage/scenarios/default", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () /* server */{

    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
    */

    // server.createList('post', 10);
  };
});
define('dummy/mirage/serializers/application', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.JSONAPISerializer.extend({});
});
define('dummy/mixins/style-namespacing-extras', ['exports', 'ember-component-css/mixins/style-namespacing-extras'], function (exports, _styleNamespacingExtras) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _styleNamespacingExtras.default;
    }
  });
});
define('dummy/models/class', ['exports', 'ember-cli-addon-docs/models/class'], function (exports, _class) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _class.default;
    }
  });
});
define('dummy/models/component', ['exports', 'ember-cli-addon-docs/models/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/models/module', ['exports', 'ember-cli-addon-docs/models/module'], function (exports, _module) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _module.default;
    }
  });
});
define('dummy/models/project', ['exports', 'ember-cli-addon-docs/models/project'], function (exports, _project) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _project.default;
    }
  });
});
define("dummy/pods/application/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "blAEtIoi", "block": "{\"symbols\":[\"header\"],\"statements\":[[6,\"div\"],[9,\"class\",\"docs-font-sans docs-text-black docs-leading-normal\"],[7],[0,\"\\n\"],[0,\"\\n\"],[4,\"docs-header\",null,null,{\"statements\":[[4,\"component\",[[19,1,[\"link\"]],\"sandbox\"],null,{\"statements\":[[0,\"      Sandbox\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"\\n\"],[0,\"  \"],[1,[18,\"outlet\"],false],[0,\"\\n\\n  \"],[1,[18,\"docs-keyboard-shortcuts\"],false],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/application/template.hbs" } });
});
define('dummy/pods/docs/components/docs-demo/controller', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    actions: {
      toggleIsShowing() {
        this.toggleProperty('isShowing');
      }
    }

  });
});
define("dummy/pods/docs/components/docs-demo/demo1/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mxshDV+8", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[19,1,[\"example\"]]],[[\"name\"],[\"docs-demo-basic.hbs\"]],{\"statements\":[[0,\"    \"],[6,\"p\"],[7],[0,\"I am a \"],[6,\"strong\"],[7],[0,\"handlebars\"],[8],[0,\" template!\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"The value is: \"],[1,[18,\"val\"],false],[8],[0,\"\\n    \"],[6,\"div\"],[7],[0,\"\\n      \"],[1,[25,\"input\",null,[[\"value\",\"class\"],[[20,[\"val\"]],\"border\"]]],false],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[25,\"component\",[[19,1,[\"snippet\"]],\"docs-demo-basic.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/docs/components/docs-demo/demo1/template.hbs" } });
});
define('dummy/pods/docs/components/docs-demo/demo2/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    actions: {
      // BEGIN-SNIPPET docs-demo-multiple.js
      toggleIsShowing() {
        this.toggleProperty('isShowing');
      }
      // END-SNIPPET
    }

  });
});
define("dummy/pods/docs/components/docs-demo/demo2/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "0V43gkGC", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[19,1,[\"example\"]]],[[\"data-test-id\"],[\"docs-demo-multiple.hbs\"]],{\"statements\":[[0,\"    \"],[6,\"button\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"toggleIsShowing\"],null],null],[9,\"class\",\"docs-btn\"],[7],[0,\"\\n      Press me!\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"p\"],[9,\"class\",\"mt-4\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"isShowing\"]]],null,{\"statements\":[[0,\"        Yep\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        Nope\\n\"]],\"parameters\":[]}],[0,\"    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[25,\"component\",[[19,1,[\"snippet\"]],\"docs-demo-multiple.hbs\"],null],false],[0,\"\\n  \"],[1,[25,\"component\",[[19,1,[\"snippet\"]],\"docs-demo-multiple.js\"],[[\"label\"],[\"component.js\"]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/docs/components/docs-demo/demo2/template.hbs" } });
});
define("dummy/pods/docs/components/docs-demo/demo3/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "8QHSuAMJ", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[19,1,[\"example\"]]],[[\"name\"],[\"docs-demo-custom.md\"]],{\"statements\":[[0,\"    \"],[6,\"pre\"],[7],[0,\"\\n    # Markdown\\n    - Has syntax highlighting, too\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[25,\"component\",[[19,1,[\"snippet\"]],\"docs-demo-custom-src.hbs\"],[[\"label\"],[\"Source\"]]],false],[0,\"\\n  \"],[1,[25,\"component\",[[19,1,[\"snippet\"]],\"docs-demo-custom.md\"],[[\"label\",\"language\"],[\"My Custom Label\",\"markdown\"]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/docs/components/docs-demo/demo3/template.hbs" } });
});
define("dummy/pods/docs/components/docs-demo/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "9VOsQbsG", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"docs-md\"],[7],[6,\"h1\"],[9,\"id\",\"docs-demo\"],[9,\"class\",\"docs-md__h1\"],[7],[0,\"Docs Demo\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"This component provides you with a way to show example code. It also renders the actual template used to generate the example, so you don't have to worry about keeping the code snippet and the live example in sync.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"It's also an important part of your addon's testing story. If you write demos for most of your addon's functionality in your documentation app using this helper component, and then write acceptance tests against those demos, your acceptance tests will accomplish two things:\"],[8],[0,\"\\n\"],[6,\"ul\"],[7],[0,\"\\n\"],[6,\"li\"],[7],[0,\"They verify your addon's behavior\"],[8],[0,\"\\n\"],[6,\"li\"],[7],[0,\"They ensure all of that behavior is working in your docs site, and up-to-date with your addon's actual APIs\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"This saves you from ever having to remember that second step of \\\"updating the docs\\\" every time you change your libary.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"Of course, if your addon's components have some edge cases that would muddle up your documentation site too much, you can fall back to using integration tests. But try to keep most of the behavior in the docs pages — that way your users will know about it.\"],[8],[0,\"\\n\\n      \"],[6,\"h2\"],[9,\"id\",\"basic-usage\"],[9,\"class\",\"docs-md__h2\"],[7],[6,\"a\"],[9,\"href\",\"#basic-usage\"],[9,\"class\",\"heading-anchor\"],[7],[0,\"Basic usage\"],[8],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"Let's look at a basic example:\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[1,[18,\"docs/components/docs-demo/demo1\"],false],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"Here's the code that rendered the above demo (you can copy-paste this block to get going in your own app):\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[1,[25,\"docs-snippet\",null,[[\"name\"],[\"docs-demo-basic-src.hbs\"]]],false],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"To explain,\"],[8],[0,\"\\n\"],[6,\"ul\"],[7],[0,\"\\n\"],[6,\"li\"],[7],[6,\"code\"],[7],[0,\"{{docs-demo}}\"],[8],[0,\" is the wrapping component\"],[8],[0,\"\\n\"],[6,\"li\"],[7],[0,\"The contextual component \"],[6,\"code\"],[7],[0,\"{{#demo.example}}{{/demo.example}}\"],[8],[0,\" provides a wrapper to display your example. You'll pass a block to this component with the actual code you're demoing - for example, showing off how to use your button.\"],[8],[0,\"\\n\"],[6,\"li\"],[7],[0,\"You also need to pass a \"],[6,\"code\"],[7],[0,\"name=\"],[8],[0,\" to demo.example in order to identify your snippet.\"],[8],[0,\"\\n\"],[6,\"li\"],[7],[0,\"Finally, the \"],[6,\"code\"],[7],[0,\"{{demo.snippet}}\"],[8],[0,\" component lets you render different named snippets that you've identified via demo.example wrappers or other code comment blocks in your source.\"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n      \"],[6,\"h2\"],[9,\"id\",\"multiple-snippets\"],[9,\"class\",\"docs-md__h2\"],[7],[6,\"a\"],[9,\"href\",\"#multiple-snippets\"],[9,\"class\",\"heading-anchor\"],[7],[0,\"Multiple snippets\"],[8],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"You can render multiple snippets to support your example. This can be useful when part of your example relies on code defined elsewhere, for example in a controller or stylesheet.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"Use a file extension to help docs-snippet identify and properly syntax highlight your snippet. Templates end in \"],[6,\"code\"],[7],[0,\".hbs\"],[8],[0,\", JavaScript snippets end in \"],[6,\"code\"],[7],[0,\".js\"],[8],[0,\", stylesheets in \"],[6,\"code\"],[7],[0,\".css\"],[8],[0,\" or \"],[6,\"code\"],[7],[0,\".scss\"],[8],[0,\".\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[1,[18,\"docs/components/docs-demo/demo2\"],false],[8],[0,\"\\n\\n      \"],[6,\"h2\"],[9,\"id\",\"custom-snippet-handling\"],[9,\"class\",\"docs-md__h2\"],[7],[6,\"a\"],[9,\"href\",\"#custom-snippet-handling\"],[9,\"class\",\"heading-anchor\"],[7],[0,\"Custom Snippet Handling\"],[8],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"If you wish to override the inferred label or syntax highlighting for a snippet, you can specify \"],[6,\"code\"],[7],[0,\"label\"],[8],[0,\" and \"],[6,\"code\"],[7],[0,\"language\"],[8],[0,\" properties.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[1,[18,\"docs/components/docs-demo/demo3\"],false],[8],[8]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/docs/components/docs-demo/template.hbs" } });
});
define("dummy/pods/docs/components/docs-header/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "+0PMqZmt", "block": "{\"symbols\":[\"demo\",\"header\",\"demo\"],\"statements\":[[6,\"div\"],[9,\"class\",\"docs-md\"],[7],[6,\"h1\"],[9,\"id\",\"docs-header\"],[9,\"class\",\"docs-md__h1\"],[7],[0,\"Docs Header\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"A header that gives you an easy autogenerated logo via the \"],[6,\"code\"],[7],[0,\"logo\"],[8],[0,\" and \"],[6,\"code\"],[7],[0,\"name\"],[8],[0,\" attributes, top-level nav, and a link to your project's versions and GitHub repo (read directly from your addon's package.json file).\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[19,3,[\"example\"]]],[[\"name\"],[\"docs-header.hbs\"]],{\"statements\":[[0,\"    \"],[1,[18,\"docs-header\"],false],[0,\"\\n  \"]],\"parameters\":[]},null],[0,\"   \"],[1,[25,\"component\",[[19,3,[\"snippet\"]],\"docs-header.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"You can render additional header links using the \"],[6,\"code\"],[7],[0,\"header.link\"],[8],[0,\" yielded component:\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[19,1,[\"example\"]]],[[\"name\"],[\"docs-header-custom-logo.hbs\"]],{\"statements\":[[4,\"docs-header\",null,[[\"githubUrl\"],[\"https://github.com/ember-learn/ember-cli-addon-docs\"]],{\"statements\":[[4,\"component\",[[19,2,[\"link\"]],\"index\"],null,{\"statements\":[[0,\"        Another route\\n\"]],\"parameters\":[]},null]],\"parameters\":[2]},null],[0,\"  \"]],\"parameters\":[]},null],[0,\"   \"],[1,[25,\"component\",[[19,1,[\"snippet\"]],\"docs-header-custom-logo.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null],[8],[8]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/docs/components/docs-header/template.hbs" } });
});
define("dummy/pods/docs/components/docs-hero/demo/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "fAtOtw9C", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[19,1,[\"example\"]]],[[\"name\"],[\"docs-hero.hbs\"]],{\"statements\":[[0,\"    \"],[1,[25,\"docs-hero\",null,[[\"logo\",\"slimHeading\",\"strongHeading\",\"byline\"],[\"ember\",\"Super\",\"Addon\",\"The best addon ever. Now playing in theaters.\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[25,\"component\",[[19,1,[\"snippet\"]],\"docs-hero.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/docs/components/docs-hero/demo/template.hbs" } });
});
define("dummy/pods/docs/components/docs-hero/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5xBODOAk", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"docs-md\"],[7],[6,\"h1\"],[9,\"id\",\"docs-hero\"],[9,\"class\",\"docs-md__h1\"],[7],[0,\"Docs Hero\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"This component helps you quickly get a hero section on your addon's homepage. The hero on the homepage of this site is an example.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[1,[18,\"docs/components/docs-hero/demo\"],false],[8],[8]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/docs/components/docs-hero/template.hbs" } });
});
define("dummy/pods/docs/components/docs-logo/demo1/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "8jARDQtw", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[19,1,[\"example\"]]],[[\"name\"],[\"docs-logo-ember.hbs\"]],{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"my-ember-addon-logo\"],[7],[0,\"\\n      \"],[1,[18,\"docs-logo\"],false],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[25,\"component\",[[19,1,[\"snippet\"]],\"docs-logo-ember.hbs\"],null],false],[0,\"\\n  \"],[1,[25,\"component\",[[19,1,[\"snippet\"]],\"docs-logo-ember-styles.scss\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/docs/components/docs-logo/demo1/template.hbs" } });
});
define("dummy/pods/docs/components/docs-logo/demo2/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "EI543k+D", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[19,1,[\"example\"]]],[[\"name\"],[\"docs-logo-ember-cli.hbs\"]],{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"my-ember-cli-addon-logo\"],[7],[0,\"\\n      \"],[1,[25,\"docs-logo\",null,[[\"logo\"],[\"ember-cli\"]]],false],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[25,\"component\",[[19,1,[\"snippet\"]],\"docs-logo-ember-cli.hbs\"],null],false],[0,\"\\n  \"],[1,[25,\"component\",[[19,1,[\"snippet\"]],\"docs-logo-ember-cli-styles.scss\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/docs/components/docs-logo/demo2/template.hbs" } });
});
define("dummy/pods/docs/components/docs-logo/demo3/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zAqWLzg2", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[4,\"component\",[[19,1,[\"example\"]]],[[\"name\"],[\"docs-logo-ember-data.hbs\"]],{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"my-ember-data-addon-logo\"],[7],[0,\"\\n      \"],[1,[25,\"docs-logo\",null,[[\"logo\"],[\"ember-data\"]]],false],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[25,\"component\",[[19,1,[\"snippet\"]],\"docs-logo-ember-data.hbs\"],null],false],[0,\"\\n  \"],[1,[25,\"component\",[[19,1,[\"snippet\"]],\"docs-logo-ember-data-styles.scss\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/docs/components/docs-logo/demo3/template.hbs" } });
});
define("dummy/pods/docs/components/docs-logo/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "aBNafrBU", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"docs-md\"],[7],[6,\"h1\"],[9,\"id\",\"docs-logo\"],[9,\"class\",\"docs-md__h1\"],[7],[0,\"Docs Logo\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"An SVG logo that fills its container and takes on the current color.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"By default it renders the Ember logo (you can also pass \"],[6,\"code\"],[7],[0,\"logo='ember'\"],[8],[0,\"):\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[1,[18,\"docs/components/docs-logo/demo1\"],false],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"Pass \"],[6,\"code\"],[7],[0,\"logo='ember-cli'\"],[8],[0,\" for the Ember CLI logo:\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[1,[18,\"docs/components/docs-logo/demo2\"],false],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"Pass \"],[6,\"code\"],[7],[0,\"logo='ember-data'\"],[8],[0,\" for the Ember Data logo:\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[1,[18,\"docs/components/docs-logo/demo3\"],false],[8],[8]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/docs/components/docs-logo/template.hbs" } });
});
define("dummy/pods/docs/components/docs-snippet/demo1/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "gwlDGMgy", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"docs-my-8\"],[7],[0,\"\\n\"],[4,\"docs-snippet\",null,[[\"name\"],[\"docs-snippet.hbs\"]],{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"id\",\"foo\"],[7],[0,\"\\n\"],[4,\"my-awesome-thing\",null,[[\"some\",\"options\"],[true,false]],{\"statements\":[[0,\"        \"],[6,\"p\"],[7],[0,\"Something old, something new\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/docs/components/docs-snippet/demo1/template.hbs" } });
});
define("dummy/pods/docs/components/docs-snippet/demo2/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "BBWJuiTv", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"docs-my-8\"],[7],[0,\"\\n\"],[4,\"docs-snippet\",null,[[\"name\"],[\"my-snippet-src.hbs\"]],{\"statements\":[[0,\"    // BEGIN-SNIPPET my-snippet.js\\n    App = Ember.Application.extend({\\n      modulePrefix: config.modulePrefix,\\n      podModulePrefix: config.podModulePrefix,\\n      Resolver\\n    });\\n    // END-SNIPPET\\n\"]],\"parameters\":[]},null],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/docs/components/docs-snippet/demo2/template.hbs" } });
});
define("dummy/pods/docs/components/docs-snippet/demo3/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "X+agKTKg", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"docs-my-8\"],[7],[0,\"\\n\"],[4,\"docs-snippet\",null,[[\"name\"],[\"my-snippet-src2.hbs\"]],{\"statements\":[[0,\"    \"],[1,[25,\"docs-snippet\",null,[[\"name\"],[\"my-snippet.js\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/docs/components/docs-snippet/demo3/template.hbs" } });
});
define("dummy/pods/docs/components/docs-snippet/demo4/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "x2zbHdSM", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"docs-my-8\"],[7],[0,\"\\n\"],[4,\"docs-snippet\",null,[[\"name\",\"title\"],[\"docs-snippet-title-example.js\",\"app/components/my-component.js\"]],{\"statements\":[[0,\"    import Component from '@ember/component';\\n    export default Component.extend({\\n      // ...\\n    });\\n\"]],\"parameters\":[]},null],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/docs/components/docs-snippet/demo4/template.hbs" } });
});
define("dummy/pods/docs/components/docs-snippet/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "uPgzmB7n", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"docs-md\"],[7],[6,\"h1\"],[9,\"id\",\"docs-snippet\"],[9,\"class\",\"docs-md__h1\"],[7],[0,\"Docs Snippet\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"Easily render a code snippet with syntax highlighting and a copy-to-clipboard button.\"],[8],[0,\"\\n\\n      \"],[6,\"h2\"],[9,\"id\",\"handlebars\"],[9,\"class\",\"docs-md__h2\"],[7],[6,\"a\"],[9,\"href\",\"#handlebars\"],[9,\"class\",\"heading-anchor\"],[7],[0,\"Handlebars\"],[8],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"To render a Handlebars snippet from one of your templates, wrap it in \"],[6,\"code\"],[7],[0,\"{{#docs-snippet name=\\\"your-snippet-name.hbs\\\"}}\"],[8],[0,\". \"],[1,[18,\"docs/components/docs-snippet/demo1\"],false],[0,\" All snippets must have a globally unique name. Note that the block-form of \"],[6,\"code\"],[7],[0,\"docs-snippet\"],[8],[0,\" won't actually execute your template code, it will just capture the static code and render the snippet. Think of it like Markdown code fences that you can use in your Handlebars templates. If you want the code to render and also show the snippet, check out the \"],[1,[25,\"docs-link\",[\"Docs Demo component\",\"docs.components.docs-demo\"],null],false],[0,\". JavaScript and CSS You can also render snippets from other files in your app, like JavaScript and CSS files. To do this, first mark up the source you want to display using comments that start with BEGIN—SNIPPET and END—SNIPPET. BEGIN—SNIPPET should be followed by a name, which you can use to identify the snippet. \"],[1,[18,\"docs/components/docs-snippet/demo2\"],false],[0,\" Then in any of you templates, you can use the non-block form of \"],[6,\"code\"],[7],[0,\"docs-snippet\"],[8],[0,\" to render your named snippet: \"],[1,[18,\"docs/components/docs-snippet/demo3\"],false],[0,\" Be sure to include the file extension. Code snippets are provided by the \"],[6,\"code\"],[7],[0,\"ember-code-snippet\"],[8],[0,\" addon and are made available to your app via the \"],[6,\"code\"],[7],[0,\"dummy/snippets\"],[8],[0,\" importable ES6 module. If you ever want to debug which snippets are getting registered, you can open this module in your devtools (+O, dummy/snippet). Customizing Snippets By default, snippets will render with a button allowing readers to copy the snippet's contents to their clipboard. You can turn this off by passing \"],[6,\"code\"],[7],[0,\"showCopy=false\"],[8],[0,\" to \"],[6,\"code\"],[7],[0,\"{{docs-snippet}}\"],[8],[0,\" You can override the detected language for syntax highlighting in your snippet by specifying a \"],[6,\"code\"],[7],[0,\"language\"],[8],[0,\" property. Finally, you can use the \"],[6,\"code\"],[7],[0,\"title\"],[8],[0,\" property to specify a header for your snippet, for instance to specify the file your snippet would be found in. \"],[1,[18,\"docs/components/docs-snippet/demo4\"],false],[8],[8]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/docs/components/docs-snippet/template.hbs" } });
});
define("dummy/pods/docs/components/docs-viewer/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "SNv5H3sZ", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"docs-md\"],[7],[6,\"h1\"],[9,\"id\",\"docs-viewer\"],[9,\"class\",\"docs-md__h1\"],[7],[0,\"Docs Viewer\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"The page layout you're viewing right now, including the side nav on the left and the main center panel, come from the Docs Viewer component. This component is an opinionated setup intended to be used with a dedicated \"],[6,\"code\"],[7],[0,\"docs\"],[8],[0,\" route.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"Both the side nav section and the main area fill up the available height and are independently scrollable. This is a nice pattern used by many other online documentation viewers that gives your users easy access to navigation while also letting them focus on individual pieces of content without getting overwhelmed.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"The nav is designed to be flexible enough for simple and complex addons. You should feel free to structure it as you see fit (some addons will need one section for Components but some will want more, and so on).\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"The large main area is also useful for addons that need more space to illustrate a concept or show a demo. However, most pages in an addon's docs site should be optimized for reading.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"To use the Docs Viewer, create a \"],[6,\"code\"],[7],[0,\"docs\"],[8],[0,\" route and put your docs-viewer there. Here's how we're using it in this app:\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[1,[25,\"docs-snippet\",null,[[\"name\"],[\"docs-viewer.hbs\"]]],false],[8],[8]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/docs/components/docs-viewer/template.hbs" } });
});
define("dummy/pods/docs/components/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rM1v4Udm", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"docs-md\"],[7],[6,\"h1\"],[9,\"id\",\"components\"],[9,\"class\",\"docs-md__h1\"],[7],[0,\"Components\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"We've provided several components to help you build your addon's documentation site.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"If a component has CSS, it uses BEM-style class names prefixed with the \"],[6,\"code\"],[7],[0,\"docs-\"],[8],[0,\" namespace (for example, \"],[6,\"code\"],[7],[0,\".docs-hero\"],[8],[0,\").\"],[8],[8]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/docs/components/index/template.hbs" } });
});
define("dummy/pods/docs/deploying/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "f85Go5qX", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"docs-md\"],[7],[6,\"h1\"],[9,\"id\",\"deploying\"],[9,\"class\",\"docs-md__h1\"],[7],[0,\"Deploying\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"Deploying your documentation site can involve a lot of moving parts, but Ember CLI Addon Docs aims to streamline as much of the process as possible by providing a set of out-of-the-box conventions for deploying to GitHub Pages.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"Once everything is set up, you'll be able to visit \"],[6,\"u\"],[7],[0,\"https://\"],[6,\"strong\"],[7],[0,\"[user]\"],[8],[0,\".github.io/\"],[6,\"strong\"],[7],[0,\"[repo]\"],[8],[8],[0,\" to see the docs for the latest release of your addon, and your CI builds will automatically keep it up to date.\"],[8],[0,\"\\n\\n      \"],[6,\"h2\"],[9,\"id\",\"deploying-your-docs-site\"],[9,\"class\",\"docs-md__h2\"],[7],[6,\"a\"],[9,\"href\",\"#deploying-your-docs-site\"],[9,\"class\",\"heading-anchor\"],[7],[0,\"Deploying your docs site\"],[8],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"To deploy your docs site to GitHub pages, you'll need to go through a few steps of first-time setup:\"],[8],[0,\"\\n\"],[6,\"ol\"],[7],[0,\"\\n\"],[6,\"li\"],[7],[0,\"Run \"],[6,\"code\"],[7],[0,\"ember g ember-cli-addon-docs\"],[8],[0,\" to set up the relevant deploy plugins (this is done automatically if you used \"],[6,\"code\"],[7],[0,\"ember install\"],[8],[0,\" to install Addon Docs)\"],[8],[0,\"\\n\"],[6,\"li\"],[7],[0,\"Set \"],[6,\"a\"],[9,\"href\",\"https://docs.npmjs.com/files/package.json#repository\"],[9,\"class\",\"docs-md__a\"],[7],[0,\"the \"],[6,\"code\"],[7],[0,\"repository\"],[8],[0,\" field\"],[8],[0,\" of your \"],[6,\"code\"],[7],[0,\"package.json\"],[8],[0,\".\"],[8],[0,\"\\n\"],[6,\"li\"],[7],[0,\"Commit any outstanding changes you've got on your current branch and push them to GitHub.\"],[8],[0,\"\\n\"],[6,\"li\"],[7],[0,\"Run \"],[6,\"code\"],[7],[0,\"ember deploy production\"],[8],[0,\" and answer \\\"yes\\\" if prompted to create a \"],[6,\"code\"],[7],[0,\"gh-pages\"],[8],[0,\" branch. \"],[6,\"strong\"],[7],[0,\"Note\"],[8],[0,\": if your repo already has a \"],[6,\"code\"],[7],[0,\"gh-pages\"],[8],[0,\" branch, you may want to manually archive the existing content there before deploying.\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"Once the deploy completes and GitHub has a moment to publish your pages site, if all went well you should see your addon's dummy app live at\\n\"],[6,\"u\"],[7],[0,\"https://\"],[6,\"strong\"],[7],[0,\"[user]\"],[8],[0,\".github.io/\"],[6,\"strong\"],[7],[0,\"[repo]\"],[8],[0,\"/\"],[6,\"strong\"],[7],[0,\"[current-branch]\"],[8],[8],[0,\".\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"Now take a look at the \"],[6,\"code\"],[7],[0,\"gh-pages\"],[8],[0,\" branch either locally or on GitHub. You should see a layout something like this:\"],[8],[0,\"\\n\"],[6,\"pre\"],[9,\"class\",\"docs-md__code\"],[7],[6,\"code\"],[9,\"class\",\"undefinedsh\"],[7],[0,\"├── 404.html\\n├── versions\\n│   └── [current-branch]\\n│       ├── assets\\n│       ├── index.html\\n│       └── ...\\n└── versions.json\"],[8],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"Let's break down what each of those items is doing.\"],[8],[0,\"\\n\"],[6,\"ul\"],[7],[0,\"\\n\"],[6,\"li\"],[7],[6,\"code\"],[7],[0,\"404.html\"],[8],[0,\" contains \"],[6,\"a\"],[9,\"href\",\"https://github.com/rafrex/spa-github-pages\"],[9,\"class\",\"docs-md__a\"],[7],[0,\"some smart redirect logic\"],[8],[0,\" to keep you from having to use \"],[6,\"code\"],[7],[0,\"locationType: 'hash'\"],[8],[0,\" in your dummy app\"],[8],[0,\"\\n\"],[6,\"li\"],[7],[6,\"code\"],[7],[0,\"versions.json\"],[8],[0,\" contains a manifest of the available versions of your documentation\"],[8],[0,\"\\n\"],[6,\"li\"],[7],[6,\"code\"],[7],[0,\"versions/[current-branch]\"],[8],[0,\" contains all the files from your built docs app\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"If you were to make a change to your dummy app and run \"],[6,\"code\"],[7],[0,\"ember deploy production\"],[8],[0,\" again right now, the entry for \"],[6,\"code\"],[7],[0,\"[current-branch]\"],[8],[0,\" in \"],[6,\"code\"],[7],[0,\"versions.json\"],[8],[0,\" and the entire contents of the \"],[6,\"code\"],[7],[0,\"versions/[current-branch]\"],[8],[0,\" directory would be replaced with the updated version of your site. Next we'll talk about how to manage keeping published documentation around for multiple versions of your addon.\"],[8],[0,\"\\n\\n      \"],[6,\"h2\"],[9,\"id\",\"versioning-your-content\"],[9,\"class\",\"docs-md__h2\"],[7],[6,\"a\"],[9,\"href\",\"#versioning-your-content\"],[9,\"class\",\"heading-anchor\"],[7],[0,\"Versioning your content\"],[8],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"Whenever you deploy your documentation site with Addon Docs, it places the compiled application in a subdirectory based on the current state of your git repository. All of this behavior \"],[6,\"a\"],[9,\"href\",\"#customizing-deploys\"],[9,\"class\",\"docs-md__a\"],[7],[0,\"is customizable\"],[8],[0,\", but we expect the out-of-the-box configuration should be a good place to get started.\"],[8],[0,\"\\n\\n      \"],[6,\"h3\"],[9,\"id\",\"tag-deploys\"],[9,\"class\",\"docs-md__h3\"],[7],[6,\"a\"],[9,\"href\",\"#tag-deploys\"],[9,\"class\",\"heading-anchor\"],[7],[0,\"Tag deploys\"],[8],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"When you run \"],[6,\"code\"],[7],[0,\"ember deploy\"],[8],[0,\" at a commit that has a git tag associated with it, the app will wind up in a directory named after that tag. For example, if you've just published version 1.2.3 of your addon (creating tag \"],[6,\"code\"],[7],[0,\"v1.2.3\"],[8],[0,\" in your git repository), your deployed site will be available at \"],[6,\"u\"],[7],[0,\"https://\"],[6,\"strong\"],[7],[0,\"[user]\"],[8],[0,\".github.io/\"],[6,\"strong\"],[7],[0,\"[repo]\"],[8],[0,\"/versions/v1.2.3\"],[8],[0,\".\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"By default, deploying from a tagged commit also places a copy of your app at the root of your \"],[6,\"code\"],[7],[0,\"gh-pages\"],[8],[0,\" branch, so \"],[6,\"u\"],[7],[0,\"https://\"],[6,\"strong\"],[7],[0,\"[user]\"],[8],[0,\".github.io/\"],[6,\"strong\"],[7],[0,\"[repo]\"],[8],[8],[0,\" will always bring developers to the documentation for the most recent stable release of your addon.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"Note that this only applies to non-prerelease tags, so \"],[6,\"code\"],[7],[0,\"v1.2.3\"],[8],[0,\" would update the root app, but \"],[6,\"code\"],[7],[0,\"v2.0.0-beta.1\"],[8],[0,\" would not. Check out the documentation for \"],[6,\"a\"],[9,\"href\",\"https://github.com/npm/node-semver\"],[9,\"class\",\"docs-md__a\"],[7],[0,\"node-semver\"],[8],[0,\" for the exact details on what constitutes a prerelease version.\"],[8],[0,\"\\n\\n      \"],[6,\"h3\"],[9,\"id\",\"branch-deploys\"],[9,\"class\",\"docs-md__h3\"],[7],[6,\"a\"],[9,\"href\",\"#branch-deploys\"],[9,\"class\",\"heading-anchor\"],[7],[0,\"Branch deploys\"],[8],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"When you deploy from a commit at the head of a branch that \"],[6,\"em\"],[7],[0,\"doesn't\"],[8],[0,\" have a tag associated with it, the compiled app will land in a folder named after that branch, as in our \\\"getting started\\\" example above. Unlike tag deploys, branch deploys will never automatically update the root app.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"The main use case for branch deploys is tracking development work since your last stable release. If you run \"],[6,\"code\"],[7],[0,\"ember deploy\"],[8],[0,\" after successful builds on \"],[6,\"code\"],[7],[0,\"master\"],[8],[0,\", you'll always have documentation available for the bleeding edge of your addon's features. Since branch deploys don't update the root, though, developers looking at your docs will still hit your most recent stable tag by default, so there won't be any confusion about things that have drifted since the last release.\"],[8],[0,\"\\n\\n      \"],[6,\"h2\"],[9,\"id\",\"automating-deploys\"],[9,\"class\",\"docs-md__h2\"],[7],[6,\"a\"],[9,\"href\",\"#automating-deploys\"],[9,\"class\",\"heading-anchor\"],[7],[0,\"Automating deploys\"],[8],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"While you \"],[6,\"em\"],[7],[0,\"can\"],[8],[0,\" just run \"],[6,\"code\"],[7],[0,\"ember deploy production\"],[8],[0,\" yourself after every commit to \"],[6,\"code\"],[7],[0,\"master\"],[8],[0,\" and each new release of your addon, you can simplify life a bit by automating the process as part of your CI setup. The process described here details the configuration for \"],[6,\"a\"],[9,\"href\",\"https://travis-ci.org/\"],[9,\"class\",\"docs-md__a\"],[7],[0,\"Travis CI\"],[8],[0,\", which Ember addons are configured to work with out of the box, but the setup should be very similar for other CI providers.\"],[8],[0,\"\\n\\n      \"],[6,\"h3\"],[9,\"id\",\"generate-a-deploy-key\"],[9,\"class\",\"docs-md__h3\"],[7],[6,\"a\"],[9,\"href\",\"#generate-a-deploy-key\"],[9,\"class\",\"heading-anchor\"],[7],[0,\"Generate a deploy key\"],[8],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"The first step you'll need to take is to generate a \"],[6,\"em\"],[7],[0,\"deploy key\"],[8],[0,\". This is a special SSH key that will only have write access to a single git repository: the one for your addon.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"To generate the public/private key pair on macOS or Linux, you'll use the \"],[6,\"a\"],[9,\"href\",\"https://www.freebsd.org/cgi/man.cgi?query=ssh-keygen&sektion=1&manpath=OpenBSD+3.9\"],[9,\"class\",\"docs-md__a\"],[7],[6,\"code\"],[7],[0,\"ssh-keygen\"],[8],[8],[0,\" command line tool. On Windows, you can use \"],[6,\"a\"],[9,\"href\",\"https://www.ssh.com/ssh/putty/windows/puttygen\"],[9,\"class\",\"docs-md__a\"],[7],[0,\"PuTTYGen\"],[8],[0,\" instead.\"],[8],[0,\"\\n\"],[6,\"pre\"],[9,\"class\",\"docs-md__code\"],[7],[6,\"code\"],[9,\"class\",\"undefinedsh\"],[7],[0,\"ssh-keygen -t rsa -b 4096 -N \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"''\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-_\"],[7],[0,\"-f\"],[8],[0,\" deploy_key\"],[8],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"This will produce two files in your current directory: \"],[6,\"code\"],[7],[0,\"deploy_key\"],[8],[0,\" (the private key) and \"],[6,\"code\"],[7],[0,\"deploy_key.pub\"],[8],[0,\" (the public key). \"],[6,\"strong\"],[7],[0,\"Do not commit these files to your repository.\"],[8],[8],[0,\"\\n\\n      \"],[6,\"h3\"],[9,\"id\",\"configure-the-public-key-with-github\"],[9,\"class\",\"docs-md__h3\"],[7],[6,\"a\"],[9,\"href\",\"#configure-the-public-key-with-github\"],[9,\"class\",\"heading-anchor\"],[7],[0,\"Configure the public key with GitHub\"],[8],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"On GitHub, open the page for your repo and navigate to \"],[6,\"em\"],[7],[0,\"Settings\"],[8],[0,\" -> \"],[6,\"em\"],[7],[0,\"Deploy keys\"],[8],[0,\" (or just directly visit \"],[6,\"u\"],[7],[0,\"https://github.com/\"],[6,\"strong\"],[7],[0,\"[user]\"],[8],[0,\"/\"],[6,\"strong\"],[7],[0,\"[repo]\"],[8],[0,\"/settings/keys)\"],[8],[0,\" and click \\\"Add deploy key\\\".\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"Enter a name for your key and then paste the contents of your public key (\"],[6,\"code\"],[7],[0,\"id_rsa.pub\"],[8],[0,\") into the big textarea. Make sure you check the \"],[6,\"strong\"],[7],[0,\"Allow write access\"],[8],[0,\" box, then click \\\"Add key\\\" and you're all set.\"],[8],[0,\"\\n\\n      \"],[6,\"h3\"],[9,\"id\",\"configure-the-private-key-with-travis\"],[9,\"class\",\"docs-md__h3\"],[7],[6,\"a\"],[9,\"href\",\"#configure-the-private-key-with-travis\"],[9,\"class\",\"heading-anchor\"],[7],[0,\"Configure the private key with Travis\"],[8],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"Now that GitHub knows that this public key is allowed to push commits to your repo, we need to set up Travis to use the corresponding private key. Because the keyfile contains newlines, the easiest way to do this is using the \"],[6,\"a\"],[9,\"href\",\"https://github.com/travis-ci/travis.rb#installation\"],[9,\"class\",\"docs-md__a\"],[7],[0,\"Travis CLI\"],[8],[0,\" tool.\"],[8],[0,\"\\n\"],[6,\"pre\"],[9,\"class\",\"docs-md__code\"],[7],[6,\"code\"],[9,\"class\",\"undefinedsh\"],[7],[0,\"travis env \"],[6,\"span\"],[9,\"class\",\"hljs-built_in\"],[7],[0,\"set\"],[8],[0,\" -- DEPLOY_KEY \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"\\\"\"],[6,\"span\"],[9,\"class\",\"hljs-variable\"],[7],[0,\"$(cat deploy_key)\"],[8],[0,\"\\\"\"],[8],[8],[8],[0,\"\\n\\n      \"],[6,\"h3\"],[9,\"id\",\"deploy-after-successful-builds\"],[9,\"class\",\"docs-md__h3\"],[7],[6,\"a\"],[9,\"href\",\"#deploy-after-successful-builds\"],[9,\"class\",\"heading-anchor\"],[7],[0,\"Deploy after successful builds\"],[8],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"All that's left now is to set up Travis to run your deploys for you. The simplest way to do this is to add this \"],[6,\"code\"],[7],[0,\"after_success\"],[8],[0,\" script to the end of your \"],[6,\"code\"],[7],[0,\".travis.yml\"],[8],[0,\":\"],[8],[0,\"\\n\"],[6,\"pre\"],[9,\"class\",\"docs-md__code\"],[7],[6,\"code\"],[9,\"class\",\"undefinedyml\"],[7],[6,\"span\"],[9,\"class\",\"hljs-attr\"],[7],[0,\"after_success:\"],[8],[0,\"\\n\"],[6,\"span\"],[9,\"class\",\"hljs-bullet\"],[7],[0,\"  -\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"if\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"[[\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"($TRAVIS_BRANCH\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"==\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"master\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"||\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-bullet\"],[7],[0,\"-n\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"$TRAVIS_TAG)\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"&&\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"$EMBER_TRY_SCENARIO\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"==\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"ember-default\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"]];\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"then\"],[8],[0,\"\\n      \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"node_modules/.bin/ember\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"deploy\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"production;\"],[8],[0,\"\\n    \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"fi\"],[8],[8],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"Alternatively, if you're using Travis's \"],[6,\"a\"],[9,\"href\",\"https://docs.travis-ci.com/user/build-stages/\"],[9,\"class\",\"docs-md__a\"],[7],[0,\"build stages system\"],[8],[0,\", you can set up the deploy as a conditional stage at the end of your build:\"],[8],[0,\"\\n\"],[6,\"pre\"],[9,\"class\",\"docs-md__code\"],[7],[6,\"code\"],[9,\"class\",\"undefinedyml\"],[7],[6,\"span\"],[9,\"class\",\"hljs-attr\"],[7],[0,\"stages:\"],[8],[0,\"\\n  \"],[6,\"span\"],[9,\"class\",\"hljs-comment\"],[7],[0,\"# ...your other build stages...\"],[8],[0,\"\\n\"],[6,\"span\"],[9,\"class\",\"hljs-attr\"],[7],[0,\"  - name:\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"deploy\"],[8],[0,\"\\n\"],[6,\"span\"],[9,\"class\",\"hljs-attr\"],[7],[0,\"    if:\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"(branch\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"=\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"master\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"or\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"tag\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"is\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"present)\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"and\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"type\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"=\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"push\"],[8],[0,\"\\n\"],[6,\"span\"],[9,\"class\",\"hljs-attr\"],[7],[0,\"    script:\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"node_modules/.bin/ember\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"deploy\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"production\"],[8],[8],[8],[0,\"\\n\\n      \"],[6,\"h2\"],[9,\"id\",\"customizing-deploys\"],[9,\"class\",\"docs-md__h2\"],[7],[6,\"a\"],[9,\"href\",\"#customizing-deploys\"],[9,\"class\",\"heading-anchor\"],[7],[0,\"Customizing deploys\"],[8],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"When you install Addon Docs, a \"],[6,\"code\"],[7],[0,\"config/addon-docs.js\"],[8],[0,\" file will automatically be created for you that looks something like this:\"],[8],[0,\"\\n\"],[6,\"pre\"],[9,\"class\",\"docs-md__code\"],[7],[6,\"code\"],[9,\"class\",\"undefinedjs\"],[7],[6,\"span\"],[9,\"class\",\"hljs-keyword\"],[7],[0,\"const\"],[8],[0,\" AddonDocsConfig = \"],[6,\"span\"],[9,\"class\",\"hljs-built_in\"],[7],[0,\"require\"],[8],[0,\"(\"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"'ember-cli-addon-docs/lib/config'\"],[8],[0,\");\\n\\n\"],[6,\"span\"],[9,\"class\",\"hljs-built_in\"],[7],[0,\"module\"],[8],[0,\".exports = \"],[6,\"span\"],[9,\"class\",\"hljs-class\"],[7],[6,\"span\"],[9,\"class\",\"hljs-keyword\"],[7],[0,\"class\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-keyword\"],[7],[0,\"extends\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"hljs-title\"],[7],[0,\"AddonDocsConfig\"],[8],[0,\" \"],[8],[0,\"{\\n  \"],[6,\"span\"],[9,\"class\",\"hljs-comment\"],[7],[0,\"// ...\"],[8],[0,\"\\n};\"],[8],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"You can override methods on this class to customize deploy behavior.\"],[8],[0,\"\\n\\n      \"],[6,\"h3\"],[9,\"id\",\"getversionpath-\"],[9,\"class\",\"docs-md__h3\"],[7],[6,\"a\"],[9,\"href\",\"#getversionpath-\"],[9,\"class\",\"heading-anchor\"],[7],[6,\"code\"],[7],[0,\"getVersionPath()\"],[8],[8],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"This method determines the location that a given version of your documentation will be written to within the \"],[6,\"code\"],[7],[0,\"versions\"],[8],[0,\" directory on your deploy branch.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"By default, this method will use the current tag name (if any), or fall back to the current branch name as described above. Note that you can override this behavior by setting an \"],[6,\"code\"],[7],[0,\"ADDON_DOCS_VERSION_PATH\"],[8],[0,\" environment variable.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"If this method returns a falsey value, the deploy will be aborted.\"],[8],[0,\"\\n\\n      \"],[6,\"h3\"],[9,\"id\",\"getversionname-\"],[9,\"class\",\"docs-md__h3\"],[7],[6,\"a\"],[9,\"href\",\"#getversionname-\"],[9,\"class\",\"heading-anchor\"],[7],[6,\"code\"],[7],[0,\"getVersionName()\"],[8],[8],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"This method returns a name for a given version of your documentation. By default it returns the current tag if any, or the current branch name otherwise. If, for instance, you wanted to set up named releases, you might override this method. You can also explicitly specify the version name by setting an \"],[6,\"code\"],[7],[0,\"ADDON_DOCS_VERSION_NAME\"],[8],[0,\" environment variable.\"],[8],[0,\"\\n\\n      \"],[6,\"h3\"],[9,\"id\",\"shouldupdatelatest-\"],[9,\"class\",\"docs-md__h3\"],[7],[6,\"a\"],[9,\"href\",\"#shouldupdatelatest-\"],[9,\"class\",\"heading-anchor\"],[7],[6,\"code\"],[7],[0,\"shouldUpdateLatest()\"],[8],[8],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"This method determines whether the root copy of your docs app will also be updated with the current deploy. By default, this will return true for builds from a tagged commit where the tag is a \"],[6,\"a\"],[9,\"href\",\"https://github.com/npm/node-semver\"],[9,\"class\",\"docs-md__a\"],[7],[0,\"semver non-prerelease version\"],[8],[0,\", and false otherwise. You can explicitly set the \"],[6,\"code\"],[7],[0,\"ADDON_DOCS_UPDATE_LATEST\"],[8],[0,\" environment variable to \"],[6,\"code\"],[7],[0,\"true\"],[8],[0,\" or \"],[6,\"code\"],[7],[0,\"false\"],[8],[0,\" to override this behavior.\"],[8],[0,\"\\n\\n      \"],[6,\"h3\"],[9,\"id\",\"getrooturl-\"],[9,\"class\",\"docs-md__h3\"],[7],[6,\"a\"],[9,\"href\",\"#getrooturl-\"],[9,\"class\",\"heading-anchor\"],[7],[6,\"code\"],[7],[0,\"getRootURL()\"],[8],[8],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"This method determines the static path under which all deploys of your docs app expect to live. It defaults to the name of your project, which matches the typical GitHub Pages setup where your site lives at \"],[6,\"u\"],[7],[0,\"https://\"],[6,\"strong\"],[7],[0,\"[user]\"],[8],[0,\".github.io/\"],[6,\"strong\"],[7],[0,\"[project]\"],[8],[0,\"/...\"],[8],[0,\".\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"If instead, however, you want to \"],[6,\"a\"],[9,\"href\",\"https://help.github.com/articles/using-a-custom-domain-with-github-pages/\"],[9,\"class\",\"docs-md__a\"],[7],[0,\"set up a CNAME for your project\"],[8],[0,\" and host it at e.g. \"],[6,\"u\"],[7],[0,\"https://my-great-project.com\"],[8],[0,\", you would override this method to return \"],[6,\"code\"],[7],[0,\"''\"],[8],[0,\", since there would be no static path at the beginning of the URL.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"Note\"],[8],[0,\": if you change this configuration after you've already deployed copies of your docs site, you'll need to check out your \"],[6,\"code\"],[7],[0,\"gh-pages\"],[8],[0,\" branch and find/replace your previous root URL in those copies in order for them to continue to function in their new location.\"],[8],[0,\"\\n\\n      \"],[6,\"h3\"],[9,\"id\",\"getprimarybranch-\"],[9,\"class\",\"docs-md__h3\"],[7],[6,\"a\"],[9,\"href\",\"#getprimarybranch-\"],[9,\"class\",\"heading-anchor\"],[7],[6,\"code\"],[7],[0,\"getPrimaryBranch()\"],[8],[8],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"This method determines what Addon Docs considers to be your primary branch, which is where links such as \\\"edit this page\\\" will point. By default, this branch is \"],[6,\"code\"],[7],[0,\"master\"],[8],[0,\", but you can override this method to choose a different branch instead, e.g. \"],[6,\"code\"],[7],[0,\"develop\"],[8],[0,\".\"],[8],[0,\"\\n\\n      \"],[6,\"h2\"],[9,\"id\",\"removing-a-deployed-version\"],[9,\"class\",\"docs-md__h2\"],[7],[6,\"a\"],[9,\"href\",\"#removing-a-deployed-version\"],[9,\"class\",\"heading-anchor\"],[7],[0,\"Removing a deployed version\"],[8],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"Deploying a version of your documentation does two things: it copies the \"],[6,\"code\"],[7],[0,\"dist\"],[8],[0,\" directory of your built docs app into a particular place on your \"],[6,\"code\"],[7],[0,\"gh-pages\"],[8],[0,\" branch, and it adds or updates an entry in the \"],[6,\"code\"],[7],[0,\"versions.json\"],[8],[0,\" manifest in the root of that branch. To remove a version, then, you just need to undo those two things.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"First, you can run \"],[6,\"code\"],[7],[0,\"git checkout gh-pages\"],[8],[0,\" to switch to your deploy branch. You may see a message indicating that that branch has already been checked out somewhere else by \"],[6,\"code\"],[7],[0,\"git worktree\"],[8],[0,\"—if that's the case, you can just \"],[6,\"code\"],[7],[0,\"cd\"],[8],[0,\" to that directory instead.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"Next, remove the item from \"],[6,\"code\"],[7],[0,\"versions.json\"],[8],[0,\" for the version you want to get rid of, and delete the corresponding directory. For example, if you ran a deploy on a branch called \"],[6,\"code\"],[7],[0,\"deploy-test\"],[8],[0,\" and wanted to remove the results of that after you finished testing it out, you could \"],[6,\"code\"],[7],[0,\"git rm versions/deploy-test\"],[8],[0,\" to remove the deployed app, and then find the \"],[6,\"code\"],[7],[0,\"deploy-test\"],[8],[0,\" key in \"],[6,\"code\"],[7],[0,\"versions.json\"],[8],[0,\" and remove it:\"],[8],[0,\"\\n\"],[6,\"pre\"],[9,\"class\",\"docs-md__code\"],[7],[6,\"code\"],[9,\"class\",\"undefinedjs\"],[7],[0,\"{\\n  \"],[6,\"span\"],[9,\"class\",\"hljs-comment\"],[7],[0,\"// ...\"],[8],[0,\"\\n  \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"\\\"deploy-test\\\"\"],[8],[0,\": {\\n    \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"\\\"sha\\\"\"],[8],[0,\": \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"\\\"caad536c48dd3562629a4f7a467c976f0ec6bb2b\\\"\"],[8],[0,\",\\n    \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"\\\"tag\\\"\"],[8],[0,\": \"],[6,\"span\"],[9,\"class\",\"hljs-literal\"],[7],[0,\"null\"],[8],[0,\",\\n    \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"\\\"path\\\"\"],[8],[0,\": \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"\\\"versions/deploy-test\\\"\"],[8],[0,\",\\n    \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"\\\"name\\\"\"],[8],[0,\": \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"\\\"deploy-test\\\"\"],[8],[0,\"\\n  },\\n  \"],[6,\"span\"],[9,\"class\",\"hljs-comment\"],[7],[0,\"// ...\"],[8],[0,\"\\n}\"],[8],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"Keep in mind, your deployed site is still a git branch like everything else in your repo, so you have all the same tools at your disposal for making changes to it. In many case, rather than going through the manual steps outlined above, you may be able to just find the commit that added the version you want to remove and \"],[6,\"code\"],[7],[0,\"git revert\"],[8],[0,\" it.\"],[8],[0,\"\\n\\n      \"],[6,\"h2\"],[9,\"id\",\"disabling-the-default-deployment-plugins\"],[9,\"class\",\"docs-md__h2\"],[7],[6,\"a\"],[9,\"href\",\"#disabling-the-default-deployment-plugins\"],[9,\"class\",\"heading-anchor\"],[7],[0,\"Disabling the default deployment plugins\"],[8],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"If you wish to disable ember-cli-addon-docs' built-in deployment plugins altogether and instead define your own pipeline, you can do so by \"],[6,\"a\"],[9,\"href\",\"http://ember-cli-deploy.com/docs/v1.0.x/configuration/#disabling-plugins\"],[9,\"class\",\"docs-md__a\"],[7],[0,\"editing your pipeline configuration\"],[8],[0,\". In your \"],[6,\"code\"],[7],[0,\"config/deploy.js\"],[8],[0,\" file:\"],[8],[0,\"\\n\"],[6,\"pre\"],[9,\"class\",\"docs-md__code\"],[7],[6,\"code\"],[9,\"class\",\"undefinedjs\"],[7],[6,\"span\"],[9,\"class\",\"hljs-comment\"],[7],[0,\"// ...\"],[8],[0,\"\\nENV.pipeline = {\\n  \"],[6,\"span\"],[9,\"class\",\"hljs-attr\"],[7],[0,\"disabled\"],[8],[0,\": {\\n    \"],[6,\"span\"],[9,\"class\",\"hljs-string\"],[7],[0,\"'addon-docs'\"],[8],[0,\": \"],[6,\"span\"],[9,\"class\",\"hljs-literal\"],[7],[0,\"true\"],[8],[0,\"\\n  }\\n};\\n\"],[6,\"span\"],[9,\"class\",\"hljs-comment\"],[7],[0,\"// ...\"],[8],[8],[8],[8]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/docs/deploying/template.hbs" } });
});
define("dummy/pods/docs/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "0OXLlNR6", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"docs-md\"],[7],[6,\"h1\"],[9,\"id\",\"what-is-addon-docs-\"],[9,\"class\",\"docs-md__h1\"],[7],[0,\"What is Addon Docs?\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"Welcome addon author!\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"This project was created to help you document and showcase your addon using the accumulated knowledge of the addon community. After surveying several popular project sites we saw that they had much in common, though addon authors have had no easy way to share these techniques.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"The app you're currently viewing is itself an example of an addon documented using Ember CLI Addon Docs (it is a fortunate dog-fooding position that we find ourselves in). This Ember application employs our thinking on best practices for layout, typography and design, and uses several features like\"],[8],[0,\"\\n\"],[6,\"ul\"],[7],[0,\"\\n\"],[6,\"li\"],[7],[0,\"Support for authoring pages in Markdown (this very page being an example – click \"],[6,\"em\"],[7],[0,\"Edit this page\"],[8],[0,\" below to view the source)\"],[8],[0,\"\\n\"],[6,\"li\"],[7],[0,\"Interactive \"],[4,\"docs-link\",[\"docs.components.docs-hero\"],null,{\"statements\":[[0,\"component demos\"]],\"parameters\":[]},null],[8],[0,\"\\n\"],[6,\"li\"],[7],[0,\"Autogenerated \"],[4,\"docs-link\",[\"docs.api.item\",\"components/docs-demo\"],null,{\"statements\":[[0,\"API docs\"]],\"parameters\":[]},null],[0,\" from source code comments\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"and more.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"The goal of this project is to make these features and patterns easily available to you in a way that doesn't stifle your creativity. We understand your addon may require unique pages to demo or test its functionality, and you may already have an existing site up and running. So we've taken care to break up our primitives so that you can pick and choose just what you need.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"As with all open-source, our discovery of best practices is never finished. If you'd like to make a suggestion on any topic covered by this addon, please \"],[6,\"a\"],[9,\"href\",\"https://github.com/ember-learn/ember-cli-addon-docs/issues\"],[9,\"class\",\"docs-md__a\"],[7],[0,\"open an issue\"],[8],[0,\".\"],[8],[8]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/docs/index/template.hbs" } });
});
define("dummy/pods/docs/patterns/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NdPF3Lm+", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"docs-md\"],[7],[6,\"h1\"],[9,\"id\",\"patterns\"],[9,\"class\",\"docs-md__h1\"],[7],[0,\"Patterns\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"Here's a summary of the patterns we encourage addon authors to follow when documenting their work.\"],[8],[0,\"\\n\\n      \"],[6,\"h2\"],[9,\"id\",\"using-your-dummy-app-as-your-docs-site\"],[9,\"class\",\"docs-md__h2\"],[7],[6,\"a\"],[9,\"href\",\"#using-your-dummy-app-as-your-docs-site\"],[9,\"class\",\"heading-anchor\"],[7],[0,\"Using your dummy app as your docs site\"],[8],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"One of the more surprising results to come out of the addon community is the effectiveness of using an addon's dummy application as a full-fledged document site.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"Every addon comes with a fully bootstrapped Ember application that can be found in \"],[6,\"code\"],[7],[0,\"/tests/dummy\"],[8],[0,\" and runs during \"],[6,\"code\"],[7],[0,\"ember s\"],[8],[0,\". This dummy app is primarily intended to be used for acceptance tests; but it turns out that configuring it as a production application to be used as your docs site has many advantages:\"],[8],[0,\"\\n\"],[6,\"ul\"],[7],[0,\"\\n\"],[6,\"li\"],[7],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"You can show off your addon in the context of a real Ember app.\"],[8],[0,\" The dummy app provides you with a perfect sandbox for rendering all the variations of your UI components in an actual Ember application.\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"li\"],[7],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"You can write your docs using familiar technology.\"],[8],[0,\" You're an Ember developer, and so are your users. Using the dummy app means your docs site is built with tech you and your users know, making it easier for you and the community to maintain and improve your docs. Compare this to something like Jekyll, which requires your users to have Ruby installed and to have a basic understanding of Gemfiles.\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"li\"],[7],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"It encourages you to write acceptance tests, and when you do, ensures your docs are never outdated.\"],[8],[0,\" Whenever you write acceptance tests for new behavior, you need to add that behavior to your dummy app. But now that your dummy app is your docs site, you won't just add throwaway or confusing examples — you'll be encouraged to find an appropriate place for them, since your dummy app is now an organized app that already documents all your addon's functionality for your end users.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"Once you document the new behavior on your doc site, you can now write an acceptance test against it, ensuring (1) that your code is functioning correctly, and (2) that your docs are accurate and up-to-date. Win-win!\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n      \"],[6,\"h2\"],[9,\"id\",\"authoring-in-markdown\"],[9,\"class\",\"docs-md__h2\"],[7],[6,\"a\"],[9,\"href\",\"#authoring-in-markdown\"],[9,\"class\",\"heading-anchor\"],[7],[0,\"Authoring in Markdown\"],[8],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"Authoring your docs pages in Markdown makes it easy for you and your contributors to read and edit your site.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"To make a route a Markdown document, simply create a \"],[6,\"code\"],[7],[0,\"template.md\"],[8],[0,\" file instead of a \"],[6,\"code\"],[7],[0,\"template.hbs\"],[8],[0,\".\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"To show additional functionality, create route-specific components and render them from your \"],[6,\"code\"],[7],[0,\"template.md\"],[8],[0,\" files:\"],[8],[0,\"\\n\"],[6,\"pre\"],[9,\"class\",\"docs-md__code\"],[7],[6,\"code\"],[9,\"class\",\"undefinedmd\"],[7],[6,\"span\"],[9,\"class\",\"hljs-section\"],[7],[0,\"## My Component demo\"],[8],[0,\"\\n\\nHere's a demo of it working:\\n\\n{{docs/my-component/demo1}}\"],[8],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"In addition to authoring normal Markdown content, you can\"],[8],[0,\"\\n\"],[6,\"ul\"],[7],[0,\"\\n\"],[6,\"li\"],[7],[0,\"Use an \"],[6,\"code\"],[7],[0,\"<aside>\"],[8],[0,\" element. This is good for calling out important info or long-standing bug fixes that were part of a release.\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"aside\"],[7],[0,\"\\n  Here's an example of an aside.\\n\"],[8],[0,\"\\n\\n\"],[6,\"ul\"],[7],[0,\"\\n\"],[6,\"li\"],[7],[0,\"Use Handlebars helpers. For example, you can use \"],[6,\"code\"],[7],[0,\"link-to\"],[8],[0,\" to render a link to \"],[1,[25,\"docs-link\",[\"the home page\",\"index\"],null],false],[0,\", or you can even render a component.\"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n      \"],[6,\"h2\"],[9,\"id\",\"design-for-your-audience\"],[9,\"class\",\"docs-md__h2\"],[7],[6,\"a\"],[9,\"href\",\"#design-for-your-audience\"],[9,\"class\",\"heading-anchor\"],[7],[0,\"Design for your audience\"],[8],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"The design of your docs site should meet the needs of your users — other busy software developers. It needs to explain what problems your library solves and the principles behind your approach, but also serve as a quick reference for developers who are already familiar with your addon, and are just looking up an API.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"We've included a \"],[1,[25,\"docs-link\",[\"Docs Viewer\",\"docs.components.docs-viewer\"],null],false],[0,\"  component to help you with your site's design and functionality. The entire layout of the current page comes from this component. It's an opinionated setup intended to be used with a dedicated \"],[6,\"code\"],[7],[0,\"docs\"],[8],[0,\" route.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"It features the nav area you see on the left and a main area for the content in the middle, with both sections filling up the available height and independently scrollable. This is a nice pattern used by many other online documentation viewers that gives your users easy access to navigation while also letting them focus on individual pieces of content without getting overwhelmed.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"The nav is designed to be flexible enough for simple and complex addons. You should feel free to structure it as you see fit (some addons will need one section for Components but some will want more, and so on).\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"The large main area is also useful for addons that need more space to illustrate a concept or show a demo. However, most pages in an addon's docs site should be optimized for reading.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"Typography choices were made primarily for readability. Measure, a typographic term for the number of characters is a line of text, is also an important aspect of readability, so by default most of the layouts you see will be wrapped with an appropriate max-width. To reiterate one of our main goals for the project, we want addon authors to get these patterns for free so they can focus on actually documenting and testing their addons.\"],[8],[0,\"\\n\\n      \"],[6,\"h2\"],[9,\"id\",\"versioning-your-docs\"],[9,\"class\",\"docs-md__h2\"],[7],[6,\"a\"],[9,\"href\",\"#versioning-your-docs\"],[9,\"class\",\"heading-anchor\"],[7],[0,\"Versioning your docs\"],[8],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"Addon Docs provides versioned guides out of the box. You can see the version selector in the top-right part of this page. This is provided by the \"],[6,\"code\"],[7],[0,\"<docs-header>\"],[8],[0,\" component, so your site will get this too assuming you use this component.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"If you look at the \"],[6,\"a\"],[9,\"href\",\"https://github.com/ember-learn/ember-cli-addon-docs/tree/gh-pages\"],[9,\"class\",\"docs-md__a\"],[7],[6,\"code\"],[7],[0,\"gh-pages\"],[8],[8],[0,\" branch you'll see that this is where versioned builds of your docs app are stored. Versions are created at deploy time and Addon Docs manages this branch of your repository for you.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"New versions are created when a new tag is released. There is also a \"],[6,\"code\"],[7],[0,\"master\"],[8],[0,\" version updated on every deployed commit, and a \"],[6,\"code\"],[7],[0,\"Latest\"],[8],[0,\" alias that points to the most recent tag, unless it is force-updated to point to \"],[6,\"code\"],[7],[0,\"master\"],[8],[0,\".\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"See the next section on \"],[1,[25,\"docs-link\",[\"deploy guides\",\"docs.deploying\"],null],false],[0,\" for more information about deploys.\"],[8],[0,\"\\n\\n      \"],[6,\"h2\"],[9,\"id\",\"hosting-on-github-pages\"],[9,\"class\",\"docs-md__h2\"],[7],[6,\"a\"],[9,\"href\",\"#hosting-on-github-pages\"],[9,\"class\",\"heading-anchor\"],[7],[0,\"Hosting on GitHub Pages\"],[8],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"Addon Docs is built for open-source addons deploying their docs sites to GitHub Pages. Once you have this set up, you can even automate deployment as part of your Travis CI builds.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"For more details, see the \"],[1,[25,\"docs-link\",[\"Deploying\",\"docs.deploying\"],null],false],[0,\" section of the guides.\"],[8],[0,\"\\n\\n      \"],[6,\"h2\"],[9,\"id\",\"miscellaneous\"],[9,\"class\",\"docs-md__h2\"],[7],[6,\"a\"],[9,\"href\",\"#miscellaneous\"],[9,\"class\",\"heading-anchor\"],[7],[0,\"Miscellaneous\"],[8],[8],[0,\"\\n    \"],[6,\"ul\"],[7],[0,\"\\n\"],[6,\"li\"],[7],[6,\"strong\"],[7],[0,\"Pods vs classic app layout.\"],[8],[0,\" You are free to use either classic or pods layout. This app is built using pods, in case you'd like to use it as a reference.\"],[8],[0,\"\\n\"],[8],[8]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/docs/patterns/template.hbs" } });
});
define("dummy/pods/docs/quickstart/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qWkx/6VT", "block": "{\"symbols\":[\"demo\",\"viewer\",\"nav\"],\"statements\":[[6,\"div\"],[9,\"class\",\"docs-md\"],[7],[6,\"h1\"],[9,\"id\",\"quickstart\"],[9,\"class\",\"docs-md__h1\"],[7],[0,\"Quickstart\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"This quickstart guide will get you started with a docs site for your brand new\\naddon. After completion you will have a docs homepage, a docs subpage named\\n\"],[6,\"code\"],[7],[0,\"usage\"],[8],[0,\", an automatically generated API reference and a nice looking\\nmarketing/demo page you can use to promote your addon.\"],[8],[0,\"\\n\"],[6,\"ol\"],[7],[0,\"\\n\"],[6,\"li\"],[7],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"Install Addon Docs.\"],[8],[8],[0,\"\\n\"],[6,\"pre\"],[9,\"class\",\"docs-md__code\"],[7],[6,\"code\"],[7],[0,\"ember install ember-\"],[6,\"span\"],[9,\"class\",\"hljs-keyword\"],[7],[0,\"cli\"],[8],[0,\"-addon-docs\"],[8],[8],[8],[0,\"\\n\"],[6,\"li\"],[7],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"Install an API doc plugin.\"],[8],[0,\" API docs are autogenerated from comments in your source code. Depending on which style you'll be using (\"],[6,\"a\"],[9,\"href\",\"https://esdoc.org/\"],[9,\"class\",\"docs-md__a\"],[7],[0,\"ESDoc\"],[8],[0,\" or \"],[6,\"a\"],[9,\"href\",\"http://yui.github.io/yuidoc/\"],[9,\"class\",\"docs-md__a\"],[7],[0,\"YUIDoc\"],[8],[0,\"), install the corresponding addon-docs plugin.\"],[8],[0,\"\\n\"],[6,\"pre\"],[9,\"class\",\"docs-md__code\"],[7],[6,\"code\"],[7],[6,\"span\"],[9,\"class\",\"hljs-comment\"],[7],[0,\"# ESDoc\"],[8],[0,\"\\nember \"],[6,\"span\"],[9,\"class\",\"hljs-keyword\"],[7],[0,\"install \"],[8],[0,\"ember-cli-\"],[6,\"span\"],[9,\"class\",\"hljs-keyword\"],[7],[0,\"addon-docs-esdoc\\n\"],[8],[0,\"\\n\"],[6,\"span\"],[9,\"class\",\"hljs-comment\"],[7],[0,\"# YUIDoc\"],[8],[0,\"\\nember \"],[6,\"span\"],[9,\"class\",\"hljs-keyword\"],[7],[0,\"install \"],[8],[0,\"ember-cli-\"],[6,\"span\"],[9,\"class\",\"hljs-keyword\"],[7],[0,\"addon-docs-yuidoc\"],[8],[8],[8],[8],[0,\"\\n\"],[6,\"li\"],[7],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"Add the docs routes.\"],[8],[0,\" Open \"],[6,\"code\"],[7],[0,\"tests/dummy/app/router.js\"],[8],[0,\" and replace the\\nstandard EmberRouter with the AddonDocsRouter:\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[4,\"docs-snippet\",null,[[\"name\",\"title\"],[\"quickstart-router.js\",\"tests/dummy/app/router.js\"]],{\"statements\":[[0,\"  import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';  import config from './config/environment';  const Router = AddonDocsRouter.extend({    location: config.locationType,    rootURL: config.rootURL,  });  Router.map(function() {    docsRoute(this, function() { /* Your docs routes go here */ });  });  export default Router; \"]],\"parameters\":[]},null],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"li\"],[7],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"Create your docs skeleton.\"],[8],[0,\" Create a new template for the \"],[6,\"code\"],[7],[0,\"docs\"],[8],[0,\" route\\nand make sure it contains the \"],[6,\"code\"],[7],[0,\"DocsViewer\"],[8],[0,\" component and navigation items for\\nall docs pages in your site.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[4,\"docs-snippet\",null,[[\"name\",\"title\"],[\"quickstart-skeleton.hbs\",\"tests/dummy/app/templates/docs.hbs\"]],{\"statements\":[[0,\"  \"],[4,\"docs-viewer\",null,null,{\"statements\":[[0,\"    \"],[4,\"component\",[[19,2,[\"nav\"]]],null,{\"statements\":[[0,\"  \"],[1,[25,\"component\",[[19,3,[\"item\"]],\"Introduction\",\"docs.index\"],null],false],[0,\"\\n \"],[1,[25,\"component\",[[19,3,[\"item\"]],\"Usage\",\"docs.usage\"],null],false],[0,\"    \"]],\"parameters\":[3]},null],[0,\"    \"],[4,\"component\",[[19,2,[\"main\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[9,\"class\",\"docs-container\"],[7],[0,\"\\n   \"],[6,\"div\"],[9,\"class\",\"docs-section\"],[7],[0,\"\\n     \"],[1,[18,\"outlet\"],false],[0,\"\\n   \"],[8],[0,\"\\n \"],[8],[0,\"    \"]],\"parameters\":[]},null],[0,\"  \"]],\"parameters\":[2]},null],[0,\" \"]],\"parameters\":[]},null],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"li\"],[7],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"Create your Markdown templates.\"],[8],[0,\" Markdown templates contain the actual\\ndocumentation for your addon and live in the folder\\n\"],[6,\"code\"],[7],[0,\"tests/dummy/app/templates/docs\"],[8],[0,\". Since Addon Docs supports Markdown out\\nof the box we will create two \"],[6,\"code\"],[7],[0,\".md\"],[8],[0,\" files (one for your docs \"],[6,\"code\"],[7],[0,\"index\"],[8],[0,\" and one\\nfor the \"],[6,\"code\"],[7],[0,\"usage\"],[8],[0,\" page).\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[4,\"docs-snippet\",null,[[\"name\",\"title\",\"language\"],[\"quickstart-markdown-index.md\",\"tests/dummy/app/templates/docs/index.md\",\"markdown\"]],{\"statements\":[[0,\" Introduction  This is my new addon, and it rocks! \"]],\"parameters\":[]},null],[8],[0,\"\\n\"],[6,\"p\"],[7],[4,\"docs-snippet\",null,[[\"name\",\"title\",\"language\"],[\"quickstart-markdown-subpage.md\",\"tests/dummy/app/templates/docs/usage.md\",\"markdown\"]],{\"statements\":[[0,\" Usage  So easy to use, sweet! \"]],\"parameters\":[]},null],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"li\"],[7],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"Create your marketing homepage\"],[8],[0,\". Addon Docs comes with a set of\\ncomponents that take out all the hard work normally required for creating\\ngood looking marketing/demo pages. Creating a template with the following\\ncomponents will instantly give your main page a header, a nice hero\\nand a snippet-ready demo container.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[4,\"docs-snippet\",null,[[\"name\",\"title\"],[\"quickstart-marketing-index.hbs\",\"tests/dummy/app/templates/index.hbs\"]],{\"statements\":[[0,\"  \"],[1,[18,\"docs-header\"],false],[0,\"  \"],[1,[25,\"docs-hero\",null,[[\"logo\",\"slimHeading\",\"strongHeading\",\"byline\"],[\"ember\",\"My\",\"Addon\",\"My addon demo/marketing page.\"]]],false],[0,\"  \"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"    \"],[4,\"component\",[[19,1,[\"example\"]]],[[\"name\"],[\"my-demo.hbs\"]],{\"statements\":[[0,\"  \"],[6,\"p\"],[7],[0,\"Make sure to read up on the DocsDemo component before building out this page.\"],[8],[0,\"    \"]],\"parameters\":[]},null],[0,\"  \"]],\"parameters\":[1]},null],[0,\" \"]],\"parameters\":[]},null],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"li\"],[7],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"Add a 404 route.\"],[8],[0,\" Add the following route to the end of your router and\\ncreate the associated template.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[4,\"docs-snippet\",null,[[\"name\",\"title\"],[\"quickstart-404.js\",\"tests/dummy/app/router.js\"]],{\"statements\":[[0,\"  this.route('not-found', { path: '/*path' }); \"]],\"parameters\":[]},null],[8],[0,\"\\n\"],[6,\"p\"],[7],[4,\"docs-snippet\",null,[[\"name\",\"title\"],[\"quickstart-404.hbs\",\"tests/dummy/app/templates/not-found.hbs\"]],{\"statements\":[[0,\"  \"],[6,\"div\"],[9,\"class\",\"docs-container\"],[7],[0,\"\\n   \"],[6,\"h1\"],[7],[0,\"Not found\"],[8],[0,\"\\n   \"],[6,\"p\"],[7],[0,\"This page doesn't exist. \"],[4,\"link-to\",[\"index\"],null,{\"statements\":[[0,\"Head home?\"]],\"parameters\":[]},null],[8],[0,\"\\n \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"li\"],[7],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"Launch your docs site\"],[8],[0,\". Run \"],[6,\"code\"],[7],[0,\"ember serve\"],[8],[0,\" and browse to\\n\"],[6,\"code\"],[7],[0,\"localhost:4200/docs\"],[8],[0,\" to enjoy your brand new documentation website.\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"li\"],[7],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"Create more pages.\"],[8],[0,\" To add more doc pages simply follow the same steps as\\nused for the \"],[6,\"code\"],[7],[0,\"Usage page in above examples\"],[8],[0,\":\"],[8],[0,\"\\n\"],[6,\"ul\"],[7],[0,\"\\n\"],[6,\"li\"],[7],[0,\"create a docs subroute\"],[8],[0,\"\\n\"],[6,\"li\"],[7],[0,\"add a corresponding navigation item to the \"],[6,\"code\"],[7],[0,\"docs\"],[8],[0,\" template\"],[8],[0,\"\\n\"],[6,\"li\"],[7],[0,\"create a corresponding Markdown template\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n      \"],[6,\"h2\"],[9,\"id\",\"optional-steps\"],[9,\"class\",\"docs-md__h2\"],[7],[6,\"a\"],[9,\"href\",\"#optional-steps\"],[9,\"class\",\"heading-anchor\"],[7],[0,\"Optional steps\"],[8],[8],[0,\"\\n    \"],[6,\"ol\"],[7],[0,\"\\n\"],[6,\"li\"],[7],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"Keyboard navigation.\"],[8],[0,\" You may want to enable keyboard navigation for your\\ndocs site by adding the \"],[6,\"code\"],[7],[0,\"DocsKeyboardShortcuts\"],[8],[0,\" component to your dummy\\napplication template. Once enabled you can use \"],[6,\"code\"],[7],[0,\"?\"],[8],[0,\" to show the navigation help\\nwindows.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[1,[25,\"docs-snippet\",null,[[\"name\",\"title\"],[\"docs-demo-application-template.hbs\",\"tests/dummy/app/templates/application.hbs\"]]],false],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"li\"],[7],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"Add a favicon.\"],[8],[0,\" You may want to place a favicon in the\\n\"],[6,\"code\"],[7],[0,\"tests/dummy/public\"],[8],[0,\" folder. We recommend using using\\n\"],[6,\"a\"],[9,\"href\",\"https://github.com/davewasmer/ember-cli-favicon\"],[9,\"class\",\"docs-md__a\"],[7],[0,\"Ember CLI Favicon\"],[8],[0,\".\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"li\"],[7],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"Better scrolling.\"],[8],[0,\" You may want to install\\n\"],[6,\"a\"],[9,\"href\",\"https://github.com/dollarshaveclub/ember-router-scroll\"],[9,\"class\",\"docs-md__a\"],[7],[0,\"Ember Router Scroll\"],[8],[0,\"\\nto enable \\\"scroll to top with preserved browser history scroll position\\\".\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[8],[8]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/docs/quickstart/template.hbs" } });
});
define("dummy/pods/docs/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "gLCsu4L1", "block": "{\"symbols\":[\"viewer\",\"nav\"],\"statements\":[[4,\"docs-viewer\",null,null,{\"statements\":[[4,\"component\",[[19,1,[\"nav\"]]],null,{\"statements\":[[0,\"    \"],[1,[25,\"component\",[[19,2,[\"section\"]],\"Introduction\"],null],false],[0,\"\\n    \"],[1,[25,\"component\",[[19,2,[\"item\"]],\"What is Addon Docs?\",\"docs.index\"],null],false],[0,\"\\n    \"],[1,[25,\"component\",[[19,2,[\"item\"]],\"Usage\",\"docs.usage\"],null],false],[0,\"\\n    \"],[1,[25,\"component\",[[19,2,[\"item\"]],\"Quickstart\",\"docs.quickstart\"],null],false],[0,\"\\n    \"],[1,[25,\"component\",[[19,2,[\"item\"]],\"Patterns\",\"docs.patterns\"],null],false],[0,\"\\n    \"],[1,[25,\"component\",[[19,2,[\"item\"]],\"Deploying\",\"docs.deploying\"],null],false],[0,\"\\n\\n    \"],[1,[25,\"component\",[[19,2,[\"section\"]],\"Components\"],null],false],[0,\"\\n    \"],[1,[25,\"component\",[[19,2,[\"item\"]],\"Hero\",\"docs.components.docs-hero\"],null],false],[0,\"\\n    \"],[1,[25,\"component\",[[19,2,[\"item\"]],\"Logo\",\"docs.components.docs-logo\"],null],false],[0,\"\\n    \"],[1,[25,\"component\",[[19,2,[\"item\"]],\"Header\",\"docs.components.docs-header\"],null],false],[0,\"\\n    \"],[1,[25,\"component\",[[19,2,[\"item\"]],\"Snippet\",\"docs.components.docs-snippet\"],null],false],[0,\"\\n    \"],[1,[25,\"component\",[[19,2,[\"item\"]],\"Viewer\",\"docs.components.docs-viewer\"],null],false],[0,\"\\n    \"],[1,[25,\"component\",[[19,2,[\"item\"]],\"Demo\",\"docs.components.docs-demo\"],null],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n\"],[4,\"component\",[[19,1,[\"main\"]]],null,{\"statements\":[[0,\"    \"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/docs/template.hbs" } });
});
define("dummy/pods/docs/usage/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "UkbDEcOQ", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"docs-md\"],[7],[6,\"h1\"],[9,\"id\",\"usage\"],[9,\"class\",\"docs-md__h1\"],[7],[0,\"Usage\"],[8],[0,\"\\n    \\n      \"],[6,\"h2\"],[9,\"id\",\"requirements\"],[9,\"class\",\"docs-md__h2\"],[7],[6,\"a\"],[9,\"href\",\"#requirements\"],[9,\"class\",\"heading-anchor\"],[7],[0,\"Requirements\"],[8],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"To use Addon Docs, your addon must have a \"],[6,\"code\"],[7],[0,\"devDependency\"],[8],[0,\" of \"],[6,\"strong\"],[7],[0,\"Ember v2.8\"],[8],[0,\" or higher.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"Note that your addon can still support older versions of Ember – it's just that you won't be able to run your Addon Docs documentation site against those older versions. (This means you also cannot write acceptance/application tests against your docs sites on older versions of Ember.)\"],[8],[0,\"\\n\\n      \"],[6,\"h2\"],[9,\"id\",\"installation\"],[9,\"class\",\"docs-md__h2\"],[7],[6,\"a\"],[9,\"href\",\"#installation\"],[9,\"class\",\"heading-anchor\"],[7],[0,\"Installation\"],[8],[8],[0,\"\\n    \"],[6,\"pre\"],[9,\"class\",\"docs-md__code\"],[7],[6,\"code\"],[9,\"class\",\"undefinedsh\"],[7],[0,\"ember install ember-cli-addon-docs\"],[8],[8],[0,\"\\n\"],[2,\" ## New addons\\n\\n\\n## Existing addons \"],[8]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/docs/usage/template.hbs" } });
});
define("dummy/pods/index/index-content/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "VeiFl9Kd", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"docs-md\"],[7],[6,\"h2\"],[9,\"class\",\"docs-flex docs-items-center docs-mt-8 docs-h2\"],[7],[0,\"\\n  \"],[1,[25,\"svg-jar\",[\"logo-horizontal\"],[[\"width\",\"height\",\"class\"],[40,16,\"mr-2\"]]],false],[0,\"\\n  Motivation\\n\"],[8],[0,\"\\n\\n\"],[6,\"aside\"],[7],[0,\"Looking for the quickstart? \"],[1,[25,\"docs-link\",[\"Click here\",\"docs.quickstart\"],null],false],[0,\".\"],[8],[0,\"\\n\\n\"],[6,\"p\"],[7],[0,\"Documenting software libraries has gotten easier. We have nicely-formatted README.md files, the ability to host custom sites for free on GitHub Pages, and even dedicated tools like \"],[6,\"a\"],[9,\"href\",\"https://www.gitbook.com/\"],[9,\"class\",\"docs-md__a\"],[7],[0,\"GitBook\"],[8],[0,\" and \"],[6,\"a\"],[9,\"href\",\"https://readthedocs.org/\"],[9,\"class\",\"docs-md__a\"],[7],[0,\"ReadTheDocs\"],[8],[0,\". But even though these tools have come a long way, modern developers have high expectations, and library authors can quickly find themselves juggling more tasks than they can manage.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"Ember addons occupy a unique space here. Besides everything that's expected of any modern JavaScript library, there's even more that goes into authoring a library that plays nicely with an ecosystem as mature as Ember's. And too often addon authors with limited time must choose between being a better community citizen, or focusing on the core problem their library was created to solve in the first place.\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"These days, a well-maintained Ember addon should\"],[8],[0,\"\\n\"],[6,\"ul\"],[7],[0,\"\\n\"],[6,\"li\"],[7],[6,\"strong\"],[7],[0,\"Provide interactive demos of their components\"],[8],[0,\" in the context of an Ember app\"],[8],[0,\"\\n\"],[6,\"li\"],[7],[6,\"strong\"],[7],[0,\"Show current \"],[6,\"em\"],[7],[0,\"and versioned\"],[8],[0,\" guides,\"],[8],[0,\" ideally whose content is verified by automated tests\"],[8],[0,\"\\n\"],[6,\"li\"],[7],[6,\"strong\"],[7],[0,\"Show current \"],[6,\"em\"],[7],[0,\"and versioned\"],[8],[0,\" API documentation\"],[8],[0,\" derived from structured comments in source code\"],[8],[0,\"\\n\"],[6,\"li\"],[7],[6,\"strong\"],[7],[0,\"Have excellent test coverage\"],[8],[0,\" across a matrix of Ember and Ember CLI versions\"],[8],[0,\"\\n\"],[6,\"li\"],[7],[6,\"strong\"],[7],[0,\"Make it easy for contributors to correct documentation errors\"],[8],[0,\" in addition to submitting code fixes\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"Looking at the available tools for authoring docs, none proved satisfactory for all these needs. This is why addons deserve their own solution.\"],[8],[8]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/index/index-content/template.hbs" } });
});
define("dummy/pods/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Clj/C2kn", "block": "{\"symbols\":[],\"statements\":[[1,[25,\"docs-hero\",null,[[\"logo\",\"slimHeading\",\"strongHeading\",\"byline\"],[\"ember-cli\",\"Addon\",\"Docs\",\"Easy, beautiful docs for your Ember addon\"]]],false],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"docs-container docs-md\"],[7],[0,\"\\n  \"],[6,\"section\"],[9,\"class\",\"docs-max-w-md docs-mx-auto docs-pb-8\"],[7],[0,\"\\n    \"],[1,[18,\"index/index-content\"],false],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"docs-my-16 docs-text-right\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"docs\"],[[\"class\"],[\"docs-bg-grey-darkest hover:docs-bg-black docs-text-white docs-py-2 docs-px-4 docs-no-underline docs-rounded\"]],{\"statements\":[[0,\"        Read the docs →\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/index/template.hbs" } });
});
define("dummy/pods/not-found/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qANhqR2q", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"docs-container\"],[7],[0,\"\\n  \"],[6,\"h1\"],[7],[0,\"Not found\"],[8],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"This page doesn't exist. \"],[4,\"link-to\",[\"index\"],null,{\"statements\":[[0,\"Head home?\"]],\"parameters\":[]},null],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/not-found/template.hbs" } });
});
define('dummy/pods/sandbox/api/item/route', ['exports', 'ember-cli-addon-docs/routes/docs/api/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define("dummy/pods/sandbox/api/item/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "8PY+aS+K", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[20,[\"model\",\"isComponent\"]]],null,{\"statements\":[[0,\"  \"],[1,[25,\"api/x-component\",null,[[\"component\"],[[20,[\"model\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[20,[\"model\",\"isClass\"]]],null,{\"statements\":[[0,\"  \"],[1,[25,\"api/x-class\",null,[[\"class\"],[[20,[\"model\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[1,[25,\"api/x-module\",null,[[\"module\"],[[20,[\"model\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/sandbox/api/item/template.hbs" } });
});
define("dummy/pods/sandbox/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "dGJzcbqv", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"docs-md\"],[7],[6,\"h1\"],[9,\"id\",\"welcome\"],[9,\"class\",\"docs-md__h1\"],[7],[0,\"Welcome\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"Welcome to the Ember CLI Addon Docs Sandbox!\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"This area of the site demonstrates the many different ways you can document your addon code.\"],[8],[0,\"\\n\\n      \"],[6,\"h2\"],[9,\"id\",\"subsection\"],[9,\"class\",\"docs-md__h2\"],[7],[6,\"a\"],[9,\"href\",\"#subsection\"],[9,\"class\",\"heading-anchor\"],[7],[0,\"Subsection\"],[8],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"This is a subsection\"],[8],[0,\"\\n\\n      \"],[6,\"h3\"],[9,\"id\",\"sub-subsection\"],[9,\"class\",\"docs-md__h3\"],[7],[6,\"a\"],[9,\"href\",\"#sub-subsection\"],[9,\"class\",\"heading-anchor\"],[7],[0,\"Sub-subsection\"],[8],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"This is a sub-subsection\"],[8],[8]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/sandbox/index/template.hbs" } });
});
define('dummy/pods/sandbox/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({

    model() {
      return this.store.findRecord('project', 'sandbox');
    }

  });
});
define("dummy/pods/sandbox/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "tilW+I1I", "block": "{\"symbols\":[\"viewer\",\"nav\"],\"statements\":[[4,\"docs-viewer\",null,null,{\"statements\":[[4,\"component\",[[19,1,[\"nav\"]]],[[\"project\",\"root\"],[[20,[\"model\"]],\"sandbox\"]],{\"statements\":[[0,\"    \"],[1,[25,\"component\",[[19,2,[\"section\"]],\"The Sandbox\"],null],false],[0,\"\\n    \"],[1,[25,\"component\",[[19,2,[\"item\"]],\"Welcome\",\"sandbox.index\"],null],false],[0,\"\\n    \"],[1,[25,\"component\",[[19,2,[\"item\"]],\"One\",\"sandbox.docs.one\"],null],false],[0,\"\\n    \"],[1,[25,\"component\",[[19,2,[\"item\"]],\"Two\",\"sandbox.docs.two\"],null],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n\"],[4,\"component\",[[19,1,[\"main\"]]],null,{\"statements\":[[0,\"    \"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/sandbox/template.hbs" } });
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('dummy/router', ['exports', 'ember-cli-addon-docs/router', 'dummy/config/environment'], function (exports, _router, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = _router.default.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {

    (0, _router.docsRoute)(this, function () {
      this.route('usage');
      this.route('quickstart');
      this.route('patterns');
      this.route('deploying');

      this.route('components', function () {
        this.route('docs-hero');
        this.route('docs-logo');
        this.route('docs-header');
        this.route('docs-snippet');
        this.route('docs-viewer');
        this.route('docs-demo');
      });
    });

    this.route('sandbox', function () {
      (0, _router.apiRoute)(this);
      (0, _router.docsRoute)(this, function () {
        this.route('one', function () {
          this.route('child');
        });
        this.route('two');
      });
    });

    this.route('not-found', { path: '/*path' });
  });

  exports.default = Router;
});
define('dummy/routes/docs', ['exports', 'ember-cli-addon-docs/routes/docs'], function (exports, _docs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _docs.default;
    }
  });
});
define('dummy/routes/docs/api/item', ['exports', 'ember-cli-addon-docs/routes/docs/api/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('dummy/sandbox/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app/components/esdoc-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/esdoc-component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/simple-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/simple-list/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/simple-list/item/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/simple-list/item/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/yuidoc-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/yuidoc-component.js should pass ESLint\n\n');
  });

  QUnit.test('app/helpers/esdoc-class-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/esdoc-class-helper.js should pass ESLint\n\n');
  });

  QUnit.test('app/helpers/esdoc-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/esdoc-helper.js should pass ESLint\n\n');
  });

  QUnit.test('app/helpers/yuidoc-class-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/yuidoc-class-helper.js should pass ESLint\n\n');
  });

  QUnit.test('app/helpers/yuidoc-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/yuidoc-helper.js should pass ESLint\n\n');
  });

  QUnit.test('app/utils/esdoc-module.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/esdoc-module.js should pass ESLint\n\n');
  });

  QUnit.test('app/utils/yuidoc-module.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/yuidoc-module.js should pass ESLint\n\n');
  });
});
define('dummy/serializers/-addon-docs', ['exports', 'ember-cli-addon-docs/serializers/-addon-docs'], function (exports, _addonDocs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _addonDocs.default;
    }
  });
});
define('dummy/services/adapter', ['exports', 'ember-fetch-adapter'], function (exports, _emberFetchAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberFetchAdapter.default;
    }
  });
});
define('dummy/services/docs-fetch', ['exports', 'ember-cli-addon-docs/services/docs-fetch'], function (exports, _docsFetch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _docsFetch.default;
    }
  });
});
define('dummy/services/docs-routes', ['exports', 'ember-cli-addon-docs/services/docs-routes'], function (exports, _docsRoutes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _docsRoutes.default;
    }
  });
});
define('dummy/services/docs-search', ['exports', 'ember-cli-addon-docs/services/docs-search'], function (exports, _docsSearch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _docsSearch.default;
    }
  });
});
define('dummy/services/etw-tailwind-styleguide', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({
    // body
  });
});
define('dummy/services/keyboard', ['exports', 'ember-keyboard/services/keyboard'], function (exports, _keyboard) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _keyboard.default;
    }
  });
});
define("dummy/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (exports, _transitionMap) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _transitionMap.default;
});
define('dummy/services/media', ['exports', 'ember-responsive/services/media'], function (exports, _media) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _media.default;
});
define('dummy/services/modal-dialog', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const { computed, Service } = Ember;

  function computedFromConfig(prop) {
    return computed(function () {
      return _environment.default['ember-modal-dialog'] && _environment.default['ember-modal-dialog'][prop];
    });
  }

  exports.default = Service.extend({
    hasEmberTether: computedFromConfig('hasEmberTether'),
    hasLiquidWormhole: computedFromConfig('hasLiquidWormhole'),
    hasLiquidTether: computedFromConfig('hasLiquidTether'),
    destinationElementId: computed(function () {
      /*
        everywhere except test, this property will be overwritten
        by the initializer that appends the modal container div
        to the DOM. because initializers don't run in unit/integration
        tests, this is a nice fallback.
      */
      if (_environment.default.environment === 'test') {
        return 'ember-testing';
      }
    })
  });
});
define('dummy/services/project-version', ['exports', 'ember-cli-addon-docs/services/project-version'], function (exports, _projectVersion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _projectVersion.default;
    }
  });
});
define('dummy/services/router-scroll', ['exports', 'ember-router-scroll/services/router-scroll'], function (exports, _routerScroll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _routerScroll.default;
    }
  });
});
define("dummy/snippets", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "docs-demo-application-template.hbs": "  {{outlet}}\n\n  {{docs-keyboard-shortcuts}}",
    "docs-demo-basic-src.hbs": "{{#docs-demo as |demo|}}\n  {{#demo.example name='docs-demo-basic.hbs'}}\n    <p>I am a <strong>handlebars</strong> template!</p>\n    <p>The value is: {{val}}</p>\n    <div>\n      {{input value=val class='border'}}\n    </div>\n  {{/demo.example}}\n\n  {{demo.snippet 'docs-demo-basic.hbs'}}\n{{/docs-demo}}",
    "docs-demo-basic.hbs": "    <p>I am a <strong>handlebars</strong> template!</p>\n    <p>The value is: {{val}}</p>\n    <div>\n      {{input value=val class='border'}}\n    </div>",
    "docs-demo-custom-src.hbs": "{{#docs-demo as |demo|}}\n  {{#demo.example name='docs-demo-custom.md'}}\n    <pre>\n    # Markdown\n    - Has syntax highlighting, too\n    </pre>\n  {{/demo.example}}\n\n  {{demo.snippet 'docs-demo-custom-src.hbs' label='Source'}}\n  {{demo.snippet 'docs-demo-custom.md' label='My Custom Label' language='markdown'}}\n{{/docs-demo}}",
    "docs-demo-custom.md": "    <pre>\n    # Markdown\n    - Has syntax highlighting, too\n    </pre>",
    "docs-demo-multiple.hbs": "    <button onclick={{action 'toggleIsShowing'}} class='docs-btn'>\n      Press me!\n    </button>\n\n    <p class='mt-4'>\n      {{#if isShowing}}\n        Yep\n      {{else}}\n        Nope\n      {{/if}}\n    </p>",
    "docs-demo-multiple.js": "    toggleIsShowing() {\n      this.toggleProperty('isShowing');\n    }",
    "docs-header-custom-logo.hbs": "    {{#docs-header githubUrl='https://github.com/ember-learn/ember-cli-addon-docs' as |header|}}\n      {{#header.link 'index'}}\n        Another route\n      {{/header.link}}\n    {{/docs-header}}",
    "docs-header.hbs": "    {{docs-header}}",
    "docs-hero.hbs": "    {{docs-hero\n      logo='ember'\n      slimHeading='Super'\n      strongHeading='Addon'\n      byline='The best addon ever. Now playing in theaters.'}}",
    "docs-logo-ember-cli-styles.scss": ".my-ember-cli-addon-logo {\n  background: #F44336;\n  color: white;\n  width: 50%;\n  height: 50%;\n  margin: 0 auto;\n  padding: 20px;\n}",
    "docs-logo-ember-cli.hbs": "    <div class='my-ember-cli-addon-logo'>\n      {{docs-logo logo='ember-cli'}}\n    </div>",
    "docs-logo-ember-data-styles.scss": ".my-ember-data-addon-logo {\n  background: #2196F3;\n  color: white;\n  width: 50%;\n  height: 50%;\n  margin: 0 auto;\n  padding: 20px;\n}",
    "docs-logo-ember-data.hbs": "    <div class='my-ember-data-addon-logo'>\n      {{docs-logo logo='ember-data'}}\n    </div>",
    "docs-logo-ember-styles.scss": ".my-ember-addon-logo {\n  background: #333;\n  color: white;\n  width: 50%;\n  height: 50%;\n  margin: 0 auto;\n  padding: 20px;\n}",
    "docs-logo-ember.hbs": "    <div class='my-ember-addon-logo'>\n      {{docs-logo}}\n    </div>",
    "docs-snippet-title-example.js": "    import Component from '@ember/component';\n    export default Component.extend({\n      // ...\n    });",
    "docs-snippet.hbs": "    <div id='foo'>\n      {{#my-awesome-thing\n        some=true\n        options=false}}\n        <p>Something old, something new</p>\n      {{/my-awesome-thing}}\n    </div>",
    "docs-viewer.hbs": "{{#docs-viewer as |viewer|}}\n  {{#viewer.nav as |nav|}}\n    {{nav.section 'Introduction'}}\n    {{nav.item 'What is Addon Docs?' 'docs.index'}}\n    {{nav.item 'Usage' 'docs.usage'}}\n    {{nav.item 'Quickstart' 'docs.quickstart'}}\n    {{nav.item 'Patterns' 'docs.patterns'}}\n    {{nav.item 'Deploying' 'docs.deploying'}}\n\n    {{nav.section 'Components'}}\n    {{nav.item 'Hero' 'docs.components.docs-hero'}}\n    {{nav.item 'Logo' 'docs.components.docs-logo'}}\n    {{nav.item 'Header' 'docs.components.docs-header'}}\n    {{nav.item 'Snippet' 'docs.components.docs-snippet'}}\n    {{nav.item 'Viewer' 'docs.components.docs-viewer'}}\n    {{nav.item 'Demo' 'docs.components.docs-demo'}}\n  {{/viewer.nav}}\n\n  {{#viewer.main}}\n    {{outlet}}\n  {{/viewer.main}}\n\n{{/docs-viewer}}",
    "my-demo.hbs": "        <p>Make sure to read up on the DocsDemo component before building out this page.</p>",
    "my-snippet-src.hbs": "    // BEGIN-SNIPPET my-snippet.js\n    App = Ember.Application.extend({\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix,\n      Resolver\n    });\n    // END-SNIPPET",
    "my-snippet-src2.hbs": "    {{docs-snippet name='my-snippet.js'}}",
    "my-snippet.js": "    App = Ember.Application.extend({\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix,\n      Resolver\n    });",
    "quickstart-404.hbs": "    <div class=\"docs-container\">\n      <h1>Not found</h1>\n      <p>This page doesn't exist. {{#link-to 'index'}}Head home?{{/link-to}}</p>\n    </div>",
    "quickstart-404.js": "    this.route('not-found', { path: '/*path' });",
    "quickstart-markdown-index.md": "    # Introduction\n\n    This is my new addon, and it rocks!",
    "quickstart-markdown-subpage.md": "    # Usage\n\n    So easy to use, sweet!",
    "quickstart-marketing-index.hbs": "    {{docs-header}}\n\n    {{docs-hero\n      logo='ember'\n      slimHeading='My'\n      strongHeading='Addon'\n      byline='My addon demo/marketing page.'}}\n\n    {{#docs-demo as |demo|}}\n      {{#demo.example name='my-demo.hbs'}}\n        <p>Make sure to read up on the DocsDemo component before building out this page.</p>\n      {{/demo.example}}\n    {{/docs-demo}}",
    "quickstart-router.js": "    import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';\n    import config from './config/environment';\n\n    const Router = AddonDocsRouter.extend({\n      location: config.locationType,\n      rootURL: config.rootURL,\n    });\n\n    Router.map(function() {\n      docsRoute(this, function() { /* Your docs routes go here */ });\n    });\n\n    export default Router;",
    "quickstart-skeleton.hbs": "    {{#docs-viewer as |viewer|}}\n\n      {{#viewer.nav as |nav|}}\n        {{nav.item 'Introduction' 'docs.index'}}\n        {{nav.item 'Usage' 'docs.usage'}}\n      {{/viewer.nav}}\n\n      {{#viewer.main}}\n        <div class=\"docs-container\">\n          <div class=\"docs-section\">\n            {{outlet}}\n          </div>\n        </div>\n      {{/viewer.main}}\n\n    {{/docs-viewer}}",
    "sample-snippet.js": "const App = Application.extend({\n  modulePrefix: config.modulePrefix,\n  podModulePrefix: config.podModulePrefix,\n  Resolver\n});"
  };
});
define("dummy/templates/application-tailwind", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "pPrsSd2W", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"etw-px-4 etw-my-8 etw-max-w-3xl etw-mx-auto etw-font-sans\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"etw-flex etw-mt-6\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"etw-w-3/4 etw-pr-6\"],[7],[0,\"\\n      \"],[6,\"h1\"],[9,\"class\",\"etw-pt-8 etw-text-3xl etw-font-bold\"],[7],[0,\"Your Tailwind styles\"],[8],[0,\"\\n      \"],[6,\"p\"],[9,\"class\",\"etw-mt-3 etw-mb-4 etw-text-lg\"],[7],[0,\"A reference for every generated class in your app.\"],[8],[0,\"\\n\\n      \"],[1,[25,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Border radius\",[25,\"array\",[\".rounded{-side?}{-size?}\"],null],[20,[\"moduleStyles\",\"borderRadius\"]]]]],false],[0,\"\\n\\n      \"],[1,[25,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Borders\",[25,\"array\",[\".border{-side?}{-width?}\"],null],[20,[\"moduleStyles\",\"borderWidths\"]]]]],false],[0,\"\\n\\n      \"],[1,[25,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Colors\",[25,\"array\",[\".text-{color}\",\".bg-{color}\",\".border-{color}\"],null],[20,[\"moduleStyles\",\"colors\"]]]]],false],[0,\"\\n\\n      \"],[1,[25,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Font weights\",[25,\"array\",[\".font-{weight}\"],null],[20,[\"moduleStyles\",\"fontWeights\"]]]]],false],[0,\"\\n\\n      \"],[1,[25,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Height\",[25,\"array\",[\".h-{size}\"],null],[20,[\"moduleStyles\",\"height\"]]]]],false],[0,\"\\n\\n      \"],[1,[25,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Letter spacing\",[25,\"array\",[\".tracking-{size}\"],null],[20,[\"moduleStyles\",\"letterSpacing\"]]]]],false],[0,\"\\n\\n      \"],[1,[25,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Line height\",[25,\"array\",[\".leading-{size}\"],null],[20,[\"moduleStyles\",\"lineHeight\"]]]]],false],[0,\"\\n\\n      \"],[1,[25,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Margin\",[25,\"array\",[\".m{side?}-{size}\"],null],[20,[\"moduleStyles\",\"margin\"]]]]],false],[0,\"\\n\\n      \"],[1,[25,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Max height\",[25,\"array\",[\".max-h-{size}\"],null],[20,[\"moduleStyles\",\"maxHeight\"]]]]],false],[0,\"\\n\\n      \"],[1,[25,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Max width\",[25,\"array\",[\".max-w-{size}\"],null],[20,[\"moduleStyles\",\"maxWidth\"]]]]],false],[0,\"\\n\\n      \"],[1,[25,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Min height\",[25,\"array\",[\".min-h-{size}\"],null],[20,[\"moduleStyles\",\"minHeight\"]]]]],false],[0,\"\\n\\n      \"],[1,[25,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Min width\",[25,\"array\",[\".min-w-{size}\"],null],[20,[\"moduleStyles\",\"minWidth\"]]]]],false],[0,\"\\n\\n      \"],[1,[25,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Negative margin\",[25,\"array\",[\".-m{side?}-{size}\"],null],[20,[\"moduleStyles\",\"negativeMargin\"]]]]],false],[0,\"\\n\\n      \"],[1,[25,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Opacity\",[25,\"array\",[\".opacity-{name}\"],null],[20,[\"moduleStyles\",\"opacity\"]]]]],false],[0,\"\\n\\n      \"],[1,[25,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Padding\",[25,\"array\",[\".p{side?}-{size}\"],null],[20,[\"moduleStyles\",\"padding\"]]]]],false],[0,\"\\n\\n      \"],[1,[25,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Shadows\",[25,\"array\",[\".shadow-{size?}\"],null],[20,[\"moduleStyles\",\"shadows\"]]]]],false],[0,\"\\n\\n      \"],[1,[25,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"SVG fill\",[25,\"array\",[\".fill-{name}\"],null],[20,[\"moduleStyles\",\"svgFill\"]]]]],false],[0,\"\\n\\n      \"],[1,[25,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"SVG stroke\",[25,\"array\",[\".stroke-{name}\"],null],[20,[\"moduleStyles\",\"svgStroke\"]]]]],false],[0,\"\\n\\n      \"],[1,[25,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Text sizes\",[25,\"array\",[\".text-{size}\"],null],[20,[\"moduleStyles\",\"textSizes\"]]]]],false],[0,\"\\n\\n      \"],[1,[25,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Width\",[25,\"array\",[\".w-{size}\"],null],[20,[\"moduleStyles\",\"width\"]]]]],false],[0,\"\\n\\n      \"],[1,[25,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Z index\",[25,\"array\",[\".z-{index}\"],null],[20,[\"moduleStyles\",\"zIndex\"]]]]],false],[0,\"\\n\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"etw-w-1/4 etw-relative\"],[7],[0,\"\\n      \"],[1,[18,\"etw/module-style-detail\"],false],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/application-tailwind.hbs" } });
});
define("dummy/templates/components/code-snippet", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "I3g5LP0b", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"source\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/code-snippet.hbs" } });
});
define("dummy/templates/components/etw/module-section", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "uimenKkW", "block": "{\"symbols\":[\"moduleStyle\",\"snippet\"],\"statements\":[[6,\"section\"],[7],[0,\"\\n  \"],[6,\"h2\"],[9,\"class\",\"etw-pt-8 etw-mb-6 etw-text-lg etw-font-bold\"],[7],[1,[18,\"title\"],false],[8],[0,\"\\n\\n  \"],[6,\"ul\"],[9,\"class\",\"etw-list-reset etw-leading-normal\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"codeSnippets\"]]],null,{\"statements\":[[0,\"      \"],[6,\"li\"],[7],[6,\"code\"],[7],[1,[19,2,[]],false],[8],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"  \"],[8],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"etw-mt-8 etw-flex etw-flex-wrap\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"moduleStyles\"]]],null,{\"statements\":[[0,\"      \"],[1,[25,\"etw/module-style-example\",null,[[\"moduleStyle\"],[[19,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/etw/module-section.hbs" } });
});
define("dummy/templates/components/etw/module-style-detail", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "vI47bHP/", "block": "{\"symbols\":[\"style\",\"state\",\"breakpoint\"],\"statements\":[[6,\"div\"],[9,\"class\",\"etw-shadow-lg etw-fixed etw-mr-4 etw-px-4 etw-pt-4 etw-pb-14 etw-bg-white etw-w-64 etw-mt-8 overflow-y-auto etw-h-screen\"],[7],[0,\"\\n  \"],[6,\"h3\"],[7],[0,\"Detail\"],[8],[0,\"\\n\\n\"],[4,\"if\",[[20,[\"moduleStyle\"]]],null,{\"statements\":[[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"etw-my-8\"],[7],[0,\"\\n      \"],[1,[25,\"etw/module-style-example\",null,[[\"moduleStyle\"],[[20,[\"moduleStyle\"]]]]],false],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"etw-mt-4\"],[7],[0,\"\\n      \"],[6,\"h4\"],[9,\"class\",\"etw-inline-block etw-pr-2\"],[7],[0,\"Responsive: \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"etw-mt-2 etw-text-sm etw-inline-block\"],[7],[0,\"\\n\"],[4,\"each\",[[25,\"array\",[\"all\",\"sm\",\"md\",\"lg\",\"xl\"],null]],null,{\"statements\":[[0,\"          \"],[6,\"a\"],[9,\"href\",\"#\"],[10,\"class\",[26,[\"\\n              etw-no-underline\\n              etw-text-black\\n              etw-pr-2\\n              \",[25,\"if\",[[25,\"eq\",[[20,[\"activeResponsiveClass\"]],[19,3,[]]],null],\"etw-opacity-100\",\"etw-opacity-25\"],null],\"\\n            \"]]],[3,\"action\",[[19,0,[]],[25,\"mut\",[[20,[\"activeResponsiveClass\"]]],null],[19,3,[]]]],[7],[0,\"\\n            \"],[1,[19,3,[]],false],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"etw-mt-4\"],[7],[0,\"\\n      \"],[6,\"h4\"],[9,\"class\",\"etw-inline-block etw-pr-2\"],[7],[0,\"State: \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"etw-mt-2 etw-text-sm etw-inline-block\"],[7],[0,\"\\n\"],[4,\"each\",[[25,\"array\",[\"none\",\"hover\",\"focus\"],null]],null,{\"statements\":[[0,\"          \"],[6,\"a\"],[9,\"href\",\"#\"],[10,\"class\",[26,[\"\\n              etw-no-underline\\n              etw-text-black\\n              etw-pr-2\\n              \",[25,\"if\",[[25,\"eq\",[[20,[\"activeState\"]],[19,2,[]]],null],\"etw-opacity-100\",\"etw-opacity-25\"],null],\"\\n            \"]]],[3,\"action\",[[19,0,[]],[25,\"mut\",[[20,[\"activeState\"]]],null],[19,2,[]]]],[7],[0,\"\\n            \"],[1,[19,2,[]],false],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"etw-mt-8 etw-mb-4\"],[7],[0,\"\\n      \"],[6,\"p\"],[9,\"class\",\"etw-text-right etw-text-xs etw-opacity-50\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"highlightedStyle\"]]],null,{\"statements\":[[0,\"          Copied!\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          Click to copy\\n\"]],\"parameters\":[]}],[0,\"      \"],[8],[0,\"\\n\\n      \"],[6,\"ul\"],[9,\"class\",\"etw-mt-3 etw-list-reset\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"detailStyles\"]]],null,{\"statements\":[[0,\"          \"],[6,\"li\"],[9,\"class\",\"etw-mt-4\"],[7],[0,\"\\n\"],[4,\"copy-button\",null,[[\"class\",\"clipboardText\",\"title\",\"success\"],[[25,\"concat\",[\"etw-bg-grey-light etw-opacity-75 hover:etw-opacity-100 \",\"etw-px-1 etw-py-2 etw-w-full etw-text-left etw-transition \",[25,\"if\",[[25,\"eq\",[[20,[\"highlightedStyle\"]],[19,1,[]]],null],\"etw-bg-green etw-text-white\"],null]],null],[19,1,[]],\"Copy\",[25,\"action\",[[19,0,[]],\"highlightStyle\",[19,1,[]]],null]]],{\"statements\":[[0,\"              \"],[6,\"code\"],[7],[0,\".\"],[1,[19,1,[]],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\n    \"],[6,\"p\"],[9,\"class\",\"etw-mt-4 etw-text-grey etw-italic\"],[7],[0,\"Select a module for more detail.\"],[8],[0,\"\\n\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/etw/module-style-detail.hbs" } });
});
define("dummy/templates/components/etw/module-style-example", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mJ8qY+Q5", "block": "{\"symbols\":[],\"statements\":[[6,\"a\"],[9,\"class\",\"etw-mb-8 etw-w-1/5 etw-p-2\"],[3,\"action\",[[19,0,[]],\"selectModuleStyle\"]],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"etw-text-center etw-m-4 etw-text-sm \"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"etw-text-center etw-m-4 etw-text-sm \"],[7],[0,\"\\n\\n\"],[4,\"if\",[[25,\"eq\",[[20,[\"moduleStyle\",\"module\"]],\"border-radius\"],null]],null,{\"statements\":[[0,\"\\n        \"],[6,\"div\"],[10,\"class\",[26,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-border\\n          etw-border-solid etw-border-grey\\n          etw-bg-grey-lighter\\n          \",[20,[\"classesForModuleStyle\",\"0\"]],\"\\n        \"]]],[7],[8],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"moduleStyle\",\"module\"]],\"border-widths\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",[26,[\"\\n          etw-mx-auto etw-w-24 etw-h-24\\n          etw-border-red etw-bg-grey-lighter etw-border-solid\\n          \",[20,[\"classesForModuleStyle\",\"0\"]],\"\\n        \"]]],[7],[8],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"moduleStyle\",\"module\"]],\"colors\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",[26,[\"etw-marginx-auto etw-w-full etw-h-24 bg-\",[20,[\"moduleStyle\",\"name\"]]]]],[7],[8],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"moduleStyle\",\"module\"]],\"font-weights\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"p\"],[10,\"class\",[26,[\"font-\",[20,[\"moduleStyle\",\"name\"]]]]],[7],[0,\"\\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit.\\n        \"],[8],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"moduleStyle\",\"module\"]],\"height\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",[26,[\"\\n          etw-mx-auto etw-w-24 etw-h-24\\n          etw-border etw-border-solid etw-border-grey\\n          etw-bg-grey-lighter\\n          \",[20,[\"classesForModuleStyle\",\"0\"]],\"\\n        \"]]],[7],[8],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"moduleStyle\",\"module\"]],\"letter-spacing\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"p\"],[10,\"class\",[26,[\"text-left tracking-\",[20,[\"moduleStyle\",\"name\"]]]]],[7],[0,\"\\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\\n        \"],[8],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"moduleStyle\",\"module\"]],\"line-height\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"p\"],[10,\"class\",[26,[\"text-left leading-\",[20,[\"moduleStyle\",\"name\"]]]]],[7],[0,\"\\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\\n        \"],[8],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"moduleStyle\",\"module\"]],\"margin\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",[26,[\"etw-bg-red etw-w-24 etw-mx-auto etw-border-t etw-border-solid \",[25,\"if\",[[25,\"eq\",[[20,[\"moduleStyle\",\"name\"]],\"auto\"],null],\"\",\"etw-border-transparent\"],null]]]],[7],[0,\"\\n          \"],[6,\"div\"],[10,\"class\",[26,[\"\\n            etw-mx-auto etw-w-24 etw-h-24 etw-border\\n             etw-bg-grey-lighter\\n            mt-\",[20,[\"moduleStyle\",\"name\"]],\"\\n          \"]]],[7],[8],[0,\"\\n        \"],[8],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"moduleStyle\",\"module\"]],\"max-height\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",[26,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-grey-lighter\\n          etw-border etw-border-solid etw-border-grey\\n          max-h-\",[20,[\"moduleStyle\",\"name\"]],\"\\n        \"]]],[7],[8],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"moduleStyle\",\"module\"]],\"max-width\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",[26,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-grey-lighter\\n          etw-border etw-border-solid etw-border-grey\\n          max-w-\",[20,[\"moduleStyle\",\"name\"]],\"\\n        \"]]],[7],[8],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"moduleStyle\",\"module\"]],\"min-height\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",[26,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-grey-lighter\\n          etw-border etw-border-solid etw-border-grey\\n          min-h-\",[20,[\"moduleStyle\",\"name\"]],\"\\n        \"]]],[7],[8],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"moduleStyle\",\"module\"]],\"min-width\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",[26,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-grey-lighter\\n          etw-border etw-border-solid etw-border-grey\\n          min-w-\",[20,[\"moduleStyle\",\"name\"]],\"\\n        \"]]],[7],[8],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"moduleStyle\",\"module\"]],\"negative-margin\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[9,\"class\",\"etw-mb-8 etw-bg-red etw-px-4 etw-pb-4 etw-mx-auto etw-h-32 etw-relative\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"etw-absolute etw-pin-x\"],[7],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",[26,[\"\\n            etw-mx-auto etw-w-24 etw-h-24 etw-border\\n            etw-bg-grey-lighter etw-shadow-lg\\n            -mt-\",[20,[\"moduleStyle\",\"name\"]],\"\\n            \"]]],[7],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"moduleStyle\",\"module\"]],\"opacity\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",[26,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-border\\n          etw-border-grey etw-bg-grey-lighter\\n          opacity-\",[20,[\"moduleStyle\",\"name\"]],\"\\n        \"]]],[7],[8],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"moduleStyle\",\"module\"]],\"padding\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[9,\"class\",\"etw-bg-red etw-w-24 etw-mx-auto\"],[7],[0,\"\\n          \"],[6,\"div\"],[10,\"class\",[26,[\"\\n            etw-mx-auto etw-w-24 etw-h-24 etw-border\\n             etw-bg-grey-lighter\\n            pt-\",[20,[\"moduleStyle\",\"name\"]],\"\\n          \"]]],[7],[0,\"\\n            \"],[6,\"p\"],[9,\"class\",\"etw-text-grey-darker\"],[7],[0,\"Lorem\"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"moduleStyle\",\"module\"]],\"shadows\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",[26,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-white\\n          \",[20,[\"classesForModuleStyle\",\"0\"]],\"\\n        \"]]],[7],[0,\"\\n        \"],[8],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"moduleStyle\",\"module\"]],\"svg-fill\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[9,\"class\",\"etw-bg-grey-lighter etw-text-red etw-py-4\"],[7],[0,\"\\n          \"],[6,\"svg\"],[9,\"class\",\"fill-current inline-block h-12 w-12\"],[9,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[9,\"viewBox\",\"0 0 20 20\"],[7],[0,\"\\n            \"],[6,\"path\"],[9,\"d\",\"M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z\"],[7],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"moduleStyle\",\"module\"]],\"svg-stroke\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[9,\"class\",\"etw-bg-grey-lighter etw-text-red etw-py-4\"],[7],[0,\"\\n          \"],[6,\"svg\"],[9,\"class\",\"stroke-current inline-block h-12 w-12\"],[9,\"viewBox\",\"0 0 24 24\"],[9,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[9,\"fill\",\"none\"],[9,\"stroke-width\",\"2\"],[9,\"stroke-linecap\",\"round\"],[9,\"stroke-linejoin\",\"round\"],[7],[0,\"\\n              \"],[6,\"circle\"],[9,\"cx\",\"8\"],[9,\"cy\",\"21\"],[9,\"r\",\"2\"],[7],[8],[0,\"\\n              \"],[6,\"circle\"],[9,\"cx\",\"20\"],[9,\"cy\",\"21\"],[9,\"r\",\"2\"],[7],[8],[0,\"\\n              \"],[6,\"path\"],[9,\"d\",\"M5.67 6H23l-1.68 8.39a2 2 0 0 1-2 1.61H8.75a2 2 0 0 1-2-1.74L5.23 2.74A2 2 0 0 0 3.25 1H1\"],[7],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"moduleStyle\",\"module\"]],\"text-sizes\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"p\"],[10,\"class\",[26,[\"text-left text-\",[20,[\"moduleStyle\",\"name\"]]]]],[7],[0,\"\\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit.\\n        \"],[8],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"moduleStyle\",\"module\"]],\"width\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",[26,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-border\\n          etw-border-grey etw-bg-grey-lighter\\n          \",[20,[\"classesForModuleStyle\",\"0\"]],\"\\n        \"]]],[7],[8],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"moduleStyle\",\"module\"]],\"z-index\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",[26,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-border\\n          etw-border-grey etw-bg-grey-lighter\\n          \",[20,[\"classesForModuleStyle\",\"0\"]],\"\\n        \"]]],[7],[8],[0,\"\\n\\n      \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"etw-mt-3 etw-leading-normal\"],[7],[0,\"\\n        \"],[6,\"p\"],[7],[1,[20,[\"moduleStyle\",\"name\"]],false],[8],[0,\"\\n        \"],[6,\"p\"],[9,\"class\",\"etw-opacity-50\"],[7],[1,[20,[\"moduleStyle\",\"value\"]],false],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/etw/module-style-example.hbs" } });
});
define("dummy/templates/docs/api/item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "kyiyNvaz", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[20,[\"model\",\"isComponent\"]]],null,{\"statements\":[[0,\"  \"],[1,[25,\"api/x-component\",null,[[\"component\"],[[20,[\"model\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[20,[\"model\",\"isClass\"]]],null,{\"statements\":[[0,\"  \"],[1,[25,\"api/x-class\",null,[[\"class\"],[[20,[\"model\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[1,[25,\"api/x-module\",null,[[\"module\"],[[20,[\"model\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/api/item.hbs" } });
});
define("dummy/templates/esdoc-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "WlbTmLO9", "block": "{\"symbols\":[],\"statements\":[[6,\"h2\"],[7],[0,\"I'm a esdoc-component\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/esdoc-component.hbs" } });
});
define("dummy/templates/yuidoc-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7U6gJ3X6", "block": "{\"symbols\":[],\"statements\":[[6,\"h2\"],[7],[0,\"I'm a yuidoc-component\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/yuidoc-component.hbs" } });
});
define('dummy/tests/mirage/mirage.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | mirage');

  QUnit.test('mirage/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/scenarios/default.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass ESLint\n\n');
  });
});
define('dummy/transitions', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    this.transition(this.hasClass('modal-fade-and-drop'), this.use('fadeAndDrop'));

    this.transition(this.hasClass('modal-fade'), this.use('fade', { duration: 150 }));
  };
});
define('dummy/transitions/cross-fade', ['exports', 'liquid-fire/transitions/cross-fade'], function (exports, _crossFade) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _crossFade.default;
    }
  });
});
define('dummy/transitions/default', ['exports', 'liquid-fire/transitions/default'], function (exports, _default) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _default.default;
    }
  });
});
define('dummy/transitions/explode', ['exports', 'liquid-fire/transitions/explode'], function (exports, _explode) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _explode.default;
    }
  });
});
define('dummy/transitions/fade-and-drop', ['exports', 'ember-cli-addon-docs/transitions/fade-and-drop'], function (exports, _fadeAndDrop) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fadeAndDrop.default;
    }
  });
});
define('dummy/transitions/fade', ['exports', 'liquid-fire/transitions/fade'], function (exports, _fade) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fade.default;
    }
  });
});
define('dummy/transitions/flex-grow', ['exports', 'liquid-fire/transitions/flex-grow'], function (exports, _flexGrow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexGrow.default;
    }
  });
});
define('dummy/transitions/fly-to', ['exports', 'liquid-fire/transitions/fly-to'], function (exports, _flyTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flyTo.default;
    }
  });
});
define('dummy/transitions/move-over', ['exports', 'liquid-fire/transitions/move-over'], function (exports, _moveOver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moveOver.default;
    }
  });
});
define('dummy/transitions/scale', ['exports', 'liquid-fire/transitions/scale'], function (exports, _scale) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _scale.default;
    }
  });
});
define('dummy/transitions/scroll-then', ['exports', 'liquid-fire/transitions/scroll-then'], function (exports, _scrollThen) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _scrollThen.default;
    }
  });
});
define('dummy/transitions/to-down', ['exports', 'liquid-fire/transitions/to-down'], function (exports, _toDown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toDown.default;
    }
  });
});
define('dummy/transitions/to-left', ['exports', 'liquid-fire/transitions/to-left'], function (exports, _toLeft) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toLeft.default;
    }
  });
});
define('dummy/transitions/to-right', ['exports', 'liquid-fire/transitions/to-right'], function (exports, _toRight) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toRight.default;
    }
  });
});
define('dummy/transitions/to-up', ['exports', 'liquid-fire/transitions/to-up'], function (exports, _toUp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toUp.default;
    }
  });
});
define('dummy/transitions/wait', ['exports', 'liquid-fire/transitions/wait'], function (exports, _wait) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _wait.default;
    }
  });
});
define('dummy/utils/esdoc-module', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.greet = greet;
  /** @documenter esdoc */

  /**
   * A first-class greeting for the people.
   *
   * @type {string}
   */
  const GREETING = exports.GREETING = 'Hello';

  /**
   * Greet whoever you like!
   *
   * @param {string} subject The target of your greeting
   * @return {string} A hand-crafted artisanal greeting just for your subject
   */
  function greet(subject = 'World') {
    return `${GREETING}, ${subject}!`;
  }
});
define('dummy/utils/get-cmd-key', ['exports', 'ember-keyboard/utils/get-cmd-key'], function (exports, _getCmdKey) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _getCmdKey.default;
    }
  });
});
define('dummy/utils/listener-name', ['exports', 'ember-keyboard/utils/listener-name'], function (exports, _listenerName) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _listenerName.default;
    }
  });
});
define('dummy/utils/titleize', ['exports', 'ember-cli-string-helpers/utils/titleize'], function (exports, _titleize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _titleize.default;
    }
  });
});
define('dummy/utils/yuidoc-module', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.greet = greet;
  /** @documenter yuidoc */

  /**
   * A first-class greeting for the people.
   *
   * @constant GREETING
   * @type {string}
   */
  const GREETING = exports.GREETING = 'Hello';

  /**
   * Greet whoever you like!
   *
   * @function greet
   * @param {string} subject The target of your greeting
   * @return {string} A hand-crafted artisanal greeting just for your subject
   */
  function greet(subject = 'World') {
    return `${GREETING}, ${subject}!`;
  }
});

define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("dummy/app")["default"].create({});
}
//# sourceMappingURL=dummy.map

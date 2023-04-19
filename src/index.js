/**
 * Alert block for the Editor.js.
 *
 * @author Vishal Telangre
 * @license MIT
 */

/**
 * Build styles
 */
require('./index.scss').toString();

/**
 * Import Tool's icons
 */
import ToolboxIcon from '../assets/icon.svg';
import SettingsIcon from '../assets/settings-icon.svg';
import AlignLeftIcon from '../assets/align-left-icon.svg';
import AlignCenterIcon from '../assets/align-center-icon.svg';
import AlignRightIcon from '../assets/align-right-icon.svg';

/**
 * @class Alert
 * @classdesc Alert Tool for Editor.js
 * @property {AlertData} data - Alert Tool`s input and output data
 * @property {object} api - Editor.js API instance
 *
 * @typedef {object} AlertData
 * @description Alert Tool`s input and output data
 * @property {string} type - Alert type
 * @property {string} alignType - Alert align type
 * @property {string} message - Alert message
 *
 * @typedef {object} AlertConfig
 * @description Alert Tool`s initial configuration
 * @property {string} defaultType - default Alert type
 * @property {string} defaultAlignType - default align Alert type
 * @property {string} messagePlaceholder - placeholder to show in Alert`s message input
 */
export default class Alert {
  /**
   * Get Toolbox settings
   *
   * @public
   * @returns {string}
   */
  static get toolbox() {
    return {
      icon: ToolboxIcon,
      title: 'Alert',
    };
  }

  /**
   * Allow to press Enter inside the Alert block
   * @public
   * @returns {boolean}
   */
  static get enableLineBreaks() {
    return true;
  }

  /**
   * Default Alert type
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_TYPE() {
    return 'info';
  }

  /**
   * Default Alert align type
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_ALIGN_TYPE() {
    return 'left';
  }

  /**
   * Default placeholder for Alert message
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_MESSAGE_PLACEHOLDER() {
    return 'Type here...';
  }

  /**
   * Supported Alert types
   *
   * @public
   * @returns {array}
   */
  static get ALERT_TYPES() {
    return [
      'primary',
      'secondary',
      'info',
      'success',
      'warning',
      'danger',
      'light',
      'dark',
    ];
  }

  /**
   * Supported Align types
   *
   * @public
   * @returns {array}
   */
  static get ALIGN_TYPES() {
    return ['left', 'center', 'right'];
  }

  /**
   * Alert Tool`s styles
   *
   * @returns {Object}
   */
  get CSS() {
    return {
      wrapper: 'cdx-alert',
      wrapperForType: (type) => `cdx-alert-${type}`,
      wrapperForAlignType: (alignType) => `cdx-alert-align-${alignType}`,
      message: 'cdx-alert__message',
    };
  }

  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {AlertData} data — previously saved data
   * @param {AlertConfig} config — user config for Tool
   * @param {Object} api - Editor.js API
   * @param {boolean} readOnly - read only mode flag
   */
  constructor({ data, config, api, readOnly }) {
    this.api = api;

    this.defaultType = config.defaultType || Alert.DEFAULT_TYPE;
    this.defaultAlign = config.defaultAlign || Alert.DEFAULT_ALIGN_TYPE;
    this.messagePlaceholder =
      config.messagePlaceholder || Alert.DEFAULT_MESSAGE_PLACEHOLDER;

    this.data = {
      type: Alert.ALERT_TYPES.includes(data.type)
        ? data.type
        : this.defaultType,
      align: Alert.ALIGN_TYPES.includes(data.align)
        ? data.align
        : this.defaultAlign,
      message: data.message || '',
    };

    this.container = undefined;

    this.readOnly = readOnly;
  }

  /**
   * Returns true to notify the core that read-only mode is supported
   *
   * @return {boolean}
   */
  static get isReadOnlySupported() {
    return true;
  }

  /**
   * Create Alert Tool container
   *
   * @returns {Element}
   */
  render() {
    const containerClasses = [
      this.CSS.wrapper,
      this.CSS.wrapperForType(this.data.type),
      this.CSS.wrapperForAlignType(this.data.align),
    ];

    this.container = this._make('div', containerClasses);

    const messageEl = this._make('div', [this.CSS.message], {
      contentEditable: !this.readOnly,
      innerHTML: this.data.message,
    });

    messageEl.dataset.placeholder = this.messagePlaceholder;

    this.container.appendChild(messageEl);

    return this.container;
  }

  /**
   * Create Block's settings block
   *
   * @returns {array}
   */
  renderSettings() {
    const alertTypes = Alert.ALERT_TYPES.map((type) => ({
      icon: SettingsIcon,
      name: `alert-${type}`,
      label: this._getFormattedName(type),
      toggle: 'alert',
      isActive: this.data.type === type,
      onActivate: () => {
        this._changeAlertType(type);
      },
    }));

    const alignTypes = Alert.ALIGN_TYPES.map((align) => ({
      icon:
        align == 'left'
          ? AlignLeftIcon
          : align == 'center'
          ? AlignCenterIcon
          : align == 'right'
          ? AlignRightIcon
          : IconAlign_left,
      name: `align-${align}`,
      label: this._getFormattedName(align),
      toggle: 'align',
      isActive: this.data.align === align,
      onActivate: () => {
        this._changeAlignType(align);
      },
    }));
    return [...alertTypes, ...alignTypes];
  }

  /**
   * Helper for formatting Alert Type / Align Type
   *
   * @param {string} type - Alert type or Align type
   * @returns {string}
   */
  _getFormattedName(name) {
    return this.api.i18n.t(name.charAt(0).toUpperCase() + name.slice(1));
  }

  /**
   * Helper for changing style of Alert block with the selected Alert type
   *
   * @param {string} newType - new Alert type to be applied to the block
   * @private
   */
  _changeAlertType(newType) {
    // Save new type
    this.data.type = newType;

    Alert.ALERT_TYPES.forEach((type) => {
      const alertClass = this.CSS.wrapperForType(type);

      // Remove the old Alert type class
      this.container.classList.remove(alertClass);

      if (newType === type) {
        // Add an Alert class for the selected Alert type
        this.container.classList.add(alertClass);
      }
    });
  }

  /**
   * Helper for changing align of Alert block with the selected Align type
   *
   * @param {string} newAlign - new align type to be applied to the block
   * @private
   */
  _changeAlignType(newAlign) {
    // Save new type
    this.data.align = newAlign;

    Alert.ALIGN_TYPES.forEach((align) => {
      const alignClass = this.CSS.wrapperForAlignType(align);

      // Remove the old Alert type class
      this.container.classList.remove(alignClass);

      if (newAlign === align) {
        // Add an Alert class for the selected Alert type
        this.container.classList.add(alignClass);
      }
    });
  }

  /**
   * Extract Alert data from Alert Tool element
   *
   * @param {HTMLDivElement} alertElement - element to save
   * @returns {AlertData}
   */
  save(alertElement) {
    const messageEl = alertElement.querySelector(`.${this.CSS.message}`);

    return { ...this.data, message: messageEl.innerHTML };
  }

  /**
   * Helper for making Elements with attributes
   *
   * @param  {string} tagName           - new Element tag name
   * @param  {array|string} classNames  - list or name of CSS classname(s)
   * @param  {Object} attributes        - any attributes
   * @returns {Element}
   * @private
   */
  _make(tagName, classNames = null, attributes = {}) {
    let el = document.createElement(tagName);

    if (Array.isArray(classNames)) {
      el.classList.add(...classNames);
    } else if (classNames) {
      el.classList.add(classNames);
    }

    for (let attrName in attributes) {
      el[attrName] = attributes[attrName];
    }

    return el;
  }

  /**
   * Fill Alert's message with the pasted content
   *
   * @param {PasteEvent} event - event with pasted content
   */
  onPaste(event) {
    const { data } = event.detail;

    this.data = {
      type: this.defaultType,
      message: data.innerHTML || '',
    };
  }

  /**
   * Allow Alert to be converted to/from other blocks
   */
  static get conversionConfig() {
    return {
      // export Alert's message for other blocks
      export: (data) => data.message,
      // fill Alert's message from other block's export string
      import: (string) => {
        return {
          message: string,
          type: this.DEFAULT_TYPE,
          alignType: this.DEFAULT_ALIGN_TYPE,
        };
      },
    };
  }

  /**
   * Sanitizer config for Alert Tool saved data
   * @returns {Object}
   */
  static get sanitize() {
    return {
      message: true,
      type: false,
      alignType: false,
    };
  }
}

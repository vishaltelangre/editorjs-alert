# Editor.js Alert Tool

[![npm](https://img.shields.io/npm/v/editorjs-alert.svg?style=?style=flat&logo=appveyor)](https://www.npmjs.com/package/editorjs-alert) ![Version of EditorJS that the plugin is compatible with](https://badgen.net/badge/Editor.js/v2.0/blue)

Provides Alert blocks for the [Editor.js](https://editorjs.io/).

## Features

- 8 different alert block styes
- Convert from other blocks into an Alert block
- Convert an Alert block into other blocks

## How does it look like?

Watch this tool in action in the following short GIF movie.

<p align="center">
  <img src="https://user-images.githubusercontent.com/876195/87923460-294ee780-ca9b-11ea-8a73-009453d77478.gif" alt="Alert sneak peek GIF!">

**Try it out yourself on the [demo page](https://vishaltelangre.github.io/editorjs-alert/examples/demo.html).**

## Installation

### Install via NPM

Get the package

```sh
npm i --save editorjs-alert
```

Include module at your application

```js
const Header = require('editorjs-alert');

// OR

import Alert from 'editorjs-alert';
```

### Download to your project's source dir

Copy [`dist/bundle.js`](./dist/bundle.js) file to your page.

### Load from CDN

You can load specific version of package from [jsDelivr CDN](https://www.jsdelivr.com/package/npm/editorjs-alert).

```html
<script src="https://cdn.jsdelivr.net/npm/editorjs-alert@latest"></script>
```

## Usage

Add a new Tool `Alert` to the `tools` property of the Editor.js initial config.

```js
var editor = EditorJS({
  // ...

  tools: {
    // ...
    alert: Alert,
  },

  // ...
});
```

Or initialize Alert tool with additional optional settings

```js
var editor = EditorJS({
  //...

  tools: {
    //...
    alert: {
      class: Alert,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+A',
      config: {
        defaultType: 'primary',
        messagePlaceholder: 'Enter something',
      },
    },
  },

  //...
});
```

## Config Params

All properties are optional.

| Field                | Type     | Default Value  | Description                                                                                                                |
| -------------------- | -------- | -------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `defaultType`        | `string` | `info`         | default Alert type (should be either of `primary`, `secondary`, `info`, `success`, `warning`, `danger`, `light` or `dark`) |
| `defaultAlign`     | `string` | `left`         | default Alert alignment (should be either of `left`, `center` or `right`)                                              |
| `messagePlaceholder` | `string` | `Type here...` | placeholder to show in Alert`s message 

## Output data

| Field   | Type     | Description                                                                                               |
| ------- | -------- | --------------------------------------------------------------------------------------------------------- |
| message | `string` | Alert message                                                                                             |
| type    | `string` | Alert type among one of `primary`, `secondary`, `info`, `success`, `warning`, `danger`, `light` or `dark` |
| align   | `string` | Align type should be one of `left`, `center` or `right`                                                   |

```json
{
  "type": "alert",
  "data": {
    "type": "danger",
    "align" : "center",
    "text": "<strong>Holy smokes!</strong><br>Something seriously <em>bad</em> happened."
  }
}
```

## Local Development

- Run `yarn install`.
- Run `yarn dev` to continuously watch for the changes made in `./src/index.js` and updates a development bundle under `./dist` folder.
- Open `./examples/development.html` in the browser to verify the tool's functionality.

## License

This project is licensed under the [MIT License](LICENSE).

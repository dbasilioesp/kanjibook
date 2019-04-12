/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../styles/main.scss';
import './style.scss';

// Snippets
import PrintSnippet from "./snippets/print.html";
import ColorsSnippet from "./snippets/colors.html";
import ButtonsSnippet from "./snippets/buttons.html";
import InputsSnippet from "./snippets/Inputs.vue";


storiesOf('Style Guide', module)
  .add('Cores', () => ColorsSnippet)
  .add('Tipografia', () => PrintSnippet)
  .add('Buttons', () => ButtonsSnippet)
  .add('Inputs', () => ({ components: { InputsSnippet }, template: '<InputsSnippet />' }))


/* eslint-enable react/react-in-jsx-scope */

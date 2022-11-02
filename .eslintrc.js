module.exports = {
  'root': true,
  'env': {
    'node': true
  },
  'extends': [
    'plugin:vue/vue3-recommended',
    'eslint:recommended'
  ],
  'parserOptions': {
    'parser': '@babel/eslint-parser'
  },
  'rules': {
    'vue/multi-word-component-names': 'off',
    'vue/order-in-components': 'off',
    'no-unexpected-multiline': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'vue/attribute-hyphenation': 'off',
  } 
};
module.exports = {
  root: true,
  extends: 'satya164',
  rules: {
    'react/no-unused-prop-types': 'off',
    'max-len': ['error', { code: 120 }],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        imports: 'always-multiline',
        objects: 'always-multiline',
        functions: 'never',
      },
    ],
  },
};

module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  plugins: ['stylelint-scss'],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
      rules: {
        'no-empty-source': null, // игнорируем пустой <style>
      },
    },
  ],
  rules: {
    'selector-class-pattern': null,
    'no-descending-specificity': null,
    'font-family-name-quotes': 'always-where-recommended',
    'rule-empty-line-before': ['always', { except: ['first-nested'], ignore: ['after-comment'] }],
  },
}

module.exports = {
    extends: [
        './node_modules/@tinkoff/linters/eslint/base/prettier',
        './node_modules/@tinkoff/linters/eslint/angular',
    ],
    rules: {
        '@tinkoff/member-ordering': 0,
    },
};

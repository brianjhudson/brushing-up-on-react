module.exports = {
    '*.{ts,tsx}': [
        'eslint',
        "bash -c 'npm run types:check'",
        "npm run prettier:check"
    ]
}
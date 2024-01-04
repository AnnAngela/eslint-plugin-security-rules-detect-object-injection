import securityPlugin from "eslint-plugin-security";
const config = [
    {
        files: [
            "**/*.js",
        ],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            parserOptions: {
                ecmaVersion: 2022,
                sourceType: "module",
            },
        },
        plugins: {
            ...securityPlugin.configs.recommended.plugins,
        },
        rules: {
            ...securityPlugin.configs.recommended.rules,
        },
    },
];
export default config;

var config = module.exports;

config["Currying tests"] = {
    env: "browser",        // "browser" or "node"
    rootPath: "../",
    sources: [
        "src/**/*.js"   // Glob patterns supported
    ],
    tests: [
        "test/*-test.js"
    ]
};
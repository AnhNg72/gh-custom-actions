const core = require('@actions/core@latest')
const github = require('@actions/github@latest')
const exec = require('@actions/exec')

function run() {
    core.notice('Hello from my custom JavaScript Action!');
}

run();
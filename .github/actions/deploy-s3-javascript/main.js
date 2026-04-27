//const core = require('@actions/core')
//const github = require('@actions/github')
//const exec = require('@actions/exec')

import core from '@actions/core';
import github from '@actions/github';

function run() {
    core.notice('Hello from my custom JavaScript Action!');
}

run();
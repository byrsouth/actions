import * as core from '@actions/core';
import * as github from '@actions/github';
import * as htttpc from '@actions/http-client';

interface DeployData {
  branchName: string;
  tag: string;
  version: string;
}

async function run(): Promise<void> {
  try {
    const branch = {
      branchName: core.getInput('branch_name'),
      tag: core.getInput('tag'),
      version: core.getInput('version')
    };

    core.info(JSON.stringify(branch));
    core.debug(new Date().toTimeString());

    core.info(`HELOOOOOO ${name}`);
    console.log(`time', new Date().toTimeString()`);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();

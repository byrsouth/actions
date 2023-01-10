/* eslint-disable @typescript-eslint/semi */
/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
import * as core from '@actions/core';
import { wait } from './wait';

async function run(): Promise<void> {
   try {
      const name: string = core.getInput('who-to-greet');
      const ms: string = core.getInput('milliseconds');
      core.debug(`Waiting ${ms} milliseconds ...`); // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true
      core.debug(new Date().toTimeString());
      await wait(parseInt(ms, 10));
      core.debug(new Date().toTimeString());

      core.info(`HELOOOOOO ${name}`);
      console.log(`time', new Date().toTimeString()`);
   } catch (error) {
      if (error instanceof Error) core.setFailed(error.message);
   }
}

run();

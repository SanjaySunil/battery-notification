#!/usr/bin/env node
/* eslint-disable max-len */
'use strict';
const {Command, InvalidArgumentError} = require('commander');
const isCharging = require('is-charging');
const packageData = require('../package.json');
const {lowLevel, highLevel} = require('./utils/notification');
const batteryLevel = require('battery-level');
const program = new Command();

let lowStateNotification = false;
let highStateNotification = false;

const isValid = (value) => {
  if (
    value % 1 !== 0
  ) {
    throw new InvalidArgumentError('Not an integer threshold.');
  } else if (parseInt(value) > 100 || parseInt(value) < 0) {
    throw new InvalidArgumentError('Not a threshold between 0-100%.');
  } else {
    return value;
  }
};

program
    .name(packageData.name)
    .description(packageData.description)
    .version(packageData.version);

program
    .option('-l, --low <value>', 'Low battery level threshold', isValid)
    .option('-h, --high <value>', 'High battery level threshold', isValid)
    .action((options) => {
      if (options.low == undefined) options.low = 20;
      if (options.high == undefined) options.high = 80;

      if (options.low >= options.high) {
        throw new InvalidArgumentError('High battery threshold must be greater than low battery threshold.');
      }

      console.log(`
      ${packageData.name} listening to battery level

      Low battery threshold: ${options.low}%
      High battery threshold: ${options.high}%`);
      setInterval(() => {
        isCharging().then((isChargingState) => {
          batteryLevel().then((level) => {
            const isLowBattery =
            options.low > level * 100 &&
            isChargingState != true &&
            lowStateNotification == false;
            const isHighBattery =
            options.high < level * 100 &&
            isChargingState == true &&
            highStateNotification == false;
            if (isLowBattery) {
              lowLevel();
              lowStateNotification = true;
            } else if (isHighBattery) {
              highLevel();
              highStateNotification = true;
            } else if (isChargingState == true) {
              lowStateNotification = false;
            } else if (isChargingState != true) {
              highStateNotification = false;
            }
          });
        });
      }, 2500);
    });

program.parse();

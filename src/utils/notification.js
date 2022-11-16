#!/usr/bin/env node
'use strict';
const notifier = require('node-notifier');

const notification = (options) => {
  notifier.notify(
      {
        title: options.title,
        subtitle: options.subtitle,
        message: options.message,
        sound: true,
        icon: 'Terminal Icon',
        timeout: false,
      },
      function(error, response, metadata) {
        console.log(response, metadata);
      },
  );
};

module.exports = {
  lowLevel: () => {
    notification({
      title: 'battery-notification',
      subtitle: 'Charging reminder',
      message: 'It is recommended to charge your laptop.',
    });
  },
  highLevel: () => {
    notification({
      title: 'battery-notification',
      subtitle: 'Overcharging reminder',
      message:
        // eslint-disable-next-line max-len
        'It is recommended to unplug your charger to save battery health.',
    });
  },
};

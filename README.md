<!-- Header -->
<br/><br/>
<h1 align="center">battery-notification</h1>
  <p align="center">
    Get notified on when you need to plug/unplug your charger to preserve battery life.
    <br />
    <br />
    <a href="https://github.com/SanjaySunil/battery-notification/issues/new?assignees=&labels=Bug&template=bug_report.md&title=%5BBUG%5D">Report Bug</a>
    ·
    <a href="https://github.com/SanjaySunil/battery-notification/issues/new?assignees=&labels=Suggestions&template=suggestions.md&title=%5BSUGGESTION%5D">Request Feature</a>
  </p>
</h1>
<br/><br/>

<!-- Description -->
## What's battery-notification?

[battery-notification]() is a command-line tool which aims to notify you when your battery is too low, and when you need to unplug your charger when your device is at a sufficient battery level. The command-line tool allows you to set battery percentage thresholds for when you want to be notified, and is straight-forward to use.
<br />



<!-- Install -->
## Install
```sh
$ npm install battery-notification
```
<br />


## Usage
```sh
$ battery-notification --help

Usage: battery-notification [options]

Get notified on when you need to plug/unplug your charger to preserve battery life.

Options:
  -V, --version       output the version number
  -l, --low <value>   Low battery level threshold
  -h, --high <value>  High battery level threshold
```

> **TIP:** You can also use the command ```battery``` instead of `battery-notification`.

### Running the monitor
```sh
$ battery -l <value> -h <value>
```

**Example:**
```sh
$ battery -l 25 -h 95
```

> **NOTE:** The threshold values are **optional**. If a threshold value is not specified, it will fall back to the default threshold value (low percentage warning: 20%, high percentage warning: 80%)

<br />


<!-- License -->
## License

Copyright © 2022 Sanjay Sunil (sanjaysunil@protonmail.com)

Distributed under the MIT License. See `LICENSE` for more information.
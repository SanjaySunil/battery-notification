## Usage
```sh
$ battery-reminder --help

Usage: battery-reminder [options]

Get notified on when you need to plug/unplug your charger to preserve battery life.

Options:
  -V, --version       output the version number
  -l, --low <value>   Low battery level threshold
  -h, --high <value>  High battery level threshold
```

> **TIP:** You can also use the command ```battery``` instead of `battery-reminder`.

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

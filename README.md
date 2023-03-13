### Hexlet tests and linter status:
[![Actions Status](https://github.com/kawasakidrip/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/kawasakidrip/frontend-project-46/actions)
[![Node.js CI](https://github.com/kawasakidrip/frontend-project-46/actions/workflows/node.js.yml/badge.svg)](https://github.com/kawasakidrip/frontend-project-46/actions/workflows/node.js.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/b8f771fa2046bb459dd7/maintainability)](https://codeclimate.com/github/kawasakidrip/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b8f771fa2046bb459dd7/test_coverage)](https://codeclimate.com/github/kawasakidrip/frontend-project-46/test_coverage)
# Difference Generator 
Gendiff is a utility compares two configuration files and shows a difference.
## How to used
1. Clone my rep
2. Write on console `make install`
## Options
Command `gendiff -h` outputs all options of this utility
    
    Usage: gendiff [options] <filepath1> <filepath2>

    Compares two configuration files and shows a difference.

    Arguments:
      filepath1            required file path to get diff
      filepath2            required file path to get diff

    Options:
      -V, --version        output the version number
      -f, --format <type>  output format (default: "stylish")
      -h, --help           display help for command

## With simple files
[![asciicast](https://asciinema.org/a/f1032XJvnmjiYu44piFaJ8RHA.svg)](https://asciinema.org/a/f1032XJvnmjiYu44piFaJ8RHA)
## Plain
[![asciicast](https://asciinema.org/a/4CN751RRreu4qcFZNqPjSwSrB.svg)](https://asciinema.org/a/4CN751RRreu4qcFZNqPjSwSrB)
## JSON
[![asciicast](https://asciinema.org/a/QD6g474EkPZRT5WYZyYo1tToe.svg)](https://asciinema.org/a/QD6g474EkPZRT5WYZyYo1tToe)
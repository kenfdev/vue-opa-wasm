#!/bin/sh

BASEDIR=$(dirname "$0")

opa build -d $BASEDIR/example.rego 'data.example = x'
mv policy.wasm $BASEDIR/../src/assets/policy.wasm
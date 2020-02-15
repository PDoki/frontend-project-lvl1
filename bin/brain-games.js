#!/usr/bin/env node
import { userName } from '../src/index.js';

const greeting = "Welcome to the Brain Games!";
console.log(greeting);
const askUserName = userName();
console.log(askUserName);
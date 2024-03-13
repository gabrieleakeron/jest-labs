import 'zone.js';
import 'zone.js/testing';
import type {Config} from 'jest';
import { TestBed } from "@angular/core/testing";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

const config: Config = {
  verbose: true
};

export default config;
import 'zone.js/testing';
import {getTestBed} from '@angular/core/testing';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';

// Initialize the Angular testing environment
getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);

// Import all test files
import {environment} from './environments/environment';
import {AppModule} from './app/app.module';

// Example: explicitly import your test files
// import './core/products.service.spec';
import './core/data-service.spec';
// Add additional imports for other test files as needed

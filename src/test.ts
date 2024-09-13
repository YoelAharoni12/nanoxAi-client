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
import './app/core/products.service.spec';
import './app/core/data-service.spec';
import './app/components/header/add-product-dialog/add-product-dialog.component.spec'
import './app/components/edit-product-dialog/edit-product-dialog.component.spec'

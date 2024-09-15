import 'zone.js/testing';
import {getTestBed} from '@angular/core/testing';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';

getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);

import './app/core/products.service.spec';
import './app/core/data-service.spec';
import './app/components/header/add-product-dialog/add-product-dialog.component.spec'
import './app/components/edit-product-dialog/edit-product-dialog.component.spec'

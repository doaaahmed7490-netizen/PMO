// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //apiUrl: 'http://localhost:5043/api/',
  //apiUrl: 'http://192.168.100.146:82/api/',
  //apiUrl: 'http://localhost:32978/api/',
  apiUrl: 'http://localhost:32978/api/',
  
  //apiUrl: 'https://alphannilmsback.smartwaveeg.com/api/',

  // apiUrl:"https://surveysystemback.smartwaveeg.com/api/",
  filesBaseUrl: 'http://192.168.100.146:84/api/',

  DEFAULT_PAGE_SIZE: 10,
  DEFAULT_PAGE_SIZE_OPTIONS: [10, 20, 50],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

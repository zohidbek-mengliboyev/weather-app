// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'weather-app-bf82f',
    appId: '1:36365989459:web:45421a656d3f22ce5d78a6',
    databaseURL: 'https://weather-app-bf82f-default-rtdb.firebaseio.com',
    storageBucket: 'weather-app-bf82f.appspot.com',
    apiKey: 'AIzaSyBgmo3JkTF9znI3e8NR-PS9Jn5b2DXJw6k',
    authDomain: 'weather-app-bf82f.firebaseapp.com',
    messagingSenderId: '36365989459',
  },
  production: false,
  apiUrl: 'https://api.openweathermap.org/data/2.5/',
  apiKey: '0f7bcd6e90cb34e666b8e8676789eadf'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

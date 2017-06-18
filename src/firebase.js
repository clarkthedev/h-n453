import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
 	apiKey: "AIzaSyDr_FxFCkvHvoOhN6O-pXRbhlKPu0BDWMQ",
    authDomain: "hainanese-delights.firebaseapp.com",
    databaseURL: "https://hainanese-delights.firebaseio.com",
    projectId: "hainanese-delights",
    storageBucket: "hainanese-delights.appspot.com",
    messagingSenderId: "102778988316"  
});

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const ah = firebaseApp.auth();
export const db = firebaseApp.database();
export const sb = firebaseApp.storage();
export const fb = Firebase;

# ask
An ask service built with Firebase

## Usage
1. Clone this repository
1. Create [your Firebase project](https://firebase.google.com)
1. Enable Email/Password provider and create an admin account
1. Create `admins` collection on Firestore (Beta) database
1. Add empty document `admins/<UID_OF_YOUR_ADMIN_ACCOUNT>`
1. Edit `src/firebase.js` and `dist/firebase-messaging-sw.js`
1. `yarn install && cd functions && yarn install && cd ..`
1. `yarn clean && yarn build && yarn google-login && yarn deploy`

## License
[MIT](LICENSE)

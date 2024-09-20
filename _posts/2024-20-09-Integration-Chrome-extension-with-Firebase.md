---
title: "Firebase Integration with Chrome Extension"
excerpt: "Integrating Firebase with Chrome Extension"
categories: 
  - Firebase SDK
  - Chrome Extension
date: 2024-09-20
author: "Okeowo Aderemi"
tags: 
  - [firebase, chrome-extension]
toc: true
toc_sticky: true
permalink: /chrome-extension/firebase/
---

### Introduction

This is a brief overview of integrating Firebase with a Chrome Extension. Firebase, developed by Google, is a platform designed for building mobile and web applications. In my case, I use Firebase Functions, Storage, and Authentication to manage Stripe subscriptions, handle user authentication, and trigger Firebase functions directly from the Chrome extension.

Let's get started.

The steps are as follows:


#### Step 1: Create a Firebase Project

The first thing you need to do is to setup a Firebase Project for your extension. You can do this by going to the [Firebase Console](https://console.firebase.google.com/) and clicking on the "Add Project" button. You should select the Web option for the extension.
![Firebase Authentication](/assets/images/Firebase%20Project.png)


#### Step 2: Add Firebase to your Chrome Extension

Next, you need to add Firebase to your Chrome Extension. You can do this by running the npm command below:

```bash
npm install firebase
```

This should install the Firebase library into your project.


#### Step 3: Initialize Firebase in your Chrome Extension

Next, you need to initialize Firebase in your Chrome Extension. You can do this by adding the following code to your background script, content-script, or popup. You can also follow the documentation [here](https://firebase.google.com/docs/web/setup).

As of this writing, my Firebase version is 10.11.1, and the code looks like this:

```javascript
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "xxxxxx",
  authDomain: "so-mvpv1.xxxxx.com",
  projectId: "so-xxxx",
  storageBucket: "so-mvpv1.xxxxx.com",
  messagingSenderId: "xxxxxxxxx",
  appId: "xxxxxxxxxxxxxxx",
  measurementId: "xxxxxxxxxxxx",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
```

#### Step 4: Enable Firebase Authentication

You need to enable Firebase Authentication, this is found on the Firebase Console under the Authentication tab. You can enable email/password, Google, Facebook, Twitter, Github, and Phone authentication. 

Here is a screenshot of the Firebase Authentication tab: Firebase authentication easily handles user authentication and authorization. 

NOTE: If you are using Firebase to track Stripe subscriptions, you can also add claims to the user object to track the user's subscription status. This is very useful for building extensions with premium features.

Fore more information about claims, you can check the [Firebase documentation](https://firebase.google.com/docs/auth/admin/custom-claims).

![Firebase Authentication](/assets/images/authentication.png)

#### Step 5: Firebase SDK Documentation and using Firebase Authentication

Once the authentication are enabled, you can find the documentation for the sign-in methods [here](https://firebase.google.com/docs/auth/web/start).

Here is an example of using the `signInWithEmailAndPassword` method:

```javascript
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Sign in with email and password
signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
```


## Remote Hosted Code (RHC)

At this point, you have successfully integrated Firebase/Authentication in your project. However, you need to be aware of the Chrome Web Store's policy on remote-hosted code. The Chrome Web Store forbids remote-hosted code, and the Firebase SDK is a culprit fr RHC. 

### How do you detect remote hosted code?

Remote hosted codes are codes injected remotely, so the easiest way to spot this in the build is to search for `script` that are dynamically. Here is an example of such code.

```javascript
// This line of code will cause the Chrome Web store to reject your extension
_setExternalJSProvider({
    loadJS(url) {
        // TODO: consider adding timeout support & cancellation
        return new Promise((resolve, reject) => {
            const el = document.createElement('script');
            el.setAttribute('src', url);
            el.onload = resolve;
            el.onerror = e => {
                const error = _createError("internal-error" /* AuthErrorCode.INTERNAL_ERROR */);
                error.customData = e;
                reject(error);
            };
            el.type = 'text/javascript';
            el.charset = 'UTF-8';
            getScriptParentElement().appendChild(el);
        });
    },
    gapiScript: 'https://apis.google.com/js/api.js',
    recaptchaV2Script: 'https://www.google.com/recaptcha/api.js',
    recaptchaEnterpriseScript: 'https://www.google.com/recaptcha/enterprise.js?render='
});

```

This was the code I used to get my extension approved
```javascript
// This line of code will cause the Chrome Web store to reject your extension
_setExternalJSProvider({
    loadJS(url) {
        // TODO: consider adding timeout support & cancellation
        return new Promise.resolve(true);
    }
});

```

#### Future Consideration

I plan to implement a plugin in Webpack that removes that specific RHC code during build times, as removing it manually is not intuitive. But that is a current workaround that works. 

Thanks and let me know if this short note helped. 

























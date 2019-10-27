# [MTCaptcha](https://www.mtcaptcha.com)
MTCaptcha is a smart captcha service that is GDPR and WCAG compliant, providing the confidence of privacy and accessibility. Adaptive invisible noCaptcha insures friction-less verification for real humans whilst hard on bots. And our multi user account management and automated regression test support are just some of the features build for the needs of the enterprise.  


#### MTCaptcha ReactJS Component - Front End Integratgion
Add MTCaptcha public key to .env file as, public key can be obtained from login with your MTCaptcha account, and navigating under site at https://admin.mtcaptcha.com
```
REACT_APP_MT_PUBLIC_KEY="<MTCaptcha Public Key>"
```


MTCaptcha React componenet found at, <link>
In your App.js import react componenet with
```
import MTCaptcha from './components/MTCaptcha';
```

Render componenet with, which will render captcha widget
```
<MTCaptcha />
```

#### MTCaptcha Backend integration - Back end Integratgion with NodeJS
MTCaptcha requires to validate at server side, once Captcha solved verification token require to send at server side and MTCaptcha API can be use to verify token
In this example, validation of token is done with NodeJS.

- Add MTCaptcha private key to config/config.json
- Install MTCaptcha NodeJS modules from https://github.com/mtcaptcha-public/mtcaptcha-nodejs-sdk
- Integration example at <link>

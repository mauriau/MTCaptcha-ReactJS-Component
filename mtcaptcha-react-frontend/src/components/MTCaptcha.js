import React, { useEffect } from 'react'
const MTCaptcha = () => {
    useEffect(() => {
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.innerHTML = 'var mtcaptchaConfig = {"sitekey": "'+process.env.REACT_APP_MT_PUBLIC_KEY+'"};';
      document.body.appendChild(s);     
    
      const mt_service = document.createElement("script");  
      mt_service.src = "https://service.mtcaptcha.com/mtcv1/client/mtcaptcha.min.js";
      mt_service.async = true;  
      document.body.appendChild(mt_service);
    
      const mt_service2 = document.createElement("script");  
      mt_service2.src = "https://service2.mtcaptcha.com/mtcv1/client/mtcaptcha2.min.js";
      mt_service2.async = true;  
      document.body.appendChild(mt_service2);

    }, [])
   return (<div className='mtcaptcha' />)
}

export default MTCaptcha;
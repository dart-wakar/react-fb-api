/*global FB*/

export default function initializeFb(initClass) {
    var fb;
    window.fbAsyncInit = function() {
            FB.init({
                appId            : '300039560455517',
                autoLogAppEvents : true,
                xfbml            : true,
                version          : 'v2.9'
            });
            FB.AppEvents.logPageView();
            initClass.fb = FB;
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                console.log('stop');
                return;
            }
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        //return window.fbAsyncInit();
        if(fb !== undefined) return fb;
}
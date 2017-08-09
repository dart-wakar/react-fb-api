/*global FB*/

export default function initializeFb(initClass,appId,apiVersion) {
    var fb;
    window.fbAsyncInit = function() {
            FB.init({
                appId            : appId,
                autoLogAppEvents : true,
                xfbml            : true,
                version          : apiVersion
            });
            FB.AppEvents.logPageView();
            window.FB = FB;
            initClass.fb = FB;
            if(initClass.props.isNotChild) {
                initClass.setState({fbInitialized: true});
                console.log(initClass)
            }
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                console.log('stop',initClass);
                window.FB = FB;
                initClass.fb = FB;
                if(initClass.props.isNotChild) {
                    initClass.setState({fbInitialized: true});
                    console.log(initClass)
                }
                return;
            }
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        //return window.fbAsyncInit();
        if(fb !== undefined) return fb;
}
const options = {};
const propsOptionsArray = [
    'authType',
    'scope',
    'returnScopes',
    'enableProfileSelector',
    'profileSelectorIds'
];
const optionsArray = [
    'auth-type',
    'scope',
    'return_scopes',
    'enable_profile_selector',
    'profile_selector_ids'
];

export default function setLoginOptions(props) {
    let i = 0;
    for(i = 0;i < propsOptionsArray.length;i++) {
        console.log(props[propsOptionsArray[i]]);
        if(props[propsOptionsArray[i]] !== undefined) {
            options[optionsArray[i]] = props[propsOptionsArray[i]];
        }
    }
    console.log(options);
    return options;
}
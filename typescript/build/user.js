"use strict";
var UserModule;
(function (UserModule) {
    UserModule.name = "taguchi";
    let AddressModule;
    (function (AddressModule) {
        AddressModule.zip = "111-1111";
    })(AddressModule = UserModule.AddressModule || (UserModule.AddressModule = {}));
})(UserModule || (UserModule = {}));
//# sourceMappingURL=user.js.map
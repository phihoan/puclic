// * Đối tượng Validator
function Validator (options) {
    var formElement = document.querySelector(options.form);
    console.log(formElement);
}
// * Định nghĩa các rules 
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function () {
            
        }
    };
} 
// *
Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function () {
            
        }
    };
}

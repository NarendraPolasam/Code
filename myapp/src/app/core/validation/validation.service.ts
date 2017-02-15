import { FormGroup } from '@angular/forms';

export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'Required',
            'passwordNotEquivalent': 'Password and confirm password do not match',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': `Minimum length ${validatorValue.requiredLength}`,
            'maxlength': `Max length ${validatorValue.requiredLength}`,
            'invalidPhoneNumber':'Please use the format (111)-111-1111',
            'invalidNumber':'Please enter numbers only',
            'invalidAmount':'Please enter valid amount',
            'invalidName':'Please enter alphabets only'
        };

        return config[validatorName];
    }
    static getAutoValidatorErrorMessage(controlName: string, 
        validatorName: string, validatorValue?: any) {
        let config = {
            'required': controlName + ': Required',
            'passwordNotEquivalent': 'Password and confirm password do not match',
            'oldPasswordEquivalent': 'Old password and New password should not be same',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': controlName + `: Minimum length ${validatorValue.requiredLength}`,
            'maxlength': controlName + `: Max length ${validatorValue.requiredLength}`
        };

        return config[validatorName];
    }

    static creditCardValidator(control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        } else {
            return { 'invalidCreditCard': true };
        }
    }
      
      static phoneNumberValidatior(control) {
        if (control.value.match(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/)) {
            return null;
        } else {
            return { 'invalidPhoneNumber': true };
        }
    }
  static numberValidation(control){
      ///^\d+$/
      if (control.value.match(/^[0-9]{1,8}$/)) {
            return null;
        } else {
            return { 'invalidNumber': true };
        }
  }

static alphabetsValidation(control){
      ///^\d+$/
      if (control.value.match(/^[a-zA-Z\s]*$/)) {
            return null;
        } else {
            return { 'invalidName': true };
        }
  }

  static amountValidation(control){
      if (control.value.match(/^[1-9]\d*(\.\d+)?$/)) {
            return null;
        } else {
            return { 'invalidAmount': true };
        }
  }
    static emailValidator(control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }

    static passwordValidator(control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }
    static  matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
        return (group: FormGroup) => {
            let passwordInput = group.controls[passwordKey];
            let passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
            return passwordConfirmationInput.setErrors({passwordNotEquivalent: true})
        }
      }
    }
     static  matchingOldPasswords(passwordKey: string, passwordConfirmationKey: string) {
        return (group: FormGroup) => {
            let passwordInput = group.controls[passwordKey];
            let passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value == passwordConfirmationInput.value) {
            return passwordConfirmationInput.setErrors({oldPasswordEquivalent: true})
        }
      }
    }
}

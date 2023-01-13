export default function HandleChange(target, currentState, setCurrentState) {
  setCurrentState({ ...currentState, [target.name]: target.value });
}

export function ValidateMail(mail) {
  return !!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(mail);
}

export function ValidatePassword(password) {
  const upperCase = password.match(/[A-Z]/g);
  const lowerCase = password.match(/[a-z]/g);
  const numbers = password.match(/[0-9]/g);
  const specialChar = password.match(/[#@!$%^&*()]/g);
  const [...final] = [upperCase, lowerCase, numbers, specialChar];

  return final.every(elem => (elem ? elem.length >= 2 : false));
}

export function ValidateName(name) {
  return /^[a-zA-Z]+$/.test(name);
}

export function ValidateAddress(address) {
  return address.length >= 10;
}

export function ValidateMobile(mobile) {
  return /^[0-9]+$/.test(mobile);
}

export function ValidateCountryCode(code) {
  if (code === '+91' || code === '+1') return true;
  return false;
}

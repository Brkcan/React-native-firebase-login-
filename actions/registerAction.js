export const EMAIL_CHANGEDRegister = 'email_ChangedRegister';
export const PASSWORD_CHANGERegister = 'password_ChangedRegister';

export const emailChanged = (text) => {
  return {
    type : EMAIL_CHANGEDRegister,
    payload: text
  };
}
export const passwordChanged = (text) => {
  return {
    type : PASSWORD_CHANGERegister,
    payload: text
  };
}

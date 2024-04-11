export interface registerDataError {
  allRequired: boolean;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  submitForm: boolean;
}

export const isValidEmail = (email: string): boolean => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

export const isValidPassword = (password: string): string => {
    if (!password) {
      return "Password must be provided";
    } else if (password.length < 8) {
      return "Password must be at least 8 characters long";
    } else if (!/\d/.test(password)) {
      return "Password must contain at least one digit";
    } else if (!/[!@#$%^&*]/.test(password)) {
      return "Password must contain at least one special character";
    } else if (!/[a-zA-Z]/.test(password)) {
      return "Password must contain at least one letter";
    }
    return "";
  };

export const validRegisterData = (data: any): registerDataError => {
  let err: registerDataError = {
    allRequired: false,
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    submitForm: true,
  };
  if (!data) {
    err.allRequired = true;
    err.submitForm = false;
    return err;
  }
  if (!data.email) {
    err.email = "Email must be provided";
    err.submitForm = false;
  } else {
    const res = isValidEmail(data.email);
    if (!res) {
      err.email = "Invalid email";
      err.submitForm = false;
    }
  }
  if (!data.username) {
    err.username = "Username must be provided";
    err.submitForm = false;
  }
  err.password = isValidPassword(data.password);
  if (data.password !== data.confirmPassword) {
    err.confirmPassword = "Password did not match";
    err.submitForm = false;
  }
  return err;
};

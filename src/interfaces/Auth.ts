export interface UserCredentials {
  userName: string;
  password: string;
}

export interface AccountDetails {
  userName: string;
  email: string;
  password: string;
}

export interface RegisterDetails extends AccountDetails {
  passwordAgain: string;
}

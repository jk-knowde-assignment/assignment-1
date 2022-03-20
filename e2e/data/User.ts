export class User {
  login: string;
  password: string;

  public static Standard : User = {
    login: 'standard_user',
    password: 'secret_sauce'
  }
}
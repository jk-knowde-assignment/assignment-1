export class PersonalDetails {
  public firstName : string;
  public lastName : string;
  public postalCode : string;

  public static Default : PersonalDetails = {
    firstName: 'first',
    lastName: 'last',
    postalCode: '000'
  }
}
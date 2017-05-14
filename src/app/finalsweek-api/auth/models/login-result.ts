export class LoginResult {
  constructor(public success: boolean,
              public token: string = null,
              public error: string = null) {
  }
}

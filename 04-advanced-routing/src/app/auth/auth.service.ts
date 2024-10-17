import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private currentUser: string | null = null;

  constructor() {}

  login(username: string) {
    this.currentUser = username;
  }

  getUser() {
    return this.currentUser;
  }
}

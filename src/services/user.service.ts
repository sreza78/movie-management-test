import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    {id : 1, name : "سید رضا سفیدگر", username: "reza", password:"12345"},
    {id : 2, name : "حسن طنابی", username: "tanabi", password:"67890"}
  ]

  constructor() { }

  login(username : string, password : string) {
    return new Promise<User>((res, rej) =>{
      this.users.forEach(user => {
        if(user.username === username && user.password === password) return res(user);
      });
      return rej();
    })
  }

  get(id : number){
    return new Promise<User>((res, rej) =>{
      this.users.forEach(user => {
        if(user.id === id) return res(user);
      });
      return rej();
    })
  }
}

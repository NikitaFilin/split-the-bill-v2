import { makeAutoObservable } from "mobx";

export class UsersStore {
  users: Array<unknown>;

  constructor() {
    this.users = [];
    makeAutoObservable(this);
  }

  // increment() {
  //   this.count += 1;
  // }

  // decrement() {
  //   this.count -= 1;
  // }
}

export const usersStore = new UsersStore();

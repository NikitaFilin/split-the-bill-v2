import { UsersStore } from "./users-store";
import { makeAutoObservable } from "mobx";

export class RootStore {
  usersStore: UsersStore;

  constructor() {
    this.usersStore = new UsersStore();
    makeAutoObservable(this);
  }
}

export const rootStore = new RootStore();

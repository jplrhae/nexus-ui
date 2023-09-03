import { IProject, rawProjectItems } from "../interfaces/IProject";
import {
  IUser,
  rawUser,
  rawUserItems1,
  rawUserItems2,
} from "../interfaces/IUser";

export interface IMockDatabase {
  users: IUser[];
  projects: IProject[];
}

export const mockDatabase: IMockDatabase = {
  users: { ...rawUser, ...rawUserItems1, ...rawUserItems2 },
  projects: rawProjectItems,
};

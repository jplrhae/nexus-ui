import { createContext } from "react";
import { IProject, rawProjectItems } from "../interfaces/IProject";
import { IUser, rawUserItems1, rawUserItems2 } from "../interfaces/IUser";
import MockDatabaseService from "./MockDatabaseService";
import {
  IUserRelation,
  rawUserRelationItems,
} from "../interfaces/IUserRelation";

export interface IMockDatabaseContext {
  mockDatabase: IMockDatabase;
  mockDatabaseService: MockDatabaseService;
}

export interface IMockDatabase {
  users: IUser[];
  projects: IProject[];
  userRelations: IUserRelation[];
}

export const mockDatabase: IMockDatabase = {
  users: [...rawUserItems1, ...rawUserItems2],
  projects: rawProjectItems,
  userRelations: rawUserRelationItems,
};

export const MockDatabaseContext = createContext<IMockDatabaseContext>({
  mockDatabase: mockDatabase,
  mockDatabaseService: new MockDatabaseService(mockDatabase),
});

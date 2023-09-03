import { createContext } from "react";
import { IProject, rawProjectItems } from "../interfaces/IProject";
import { IUser, rawUserItems1, rawUserItems2 } from "../interfaces/IUser";
import MockDatabaseService from "./MockDatabaseService";
import {
  IUserRelation,
  rawUserRelationItems,
} from "../interfaces/IUserRelation";
import {
  ISkill,
  IUserSkill,
  rawSkillItems,
  rawUserSkillItems,
} from "../interfaces/ISkills";

export interface IMockDatabase {
  users: IUser[];
  projects: IProject[];
  userRelations: IUserRelation[];
  skills: ISkill[];
  userSkills: IUserSkill[];
}

export interface INexusMockContext {
  mockDatabase: IMockDatabase;
  mockDatabaseService: MockDatabaseService;
  loggedUser: IUser | undefined;
}

export const mockDatabase: IMockDatabase = {
  users: [...rawUserItems1, ...rawUserItems2],
  projects: rawProjectItems,
  userRelations: rawUserRelationItems,
  skills: rawSkillItems,
  userSkills: rawUserSkillItems,
};

export const defaultNexusMockContext: INexusMockContext = {
  mockDatabase: mockDatabase,
  mockDatabaseService: new MockDatabaseService(mockDatabase),
  loggedUser: undefined,
};

export const NexusMockContext = createContext<INexusMockContext>(
  defaultNexusMockContext
);

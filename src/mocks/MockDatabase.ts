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

export interface IMockDatabaseContext {
  mockDatabase: IMockDatabase;
  mockDatabaseService: MockDatabaseService;
}

export const mockDatabase: IMockDatabase = {
  users: [...rawUserItems1, ...rawUserItems2],
  projects: rawProjectItems,
  userRelations: rawUserRelationItems,
  skills: rawSkillItems,
  userSkills: rawUserSkillItems,
};

export const MockDatabaseContext = createContext<IMockDatabaseContext>({
  mockDatabase: mockDatabase,
  mockDatabaseService: new MockDatabaseService(mockDatabase),
});

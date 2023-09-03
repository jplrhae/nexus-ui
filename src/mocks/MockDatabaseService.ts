import { IMockDatabase } from "./MockDatabase";

export default class MockDatabaseService {
  private mockDatabase: IMockDatabase;

  constructor(mockDatabase: IMockDatabase) {
    this.mockDatabase = mockDatabase;
  }

  public findUserById(id: number) {
    console.log("Finding user by ID", id);

    const user = this.mockDatabase.users.filter((user) => user.id === id)[0];

    console.log("Found user", user);

    return user;
  }

  public findProjectsByUserId(userId: number) {
    console.log("Finding projects by user ID", userId);

    const projects = this.mockDatabase.projects.filter(
      (project) => project.userId === userId
    );

    console.log("Found projects", projects);

    return projects;
  }

  public findUserFollowersByUserId(userId: number) {
    console.log("Finding user followers by user ID", userId);

    const userFollowerRelations = this.mockDatabase.userRelations.filter(
      (userRelation) => userRelation.followedUserId === userId
    );

    console.log("Found user follower relations", userFollowerRelations);

    return userFollowerRelations;
  }

  public findUserFollowingsByUserId(userId: number) {
    console.log("Finding user followings by user ID", userId);

    const userFollowingRelations = this.mockDatabase.userRelations.filter(
      (userRelation) => userRelation.followingUserId === userId
    );

    console.log("Found user following relations", userFollowingRelations);

    return userFollowingRelations;
  }
}

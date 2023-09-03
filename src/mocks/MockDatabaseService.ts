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

  public findUserByUsername(username: string) {
    console.log("Finding user by username", username);

    const user = this.mockDatabase.users.filter(
      (user) => user.username === username
    )[0];

    console.log("Found user", user);

    return user;
  }

  public findUsersBySkillId(skillId: number) {
    console.log("Finding users by skill ID", skillId);

    const userSkills = this.mockDatabase.userSkills.filter(
      (userSkill) => userSkill.skillId === skillId
    );

    const users = userSkills.map((userSkill) =>
      this.findUserById(userSkill.userId)
    );

    console.log("Found users", users);

    return users;
  }

  public findProjectsByUserId(userId: number) {
    console.log("Finding projects by user ID", userId);

    const projects = this.mockDatabase.projects.filter(
      (project) => project.userId === userId
    );

    console.log("Found projects", projects);

    return projects;
  }

  public findAllProjects() {
    console.log("Finding all projects");

    const projects = this.mockDatabase.projects;

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

  public findUserSkillsByUserId(userId: number) {
    console.log("Finding user skills by user ID", userId);

    const userSkills = this.mockDatabase.userSkills.filter(
      (userSkill) => userSkill.userId === userId
    );

    console.log("Found user skills", userSkills);

    return userSkills;
  }

  public findSkillById(skillId: number) {
    console.log("Finding skill by ID", skillId);

    const skill = this.mockDatabase.skills.filter(
      (skill) => skill.id === skillId
    )[0];

    console.log("Found skill", skill);

    return skill;
  }

  public findSkillsByUserId(userId: number) {
    console.log("Finding skills by user ID", userId);

    const userSkills = this.findUserSkillsByUserId(userId);

    const skills = userSkills.map((userSkill) =>
      this.findSkillById(userSkill.skillId)
    );

    console.log("Found skills", skills);

    return skills;
  }

  public findAllSkills() {
    console.log("Finding all skills");

    const skills = this.mockDatabase.skills;

    console.log("Found skills", skills);

    return skills;
  }

  public generateId(attrName: string): number {
    let id = 0;
    if (attrName === "user") {
      console.log("Generating user ID");

      const lastId =
        this.mockDatabase.users[this.mockDatabase.users.length - 1].id;

      id = lastId + 1;

      console.log("Generated user ID", id);
    } else if (attrName === "skill") {
      console.log("Generating skill ID");

      const lastId =
        this.mockDatabase.skills[this.mockDatabase.skills.length - 1].id;

      id = lastId + 1;

      console.log("Generated skill ID", id);
    } else if (attrName === "userSkill") {
      console.log("Generating user skill ID");

      const lastId =
        this.mockDatabase.userSkills[this.mockDatabase.userSkills.length - 1]
          .id;

      id = lastId + 1;

      console.log("Generated user skill ID", id);
    }

    return id;
  }

  public isDuplicateUsername(username: string) {
    console.log("Checking if username is duplicate", username);

    const isDuplicate = this.mockDatabase.users.some(
      (user) => user.username === username
    );

    console.log("Is duplicate", isDuplicate);

    return isDuplicate;
  }
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  about: string;
  birthDate: Date;
}

export const rawUser: IUser = {
  id: 33,
  name: "Joshua Alves",
  about: "I am a microelectronics engineer.",
  username: "jplrhae",
  email: "joshualoesch@gmail.com",
  birthDate: new Date("2002-31-10"),
};

export const rawUserItems1: IUser[] = [
  {
    id: 1,
    name: "Alice Johnson",
    username: "alicej",
    about:
      "Microelectronics enthusiast working on cutting-edge semiconductor research.",
    email: "alice@example.com",
    birthDate: new Date("1990-05-15"),
  },
  {
    id: 2,
    name: "Ethan Adams",
    username: "ethana",
    about:
      "Software engineer with a passion for developing semiconductor test solutions.",
    email: "ethan@example.com",
    birthDate: new Date("1985-12-10"),
  },
  {
    id: 3,
    name: "Sophia Martinez",
    username: "sophiam",
    about:
      "Microelectronics designer specializing in low-power semiconductor devices.",
    email: "sophia@example.com",
    birthDate: new Date("1992-08-25"),
  },
  {
    id: 4,
    name: "Oliver Brown",
    username: "oliverb",
    about:
      "Full-stack developer contributing to semiconductor simulation software.",
    email: "oliver@example.com",
    birthDate: new Date("1988-03-05"),
  },
  {
    id: 5,
    name: "Emma Wilson",
    username: "emmaw",
    about: "AI enthusiast exploring semiconductor manufacturing optimization.",
    email: "emma@example.com",
    birthDate: new Date("1995-07-18"),
  },
  {
    id: 6,
    name: "Liam Davis",
    username: "liamd",
    about:
      "Mobile app developer creating apps for semiconductor equipment control.",
    email: "liam@example.com",
    birthDate: new Date("1993-02-09"),
  },
  {
    id: 7,
    name: "Ava Smith",
    username: "avas",
    about:
      "Data scientist specializing in semiconductor data analysis and modeling.",
    email: "ava@example.com",
    birthDate: new Date("1991-11-30"),
  },
  {
    id: 8,
    name: "Noah Turner",
    username: "noaht",
    about: "DevOps engineer streamlining semiconductor toolchain workflows.",
    email: "noah@example.com",
    birthDate: new Date("1989-04-22"),
  },
  {
    id: 9,
    name: "Isabella Lee",
    username: "isabellal",
    about: "Passionate about open-source semiconductor simulation projects.",
    email: "isabella@example.com",
    birthDate: new Date("1994-09-12"),
  },
  {
    id: 10,
    name: "Mia Harris",
    username: "miah",
    about:
      "Web designer creating websites for semiconductor equipment manufacturers.",
    email: "mia@example.com",
    birthDate: new Date("1987-06-07"),
  },
];

export const rawUserItems2: IUser[] = [
  {
    id: 11,
    name: "Liam Johnson",
    username: "liamj",
    about:
      "Experienced software engineer in semiconductor automation and control systems.",
    email: "liam@example.com",
    birthDate: new Date("1986-10-14"),
  },
  {
    id: 12,
    name: "Emma Williams",
    username: "emmaw",
    about:
      "Front-end developer specializing in user interfaces for semiconductor tools.",
    email: "emma@example.com",
    birthDate: new Date("1990-07-26"),
  },
  {
    id: 13,
    name: "Oliver Davis",
    username: "oliverd",
    about:
      "AI researcher exploring semiconductor materials and quantum computing.",
    email: "oliver@example.com",
    birthDate: new Date("1988-02-18"),
  },
  {
    id: 14,
    name: "Ava Brown",
    username: "avab",
    about:
      "Mobile app developer creating apps for semiconductor device monitoring.",
    email: "ava@example.com",
    birthDate: new Date("1993-09-03"),
  },
  {
    id: 15,
    name: "Noah Smith",
    username: "noahs",
    about:
      "Data scientist specializing in semiconductor yield analysis and optimization.",
    email: "noah@example.com",
    birthDate: new Date("1995-04-07"),
  },
  {
    id: 16,
    name: "Sophia Taylor",
    username: "sophiat",
    about:
      "UI/UX designer creating intuitive interfaces for semiconductor equipment control.",
    email: "sophia@example.com",
    birthDate: new Date("1989-12-21"),
  },
  {
    id: 17,
    name: "Isabella Anderson",
    username: "isabellaa",
    about:
      "Full-stack developer working on semiconductor manufacturing process optimization.",
    email: "isabella@example.com",
    birthDate: new Date("1991-03-15"),
  },
  {
    id: 18,
    name: "Mia Garcia",
    username: "miag",
    about:
      "DevOps engineer automating semiconductor fabrication workflow processes.",
    email: "mia@example.com",
    birthDate: new Date("1987-08-29"),
  },
  {
    id: 19,
    name: "Ethan Hernandez",
    username: "ethanh",
    about:
      "Passionate about open-source semiconductor simulation tools and libraries.",
    email: "ethan@example.com",
    birthDate: new Date("1992-01-11"),
  },
  {
    id: 20,
    name: "Sophia Rodriguez",
    username: "sophiar",
    about:
      "Web designer dedicated to creating visually stunning semiconductor-related websites.",
    email: "sophia@example.com",
    birthDate: new Date("1994-06-25"),
  },
  {
    id: 21,
    name: "Olivia King",
    username: "oliviak",
    about:
      "Backend developer specializing in semiconductor database management.",
    email: "olivia@example.com",
    birthDate: new Date("1986-03-02"),
  },
  {
    id: 22,
    name: "William Turner",
    username: "williamt",
    about:
      "AI enthusiast exploring semiconductor device modeling and simulation.",
    email: "william@example.com",
    birthDate: new Date("1985-09-14"),
  },
  {
    id: 23,
    name: "Emily Clark",
    username: "emilyc",
    about:
      "Experienced mobile app developer creating semiconductor-related apps.",
    email: "emily@example.com",
    birthDate: new Date("1993-12-08"),
  },
  {
    id: 24,
    name: "James Baker",
    username: "jamesb",
    about:
      "Data scientist leveraging data analysis for semiconductor process optimization.",
    email: "james@example.com",
    birthDate: new Date("1990-01-27"),
  },
  {
    id: 25,
    name: "Ava Nelson",
    username: "avan",
    about:
      "Web developer passionate about creating responsive and accessible semiconductor-related websites.",
    email: "ava@example.com",
    birthDate: new Date("1988-06-19"),
  },
  {
    id: 26,
    name: "Lucas Hill",
    username: "lucash",
    about:
      "Software engineer experienced in building scalable and maintainable semiconductor systems.",
    email: "lucas@example.com",
    birthDate: new Date("1994-10-31"),
  },
  {
    id: 27,
    name: "Emma White",
    username: "emmawh",
    about:
      "UI/UX designer with a love for creating elegant and user-centric semiconductor-related designs.",
    email: "emma@example.com",
    birthDate: new Date("1991-04-23"),
  },
  {
    id: 28,
    name: "Ella Lewis",
    username: "ellal",
    about:
      "Full-stack developer with expertise in JavaScript and modern semiconductor technologies.",
    email: "ella@example.com",
    birthDate: new Date("1992-07-15"),
  },
  {
    id: 29,
    name: "Daniel Young",
    username: "daniely",
    about:
      "DevOps engineer automating cloud infrastructure for semiconductor companies.",
    email: "daniel@example.com",
    birthDate: new Date("1987-05-07"),
  },
  {
    id: 30,
    name: "Oliver Walker",
    username: "oliverw",
    about:
      "Front-end developer passionate about responsive web design for semiconductor applications.",
    email: "oliver@example.com",
    birthDate: new Date("1993-11-11"),
  },
  {
    id: 31,
    name: "Mia Hall",
    username: "miah",
    about:
      "AI researcher exploring the applications of deep learning in semiconductor manufacturing.",
    email: "mia@example.com",
    birthDate: new Date("1995-03-04"),
  },
  {
    id: 32,
    name: "Ethan Turner",
    username: "ethant",
    about:
      "Mobile app developer with experience in cross-platform app development for semiconductor devices.",
    email: "ethan@example.com",
    birthDate: new Date("1992-06-16"),
  },
];

import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: await bcrypt.hash("123456", 10),
    isAdmin: true,
  },
  {
    name: "Ammar Zahid",
    email: "ammar@email.com",
    password: await bcrypt.hash("123456", 10),
    isAdmin: false,
  },
  {
    name: "Noman Khan",
    email: "noman@email.com",
    password: await bcrypt.hash("123456", 10),
    isAdmin: false,
  },
];

export default users;

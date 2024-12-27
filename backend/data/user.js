import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Adam user',
    emial: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    emial: 'john@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Nathan Doe',
    emial: 'nathan@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
];

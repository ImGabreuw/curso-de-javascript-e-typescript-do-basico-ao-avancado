type User = {
  username: string;
  password: string;
};

type VerifyUserFn = (user: User, sentValue: User) => boolean;

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const dbUser = { username: 'João', password: '123456' };
const sentValue = { username: 'João', password: '123456' };

const loggedIn = verifyUser(dbUser, sentValue);

console.log(loggedIn);

import md5 from "md5";

const gravatarmd5 = email => {
  const hash = md5(email);
  return `https://www.gravatar.com/avatar/${hash}.jpg?d=identicon`;
};

export default gravatarmd5;
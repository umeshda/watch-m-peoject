import bcrypt from "bcrypt";


//ctreating two function
//1.for hashing password
export const hashPassword = async (password) => {  //as a argument password received
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

//2. for compareing the password
export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
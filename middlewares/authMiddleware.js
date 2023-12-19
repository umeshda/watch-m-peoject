import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//Protected Routes token base
export const requireSignIn = async (req, res, next) => { //req get kiye then next call then rep
  try {
    const decode = JWT.verify(   //incript here
      req.headers.authorization,  //get token
      process.env.JWT_SECRET  //this is decode key
    );
    req.user = decode;  //jb tk id nhi milti tb tk decode nhi hoga(decript here)
    next();
  } catch (error) {
    console.log(error);
  }
};

//admin acceess
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);//(login controller me user ko pass krwaya tha wo user hai ye)
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next(); //further exicution chalu rhega ager user dmin hai to
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};
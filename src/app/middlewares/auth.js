import jwt from "jsonwebtoken";
import { promisify } from "util";

import authConfig from "../../config/auth";

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // console.log({ authHeader });

  if (!authHeader) {
    return res.status(401).json({ error: "Token is not provided." });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;

    console.log({ decoded });

    return next();
  } catch (error) {
    return res.status(401).json({ error: "Token invalid." });
  }

  // Realiza uma checkagem no corpo da requisição no Headers
  // procurando pelo campo "authorization" contendo o valor "secret"
  // const authHeader = req.headers.authorization;

  // if (authHeader && authHeader === "secret") {
  //   return next();
  // }

  // return res
  //   .status(401)
  //   .json({ error: "User not allowed to access this API." });
};

const express = require("express");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const { promisify } = require("util");

require("dotenv").config();
const User = require("./model/user.model");

const connect = require("./Config/db");

const app = express();
app.use(express.json());

app.post("/signup", signUp);
app.post("/login", login);
app.get("/api/user_details", findUserDetails);
app.get("/api/filterUser", findFilterUser);

const port = process.env.PORT || 8082;
app.listen(port, async function () {
  try {
    await connect();
    console.log("listening on port " + port);
  } catch (e) {
    console.log("error " + e.message);
  }
});

async function signUp(req, res) {
  try {
    let user = await User.create({
      uid: uuidv4(),
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      mobile: req.body.mobile,
      password: req.body.password,
      role: req.body.role,
      status: req.body.status,
    });

    res.status(200).json({
      status: "Account successfully created&quot",
      user,
    });
  } catch (e) {
    res.status(501).send({ status: "fail", message: e.message });
  }
}

async function login(req, res) {
  try {
    const { email, password, role } = req.body;

    // Check if the user has provided email, role and password

    if (!email || !password || !role) {
      return res.status(501).json({
        status: "fail",
        message: "Please provide valid email, role and password ",
      });
    }
    let user = await User.findOne({ email }).select("+password");

    // user with provided email is present, password and role is correct
    if (
      !user ||
      !(await user.checkPassword(req.body.password)) ||
      user.role !== role
    ) {
      return res.status(501).json({
        status: "fail",
        message: "Please provide valid email, password and role ",
      });
    }

    //then create the token for that user

    const token = jwt.sign(
      { uid: user.uid, email },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    //remove password from data that needs to be sent
    user.password = undefined;

    return res.status(200).json({
      message: "Logged in successfully",
      data: user,
      token,
    });
  } catch (e) {
    res.status(501).send({ status: "fail", message: e.message });
  }
}

async function findUserDetails(req, res) {
  try {
    // 1) Getting token and check of its's there
    let token = req?.headers?.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        status: "fail",
        message: "No token, authorization denied",
      }); // 401 Unauthorized
    }

    // 2) Verification of token
    const decoded = await promisify(jwt.verify)(
      token,
      process.env.JWT_SECRET_KEY
    );

    const user = await User.findOne({ uid: decoded.uid });
    res.status(200).json({ data: user });
  } catch (e) {
    res.status(401).send({ status: "fail", message: e.message });
  }
}

async function findFilterUser(req, res) {
  try {
    const filter = {};
    if (req.query.first_name) filter.first_name = req.query.first_name;
    if (req.query.email) filter.email = req.query.email;
    if (req.query.mobile) filter.mobile = req.query.mobile;
    if (req.query.status) filter.status = req.query.status;
    if (req.query.role) filter.role = req.query.role;

    const user = await User.find(filter);
    res.status(200).json({ status: "OK", user });
  } catch (e) {
    res.status(501).send({ status: "fail", message: e.message });
  }
}

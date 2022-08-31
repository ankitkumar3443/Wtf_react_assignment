const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


let userSchema = new mongoose.Schema({
  uid: {
    type: String
  },

  first_name: {
    type: String,
    required: [true, "Please tell us your first name"],
  },
  last_name: {
    type: String,
    required: [true, "Please tell us your last name"],
  },

  email: {
    type: String,
    required: [true, "Please provide your email address"],
    unique: true, 
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  mobile: {
    type: Number,
    required: [true, "Please tell us your last name"],
    unique: true,
    minLength: 10,
    maxLength: 10,
  },
  password: { type: String, required: true,select:false,
    validate:{
        validator: function(val) {
            if(val.length<8)return false;
            let caps_letter=false;
            let spa_letter=false; 
            for(let i = 0; i < val.length; i++){
                if(val[i]>='A' && val[i]<='Z')caps_letter=true;
                else if("~`!@#$%^&*()_+=/<>,;:".includes(val[i]))spa_letter=true;

                if(caps_letter && spa_letter)return true;
            }
            return false;
        },
        message: "Please enter a valid password"
    }
},
  role: { type: String, required: true, enum: ["admin", "member", "trainer"] },
  status: { type: String, required: true, enum: ["active", "inactive"] },
});


userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 8);
    next();
});

userSchema.methods.checkPassword = async function (password){
    return await bcrypt.compare(password, this.password);
}

const User = mongoose.model("user", userSchema);

module.exports = User;

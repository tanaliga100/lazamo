"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = __importDefault(require("validator"));
const UserSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        minlength: 3,
        maxlength: 50,
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        validate: {
            validator: function (email) {
                return validator_1.default.isEmail(email);
            },
            message: "Please provide a valid email address",
        },
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: 6,
        maxlength: 100,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
});
// HASHED THE PASSWORD HERE || No params needed cause value is in the schema
// UserSchema.pre("save", async function () {
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });
// GENERATE TOKEN HERE || use if the user properly authenticated;
UserSchema.methods.createJWT = function () {
    return jsonwebtoken_1.default.sign({ userId: this._id, name: this.name, email: this.email }, process.env.JWT_SECRET || "jwt_secret", {
        expiresIn: "1d",
    });
};
// COMPARE PASSWORD
UserSchema.methods.comparePassword = function (candidatePassword) {
    return __awaiter(this, void 0, void 0, function* () {
        const isMatch = yield bcryptjs_1.default.compare(candidatePassword, this.password);
        return isMatch;
    });
};
const User = mongoose_1.default.model("User", UserSchema);
exports.default = User;

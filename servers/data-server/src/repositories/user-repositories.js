import bcrypt from 'bcrypt';
import User from "../models/User.js";
import { userTokenCreation } from '../utils/token-utils.js';

async function register(data) {
    const userData = data;

    for (const data in userData) {
        if (!userData[data]) {
            throw new Error(`Empty field found!`);
        }
    }

    if (userData.password !== userData.rePass) {
        throw new Error("Passwords do not match!");
    }

    const isEmailUsed = await User.findOne({ email: userData.email }).select('email').lean();

    if (isEmailUsed) {
        throw new Error("A user with this email already exists!");
    }

    userData.password = await bcrypt.hash(userData.password, 13);

    const newUser = await User.create(userData);

    const token = userTokenCreation(newUser);
    const { _id } = newUser;

    return [token, _id];

}

async function login(data) {
    const loginData = data;

    const foundUser = await User.findOne({ email: loginData.email }).select('email password _id').lean();

    if (!foundUser) {
        throw new Error("Invalid email or password!");
    }

    const isPasswordValid = await bcrypt.compare(loginData.password, foundUser.password);

    if (!isPasswordValid) {
        throw new Error("Invalid email or password!");
    }

    const token = userTokenCreation(foundUser);
    const { _id } = foundUser;

    return [token, _id];
}

async function fetchUserAndPopulatePosts(userId) {
    const userData = await User.findById(userId).select('-password -updatedAt -email -friends');

    await userData.populate('createdPosts');

    return userData
}

async function attachPostToUser(ownerId, postId) {
    const userPosts = await User.findById(ownerId);

    userPosts.createdPosts.push(postId);

    await userPosts.save();
}

async function getAllUsers() {
    const allUsers = await User.find({}).select('firstName lastName createdPosts createdAt imageUrl').lean();

    return allUsers;
}

const userRepositories = {
    fetchUserAndPopulatePosts,
    attachPostToUser,
    getAllUsers,
    register,
    login,
}

export default userRepositories;
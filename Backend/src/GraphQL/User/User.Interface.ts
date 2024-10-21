export interface User {
    _id: string; // ID type, using string for MongoDB ObjectId
    username: string; // username field
    name: string; // name field
    password: string; // password field (consider handling securely)
    profilePicture: string; // URL or path to profile picture
    gender: string; // gender field
}
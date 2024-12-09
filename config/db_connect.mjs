import mongoose from "mongoose";

export default async function db_connect(url) {
    await mongoose.connect(url)
        .then(()=>console.log('Connected db'))
        .catch((err)=>console.log(err))
};
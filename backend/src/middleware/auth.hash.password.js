import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

export const Hashing = async (password) => {
    const salt_rounds = Number(process.env.SALT_ROUNDS_HASH);
    const hash_pass = await bcrypt.hash(password, salt_rounds);

    return hash_pass;
}
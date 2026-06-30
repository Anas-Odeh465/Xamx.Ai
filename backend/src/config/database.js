import prisma from "./prisma.js";
import chalk from "chalk";

export const checkConnection = async () => {
    try{
        await prisma.$connect();
        console.log(chalk.green.bold("[DATABASE]"), chalk.green('Database connected successfull'));
    }catch(error){
        console.error(chalk.red.bold("[DATABASE]"), chalk.red('Database connection failed'));
        process.exit(1);
    }
}


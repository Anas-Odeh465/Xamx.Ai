import { checkConnection } from "./config/database.js";
import { verifySMTP } from "./config/smtp.js";
import "./config/env.config.js";
import app from "./app.js";
import chalk from "chalk";


const PORT = process.env.SERVER_PORT || 5000;

await verifySMTP();
await checkConnection();

app.listen(PORT, () => {
    console.log(chalk.green.bold('[SERVER]'), chalk.green(`Server running on port: ${PORT}`));
});
import { fileURLToPath } from "url";
import fs from "fs/promises";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const templatesLoader = async (templateName, variables = {}) => {
    const templatePath = path.join(__dirname, "../../templates", `${templateName}.html`);
    let template = await fs.readFile(templatePath, 'utf-8');

    Object.entries(variables).forEach(([key, value]) => {
        template = template.replaceAll(`{{${key}}}`, value);
    });
    
    return template;
}
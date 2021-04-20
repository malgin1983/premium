"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const PORT = process.env.PORT || 5500;
async function startServer() {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        await app.listen(PORT);
    }
    catch (e) {
        console.error(e);
    }
}
startServer().then((r) => console.log(`Server started in http://localhost:${PORT}`));
//# sourceMappingURL=main.js.map
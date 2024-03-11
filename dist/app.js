"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const router_1 = require("./router");
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    return res.status(200).send({ message: 'API is ready to use' });
});
app.use('/api', router_1.default);
app.listen(port, () => {
    console.log(`Connected on port ${port}`);
});
//# sourceMappingURL=app.js.map
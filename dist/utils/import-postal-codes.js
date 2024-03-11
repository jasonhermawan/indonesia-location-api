"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const models_1 = require("../../models");
const dotenv = require("dotenv");
dotenv.config();
const importData = async () => {
    try {
        const postalCodes = await axios_1.default.get(`${process.env.POSTAL_CODE_API}`);
        await models_1.postal_codes.bulkCreate(postalCodes.data.map((item) => ({
            village: item.village,
            postalCode: item.postal.toString(),
        })));
        console.log('Data imported');
    }
    catch (error) {
        console.log(error);
    }
};
importData();
//# sourceMappingURL=import-postal-codes.js.map
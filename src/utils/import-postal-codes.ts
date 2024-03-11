import axios from 'axios';
import { postal_codes } from '../../models';
import * as dotenv from 'dotenv';

dotenv.config();

const importData = async () => {
  try {
    const postalCodes = await axios.get(`${process.env.POSTAL_CODE_API}`);
    await postal_codes.bulkCreate(
      postalCodes.data.map((item) => ({
        village: item.village,
        postalCode: item.postal.toString(),
      })),
    );
    console.log('Data imported');
  } catch (error) {
    console.log(error);
  }
};

importData();

import { villages } from '../../../models';

export const getVillageService = async (query: any) => {
  try {
    const result = await villages.findAll({
      where: query,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

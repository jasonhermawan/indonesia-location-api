import { provinces, cities } from '../../../models';

export const getProvinceService = async (query: any) => {
  try {
    const result = await provinces.findAll({
      where: query,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

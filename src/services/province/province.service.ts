import { provinces, cities } from '../../../models';

export const getProvinceService = async (query: any) => {
  try {
    const result = await provinces.findAll({
      where: query,
      include: [
        {
          model: cities,
          required: false,
        },
      ],
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

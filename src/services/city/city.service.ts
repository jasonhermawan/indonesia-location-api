import { cities, districts } from '../../../models';

export const getCityService = async (query: any) => {
  try {
    const result = await cities.findAll({
      where: query,
      attributes: {
        exclude: ['latitude', 'longitude', 'createdAt', 'updatedAt'],
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

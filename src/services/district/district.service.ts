import { districts, villages } from '../../../models';

export const getDistrictService = async (query: any) => {
  try {
    const result = await districts.findAll({
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

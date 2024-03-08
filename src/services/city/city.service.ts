import { cities, districts } from '../../../models';

export const getCityService = async (query: any) => {
  try {
    const result = await cities.findAll({
      where: query,
      include: [
        {
          model: districts,
          required: false,
        },
      ],
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

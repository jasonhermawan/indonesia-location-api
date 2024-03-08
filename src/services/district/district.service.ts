import { districts, villages } from '../../../models';

export const getDistrictService = async (query: any) => {
  try {
    const result = await districts.findAll({
      where: query,
      include: [
        {
          model: villages,
          required: false,
        },
      ],
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

import { postal_codes } from '../../../models';

export const getPostalCodeService = async (query: any) => {
  try {
    const result = await postal_codes.findAll({
      where: query,
      attributes: {
        exclude: [ 'createdAt', 'updatedAt'],
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

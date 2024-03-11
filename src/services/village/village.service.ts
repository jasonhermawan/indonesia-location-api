import { villages, postal_codes } from '../../../models';

export const getVillageService = async (query: any) => {
  try {
    const villagesData = await villages.findAll({
      where: query,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    const postalCodeMap = new Map();
    const postalCodeData = await postal_codes.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    postalCodeData.forEach((postalCode) => {
      const postalCodes = postalCodeMap.get(postalCode.village) || [];
      postalCodes.push(postalCode.postalCode);
      postalCodeMap.set(postalCode.village, postalCodes);
    });

    const result = villagesData.map((village) => {
      return {
        id: village.id,
        districtId: village.districtId,
        name: village.name,
        postalCodes: postalCodeMap.get(village.name) || [],
      };
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

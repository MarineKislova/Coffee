export const prepareCardsData = (items, options = {}) => {
  const { ids = null, omitFields = [] } = options;
  let result = items;

  if (Array.isArray(ids)) {
    result = result.filter((item) => ids.includes(item.id));
  }

  if (omitFields.length > 0) {
    result = result.map((item) => {
      const newItem = { ...item };
      omitFields.forEach((field) => delete newItem[field]);
      return newItem;
    });
  }

  return result;
};

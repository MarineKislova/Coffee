import { cardsItems } from "./cardsItemsData";


export const getFilteredCards = (items, options = {}) => {
    const { ids = null } = options;
  
    if (Array.isArray(ids)) {
      return items.filter(item => ids.includes(item.id));
    }
  
    return items;
  };


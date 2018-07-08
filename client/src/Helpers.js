export const generateUniqueID = () =>  {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

 export function sortArrayAlphabetically(array) {
  array.sort((a, b) => {
    const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
    if (nameA < nameB) 
        return -1;
    if (nameA > nameB)
        return 1;
    return 0; 
   });

   return array;
 }

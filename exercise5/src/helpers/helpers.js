export default {
  // group an array by key and returns an object containing percentage for each group
  // ex: groupByKey([{color: 'blue'}, {color: 'green'}, {color: 'blue'}, {color: 'blue'}], 'color')  =>  {blue: 0.75, green: 0.25}
  groupByKey(array, key) {
    // TODO: implement logic here
    if (array.length === 0) {
      return 0;
    }
    const result = array.reduce((acc, obj) => {
      const value = obj[key];
      if (!acc[value]) {
        acc[value] = 0;
      }
      acc[value] += 1;
      return acc;
    }, {});
    Object.keys(result).map((k) => {
      result[k] /= array.length;
    });
    return result;
  },
  // get the value of an object at a given dotted path
  // ex: getValueAtPath({my: {dotted: {path: 123}}}, 'my.dotted.path')  =>  123
  getValueAtPath(obj, path, defaultValue='none') {
    // TODO: implement logic here
    let dataObj = obj;
    const dotPath = path.split('.');
    for (let i = 0; i < dotPath.length; i++) {
      const value = dotPath[i];
      if (!dataObj[value]) {
        return defaultValue;
      } else {
        dataObj = dataObj[value];
      }
    }
    return dataObj;
  },
};

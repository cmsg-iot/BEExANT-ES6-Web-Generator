export const setLocalStorage = (props = {}) => {
  console.log(props);
  for (const key in props) {
    if (Object.hasOwnProperty.call(props, key)) {
      const element = props[key];
      localStorage.setItem(key, element);
    }
  }
};

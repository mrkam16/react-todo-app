export const saveData = (data) => {
  const jsonData = JSON.stringify(data);

  localStorage.setItem("items", jsonData);
};

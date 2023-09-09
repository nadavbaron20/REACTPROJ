export const handleChange = (e, servSign, formValues, setFormValues) => {
  const value = e.target.value;
  const updatedFormValues = { ...formValues };

  // Split the servSign by '.' to handle nested properties
  const keys = servSign.split(".");
  let currentLevel = updatedFormValues;

  // Traverse through the keys to reach the nested property
  for (let i = 0; i < keys.length; i++) {
    if (i === keys.length - 1) {
      // Set the value for the final key
      currentLevel[keys[i]] = value;
    } else {
      // Create nested objects if they don't exist
      if (!currentLevel[keys[i]]) {
        currentLevel[keys[i]] = {};
      }
      // Move to the next level
      currentLevel = currentLevel[keys[i]];
    }
  }

  setFormValues(updatedFormValues);
};

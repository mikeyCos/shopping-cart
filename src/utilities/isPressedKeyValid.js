const allowedKeys = ["backspace", "shift", "tab", "arrowleft", "arrowright"];

/* If is key is a number, immediately return true
 * Return boolean if key is in allowedKeys array
 */
const isPressedKeyValid = (key) => {
  if (!isNaN(key)) return true;
  const regex = new RegExp(`^${key}$`, "i");
  const isKeyAllowed = allowedKeys.some((key) => regex.test(key));
  return isKeyAllowed;
};

export default isPressedKeyValid;

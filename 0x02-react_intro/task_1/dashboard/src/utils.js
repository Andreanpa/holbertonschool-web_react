export function getFullYear() {
  return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
  if (isIndex) {
    console.log("Holberton School");
  } else {
    console.log("Holberton School main dashboard");
  }
}

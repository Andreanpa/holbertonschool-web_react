export function getFullYear() {
  return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
  let msg = "Holberton School";
  let msg2 = "Holberton School main dashboard";

  if (isIndex) {
    return msg;
  } else {
    return msg2;
  }
}

export function getLatestNotification() {
  return `<strong>Urgent requirement</strong> - complete by EOD`;
}

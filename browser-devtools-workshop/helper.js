function isDataBad(item) {
  if (item.body.indexOf("architect") > -1) {
    return true;
  }
  return false;
}

var lemonadeChange = function (bills) {
  const hash = {};

  for (var i = 0; i < bills.length; i++) {
    let reminder = bills[i] - 5;

    while (reminder >= 5) {
      if (reminder >= 10 && hash[10]) {
        reminder -= 10;
        hash[10]--;
      } else {
        if (hash[5]) {
          reminder -= 5;
          hash[5]--;
        } else {
          return false;
        }
      }
    }
    if (reminder !== 0) return false;
    hash[bills[i]] ? hash[bills[i]]++ : (hash[bills[i]] = 1);
  }
  return true;
};

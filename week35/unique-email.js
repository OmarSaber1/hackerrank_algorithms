/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  return new Set(
    emails.map((email) => {
      const [name, domain] = email.split("@");
      const [noPlusName, plusName] = name.split("+");
      const updatedEmail = noPlusName.split(".").join("");
      return updatedEmail + "@" + domain;
    })
  ).size;
};

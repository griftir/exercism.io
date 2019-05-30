export const hey = amessage => {
  const message = amessage.trim();
  const noLettersCheck = message.match(/^[0-9,.!?()%^*@#$: ']*$/g);
  const isQuestion = message.endsWith("?");
  const isShouting = message.toUpperCase() === message;

  if (isQuestion) {
    if (isShouting && !noLettersCheck) {
      return "Calm down, I know what I'm doing!";
    } else {
      return "Sure.";
    }
  }
  if (isShouting && !isQuestion && !noLettersCheck) {
    return "Whoa, chill out!";
  }
  if (message === "") {
    return "Fine. Be that way!";
  }
  return "Whatever.";
};

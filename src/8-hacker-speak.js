export const hackerSpeak = (words) => {
  const objLetter = {
    a: "4",
    A: "4",
    e: "3",
    E: "3",
    i: "1",
    I: "1",
    o: "0",
    O: "0",
    s: "5",
    S: "5"
  }

  const letters = words.split("");
  return letters.map(letter => objLetter[letter] ? objLetter[letter] : letter).join("");

}

    // {
    // if (letter === 'a' || letter === "A") {
    //   return "4";
    // } else if (letter === 'e' || letter === "E") {
    //   return "3";
    // } else {
    //   return letter;
    // }
  //   if (objLetter[letter]) {
  //     return objLetter[letter]
  //   } else {
  //     return letter
  //   }
  // }




  // return words.replaceAll('a', '4')
  //   .replaceAll('A', '4')
  //   .replaceAll('e', '3')
  //   .replaceAll('E', '3')
  //   .replaceAll('i', '1')
  //   .replaceAll('I', '1')
  //   .replaceAll('o', '0')
  //   .replaceAll('O', '0')
  //   .replaceAll('s', '5')
  //   .replaceAll('S', '5');
// }

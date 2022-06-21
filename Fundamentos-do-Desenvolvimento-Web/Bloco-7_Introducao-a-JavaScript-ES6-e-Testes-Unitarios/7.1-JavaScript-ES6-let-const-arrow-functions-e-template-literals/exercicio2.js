      longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

      const longestWord = text => {
    let wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }

    return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));
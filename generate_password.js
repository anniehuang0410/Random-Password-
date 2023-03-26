// function sample
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// function generatePassword
function generatePassword(options) {
  // 1. Define elements
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toLocaleUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'
  // 2. Put required elements into collection
  let collection = []
  
  if(options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }
  // 3. Delete elements not in need
  if (options.excludeCharacters.length > 0) {
    collection = collection.filter(
      character => !options.excludeCharacters.includes(character)
    )
  }
  // prevent undefined error
  if (collection.length === 0) {
    return 'There is no valid character in your selection.'
  }
  // 4. Generate random password
  let password = ''
  for (let i = 1; i <= options.length; i++) {
    password += sample(collection)
  }
  // 5. Return password
  return password
}

module.exports = generatePassword
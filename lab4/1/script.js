function ask_password(login, password, success, failure) {
    login = login.toLowerCase();
    password = password.toLowerCase();
    
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'y']);
    
    function countVowels(str) {
        let count = 0;
        for (let char of str) {
            if (vowels.has(char)) count++;
        }
        return count;
    }
    
    function getConsonants(str) {
        let result = "";
        for (let char of str) {
            if (!vowels.has(char)) {
                result += char;
            }
        }
        return result;
    }
    
    let vowelCountPassword = countVowels(password);
    let passwordConsonants = getConsonants(password);
    let loginConsonants = getConsonants(login);
    
    let vowelsOk = (vowelCountPassword === 3);
    let consonantsOk = (passwordConsonants === loginConsonants);
    
    if (vowelsOk && consonantsOk) {
        success(login);
    } else if (!vowelsOk && !consonantsOk) {
        failure(login, "Everything is wrong");
    } else if (!vowelsOk) {
        failure(login, "Wrong number of vowels");
    } else {
        failure(login, "Wrong consonants");
    }
}

function main(login, password) {
    ask_password(
        login,
        password,
        function(login) {
            console.log(password),
            console.log(`Привет, ${login}!`);
        },
        function(login, errorMessage) {
            console.log(password),
            console.log(`Кто-то пытался притвориться пользователем ${login}, но в пароле допустил ошибку: ${errorMessage.toUpperCase()}.`);
        }
    );
}

console.log("ТЕСТ 1: Правильный пароль");
main("login", "aaalgn");

console.log("\nТЕСТ 2: Другой правильный пароль");
main("login", "luagon");

console.log("\nТЕСТ 3: Неправильное количество гласных");
main("login", "aaa");

console.log("\nТЕСТ 4: Неправильные согласные");
main("login", "aaalgnn");

console.log("\nТЕСТ 5: Всё неправильно");
main("login", "abc");
function reverseString(s) {
    try {
        const reversed = s.split('').reverse().join('');
        console.log(reversed);
    }
    catch (error) {
        console.error(error);
        console.log(s);
    }
}

console.log(reverseString("1234"));
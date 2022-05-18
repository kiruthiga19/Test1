function cap_first_letter(str) {

   
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}
const string = "john";

const result = cap_first_letter(string);

console.log(result);
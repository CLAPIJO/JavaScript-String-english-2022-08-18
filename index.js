// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
name = name.toUpperCase();
console.log(name);
// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
splittedSentence = sentence.split(" ");
var upperCaseSentence = '';
for(var i = 0; i < splittedSentence.length; i++){
    splittedSentence[i] = splittedSentence[i].charAt(0).toUpperCase() + splittedSentence[i].slice(1);
    upperCaseSentence = upperCaseSentence + ' ' + splittedSentence[i];
}
console.log(upperCaseSentence);
// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
console.log(money.substring(1, 3));
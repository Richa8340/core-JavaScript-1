/*Q1 Writ a program that grads studnts basd on thir mar s
 If gratr than 90 thn A Grad
 If btwn 70 and 90 thn a B grad
 If btwn 50 and 70 thn a C grad
 Blow 50 thn an F grade */



const marks = 71;
let grade;

if(marks >= 90){
    grade = 'A grade';

}else if(marks >= 70 && marks <+ 90){
    grade = 'B grade';
}else if(marks >= 50 && marks <+ 70){
    grade = 'C grade';
}else{ grade = 'F grade'

}
console.log(grade);
//output  B grade

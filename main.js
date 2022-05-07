var testGrade = Math.floor(Math.random() * 100);

if (testGrade < 66) {
    console.log('F');
}
else if (70 > testGrade && testGrade >= 66) {
    console.log('D');
}
else if (80 > testGrade && testGrade >= 70) {
    console.log('C');
}
else if (90 > testGrade && testGrade >= 80) {
    console.log('B');
}
else if (testGrade >= 90) {
    console.log('A');
}

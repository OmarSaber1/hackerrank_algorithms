/*
Complete the angryProfessor function in the editor below. It must return YES if class is cancelled, or NO otherwise.

int k: the threshold number of students
int a[n]: the arrival times of the  students

Returns string: either YES or NO 
*/

function angryProfessor(k, a) {
  // Write your code here

  const onTimeStudents = a.filter((time) => time <= 0);

  return onTimeStudents.length >= k ? "NO" : "YES";
}

console.log(angryProfessor(3, [-1, -3, 4, 2]));
console.log(angryProfessor(2, [0, -1, 2, 1]));

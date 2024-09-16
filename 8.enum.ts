// enum - numeric (reverse mapping) 👈
enum Direction {
  Up = 1,
  Down,
}

console.log(Direction); // { '1': 'Up', '2': 'Down', 'Up': 1, 'Down': 2 }

let iWannaGo: Direction;
iWannaGo = Direction.Up;
console.log(`The direction I wanna go is "${iWannaGo}"`); //1
console.log(`The direction you wanna go is "${Direction[2]}"`); //Down

// enum - string based 👈
enum WorkStatus {
  Done = "DONE",
  Progressing = "PROGRESSING",
  Pending = "PENDING",
}

console.log(WorkStatus); // { 'Done': 'DONE', 'Progressing': 'PROGRESSING', 'Pending': 'PENDING' }

let work1: WorkStatus = WorkStatus.Pending;
console.log(`The work1 is "${work1}"`); //PENDING

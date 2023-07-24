const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.once("line", (line) => {
  const [size, n] = line.toString().split(" ").map(Number);
  let count = 0;
  if (n == 0) {
    rl.close();
  }
  const packets = [];

  rl.on("line", (line) => {
    const packet = line.toString().split(" ").map(Number);

    packets.push(packet);
    count++;

    if (count == n) {
    //   console.log(calcProcessingTimes(size, packets));
      let result = calcProcessingTimes(size, packets);
    //   let res = "";
      for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
      }
      
      rl.close();
    }
  });
});

function calcProcessingTimes(size, packets) {
//   console.log(size, packets, "inputs");
  let n = packets.length;
//   console.log(n, "length");
  const queue = [];
  const attendance = [];
  const arr_pro = [];
  for (let i = 0; i < n; i++) {
    if (i == 0) {
      attendance[i] = packets[i][0];
      arr_pro[i] = packets[i][0] + packets[i][1];
      queue[i] = arr_pro[i];
    } else {
      if (queue[0] <= packets[i][0]) {
        if (queue[queue.length - 1] <= packets[i][0]) {
          attendance[i] = packets[i][0];
          arr_pro[i] = packets[i][0] + packets[i][1];
          queue.shift();
          queue.push(arr_pro[i]);
        } else {
          attendance[i] = queue[queue.length - 1];
          arr_pro[i] = attendance[i] + packets[i][1];
          queue.shift();
          queue.push(arr_pro[i]);
        }
      } else {
        if (queue.length >= size) {
          attendance[i] = -1;
          arr_pro[i] = arr_pro[i - 1];
        } else {
          attendance[i] = arr_pro[i - 1];
          arr_pro[i] = attendance[i] + packets[i][1];
          queue.push(arr_pro[i]);
        }
      }
    }
  }
//   console.log(attendance, "attendance");
//   console.log(arr_pro, "arr_pro");
//   console.log(queue, "queue");
  return attendance;
}

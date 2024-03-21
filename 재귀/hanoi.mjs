const hanoi = (count, from, to, temp) => {
    if(count === 0) return;
    hanoi(count - 1, from, temp, to); // 재귀실행 hanoi(2,"A", "B", "C")
    console.log(`원반${count}개를 ${from}에서 ${to}로 이동`);
    hanoi(count -1, temp, to, from); // 재귀실행 hanoi(2, "B","C","A")
}

hanoi(3, "A", "C", "B"); 
/* 
원반1개를 A에서 C로 이동
원반2개를 A에서 B로 이동
원반1개를 C에서 B로 이동
원반3개를 A에서 C로 이동
원반1개를 B에서 A로 이동
원반2개를 B에서 C로 이동
원반1개를 A에서 C로 이동
*/

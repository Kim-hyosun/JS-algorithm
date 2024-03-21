const hanoi = (count, from, to, temp) => {
    if(count === 0) return;
    hanoi(count - 1, from, temp, to); // 재귀실행 hanoi(2,"A", "B", "C")
    console.log(`원반${count}개를 ${from}에서 ${to}로 이동`);
    hanoi(count -1, temp, to, from); // 재귀실행 hanoi(2, "B","C","A")
}

hanoi(3, "A", "C", "B"); //몇개이동, 현재위치, 갈위치, 임시장소
function postMessage() {
    const input = document.getElementById('board-input');
    const list = document.getElementById('message-list');
    
    if (input.value !== "") {
        const li = document.createElement('li');
        li.textContent = `${new Date().toLocaleTimeString()} : ${input.value}`;
        list.appendChild(li);
        input.value = ""; // 入力欄を空にする
    }
}

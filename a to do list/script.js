// Mendapatkan semua elemen yang diperlukan
const inputField = document.querySelector(".input-field textarea"),
      todoLists = document.querySelector(".todoLists"),
      pendingNum = document.querySelector(".pending-num"),
      clearButton = document.querySelector(".clear.button");

// Kita akan memanggil fungsi ini saat menambah, menghapus, dan memeriksa-atau-membatalkan status tugas
function allTasks() {
    let tasks = document.querySelectorAll(".pending");
    pendingNum.textContent = tasks.length; // Mengupdate jumlah tugas yang belum selesai
    console.log(tasks);
}

// Menambahkan tugas saat kita memasukkan nilai di textarea dan menekan enter
inputField.addEventListener("keyup", (e) => {
    // Fungsi menghapus spasi di depan dan belakang nilai yang dimasukkan
    let inputVal = inputField.value.trim();

    // Jika tombol enter ditekan dan panjang nilai yang dimasukkan lebih besar dari 0
    if (e.key === "Enter" && inputVal.length > 0) {
        let liTag = `<li class="list pending" onclick="handleStatus(this)">
                        <input type="checkbox" />
                        <span class="task">${inputVal}</span>
                        <i class="uil uil-trash" onclick="deleteTask(this)"></i>
                    </li>`;

        todoLists.insertAdjacentHTML("beforeend", liTag); // Menyisipkan tag li ke dalam div todoLists
        inputField.value = ""; // Mengosongkan textarea setelah menambahkan tugas
        allTasks(); // Memanggil fungsi untuk mengupdate jumlah tugas yang tertunda
    }
});

// Memeriksa dan membatalkan status checkbox saat kita mengklik tugas
function handleStatus(e) {
    const checkbox = e.querySelector("input");
    checkbox.checked = !checkbox.checked;
    e.classList.toggle("pending");
    allTasks(); // Memanggil fungsi untuk mengupdate jumlah tugas yang tertunda
}

// Fungsi untuk menghapus tugas
function deleteTask(e) {
    e.parentElement.remove(); // Menghapus elemen tugas
    allTasks(); // Memanggil fungsi untuk mengupdate jumlah tugas yang tertunda
}

// Menambahkan event listener untuk tombol "Clear All"
clearButton.addEventListener("click", () => {
    todoLists.innerHTML = ''; // Menghapus semua elemen tugas
    allTasks(); // Mengupdate jumlah tugas yang tertunda menjadi 0
});

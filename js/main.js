window.onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = "I LOVE U Laa, Maaf Ya :)".split("");
    const titleElement = document.getElementById("title");
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index]; // Menambahkan karakter satu per satu
        index++;
        setTimeout(appendTitle, 300); // Delay 300ms untuk setiap karakter
      }
    }

    appendTitle();

    // Menambahkan animasi setelah teks selesai
    setTimeout(() => {
      titleElement.style.animation = "moveDown 5s forwards"; // Animasi gerak ke bawah
    }, titles.length * 300); // Mulai animasi setelah teks selesai muncul

    clearTimeout(c);
  }, 1000);
};

document.getElementById("emailForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Buat objek data yang akan dikirim ke EmailJS
  const templateParams = {
    from_name: name, // Gunakan from_name untuk nama pengirim
    from_email: email, // Gunakan from_email untuk email pengirim
    message: message,
    to_name: "Andi Arsal", // Opsional, ganti dengan nama penerima jika diperlukan
  };

  emailjs.send("aarsal94", "tmp_aarsal94", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Email berhasil dikirim!");
      location.reload(); // Me-reload halaman setelah email berhasil dikirim
    },
    function (error) {
      console.error("FAILED...", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  );
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    // Ubah nilai sesuai keinginan
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
  const jumbotron = document.querySelector(".jumbotron");
  if (window.scrollY > 20) {
    // Ubah nilai sesuai keinginan
    jumbotron.classList.add("blur");
    navbar.classList.add("scrolled");
    jumbotron.classList.add("fade");
  } else {
    jumbotron.classList.remove("blur");
    navbar.classList.remove("scrolled");
    jumbotron.classList.remove("fade");
  }
  const upButton = document.getElementById("upButton");
  if (window.scrollY > 200) {
    upButton.style.display = "block"; // Tampilkan tombol UP jika telah digulir lebih dari 100px
  } else {
    upButton.style.display = "none"; // Sembunyikan tombol UP jika belum digulir cukup jauh
  }
});

// Typing effect
document.addEventListener("DOMContentLoaded", function () {
  const text = document.querySelector(".typing-effect").textContent;
  const typingElement = document.querySelector(".typing-effect");
  typingElement.textContent = "";
  let index = 0;

  function type() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 30); // Adjust speed here
    } else {
      typingElement.classList.add("blink-cursor");
    }
  }

  type();
});

// Fungsi untuk menggulir kembali ke atas halaman
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Animasi pergerakan halus
  });
}

// Menampilkan atau menyembunyikan tombol UP saat digulir
window.addEventListener("scroll", function () {
  const upButton = document.getElementById("upButton");
  if (window.scrollY > 100) {
    upButton.classList.add("show"); // Tampilkan tombol UP jika telah digulir lebih dari 100px
  } else {
    upButton.classList.remove("show"); // Sembunyikan tombol UP jika belum digulir cukup jauh
  }
});

// Mengubah logo brand pada navbar secara dinamis (LOGO BRAND CV ERSAL)
window.addEventListener("scroll", function () {
  const logo = document.getElementById("navbar-logo");
  if (window.scrollY > 50) {
    logo.src = "img/logo2.png";
  } else {
    logo.src = "img/logo1.png";
  }
});

// Inisialisasi dan tambahkan peta
function initMap() {
  // Lokasi peta yang ingin ditampilkan (Lokasi Bengkel CV Ersal)
  var location = { lat: -5.169684836049641, lng: 119.48137838748679 };
  // Buat peta baru dan tempatkan pada elemen dengan id 'map'
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: location,
  });

  // Tambahkan marker pada lokasi
  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}

const topInfoBar = document.querySelector(".top-info-bar");
const navbar = document.querySelector(".navbar");
navbar.style.top = "50px";
window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop === 0) {
    // Ketika sudah di posisi paling atas, turunkan navbar untuk mengikuti topInfoBar
    navbar.style.top = "50px";
  } else {
    // Ketika discroll ke bawah, biarkan posisi navbar tetap di atas halaman
    navbar.style.top = "0";
  }
});

function updateDateTime() {
  const now = new Date();

  // Format tanggal
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateString = now.toLocaleDateString("id-ID", dateOptions);

  // Format waktu
  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const timeString = now.toLocaleTimeString("id-ID", timeOptions);

  // Gabungkan tanggal dan waktu dengan separator "||"
  const dateTimeString = `${dateString} || ${timeString}`;

  // Tampilkan di elemen dengan ID 'date-time'
  document.getElementById("date-time").textContent = dateTimeString;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initial call to display the date and time immediately
updateDateTime();

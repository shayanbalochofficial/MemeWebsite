const gallery = document.getElementById("gallery");

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

document
  .getElementById("uploadForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    alert(
      "Meme uploaded successfully!. We will review and notify you for sure",
    );

    this.reset();
  });
  
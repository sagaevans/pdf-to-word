const dropArea = document.getElementById("drop-area");
const fileInput = document.getElementById("fileInput");
const fileName = document.getElementById("fileName");
const status = document.getElementById("status");

dropArea.addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
        fileName.textContent = fileInput.files[0].name;
        status.textContent = "PDF siap dikonversi ke Word";
    }
});

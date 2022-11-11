document.querySelectorAll(".drop-zone-input").forEach(inputElement => {
    const dropZoneElement = inputElement.closest(".drop-zone");

    dropZoneElement.addEventListener("click", e => {
        inputElement.click();
    });

    inputElement.addEventListener("change", e => {
        if (inputElement.files.length) {
            updateThumbnail(dropZoneElement, inputElement.files[0]);
        }
    });

    dropZoneElement.addEventListener("dragover", e => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone-over");
    });

    ["dragleave", "dragend"].forEach(type => {
        dropZoneElement.addEventListener(type, e => {
            dropZoneElement.classList.remove("drop-zone-over");
        })
    });

    dropZoneElement.addEventListener("drop", e => {
        e.preventDefault();

        if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;
            updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
        }

        dropZoneElement.classList.remove("drop-zone-over");
    });
});

/**
 * @param { HTMLElement } dropZoneElement
 * @param { File } file
 */

function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone-thumb");

    if (dropZoneElement.querySelector(".drop-zone-prompt")) {
        dropZoneElement.querySelector(".drop-zone-prompt").remove();
    }

    if (!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.classList.add("drop-zone-thumb");
        dropZoneElement.appendChild(thumbnailElement);
    }

    thumbnailElement.dataset.label = file.name;
}

// upload google drive api tutorial

const formElem = document.querySelector("form");
formElem.addEventListener("submit", async (e) => {
    e.preventDefault();
    await fetch("/upload", {
        method: "POST",
        body: new FormData(formElem)
    });
});
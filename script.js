const images = {
    category1: [
        "pic01.png",
        "pic02.png",
        "pic03.png"
    ],
    category2: [
        "room01.png",
        "room02.png",
        "room03.png"
    ],
    category3: [
        "Dining.png"
    ],
    category4: [
        "gym01 (1).png",
        "gym01 (2).png"
    ]
};

function showModal(categoryId) {
    const modal = document.getElementById("myModal");
    const modalContent = document.getElementById("modalContent");
    modalContent.innerHTML = ''; // Clear previous images

    // Add the images of the selected category to the modal
    images[categoryId].forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        modalContent.appendChild(img);
    });

    modal.style.display = "flex"; // Show the modal
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none"; // Hide the modal
}

// Close modal when clicking anywhere outside of it
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        closeModal();
    }
}

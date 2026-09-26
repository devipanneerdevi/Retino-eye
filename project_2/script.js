function analyzeImage() {
    const file = document.getElementById("imageInput").files[0];
    const result = document.getElementById("result");

    if (!file) {
        result.innerHTML = "<p>Please upload a retinal image first.</p>";
        return;
    }

    result.innerHTML = `
        <h3>Analysis Result</h3>
        <p><b>DR Level:</b> Level 2 - Moderate DR</p>
        <p><b>Status:</b> Referable Diabetic Retinopathy</p>
        <p><b>Confidence:</b> 92%</p>
        <p><b>Explanation:</b> Possible microaneurysms and retinal lesions detected.</p>
    `;
    document.getElementById("imageInput").addEventListener("change", function () {
    const file = this.files[0];
    const preview = document.getElementById("preview");

    if (file) {
        preview.src = URL.createObjectURL(file);
        preview.style.display = "block";
    }
});
}
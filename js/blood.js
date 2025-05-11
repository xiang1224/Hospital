const compatibility = {
    "A+": ["A+", "A-", "O+", "O-"],
    "A-": ["A-", "O-"],
    "B+": ["B+", "B-", "O+", "O-"],
    "B-": ["B-", "O-"],
    "AB+": ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    "AB-": ["A-", "B-", "AB-", "O-"],
    "O+": ["O+", "O-"],
    "O-": ["O-"]
};

function checkCompatibility() {
    const input = document.getElementById("bloodTypeInput").value;
    const resultArea = document.getElementById("resultArea");
    if (!input) {
        resultArea.innerHTML = `<p class="text-danger">請先選擇血型。</p>`;
        return;
    }

    const list = compatibility[input] || [];
    resultArea.innerHTML = `
      <p class="mb-1"><strong>${input}</strong> 可接受以下血型：</p>
      <ul>${list.map(type => `<li>${type}</li>`).join("")}</ul>
    `;
}
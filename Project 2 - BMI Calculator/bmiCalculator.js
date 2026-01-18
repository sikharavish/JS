const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");

calculateBtn.addEventListener("click", function() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (!weight || !height || weight <= 0 || height <= 0) {
        resultDiv.textContent = "Please enter valid weight and height values.";
        resultDiv.style.color = "red";
        return;
    }

    // Convert height from cm to meters
    const heightInMeters = height / 100;

    // Calculate BMI: weight (kg) / (height (m))^2
    const bmi = weight / (heightInMeters * heightInMeters);

    // Determine BMI category
    let category = "";
    let categoryColor = "";

    if (bmi < 18.5) {
        category = "Underweight";
        categoryColor = "#3498db";
    } else if (bmi < 25) {
        category = "Normal weight";
        categoryColor = "#4CAF50";
    } else if (bmi < 30) {
        category = "Overweight";
        categoryColor = "#f39c12";
    } else {
        category = "Obese";
        categoryColor = "#e74c3c";
    }

    resultDiv.innerHTML = `Your BMI: <strong>${bmi.toFixed(2)}</strong> (${category})`;
    resultDiv.style.color = categoryColor;
});

// Allow Enter key to calculate
document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        calculateBtn.click();
    }
});

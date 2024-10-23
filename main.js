function calculateDaysUntilTargetDate(elementId, targetDate) {
    const currentDate = new Date();

    currentDate.setHours(0, 0, 0, 0); 
    targetDate.setHours(0, 0, 0, 0);
    
    const daysRemaining = Math.round((targetDate - currentDate) / (1000 * 60 * 60 * 24));

    const targetElement = document.getElementById(elementId);
    if (targetElement) {
        targetElement.innerText = daysRemaining;
    }
}

calculateDaysUntilTargetDate("countdown-christmas", new Date("2024-12-25"));  
calculateDaysUntilTargetDate("countdown-newyear", new Date("2025-01-01"));  
calculateDaysUntilTargetDate("countdown-valentines", new Date("2025-02-14"));
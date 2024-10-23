/*
    Unsure if expected outcome is to detect a date has passed and display next years, 
    or display the days since it passed this year.

    if it is the first case, this could be added to correct the hard coded date to next years

     if (targetDate < currentDate) {
        targetDate.setFullYear(targetDate.getFullYear() + 1);
    }
*/

function calculateDaysUntilTargetDate(elementId, targetDate) {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); 
    targetDate.setHours(0, 0, 0, 0);

    const daysRemaining = Math.round((targetDate - currentDate) / (1000 * 60 * 60 * 24));
    let message;

    if (daysRemaining > 0) {
        message = `${daysRemaining} days remaining`;
    } else if (daysRemaining === 0) {
        message = "Today";
    } else {
        message = `${Math.abs(daysRemaining)} days ago`;
    }

    const targetElement = document.getElementById(elementId);
    if (targetElement) {
        targetElement.innerText = message;
    }
}

calculateDaysUntilTargetDate("countdown-christmas", new Date("2024-12-25"));
calculateDaysUntilTargetDate("countdown-newyear", new Date("2025-01-01"));
calculateDaysUntilTargetDate("countdown-valentines", new Date("2024-02-14"));

// alternatively, this function could be used instead of passing hard coded dates.

function calculateDaysUntilEvents() {
    const currentDate = new Date();
    const christmas = new Date(currentDate.getFullYear(), 11, 25); 
    const newYear = new Date(currentDate.getFullYear() + 1, 0, 1); 
    const valentines = new Date(currentDate.getFullYear(), 1, 14); 

    currentDate.setHours(0, 0, 0, 0);

    function calculateDays(targetDate) {
        targetDate.setHours(0, 0, 0, 0);
        let daysRemaining = Math.round((targetDate - currentDate) / (1000 * 60 * 60 * 24));

        if (daysRemaining > 0) {
            return `${daysRemaining} days remaining`;
        } else if (daysRemaining === 0) {
            return "Today";
        } else {
            return `${Math.abs(daysRemaining)} days ago`;
        }
    }

    const christmasElement = document.getElementById("countdown-christmas");
    if (christmasElement) {
        christmasElement.innerText = calculateDays(christmas);
    }

    const newYearElement = document.getElementById("countdown-newyear");
    if (newYearElement) {
        newYearElement.innerText = calculateDays(newYear);
    }

    const valentinesElement = document.getElementById("countdown-valentines");
    if (valentinesElement) {        
        valentinesElement.innerText = calculateDays(valentines);
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll(".progress");

    skills.forEach(function (skill) {
        const percentage = skill.querySelector("span");

        if (percentage) {
            const value = parseInt(percentage.textContent);

            percentage.textContent = "0%";

            let current = 0;

            const timer = setInterval(function () {
                if (current >= value) {
                    clearInterval(timer);
                } else {
                    current++;
                    percentage.textContent = current + "%";
                }
            }, 20);
        }
    });
});
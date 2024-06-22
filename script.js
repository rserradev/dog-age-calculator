document.addEventListener('DOMContentLoaded', function() {
    const dogSizes = ['Pequeño', 'Mediano', 'Grande'];
    const dogSizeSelect = document.getElementById('dogSize');

    dogSizes.forEach(size => {
        const option = document.createElement('option');
        option.value = size;
        option.textContent = size;
        dogSizeSelect.appendChild(option);
    })
})

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('ageForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const dogAge = parseInt(document.getElementById('dogAge').value);
        const dogSize = document.getElementById('dogSize').value;
        const humanAge = calculateHumanAge(dogAge, dogSize);
        
        document.getElementById('result').textContent = `La edad del perro en años humanos es: ${humanAge}`;
    });

    function calculateHumanAge(dogAge, dogSize) {
        let humanAge;

        if (dogAge <= 0) {
            return 0;
        }

        if (dogSize === 'Pequeño') {
            if (dogAge === 1) {
                humanAge = 15;
            } else if (dogAge === 2) {
                humanAge = 24;
            } else {
                humanAge = 24 + (dogAge - 2) * 4;
            }
        } else if (dogSize === 'Mediano') {
            if (dogAge === 1) {
                humanAge = 15;
            } else if (dogAge === 2) {
                humanAge = 24;
            } else {
                humanAge = 24 + (dogAge - 2) * 5;
            }
        } else if (dogSize === 'Grande') {
            if (dogAge === 1) {
                humanAge = 15;
            } else if (dogAge === 2) {
                humanAge = 24;
            } else {
                humanAge = 24 + (dogAge - 2) * 6;
            }
        }

        return humanAge;
    }

});

const cleanAll = () => {
        const lblAge = document.getElementById("lblDogAge");
        const result = document.getElementById("result");
    
        lblAge.textContent = "";
        result.textContent = "";
}
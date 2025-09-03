document.addEventListener('DOMContentLoaded', function() {
    const calculator = document.querySelector('.calculator');
    const keys = calculator.querySelector('.calculator-keys');
    const display = calculator.querySelector('.calculator-screen');

    keys.addEventListener('click', function(event) {
        const { target } = event;
        const { value } = target;
        if (!target.matches('button')) {
            return;
        }

        switch (value) {
            case '+':
            case '-':
            case '*':
            case '/':
                display.value += ` ${value} `;
                break;
            case '=':
                try {
                    display.value = eval(display.value);
                } catch (e) {
                    display.value = 'Error';
                }
                break;
            case 'all-clear':
                display.value = '';
                break;
            default:
                display.value += value;
                break;
        }
    });
});

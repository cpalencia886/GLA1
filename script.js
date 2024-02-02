document.addEventListener('DOMContentLoaded', () => {

    // #2 --------------------------------------------------------------
    const myname = "Corazon Marie Palencia";
    document.body.innerHTML = `<h1 style="text-align:center; color:#A9A9A9;">${myname}</h1>`;

    // #3 --------------------------------------------------------------
    const input1 = '<input type="text" id="input1" placeholder="Enter number 1" style="width: 250px; margin: 10px auto; display: block;">';
    const input2 = '<input type="text" id="input2" placeholder="Enter number 2" style="width: 250px; margin: 10px auto; display: block;">';
    const button = '<button id="button" style="display: block; margin: 10px auto;">Submit</button>';

    const sumOutput = '<div id="sumOutput" style="margin-top: 10px;"></div>';
    const errorOutput = '<div id="errorOutput" style="color: red; margin-top: 10px;"></div>';

    document.body.innerHTML += input1 + input2 + button + sumOutput + errorOutput;

    document.getElementById('button').addEventListener('click', () => {
        const value1 = document.getElementById('input1').value;
        const value2 = document.getElementById('input2').value;

        check(value1, value2);
    });

    // #4 --------------------------------------------------------------
    const check = (value1, value2) => {
        const isNum1 = /^\d+$/.test(value1);
        const isNum2 = /^\d+$/.test(value2);

        if (!isNum1 || !isNum2) {

            document.getElementById('errorOutput').innerHTML = '<p>Digits 0-9 only!</p>';
        } else {

            document.getElementById('errorOutput').innerHTML = '';

            const num1 = Number(value1);
            const num2 = Number(value2);

            document.getElementById('input1').style.border = '1px solid black';
            document.getElementById('input2').style.border = '1px solid black';

            const sum = num1 + num2;
            document.getElementById('sumOutput').innerHTML = `<p>Sum: ${sum}`;
        }

        document.getElementById('input1').style.border = isNum1 ? '1px solid black' : '2px solid red';
        document.getElementById('input2').style.border = isNum2 ? '1px solid black' : '2px solid red';
    };

    // #5 --------------------------------------------------------------
    document.body.style.cssText = 'text-align: center; background-color: #ECE3F0; font-family: sans-serif;';
});

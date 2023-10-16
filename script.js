function Calcular() {

    const vol = window.document.querySelector('input#volume');
    const perc = window.document.querySelector('input#percentagem');
    const wei = window.document.querySelector('input#peso');
    const res = window.document.querySelector('div#result');
    const gender = window.document.querySelector('input[name="gender"]:checked').value;
    const drive = window.document.querySelector('input[name="drive"]:checked').value;

    

    if (gender === "male") {
        var r = 0.68;
    } else {
        var r = 0.55;
    }

    const alcoholPercentage = (Number(vol.value) * (Number(perc.value) / 100) * 0.8) / (Number(wei.value) * r);

    if(alcoholPercentage > 0.5 && drive === "driveY") {
        res.innerHTML = `The Alcohol Percentage in your blood is ${alcoholPercentage.toFixed(2)}mg/L. You are not allowed to drive.`
        res.style.background = "#b80000";
    } else {
        res.innerHTML = `The Alcohol Percentage in your blood is ${alcoholPercentage.toFixed(2)}mg/L. You are allowed to drive.`
        res.style.background = "green";
    }

    if (isNaN(vol) || isNaN(perc) || isNaN(wei)) {
        res.innerHTML = "Please enter valid numbers for all fields."
    }

    window.document.getElementById('content').reset();
}





// Author: Kevin Kemmerer 

"use strict"; // js will check if you have declared any variable before using

var decPlaces;

// Function to set dynamic decimal value based on user
function setDecimal(valNum) {
    decPlaces = valNum;
}

// Length Converter using element id,val
function LengthConverter(id, valNum) {

    //  can use .innerHTML if you're not changing the original value document.getElementById("outputMeters").innerHTML = valNum / 0.0022046;

    // feet 
    if (id == "inputFeet") {
        document.getElementById("inputMeters").value=(valNum/3.2808).toFixed(decPlaces);
        document.getElementById("inputInches").value=(valNum*12).toFixed(decPlaces);
        document.getElementById("inputcm").value=(valNum/0.032808).toFixed(decPlaces);
        document.getElementById("inputYards").value=(valNum*0.33333).toFixed(decPlaces);
        document.getElementById("inputKilometers").value=(valNum/3280.8).toFixed(decPlaces);
        document.getElementById("inputMiles").value=(valNum*0.00018939).toFixed(decPlaces);
    }

    // meters
    if (id == "inputMeters")
    {
        document.getElementById("inputFeet").value=(valNum*3.2808).toFixed(decPlaces);
        document.getElementById("inputInches").value=(valNum*39.370).toFixed(decPlaces);
        document.getElementById("inputcm").value=(valNum/0.01).toFixed(decPlaces);
        document.getElementById("inputYards").value=(valNum*1.0936).toFixed(decPlaces);
        document.getElementById("inputKilometers").value=(valNum/1000).toFixed(decPlaces);
        document.getElementById("inputMiles").value=(valNum*0.00062137).toFixed(decPlaces);
    }
    
    // inches 
    if (id == "inputInches")
    {
        document.getElementById("inputFeet").value=(valNum*0.083333).toFixed(decPlaces);
        document.getElementById("inputMeters").value=(valNum/39.370).toFixed(decPlaces);
        document.getElementById("inputcm").value=(valNum/0.39370).toFixed(decPlaces);
        document.getElementById("inputYards").value=(valNum*0.027778).toFixed(decPlaces);
        document.getElementById("inputKilometers").value=(valNum/39370).toFixed(decPlaces);
        document.getElementById("inputMiles").value=(valNum*0.000015783).toFixed(decPlaces);
    }

    // cm 
    if (id == "inputcm")
    {
        document.getElementById("inputFeet").value=(valNum*0.032808).toFixed(decPlaces);
        document.getElementById("inputMeters").value=(valNum/100).toFixed(decPlaces);
        document.getElementById("inputInches").value=(valNum*0.39370).toFixed(decPlaces);
        document.getElementById("inputYards").value=(valNum*0.010936).toFixed(decPlaces);
        document.getElementById("inputKilometers").value=(valNum/100000).toFixed(decPlaces);
        document.getElementById("inputMiles").value=(valNum*0.0000062137).toFixed(decPlaces);
    }

    // yards 
    if (id == "inputYards")
    {
        document.getElementById("inputFeet").value=(valNum*3).toFixed(decPlaces);
        document.getElementById("inputMeters").value=(valNum/1.0936).toFixed(decPlaces);
        document.getElementById("inputInches").value=(valNum*36).toFixed(decPlaces);
        document.getElementById("inputcm").value=(valNum/0.010936).toFixed(decPlaces);
        document.getElementById("inputKilometers").value=(valNum/1093.6).toFixed(decPlaces);
        document.getElementById("inputMiles").value=(valNum*0.00056818).toFixed(decPlaces);
    }

    // kilometers 
    if (id == "inputKilometers")
    {
        document.getElementById("inputFeet").value=(valNum*3280.8).toFixed(decPlaces);
        document.getElementById("inputMeters").value=(valNum*1000).toFixed(decPlaces);
        document.getElementById("inputInches").value=(valNum*39370).toFixed(decPlaces);
        document.getElementById("inputcm").value=(valNum*100000).toFixed(decPlaces);
        document.getElementById("inputYards").value=(valNum*1093.6).toFixed(decPlaces);
        document.getElementById("inputMiles").value=(valNum*0.62137).toFixed(decPlaces);
    }

    // miles 
    if (id == "inputMiles")
    {
        document.getElementById("inputFeet").value=(valNum*5280).toFixed(decPlaces);
        document.getElementById("inputMeters").value=(valNum/0.00062137).toFixed(decPlaces);
        document.getElementById("inputInches").value=(valNum*63360).toFixed(decPlaces);
        document.getElementById("inputcm").value=(valNum/0.0000062137).toFixed(decPlaces);
        document.getElementById("inputYards").value=(valNum*1760).toFixed(decPlaces);
        document.getElementById("inputKilometers").value=(valNum/0.62137).toFixed(decPlaces);
    }
}

// Weight Converter using element id,val 
function WeightConverter(id, valNum) {

    // pounds 
    if (id == "inputPounds")
    {
        document.getElementById("inputKilograms").value=(valNum*2.2046).toFixed(decPlaces);
        document.getElementById("inputOunces").value=(valNum*16).toFixed(decPlaces);
        document.getElementById("inputGrams").value=(valNum/0.0022046).toFixed(decPlaces);
        document.getElementById("inputStones").value=(valNum*0.071429).toFixed(decPlaces);
    }

    // ounces 
    if (id == "inputOunces") 
    {
        document.getElementById("inputPounds").value=(valNum*0.0625).toFixed(decPlaces);
        document.getElementById("inputKilograms").value=(valNum/35.274).toFixed(decPlaces);
        document.getElementById("inputGrams").value=(valNum/0.035274).toFixed(decPlaces);
        document.getElementById("inputStones").value=(valNum*0.0044643).toFixed(decPlaces);
    }

    // grams 
    if (id == "inputGrams")
    {
        document.getElementById("inputPounds").value=(valNum*0.0022046).toFixed(decPlaces);
        document.getElementById("inputKilograms").value=(valNum/1000).toFixed(decPlaces);
        document.getElementById("inputOunces").value=(valNum*0.035274).toFixed(decPlaces);
        document.getElementById("inputStones").value=(valNum*0.00015747).toFixed(decPlaces);
    }

    // kilograms 
    if (id == "inputKilograms")
    {
        document.getElementById("inputPounds").value=(valNum*2.2046).toFixed(decPlaces);
        document.getElementById("inputOunces").value=(valNum*35.274).toFixed(decPlaces);
        document.getElementById("inputGrams").value=(valNum*1000).toFixed(decPlaces);
        document.getElementById("inputStones").value=(valNum*0.1574).toFixed(decPlaces);
    }

    // stones 
    if (id == "inputStones")
    {
        document.getElementById("inputPounds").value=(valNum*14).toFixed(decPlaces);
        document.getElementById("inputKilograms").value=(valNum/0.15747).toFixed(decPlaces);
        document.getElementById("inputOunces").value=(valNum*224).toFixed(decPlaces);
        document.getElementById("inputGrams").value=(valNum/0.00015747).toFixed(decPlaces);

    }
}

// Temperature converter using element id,val
function TempConverter(id, valNum) {

    // fahrenheit 
    if (id == "inputFahrenheit")
    {
        valNum = parseFloat(valNum);
        document.getElementById("inputCelsius").value=((valNum-32)/1.8).toFixed(decPlaces);
        document.getElementById("inputKelvin").value=(((valNum-32)/1.8)+273.15).toFixed(decPlaces);
    }

    // celsius 
    if (id == "inputCelsius")
    {
        valNum = parseFloat(valNum);
        document.getElementById("inputFahrenheit").value=((valNum*1.8)+32).toFixed(decPlaces);
        document.getElementById("inputKelvin").value=(valNum+273.15).toFixed(decPlaces);
    }

    // kelvin 
    if (id == "inputKelvin")
    {
        valNum = parseFloat(valNum);
        document.getElementById("inputFahrenheit").value=(((valNum-273.15)*1.8)+32).toFixed(decPlaces);
        document.getElementById("inputCelsius").value=(valNum-273.15).toFixed(decPlaces);
    }
}
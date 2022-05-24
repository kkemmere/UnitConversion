// Author: Kevin Kemmerer 

"use strict"; // js will check if you have declared any variable before using

// Length Converter using element id,val
function LengthConverter(id, valNum) {

    //  can use .innerHTML if you're not changing the original value document.getElementById("outputMeters").innerHTML = valNum / 0.0022046;

    // feet 
    if (id == "inputFeet") {
        document.getElementById("inputMeters").value=valNum/3.2808;
        document.getElementById("inputInches").value=valNum*12;
        document.getElementById("inputcm").value=valNum/0.032808;
        document.getElementById("inputYards").value=valNum*0.33333;
        document.getElementById("inputKilometers").value=valNum/3280.8;
        document.getElementById("inputMiles").value=valNum*0.00018939;
    }

    // meters
    if (id == "inputMeters")
    {
        document.getElementById("inputFeet").value=valNum*3.2808;
        document.getElementById("inputInches").value=valNum*39.370;
        document.getElementById("inputcm").value=valNum/0.01;
        document.getElementById("inputYards").value=valNum*1.0936;
        document.getElementById("inputKilometers").value=valNum/1000;
        document.getElementById("inputMiles").value=valNum*0.00062137;
    }
    
    // inches 
    if (id == "inputInches")
    {
        document.getElementById("inputFeet").value=valNum*0.083333;
        document.getElementById("inputMeters").value=valNum/39.370;
        document.getElementById("inputcm").value=valNum/0.39370;
        document.getElementById("inputYards").value=valNum*0.027778;
        document.getElementById("inputKilometers").value=valNum/39370;
        document.getElementById("inputMiles").value=valNum*0.000015783;
    }

    // cm 
    if (id == "inputcm")
    {
        document.getElementById("inputFeet").value=valNum*0.032808;
        document.getElementById("inputMeters").value=valNum/100;
        document.getElementById("inputInches").value=valNum*0.39370;
        document.getElementById("inputYards").value=valNum*0.010936;
        document.getElementById("inputKilometers").value=valNum/100000;
        document.getElementById("inputMiles").value=valNum*0.0000062137;
    }

    // yards 
    if (id == "inputYards")
    {
        document.getElementById("inputFeet").value=valNum*3;
        document.getElementById("inputMeters").value=valNum/1.0936;
        document.getElementById("inputInches").value=valNum*36;
        document.getElementById("inputcm").value=valNum/0.010936;
        document.getElementById("inputKilometers").value=valNum/1093.6;
        document.getElementById("inputMiles").value=valNum*0.00056818;
    }

    // kilometers 
    if (id == "inputKilometers")
    {
        document.getElementById("inputFeet").value=valNum*3280.8;
        document.getElementById("inputMeters").value=valNum*1000;
        document.getElementById("inputInches").value=valNum*39370;
        document.getElementById("inputcm").value=valNum*100000;
        document.getElementById("inputYards").value=valNum*1093.6;
        document.getElementById("inputMiles").value=valNum*0.62137;
    }

    // miles 
    if (id == "inputMiles")
    {
        document.getElementById("inputFeet").value=valNum*5280;
        document.getElementById("inputMeters").value=valNum/0.00062137;
        document.getElementById("inputInches").value=valNum*63360;
        document.getElementById("inputcm").value=valNum/0.0000062137;
        document.getElementById("inputYards").value=valNum*1760;
        document.getElementById("inputKilometers").value=valNum/0.62137;
    }
}

// Weight Converter using element id,val 
function WeightConverter(id, valNum) {

    // pounds 
    if (id == "inputPounds")
    {
        document.getElementById("inputKilograms").value=valNum*2.2046;
        document.getElementById("inputOunces").value=valNum*16;
        document.getElementById("inputGrams").value=valNum/0.0022046;
        document.getElementById("inputStones").value=valNum*0.071429;
    }

    // ounces 
    if (id == "inputOunces") 
    {
        document.getElementById("inputPounds").value=valNum*0.0625;
        document.getElementById("inputKilograms").value=valNum/35.274;
        document.getElementById("inputGrams").value=valNum/0.035274;
        document.getElementById("inputStones").value=valNum*0.0044643;
    }

    // grams 
    if (id == "inputGrams")
    {
        document.getElementById("inputPounds").value=valNum*0.0022046;
        document.getElementById("inputKilograms").value=valNum/1000;
        document.getElementById("inputOunces").value=valNum*0.035274;
        document.getElementById("inputStones").value=valNum*0.00015747;
    }

    // kilograms 
    if (id == "inputKilograms")
    {
        document.getElementById("inputPounds").value=valNum*2.2046;
        document.getElementById("inputOunces").value=valNum*35.274;
        document.getElementById("inputGrams").value=valNum*1000;
        document.getElementById("inputStones").value=valNum*0.1574;
    }

    // stones 
    if (id == "inputStones")
    {
        document.getElementById("inputPounds").value=valNum*14;
        document.getElementById("inputKilograms").value=valNum/0.15747;
        document.getElementById("inputOunces").value=valNum*224;
        document.getElementById("inputGrams").value=valNum/0.00015747;

    }
}

// Temperature converter using element id,val
function TempConverter(id, valNum) {

    // fahrenheit 
    if (id == "inputFahrenheit")
    {
        valNum = parseFloat(valNum);
        document.getElementById("inputCelsius").value=(valNum-32)/1.8;
        document.getElementById("inputKelvin").value=((valNum-32)/1.8)+273.15;
    }

    // celsius 
    if (id == "inputCelsius")
    {
        valNum = parseFloat(valNum);
        document.getElementById("inputFahrenheit").value=(valNum*1.8)+32;
        document.getElementById("inputKelvin").value=valNum+273.15;
    }

    // kelvin 
    if (id == "inputKelvin")
    {
        valNum = parseFloat(valNum);
        document.getElementById("inputFahrenheit").value=((valNum-273.15)*1.8)+32;
        document.getElementById("inputCelsius").value=valNum-273.15;
    }
}
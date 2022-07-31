function function_Temp()
{
    var input_value = document.getElementById("input_value");
    var show_result = document.getElementById("show_result");
    var input_temp = document.getElementById("input_temp");
    var output_temp = document.getElementById("output_temp");

    input_value.addEventListener("keyup", function_Temp);
    input_temp.addEventListener("change", function_Temp);
    output_temp.addEventListener("change", function_Temp);

    var input_temp_value = input_temp.value;
    var output_temp_value = output_temp.value;
    
    if(input_temp_value == "celsius"  && output_temp_value == "celsius"){
        
        show_result.value = `${input_value.value}(°C) = ${input_value.value} (°C)`;
    } 
    else if(input_temp_value == "fahrenheit"  && output_temp_value == "fahrenheit"){
        
        show_result.value = `${input_value.value}(°F) = ${input_value.value} (°F)`;
    }
    else if(input_temp_value == "kelvin"  && output_temp_value == "kelvin"){
        
        show_result.value = `${input_value.value}(K) = ${input_value.value} (K)`;
    }
    else if(input_temp_value == "celsius"  && output_temp_value == "fahrenheit"){
    
        show_result.value = `${input_value.value}(°C) = ${( Number(input_value.value) *9 /5) + 32} (°F)`;
    }
    else if(input_temp_value == "fahrenheit"  && output_temp_value == "celsius"){
    
        show_result.value = `${input_value.value}(°F) = ${( ( Number(input_value.value) - 32)*5 ) /9} (°C)`;
    }
    else if(input_temp_value == "celsius"  && output_temp_value == "kelvin"){
        
        show_result.value = `${input_value.value}(°C) = ${ Number(input_value.value)  + 273.15} (K)`;
    }
    else if(input_temp_value == "kelvin"  && output_temp_value == "celsius"){
    
        show_result.value = `${input_value.value}(K) = ${ Number(input_value.value) -273.15} (°C)`;
    }
    else if(input_temp_value == "fahrenheit"  && output_temp_value == "kelvin"){
    
        show_result.value = `${input_value.value}(°F) = ${(( ( Number(input_value.value) -32 )*5 ) /9) +273.15 } (K)`;
    }
    else if(input_temp_value == "kelvin"  && output_temp_value == "fahrenheit"){
    
        show_result.value = `${input_value.value}(K) = ${( ( Number(input_value.value) -273.15) * 9 /5) + 32} (°F)`;
    }

}
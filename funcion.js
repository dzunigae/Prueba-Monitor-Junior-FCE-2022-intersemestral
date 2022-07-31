function probabilidad(p_1, p_2){
    return parseInt((p_1*100)/(p_1 + p_2));
}

function jugar(){
    var central_data = {1:["Leones",125,0], 2:["Rayos",98,0], 3:["Magos",111,0], 4:["Rojos",135,0]};
    var resultados = {};
    
    //Temporadas
    for(var temp = 1; temp <= document.getElementById("Temporadas").value; temp++){

        //Hay dos rondas
        for(var p = 0; p < 2; p++){

            //Resultados de una ronda
            for(var i = 1; i < 4; i++){
                for(var j = i+1; j < 5; j++){
                    if(central_data[j] != 4){
                        var razon = probabilidad(central_data[i][1], central_data[j][1]);
                        var p_v_e_1 = parseInt(Math.random()*100);
                        if(p_v_e_1 <= razon){
                            central_data[i][2]+=1;
                        }else{
                            central_data[j][2]+=1;
                        }
                    }else{
                        var razon = probabilidad(central_data[i][1], central_data[j][1]);
                        var p_v_e_1 = parseInt(Math.random()*100);
                        if(p_v_e_1 <= razon){
                            central_data[i][2]+=1;
                        }else{
                            central_data[j][2]+=1;
                        }
                        break;
                    }
                }
            }
        }

        //Guardando los resultados de la temporada
        resultados[temp] = [];
        
        //Generando las posiciones de esta ronda
        var posiciones = []
        for(var x = 1; x < 5; x++){
            posiciones.push((central_data[x][2]*10)+x);
        }
        posiciones.sort(
            function compareFunction(first, second){
                if(first > second) return 1;
                if(first < second) return -1; 
                return 0;
            }
        );

        for(var t = 1; t < 5; t++){
            resultados[temp].push({

            });
        }
    }
}
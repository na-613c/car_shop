function hide() {
    $('#collapseOne').hide();    
}


let bool1 = true;
let bool2 = true;

let car = angular.module('Car', []);

car.controller('AutoController', function($scope, $http, $window) {
    $('#validator_filled').hide();
    $('#validator_correct').hide();


	  const readAuto = _ => {
        $http.get("http://localhost:3000/auto")
        .then(function(response) {
            $scope.auto = response.data
        })
    }

    readAuto();


    $scope.deleteCar = function(id) {
    	$http.delete(`http://localhost:3000/auto/delete/${id}`)
        .then(readAuto)
    }



    $scope.hideButton = function() {
        if (bool1) {
            $('#collapseOne').show();            
            $scope.addHide = false;
            $scope.updateHide = true;
            $('#id_').hide();
            bool1 = false;
            bool2 = true;

        } else {
            $('#collapseOne').hide();            
            $scope.updateHide = false;
            $scope.addHide = true;
            bool1 = true;
        }
    }


    $scope.addCar = function() {
        $('#validator_filled').hide();
        $('#validator_correct').hide();

        if($("#mark_").val()==null||$("#model_").val()==null||
           $("#date_").val()==null||$("#motor_").val()==null||
           $("#fuel_").val()==null||$("#color_").val()==null||
           $("#cost_").val()==null||$("#mark_").val()==""||
           $("#model_").val()==""||$("#date_").val()==""||
           $("#motor_").val()==""||$("#fuel_").val()==""||
           $("#color_").val()==""||$("#cost_").val()==""
           ){
               $('#validator_filled').show();

           } else if (!/([0-9]{4})$/.test($("#date_").val())||
                       !/^[А-Яа-яЁё\s]+$/.test($("#color_").val())||
                       !/^[0-9]+$/.test($("#cost_").val())
                    ){ 
               $('#validator_correct').show();
                   
           }else{
          	let data = {
                mark: $("#mark_").val(),
                model: $("#model_").val(),
                date: $("#date_").val(),
                motor: $("#motor_").val(),
                fuel: $("#fuel_").val(),
                color :  $("#color_").val(),
                cost: $("#cost_").val()
                };
                
            $(".collapse").collapse('hide');
                $http.post('http://localhost:3000/auto', JSON.stringify(data))
                .then(readAuto)

            
                 
        }
    }


    $scope.reWriteUpd = function(id,mark,model,date,motor,fuel,color,cost){
        if (bool2) {
            $('#collapseOne').show();    
            $('#id_').show();      
            $scope.addHide = true;
            $scope.updateHide =  false;
            bool2 = false;
            bool1 = true;
        } else {
            $('#collapseOne').hide();          
            $('#id_').hide();
            $scope.updateHide = true;
            $scope.addHide = false;
            bool2 = true;
        }

        


        $("#id_").val(id+"");
        $("#mark_").val(mark+"");
        $("#model_").val(model+"");
        $("#date_").val(date+"");
        $("#motor_").val(motor+"");
        $("#fuel_").val(fuel+"");
        $("#color_").val(color+"");
        $("#cost_").val(cost+"");

  
        console.log(id+" _ " +mark+" _ " +model+" _ " +date+" _ " +motor+" _ " +fuel+" _ " +color+" _ " +cost);

    }




    $scope.updateCar = function() {
         $('#validator_filled').hide();
         $('#validator_correct').hide();
 
         if($("#id_").val()==null||$("#mark_").val()==null||$("#model_").val()==null||
            $("#date_").val()==null||$("#motor_").val()==null||
            $("#fuel_").val()==null||$("#color_").val()==null||
            $("#cost_").val()==null||$("#mark_").val()==""||
            $("#model_").val()==""||$("#date_").val()==""||
            $("#motor_").val()==""||$("#fuel_").val()==""||
            $("#color_").val()==""||$("#cost_").val()==""
            ){
                $('#validator_filled').show();

            } else if (!/[0-9]+$/.test($("#id_").val())||
                        !/([0-9]{4})$/.test($("#date_").val())||
                        !/^[А-Яа-яЁё\s]+$/.test($("#color_").val())||
                        !/^[0-9]+$/.test($("#cost_").val())
                     ){ 
                $('#validator_correct').show();
                    
            }else{

            let id = $("#id_").val();

            let data = {
                mark:$("#mark_").val(),
                model: $("#model_").val(),
                date: $("#date_").val(),
                motor: $("#motor_").val(),
                fuel: $("#fuel_").val(),
                color : $("#color_").val(),
                cost: $("#cost_").val()
            };
            $http.put(`http://localhost:3000/auto/update/${id}`, JSON.stringify(data))
                .then(readAuto)
        // }
        }
    }

})

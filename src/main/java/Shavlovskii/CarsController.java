package Shavlovskii;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
public class CarsController {


    @Autowired
    CarsRespository carsRespository;


    @GetMapping("/auto")
    public List<Cars> index(){
        return carsRespository.findAll();
    }


    @PostMapping("/auto")
    public Cars add(@RequestBody Map<String, String> body){
        String mark = body.get("mark");
        String model = body.get("model");
        String date = body.get("date");
        String motor = body.get("motor");
        String fuel = body.get("fuel");
        String color = body.get("color");
        String cost = body.get("cost");

        return carsRespository.save(new Cars(mark, model,date,motor,fuel,color,cost));
    }

    @PutMapping("/auto/update/{id}")
    public Cars update(@PathVariable String id, @RequestBody Map<String, String> body){
        int Id = Integer.parseInt(id);
        // getting cars
        Cars cars = carsRespository.findOne(Id);

        cars.setMark(body.get("mark"));
        cars.setModel(body.get("model"));
        cars.setDate(body.get("date"));
        cars.setMotor(body.get("motor"));
        cars.setFuel(body.get("fuel"));
        cars.setColor(body.get("color"));
        cars.setCost(body.get("cost"));

        return carsRespository.save(cars);
    }

    @DeleteMapping("auto/delete/{id}")
    public boolean delete(@PathVariable String id){
        int Id = Integer.parseInt(id);
        carsRespository.delete(Id);
        return true;
    }


}

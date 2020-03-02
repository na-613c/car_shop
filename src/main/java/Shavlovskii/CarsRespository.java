package Shavlovskii;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CarsRespository extends JpaRepository<Cars, Integer> {


    List<Cars> findByMarkContainingOrModelContainingOrDateContainingOrMotorContainingOrFuelContainingOrColorContainingOrCostContaining(
             String text,
             String text1,
             String text2,
             String text3,
             String text4,
             String text5,
             String text6);
}

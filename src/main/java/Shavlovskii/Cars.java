package Shavlovskii;

import javax.persistence.*;

@Entity
public class Cars {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String mark;
    private String model;
    private String date;
    private String motor;
    private String fuel;
    private String color;
    private String cost;


    public Cars() {  }

    public Cars(String mark,
                String model,
                String date,
                String motor,
                String fuel,
                String color,
                String cost) {

        this.setMark(mark);
        this.setModel(model);
        this.setDate(date);
        this.setMotor(motor);
        this.setFuel(fuel);
        this.setColor(color);
        this.setCost(cost);

    }

    public Cars(int id,
                String mark,
                String model,
                String date,
                String motor,
                String fuel,
                String color,
                String cost) {
        this.setId(id);
        this.setMark(mark);
        this.setModel(model);
        this.setDate(date);
        this.setMotor(motor);
        this.setFuel(fuel);
        this.setColor(color);
        this.setCost(cost);

    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMark() {
        return mark;
    }

    public void setMark(String mark) {
        this.mark = mark;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getMotor() {
        return motor;
    }

    public void setMotor(String motor) {
        this.motor = motor;
    }

    public String getFuel() {
        return fuel;
    }

    public void setFuel(String fuel) {
        this.fuel = fuel;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getCost() {
        return cost;
    }

    public void setCost(String cost) {
        this.cost = cost;
    }

    @Override
    public String toString() {

            String str = "Cars{" +
                    "id="+ id +
                    "mark='" + mark + '\'' +
                    "model'" + model + '\'' +
                    "date'" + date + '\'' +
                    "motor'" + motor + '\'' +
                    "fuel'" + fuel + '\'' +
                    "color'" + color + '\'' +
                    "cost'" + cost + '\'' +
                    '}';
            return str;

    }

}

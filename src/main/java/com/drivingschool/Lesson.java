package com.drivingschool;

import jakarta.persistence.*;

@Entity
public class Lesson {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String lessonDate;
    private String lessonTime;
    private String instructorName;
    private String clientName;
    private String vehicleType;

    // Implement Getters & Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getLessonDate() { return lessonDate; }
    public void setLessonDate(String lessonDate) { this.lessonDate = lessonDate; }

    public String getLessonTime() { return lessonTime; }
    public void setLessonTime(String lessonTime) { this.lessonTime = lessonTime; }

    public String getInstructorName() { return instructorName; }
    public void setInstructorName(String instructorName) { this.instructorName = instructorName; }

    public String getClientName() { return clientName; }
    public void setClientName(String clientName) { this.clientName = clientName; }

    public String getVehicleType() { return vehicleType; }
    public void setVehicleType(String vehicleType) { this.vehicleType = vehicleType; }
}

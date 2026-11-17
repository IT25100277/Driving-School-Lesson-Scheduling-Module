package com.drivingschool;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lesson")
@CrossOrigin
public class LessonController{

    @Autowired
    private LessonRepository lessonRepo;

    //  Add Lesson (Booking)
    @PostMapping("/add")
    public Lesson addLesson(@RequestBody Lesson lesson) {
        return lessonRepo.save(lesson);
    }

    //  Get all lessons
    @GetMapping("/all")
    public List<Lesson> getAllLessons() {
        return lessonRepo.findAll();
    }

    //  Get lesson by ID
    @GetMapping("/{id}")
    public Lesson getLessonById(@PathVariable int id) {
        return lessonRepo.findById(id).orElse(null);
    }

    //  Delete lesson
    @DeleteMapping("/delete/{id}")
    public String deleteLesson(@PathVariable int id) {
        lessonRepo.deleteById(id);
        return "Lesson deleted!";
    }
}

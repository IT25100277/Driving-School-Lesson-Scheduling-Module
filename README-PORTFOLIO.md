# Driving School — Lesson Scheduling Module

**Year 1, Semester 2 | Object-Oriented Programming group project**

This repository showcases lesson-scheduling-related source files from a collaborative Driving School Registration and Scheduling System project. The original project was developed by a team; this is a portfolio extract, not a standalone application.

## Features represented
- Java `Lesson` JPA entity with lesson date/time, instructor, client and vehicle type.
- Spring Boot REST controller for creating, listing, retrieving and deleting lessons.
- Spring Data JPA repository for persistence.
- Theory and practical lesson booking interface (`courses.html`) and related browser-side JavaScript (`courses.js`).

**Implementation note:** The supplied frontend uses browser local storage; the Java REST API uses database persistence. They are not demonstrated to be integrated. The HTML also contains inline scheduling JavaScript. No update endpoint was found in the supplied controller.

## Technologies
Java, Spring Boot, Spring Data JPA, HTML, CSS, JavaScript.

## Repository layout
- `src/main/java/com/drivingschool/` — lesson entity, controller and repository
- `src/main/resources/templates/courses.html` — lesson scheduling interface
- `src/main/resources/static/js/courses.js` — related scheduling script

## Attribution
Extracted from a team OOP project. The GitHub commit history of the original private repository shows contributions by `IT25100277` to lesson-related Java files and `courses.html`. Individual authorship of every line is not established by the ZIP. Original team repository: `IT25101687/Driving-School-registration-and-sheduling-system` (private; access restricted).

## Notes
This extract intentionally excludes other teammates' modules, database credentials, IDE files and unrelated assets. It is provided for code review and portfolio presentation, not as a ready-to-run standalone application. Publish only with appropriate team permission.

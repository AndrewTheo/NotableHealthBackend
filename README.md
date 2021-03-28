# NotableHealthBackend

### Set to port 8080, can be changed in app.js

### Data is stored in data.json
Format: 
- Physician ID
  - Name
  - Email
  - Appointments
      - Name
      - Time
      - Kind
      - Appointment ID

### Routes
#### /doctors - returns list of all doctors
#### /doctors/:id - given an id returns all appointments for that doctor

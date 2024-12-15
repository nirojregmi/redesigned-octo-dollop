<h1>The booking system phase→1</h1>
1. Create a database
    1. Install Docker: https://www.docker.com/
    
    2. Load the postgres image: docker pull postgres
    
    3. Create a container: docker run --name booking_system_database -e POSTGRES_PASSWORD=Secret1234! -d -p 5432:5432 postgres
    
    4. Connect to the database: docker exec -it booking_system_database psql -U postgres -d postgres
    
    5. Copy the file booking_system_structure.sql to the clipboard.
    
    6. Paste the file into the psql terminal
    
2. Run the command: deno run --allow-net --allow-env --allow-read --watch app.js
   
# The Booking system project → Phase 2
1. Step 1: login functionality test
2. step 2: Index page functionality test
3. step 3: Index page Zap report created
4. step 4: Login page Zap report created
# Pages
1. http://localhost:8000/register --> GET and POST
2. http://localhost:8000/login --> GET and POST

# redesigned-octo-dollop
Cybersecurity and data privacy-2024- Blended
# Logbook

30.10.2024, 2h, kick-off lecture

04.11.2024, 2h, Github repository, Logbook created.

07.11.2024, 3h, Introduction to cybersecurity.

14.11.2024, 3h, Watched lecture recording and did some labs

16.11.2024, 4h, Introduction to cybersecurity

17.11.2024, 3h, completed the assignment (Introduction to the portswigger environment)

18.11.2024, 2h lecture, and assignment

24.11.2024, 4h, project phase 1. (unfortunately unsuccessful and could not submit)

25.112024, 2h, lecture

26.11.2024,4h, cisco networking academy

30.11.2024, 5h, working with project phase-2

02.12.2024, 3h, Introduction to cybersecurity

06.12.2024, 6h, working with phase 1, and 2 including watched videos from different lectures.

08.12.2024, 3h, phase 3 (ongoing)

10.12.2024, 3h, working with phase 2 and phase 3

12.12.2024, 2h, working with final report.

15.12.2024, 4h, Modified phase 2 work and worked with the final report


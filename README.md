# 11 Express: Note Taker

## Summary 

The purpose of the assignment was to create a CLI application that takes in information about employees and automatically generates an HTML page that displays summaries for each person.

Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

```
User Story

AS A user, I want to be able to write and save notes
I WANT to be able to delete notes I've written before
SO THAT I can organize my thoughts and keep track of tasks I need to complete

Acceptance Criteria

- Application should allow users to create and save notes
- Application should allow users to view previously saved notes
- Application should allow users to delete previously saved notes
```

## Application Pictures

![Site](#)
![Site](#)

## Technologies Used

- HTML - used to create elements on the DOM
- CSS - styles HTML elements on page
- Bootstrap - CSS framework directed at responsive, mobile first front-end web development
- JavaScript - provides dynamic interactivity on HTML documents
- jQuery - easy to use API library simplifying Javascript actions
- Node.js - asynchronous event-driven JavaScript runtime
- Express - asynchronous event-driven JavaScript runtime
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages

## Code Snippet

Below is an example of a block of code in the app.js file where the user is prompted with questions regarding the team member they would like to add and the new team member object is created and pushed into an array holding all other team members. Lastly the user is asked what kind of team member they would like to add next or if they are done adding team members. 

```js
async function createTeam() {
    
    // Variable holding tema members
    const team = [];
    
    // Always with Manager
    let role = "Manager";
    
    // While loop for until user selects no more team members
    while (role != "No more team members") {
        
        // Prompt user for employee info
        const employeeInfo = await inquirer.prompt(employeeQuestions);
        
        // Prompt user for Manager, Engineer, or Intern specific info and create new team member with constructor function of selected subclass
        let specificInfo;
        let newTeamMember;

        switch (role) {

            case "Manager":
                specificInfo = await inquirer.prompt(managerQuestions);
                newTeamMember = new Manager(employeeInfo.name, employeeInfo.id, employeeInfo.email, specificInfo.officeNumber);
                break;
            case "Engineer":
                specificInfo = await inquirer.prompt(engineerQuestions);
                newTeamMember = new Engineer(employeeInfo.name, employeeInfo.id, employeeInfo.email, specificInfo.github);
                break;
            case "Intern":
                specificInfo = await inquirer.prompt(internQuestions);
                newTeamMember = new Intern(employeeInfo.name, employeeInfo.id, employeeInfo.email, specificInfo.school);
                break;
            default:
                console.log("Error, something went wrong")    
        }

        // Add new team member to team
        team.push(newTeamMember);

        // Prompt for next team member role
        const answer = await inquirer.prompt(nextTeamMember);
        role = answer.next;
    }
```

[Deployed Portfolio Page Site](#)

[GitHub Project Repo](https://github.com/wtgibson/11-note-taker)

## Author Links

![Site](images/william-gibson-jr-photo.jpg)

Will Gibson

[LinkedIn](https://www.linkedin.com/in/wtgibson/)

[GitHub](https://github.com/wtgibson)

Special thanks to Mahisha Gunasekaran, Kerwin Hy, and Jeremy Cantwell for their input and assistance with the assignment!
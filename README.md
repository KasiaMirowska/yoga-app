# Yogi Track 

Check it out at [yogi-track](https://yoga-capstone.now.sh/).

Yogi Track is a Full-Stack mobile first responsive web application for yoga teachers and enthusiasts helping a user to explore and learn avariety of poses, providing an english and sanskrit name for each pose with alphabetic sort based on either. The user can then create an account where he/she can save poses into yoga-flows as inspirations for a class or record of personal practice with notes and personal rating system.

## WHY MAKE THIS APP?
As a yoga teacher I find myself constatly googling the correct asana's names in sanskrit (there is way over 200 poses in yoga and to learn their complex sanskrit names takes time) and making lists of poses as part of my preperation before teaching a class. This app is meant to be a tool to help memorize sanskrit names, streamline class planning process and help teachers advance their skills.


|<img src='https://images-for-portfolio.s3.us-east-2.amazonaws.com/yoga+cap/home.png' width ='200' > | <img src='https://images-for-portfolio.s3.us-east-2.amazonaws.com/yoga+cap/flow-pick.png' width ='200' > | <img src='https://images-for-portfolio.s3.us-east-2.amazonaws.com/yoga+cap/flow-pose.png' width='200' > | <img src='https://images-for-portfolio.s3.us-east-2.amazonaws.com/yoga+cap/pose-card2.png' width='200' > |

## ENDPOINTS AND EXPECTED DATA
### USERS
  #### User Registration
  /api/register

  method: POST
  input: {
    body: {
      fullname: string,
      username: string,
      password: string,
      id: number
    }
  }

  output: {
    status: 201,
    body: {
      fullname: string,
      username: string,
      password: encrypted, 
    }
  }

### AUTH 
  #### Login Enpoint
  /api/login
  
  method: POST
  input: {
    body: {
      userName: string, 
      password: string
    }

  output: {
    body: {
      authToken: jwt (javascript web token)
    }
  }

### POSES
  #### Yoga Poses Endpoints
  /api/poses
  description: get all yoga poses in DB
  method: GET
  input: {

  }

  output: {

  }

  /api/flow/:pose_id
  description: 
  method: GET
  input: {

  }

  output: {

  }

  /api/flow/:flow_id/:pose_id
  description: 
  method: GET
  input: {

  }

  output: {

  }

  /api/flowatt/:pose_id
  description: 
  method: POST
  input: {

  }

  output: {

  }

  /api/flownote/:pose_id
  description:
  method: POST
  input: {

  }

  output: {

  }
### FLOWS
  #### Yoga Flows Endpoints

  /api/flows
  description:
  method: GET
  input: {

  }

  output: {

  }
  
  /api/flows
  description:
  method: POST
  input: {
    body: {
      user: {
        id: number
      }
      title: string
    }
  }

  output: {

  }

  /api/flow-pose
  description: add pose into flow
  method: POST
  input: {
    user: {
      id: number
    },
    body: {
      main_flow_id: number,
      pose_id: number,
      section_flow_id: number
    }
  }

  output: {

  }

  /api/flows/:flow_id
  description: get flow object
  method: GET
  params: flow_id (id of flow to get from db)

  output: {
    status: 200,
    body: {
      flow: flow object
    }
  }

  /api/delete/:flow_id/:pose_id
  description: delete pose from flow
  method: DELETE
  params: flow_id, pose_id

  output: {
    status: 204,
    message: 'pose deleted from flow'
  }

## TECH STACK
#### FRONT-END
* HTML5
* CSS3
* JavaScript
* React.js front end framework
* font-awesome
* bcrypt

#### BACK-END
* Node.js backend run-time environment
* Express.js backend framework and architecture
* SQL for database
* Postgres - relational database management system
* JWTs for authentication

#### TESTING and DEPOLYMENT
* Mocha - back-end testing framework
* Chai - assertion library backend testing
* Enzyme - React.js testing utility
* Zeit - cloud platform for static sites
* Heroku - cloud application platform

## FUTURE IMPROVEMENTS

### UI IMPROVEMENTS
* significatly bigger poses library
* way to narrow poses display by anatomy, level of dificulty and saved attributes like 'energizing poses'
* search bar for certain pose by name or anatomy

### UX IMPROVEMENTS
* drag&drop functionality to edit a flow
* abitlity to share flows between users or to social media

### OTHER FRONT-END IMPROVEMENTS
* Google and facebook login
* Full scale React unit testing

### SERVER-SIDE IMPROVEMENTS
* login timeout


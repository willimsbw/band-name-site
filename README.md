# band-name-site
A simple tool that will generate you a super-hip band name!

# How to start
* You can initialize and fill a sqqlite databse called words.db by executing fill_db.py. 
  * After executing this once, you will only need to execute it again if you need to re-create the database
* If you want to make changes to the front-end, ./band-name-site contains the React files. 
  * You can build and deploy your changes to the Flask webserver using the command `npm run build` from this directory
* **Launch the website by executing main.py in the flask_server directory `python ./flask_server/main.py`** 

# How to use
<<<<<<< HEAD
* You can initialize and fill a sqqlite databse called words.db by executing fill_db.py. After executing this once, you 
  will only need to execute it again if you need to re-initialize the database
* Launch the website by executing server.py
* Press "Get a Name" to get an awesome indie band name
* Use the "Manage" page to see all of the current words in the database, delete any, and add additional words

# Required Packages
* SqlAlchemy
* Flask
=======
* Input the number of words you want (default is 2) and press "Get a Name" to get an awesome indie band name
* Use the "manage" button on the bottom navbar to see/edit/delete all of the current words in the database or add additional words

# Required Packages
* Flask_Server:
  * SqlAlchemy
    * `pip install sqlalchemy`
  * Flask
    * `pip install flask`
* Band-name-site:
  * All dependencies noted in package.json. 
    * Can be installed by navigating to the ./band-name-site directory and running `npm install` or `yarn install` (if you're using yarn)
>>>>>>> react

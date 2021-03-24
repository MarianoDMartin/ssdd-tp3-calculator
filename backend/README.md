# Installing requirements

#### Please follow these steps to set up your environment. You may skip the first step if you have python3.7+ installed

###  Installing Python 

##### To install Python version 3.7+ please follow these steps (We recommend you install Python3.8 for these project):

* On Ubuntu:
 
```
$ sudo apt-get update
$ sudo apt-get install python3.8
```

* On MacOS:
```
$ brew update
$ brew install python@3.8
```

##### Python3.8 already comes with pip3 installed. Remember, since python2.7 is still out there, to ensure the correct interpreter is being used, always execute commands using `python3 file_name.py`

### Setting up virtualenv

##### To set up a virtual environment to install dependencies outside your OS, please do the following:

* Working directory must be `/backend`
* run following command: `virtualenv venv`
* run following command: `source venv/bin/activate`

### Install python dependencies

To install dependencies required for this app, do the following:

* Working directory must be `/backend`
* run following command: `pip3 install -r requirements.txt`

This should  be executed with active venv. You should see a (venv) at the start of the command line.
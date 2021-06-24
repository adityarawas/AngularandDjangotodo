## Angular and DRF todo list
Default branch is main of todolist release [`main` branch](https://github.com/adityarawas/AngularandDjangotodo) to view the readme, documentation, and source code for todolist

## Quick start
-- [Download the latest release](https://github.com/adityarawas/AngularandDjangotodo/archive/refs/heads/main.zip)
-- Clone the repo: `git clone https://github.com/adityarawas/AngularandDjangotodo.git`

## Starting project
### Installing Angular and starting client
-- Install package : got to client folder `cd client` and run `npm i` or `yarn i`
-- Run `ng serve`

### Installing Django and starting django
-- Create virtual environment `virtualenv venv`
-- Activate enviroment by `source /venv/bin/active`
--Install dependencies `pip -r requirement.txt`

## What does
This project will demonstrate CURD operations performed by anngular and django rest framework.
This application provide you a form that let you add task and description.

-- POST - Let you add task and description from form.
-- PUT - Let you change the status of tasks
-- PUT - Let you terminate task (soft delete)
-- DELETE - This application does not delete record as I follow soft delete practice, one can perform delete operation by changing http request method from angular and uncommenting the delete method from DRF 


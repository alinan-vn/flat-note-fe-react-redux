**Note** this repo contains the front end code for FlatNote, installation and reference to the back end code is located in this README.
#
# FlatNote #
is a note taking web application where you can save, edit, and delete notes.
#
Front end requirements:

* React
* Redux
* React Router
* Semantic-Ui
* Semantic-Ui-React
#
Back end requirements and instructions:
* https://github.com/alinan-vn/flat-note-be-rails

To view the application fork/clone this repo and follow the commands listed below.

This installs many default gems but additional ones such as: Postgres, bcrypt, rack-cors, and faker.
```bundle install```

This sets up the postgres server
```rails db:create```

Loads and sets up the schema
```rails db:migrate```

Seeds data necessary to the application.
```rails db:seed```


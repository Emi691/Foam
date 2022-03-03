# Foam

Foam is a SPA application that allows the user to classify photos from a reactor run as #foaming or #notfoaming

### Demo Video
See a Demo of Foam here: (https://youtu.be/hemQYjBO-pk)

### Summary

Getting Started

Built With

Contributing

Versioning

Authors

License

Acknowledgments


### Getting Started

The instructions bellow will guide you through getting a copy of this application up and running on your local machine for testing or development.

#### Installing

Clone the file for this project onto your device using:
```
git clone
```

#### Starting the App
In the foam_backend subdirectory of the project, make sure that you have all necessary gems installed by running the command:
```
bundle install
```

Next, use the following command to open a server for the backend:
```
rails s
```

Then move to the subdirectory for the frontend, foam_frontend and use the command 
```
npm install
```
to ensure that any libraries are installed on your device, then use the command
```
npm start
```
to open open the application in your browser.

Note: after npm start you may be prompted to allow the server to listen on a different port. This is becaause the api server may be using the default port. Type Y or yes to allow npm server to user a different port in order to open the app.

### Built With

Contributor Covenant - Used for the Code of Conduct
Creative Commons - Used to choose the license


### Contributing
Please read Contributing.md for details on our code of conduct, and the process for submitting pull requests to us.


### Author
Emiko Nagasawa-Pijoan


### License
This project is licensed under the CC0 1.0 Universal Creative Commons License - see the licence.md file for details


### Acknowledgments
Corneal gem for helping with file tree set up
Lawrence Hall of Science for inspring the idea of a museum collection app.
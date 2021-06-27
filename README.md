# whatsapp-mern
a whatsapp clone using mern stack

### Technologies
  + **Express** : server
  + **mongoDB** : database
  + **mongoose** : Easily access database (messeges)
  + **Pusher** : Make database realtime. 
  + **socket.io** : implement two way connection to client-server
  + **firebase** : authentication and hosting

1. #### create react app ####
  ```javascript
  npx create-react-app whatsapp-mern
  ```
2. #### Setup *firebase* 17:00 - 19:00 
  + frontend deployment (backend will be deployed on heroku)
  
3. #### clean up react app 19:40 - 21:30

4. #### get config from firebase 21:30 - 26:25 
  + gear-icon(top left) >> project settings >> config >> copy everything
  + require for authentication
  + create **/src/firebase.js** >> paste (config code)

5. ### Created app_body
  + create **/src/Sidebar.js** component & **./src/Sidebar.css**
  + create **/src/Chat.js** component & **/src/Chat.css**
  + import into **App.js** and edit **App.css**

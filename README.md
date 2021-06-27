# whatsapp-mern
a whatsapp clone using mern stack

### Technologies
  + **Express** : server
  + **mongoDB** : database
  + **mongoose** : Easily access database (messeges)
  + **Pusher** : Make database realtime. 
  + **socket.io** : implement two way connection to client-server
  + **firebase** : authentication and hosting
  + **Material-UI** : Prebuilt React components (including icons).

1. #### create react app ####
  `javascript
  npx create-react-app whatsapp-mern
  `
2. #### Setup *firebase* 17:00 - 19:00 
  + frontend deployment (backend will be deployed on heroku)
  
3. #### clean up react app 19:40 - 21:30

4. #### get config from firebase 21:30 - 26:25 
  + gear-icon(top left) >> project settings >> config >> copy everything
  + require for authentication
  + create **/src/firebase.js** >> paste (config code)

5. #### Created app_body
  + create **/src/Sidebar.js** component & **./src/Sidebar.css**
  + create **/src/Chat.js** component & **/src/Chat.css**
  + import into **App.js** and edit **App.css**

6. #### Build sidebar__header using material-ui
  + ~~` npm i @material-ui/core `~~ == currently material-ui (version 4) don't support React17(latest)
      + temporary(unstable) solution ` npm install --save --legacy-peer-deps @material-ui/core `
  + ` npm i @material-ui/icons ` == to import icons as react components (search on material-ui)
  + finish sidebar__header
      + sidebar__header > Avatar + sidebar__headerRight > ((IconButton > DonutLargeIcon) + (IconButton > ChatIcon) + (IconButton > MoreVertIcon))
      + add following styles in Sidebar.css
          + `.sidebar__header`
          + `.sidebar__headerRight`
          + `.sidebar__headerRight > .MuiSvgIcon-root` [.MuiSvgIcon-root]( https://material-ui.com/api/svg-icon/#css "Default class given to material-ui icons")

7. #### Build sidebar__search component
  + sidebar__search > sidebar__searchContainer > (SearchOutlined + input)
  + Style following components in sidebar.css
      + `.sidebar__search`
      + `.sidebar__searchContainer`
      + `.sidebar__searchContainer > .MuiSvgIcon-root`
      + `.sidebar__searchContainer > input`


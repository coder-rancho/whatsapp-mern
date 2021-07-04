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

## Frontend Using React
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

8. #### Build sidebarChats
  + create **/src/SidebarChat.js** component & **/src/SidebarChat.css**
      + div.sidebarChat > Avatar + div.sidebarChat__info > h2 + p
  + In sidebar.js 
      + div.sidebarChat > SidebarChat*3
  + Add following styles in SidebarChat.css
      + `.sidebarChat`
      + `.sidebarChat:hover`
      + `.sidebarChat__info > h2`
      + `.sidebarChat__info`
      + `.sidebar__chats (inside  ~~SidebarChar.css~~ Sidebar.css)

9. #### Build Chat component
  + **chat__header** 
      + Avatar + (div.chat__headerInfo > h3 + p) + div.chat__headerRight > IconButtons*3 > (mui-icons )
  + **chat__body**
      + (p.chat__message > span.chat__name + text + span.chat__timestamp) + p.chat__message, chat__receiver > span.chat__name + text + span.chat__timestamp
  + **chat__footer** 
      + InsertEmoticon + form > input + button + Mic

  + Add following styles
    + `.chat`
    + `.chat__header` & `.char__headerInfo
    + `.chat__body` & `.chat__message` & `.chat__receiver` & `.chat__timeStamp` & `chat__name`;
    + `chat__footer` & `.chat__footer > form` & `.chat__footer > form > input` & `.chat__footer > form > button`

  ## Backend
  + create a directory **whatsapp-backend** as sibling directory to *whatsapp-mern* directory
  + for further details refer [coder-rancho/whatsapp-bakckend](https://github.com/coder-rancho/whatsapp-backend.git) repository
  + Sync frontend with Backend (require pusher-js)
    + Incorporated pusher listener into app (require useEffect)
    + test using postman by insert data
  + Fetch messages from Database
    + create **./axios.js**  (require axios)
    > axios connect our frontend server to backend server
    + setup app.js to fetch messages
      + create live array (require useState)
      + fetch messages into array from DB on load using *axios*
      + fetch newMessage into array using *pusher*, include *messages* dependency of useState.
  
10. #### complete the chat body
  + pass *messages* array as props to `<Chat />` component
  + render messages using `array.map()` function
  + append `chat__receiver` class if `message.receive === true`

11. #### complete the 'enter to send' functionality
  + implement live input in footer (require useState)
  + submit button trigger sendMessage func which 
    + prevent default refresh (it won't make `input === ""`)
    + post message to */messages/new* (require axios)
    + `setInput('');
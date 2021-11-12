# UI / UX Guide

## Environment Setup and Basic Git Commands

<details>
  <summary>Click to expand!</summary>

## Step 1.a: Basic Installation for new project

### Install `Expo Go` app from the App store on to your phone

<details>
  <summary>Click to expand!</summary>

![expoGo](./instruction_images/expoGo.jpg)

</details>

### Install expo client in global

<details>
  <summary>Click to expand!</summary>

- In the terminal, run the following code

  > npm install -g expo-cli

- example

  ![installExpo](./instruction_images/installExpo.gif)

</details>

### Create a new project with expo client

<details>
  <summary>Click to expand!</summary>

- In the terminal, run the following code

  - project name for this case is `ui-ux-guide`
  - add `--npm` to use npm install, default is yarn

  > expo init ui-ux-guide --npm

  - select the project template type using the keyboard arrow keys, then press enter to execute

- example

  ![createExpo](./instruction_images/createExpo.gif)

</details>

## Step 1.b: Basic Installation for existing project

### Git Clone existing repository from Github on to your pc

<details>
  <summary>Click to expand!</summary>

1. Go to the existing repository URL
2. Click on the green button `Code`
3. A dropdown will appear, click on the copy button
4. Go to the terminal and type the following command and paste the copied text after the command

   - example: `git clone git@github.com:reshinto/ui-ux-guide.git`

   > git clone

5. Make sure you cd into the newly cloned directory
   > cd ui-ux-guide

- example

  ![gitClone](./instruction_images/gitClone.gif)

</details>

### Install required dependencies for the app to run

<details>
  <summary>Click to expand!</summary>
  
- In the terminal, run the following code
  > npm install

- example

  ![npmInstall](./instruction_images/npmInstall.gif)

</details>

## Step 2: Run App

### Run expo app on your pc

<details>
  <summary>Click to expand!</summary>

- First check if you are in `ui-ux-guide` folder

  - If you followed the example in Step 1, run the following code in the terminal
    > cd ui-ux-guide

- To run the app execute the following code in the terminal

  > npm start

- Take your Iphone and open a QR code reader and use it to scan the QR code

- example: run server

  ![runApp](./instruction_images/runApp.gif)

- example: run mobile app

  ![runAppOnMobile](./instruction_images/runAppOnMobile.gif)

</details>

## Step 3: Saving Changes with Git

<details>
  <summary>Click to expand!</summary>

- In the terminal, run the following commands

  1. Check the current status to see what files need to be saved

     > git status

  2. Add all modified files into the staging area
     > git add .
  3. Check if all files has been added to the staging area, this is to prepare the saving process
     > git status
  4. Save the modified files via commit with a message to explain what this file changes is about
     > git commit -m "some text message"

- example

  ![commitGitChanges](./instruction_images/commitGitChanges.gif)

</details>

## Step 4: Push Code to Github

### Create a new repository on Github

<details>
  <summary>Click to expand!</summary>

1. Login to Github
2. Click on the top right icon of the page that looks similar to your profile picture
3. A list of selections will appear, click on `Your repositories`
4. Click on the green button `New` on the top right section of the page
5. Fill in the project name aka `Repository Name`
6. If repository name is accepted by Github, you can click on the green button `Create repository` to complete the new repository creation

- example

  ![createNewRepo](./instruction_images/createNewRepo.gif)

</details>

### Push to Github for the first time

<details>
  <summary>Click to expand!</summary>

1. Copy the git remote command and paste it into the terminal
   - This is to link github repository with your code in your pc
   - example: `git remote add origin git@github.com:reshinto/ui-ux-guide.git`
2. Push the code to Github with git push
   > git push -u origin master

- example

  ![firstGitPush](./instruction_images/firstGitPush.gif)

</details>

### Push to Github from the second time onwards

<details>
  <summary>Click to expand!</summary>

- Push the code to Github with git push

> git push

- example

  ![gitPush](./instruction_images/gitPush.gif)

</details>

</details>

## React Basics

<details>
  <summary>Click to expand!</summary>
  
## React fundamentals
### HTML DOM vs React Virtual DOM
<details>
  <summary>Click to expand!</summary>

![houseLayout](./instruction_images/houseLayout.png)

- Building a webpage is similar to building a house
  - Building a house: you plan a specific floor layout, choose the colors to paint the walls, and buy the furnitures and appliances you want to use, etc.
  - Building a webpage: you design the page by planning which and where components should be placed, choose the colors, and decide on what kind of features to implement, etc.
- HTML
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head></head>
    <body>
      <ul class="list">
        <li class="list__item">List item</li>
      </ul>
    </body>
  </html>
  ```
- HTML DOM representation

  ![htmlDOM](./instruction_images/htmlDOM.png)

- React Virtual DOM representation
  ```javascript
  const vdom = {
    tagName: "html",
    children: [
      {tagName: "head"},
      {
        tagName: "body",
        children: [
          {
            tagName: "ul",
            attributes: {class: "list"},
            children: [
              {
                tagName: "li",
                attributes: {class: "list__item"},
                textContent: "List item",
              }, // end li
            ],
          }, // end ul
        ],
      }, // end body
    ],
  }; // end html
  ```
  ![virtualDOM](./instruction_images/virtualDOM.png)

#### How updating of the HTML DOM affects the building process of the webpage

![slowNInefficient](./instruction_images/slowNInefficient.png)

- whenever you need to make changes, you would need to rebuild the entire webpage again
- Similarly, when you need to make any changes (small or large), you would need to rebuild the entire house again
- The disadvantage of doing so is that it would take up time to rebuild everything, even though you had only made 1 small change

#### How React Virtual DOM speed up the updating process of the HTML DOM

- React copies the HTML DOM to create the virtual DOM so as to make it easy to make changes by following the form of a tree data structure

  ![treeDataStructure](./instruction_images/treeDataStructure.png)

  - only the affected node and it's child nodes will be updated, while the rest of the node remains unchanged

- Similarly for a house, it can be broken down into a tree data structure as well

  ![houseTreeLayout](./instruction_images/houseTreeLayout.png)

  - When a room needs to be modified, only that room will be rebuilt, while the rest of the house will be left untouched
  - in the event where you want the items (child nodes) in the room to remain unchanged, and only modify the room, you would need to specify that you wish to do so
    - otherwise, by default, when a room gets rebuilt, everything inside will be rebuilt together with the room

- example of how virtual DOM behaves

  ![virtualDOM](./instruction_images/virtualDOM.gif)

</details>

### React Thinking: thinking in components

<details>
  <summary>Click to expand!</summary>

</details>

</details>

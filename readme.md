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

-. Push the code to Github with git push

> git push

- example

  ![gitPush](./instruction_images/gitPush.gif)

</details>

</details>

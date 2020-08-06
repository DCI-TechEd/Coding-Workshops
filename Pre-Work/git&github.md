
### Git and GitHub Setup

![Git](https://i.imgur.com/jdQDm0y.png)

#### Introduction
For this course, you will need to install Git and also create an account on Github. We will get into the more intricate details in upcoming lessons, but Git is the program that runs on your computer and Github is where your work is stored online.

#### Install Git
Installing Git is easy. Follow the instructions for your operating system.

#### Linux
If you’re using Ubuntu, enter the following into the command line:

```js
$ sudo apt-get install git
```
👉 And that’s it!

### Mac OS
👉 Git is part of the Xcode Command Line Tools, so if you have already installed them, you already have git!

👉 If you’re using OSX Maverick or higher, just type git into the terminal. If you don’t have the Xcode Command Line Tools already installed, you will be prompted to do so.

👉 Otherwise, you can download this Git installer which will guide you through the process.

Is it Working?

Now, open up a terminal and type:

```js
$ git --version
  git version 2.7.4
  ```
👉 ⚠️ If you can see that, you have git installed!

👉 ❗ 🛑 If you’re still having problems, or if you prefer to install Git from source, here’s more information: Getting Started Installing Git :

#### 🛠 Basic configuration
👉 The first thing you should do is to set your identity (name and email) for your account. This is important because as git takes snapshots (commits) on our code, it will also store who made the change.


```js

  $ git config --global user.name "John Doe";

  $ git config --global user.email johndoe@example.com

```



**_NOTE:_**  🛑 💣 Warning

You should replace "John Doe" and the johndoe@example.com with your own info.

To learn more about setting up Git configurations, you can read the article Getting Started - [First-time Git setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)

#### GitHub 🚀
#### 👉 Create an Account
First things first: if you haven’t done so already, go to Github and create an account
![GitHub](https://i.imgur.com/CKRLlJZ.png)

#### GitHub commands Links

[Git Cheat Sheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)

[Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
### Basic Commands
#### 👉 🛑 Git Config :
 **`git config -- global user.name NAME`** = set user name globally

**`git config --global user.email EMAIL`** = set user email globally

**`git config user.name || git config user.email `** = check saved info

#### 👉 Creating repo
**`git init `** = creates a git repository in the directory currently in

#### 👉 Staging 🤔 
**`git status `**= to check status , if staged or unstaged

**`git add FILE_NAME `**= to add a file to staging area

**`git rm --cached FILE_NAME `** = to remove a file from staging area

**`git add . `** = to add all files in project to staging area

### 👉 Commiting
**`git commit -m "Specific Changes Made" `**= commits the staging area giving them a specific id

**`git log `**= shows all the commits with details

**`git log --oneline `**= shows all the commits in one line each

🛑 SPECIAL log : this will log the info in a nice format (Try it once 😉)
**`git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit  `**   
this can be used as an alias

### 👉 Git Stash
**`git stash`** = clears the changes to the initial state (last commit) & creates a unique id for the current state

**`git stash apply`** = brings back the current state
using git stash multiple times creates a list of stashes of all states with multiple ids

**`git stash list`** = shows all the stash (States) with their ID

**`git stash apply ID `**= ID will be the number , which state you want to go back to
**`git stash push -m "Your message"`** = used to give description to stash

**`git stash drop ID `** = used to remove a stash saved

**`git stash pop ID `**= applies the specific stash and removes it from history

**`git stash clear `** = removes all the stash history

### Gitignore
a **`.gitignore `** file can be created , in which you can specify all the folders/files that should not be staged and commited

👉 ⚠️ For example : node_modules/ .css.map etc.
It's Good to create a gitignore at the start of Project a good gitignore generator for reference :
Gitignore.io

### 👉 Reverting & Reset
use git log --oneline to see the commit_ID to change to
Checkout commit :

**`git checkout commit_ID `** = to just check the commit id entered , see it in read only ... changes will not be saved

git checkout master = to come back to original commit (As checkout removes us from master branch)
Revert commit :

git revert commit_ID = to remove the changes of the provided commit (will add a new revert commit and remove the changes of the specific commit)
Reset Commit :

git reset commit_ID = will remove all the commits after the provided id , but the files in local directory will not be touched (therefore you can still commit to original state after doing changes as needed) ... might take you to vim editor (type ":wq" then "Enter" to exit)
git reset commit_ID --hard = will remove all the commits after the provided id and even delete all the files and lines from local directory too
Branches
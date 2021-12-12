
# 💻 budget-tracker-PWA

## Description
A simple budget tracking application with PWA capabilities, allowing users to track withdrawals and deposits with or without a data/internet connection and maintain an accurate balance while traveling.

Please follow **[THIS LINK](https://budget-tracker-darkins-v2.herokuapp.com/)** to the deployed application.

<b>Below are screenshots that provide further reference:<b>
<br>
![Screenshot_1](https://user-images.githubusercontent.com/84754257/145705307-c7384e23-4966-4f44-b399-cfd68271c306.png)
![Screenshot_2](https://user-images.githubusercontent.com/84754257/145705309-60899a13-63d8-4c93-bd8a-da782c0c281a.png)
![Screenshot_3](https://user-images.githubusercontent.com/84754257/145705311-245b0406-7f9a-4d0e-a8d5-89ad9c7f25e5.png)

## Table of Contents

* [Badges](#badges)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Features](#feature)
* [Questions](#questions)

## Badges 
*The following programming languages, frameworks, platforms and libraries were utilized when completing this project:*

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## Installation
<br>

- In the Github repository, copy the SSH key link to clone onto your local device
- Open the project in your code editor of choice and enter the following command in console:
  - `npm i`
  - The following dependencies will being to run:
    - `compression` - `express` - `mongoose` - `morgan`
- Upon deployment of the application there should be an option to download the progressive web app version to your desktop:
  - The option should be available in the address bar
- You'll be promted to install the Budget Tracker application. Select Open, navigate to your desktop, then click on the available icon to open the application.
- A corresponding web manifest informs the browser about this PWA and how it should behave:

```json
{
    "name": "Budget Tracker",
    "short_name": "B-Track",
    "icons": [
        {
            "src": "/icons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
        },
        {
            "src": "/icons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
        },
        {
            "src": "/icons/icon-128x128.png",
            "sizes": "128x128",
            "type": "image/png"
        },
        {
            "src": "/icons/icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png"
        },
        {
            "src": "/icons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
        },
        {
            "src": "/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ],
    "theme_color": "#ffffff",
    "background_color": "#ffffff",
    "start_url": "/",
    "display": "standalone"
}
```
## Usage

- Users can keep track of their finances with a running total located at the top of the screen
- After naming a transaction and amount in the corresponding text fields, selet either button to `+ Add Funds` or `- Subtract Funds`
- Itemized transactions will appear slightly below that section
- Just below that is an html canvas element to provide a visual representation of the user's budget
- If network connection is weak, or there is a loss of connectivity (⚠️), the application should include data persistence that allows users to continue making transactions
  - When connection is re-established, an altert reading `All saved budget data has been submitted!`will notify the user that all data handled during loss of connectivity has been submitted to the database
  - You can view the cached data in the `Application` tab in Chrome Dev Tools

## Credits
Big shout out to <a href = https://github.com/Ileriayo>Ileriayo Adebiyi</a> and his <a href =https://github.com/Ileriayo/markdown-badges>markdown badges repository</a> which made this project all the more beautiful. Thank You.<br>

## License
*This project is licensed under:* <br>
![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)<br>
<a href= https://opensource.org/licenses/MIT)>MIT License Link</a><br>

## Contributing
This project adheres to standards set by the <a href = https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md>Contributor Covenant</a>.<br>
Please consult this documentation before contributing to this project.

## Questions
![Profile Pic](https://user-images.githubusercontent.com/84754257/145705294-57134da6-c3b7-40f4-bcbe-ad9cddb27f47.jpg)

If you have any questions regarding the development process of this application, or specific questions about contributing, feel free to reach me by email or on Github.
* Email 📪 willdarkins@gmail.com
* Github 🗿 [willdarkins](https://github.com/willdarkins) 

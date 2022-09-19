# Mi Dukaan

![Frame 7 1](https://user-images.githubusercontent.com/58210877/190949680-7d602668-40b8-48af-af4f-f2fcd096954c.png)

### A billing app integrated across all devices (mobiles and PCs) and outlets to be used by the vendor/operator at the Point of Sale (POS).

Easing the billing process across all Mi outlets by allowing the store operators to process customer orders in real-time through various devices thereby increasing speed and efficiency and ultimately increasing customer satisfaction.

# _Team kNITters_ <br>

- **_Aabhas Sao_** <br>
- **_Ankush Kumar Lohani_** <br>

### A team from NIT Rourkela

## 📱 Running app on an android device
- Find the apk from the releases section
- Login Credentials:
  - Mi ID: 1234567892
  - Password: NogameNolife

## 🚀 Tech Stacks Used:

|                                                Frontend                                                 |                       Database                       |                      Backend                       |                        Deployed                         |
| :-----------------------------------------------------------------------------------------------------: | :--------------------------------------------------: | :------------------------------------------------: | :-----------------------------------------------------: |
|                                         React Native, UI Kitten                                         |                       MongoDB                        |                  Node.js, Nest.js                  |                         Heroku                          |
| ![](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) | ![](https://www.svgrepo.com/show/331488/mongodb.svg) | ![](https://docs.nestjs.com/assets/logo-small.svg) | ![](https://img.stackshare.io/service/133/3wgIDj3j.png) |

# ⚙️ Setting up the development environment:

Follow these instructions if you need to build native code in your project. For example, if you are integrating React Native into an existing application, or if you ran "prebuild" from Expo to generate your project's native code, you'll need this section.

The instructions are a bit different depending on your development operating system, and whether you want to start developing for iOS or Android. If you want to develop for both Android and iOS, that's fine - you can pick one to start with, since the setup is a bit different.

#### Follow the official React Native Guide: [Setup your React Native Environment](https://reactnative.dev/docs/environment-setup)

- Install yarn globally
  ```bash
    npm i -g yarn
    ```
- cd in to the client folder and install packages
  ```bash
    cd client
    yarn
  ```
 
- run the below script to build locally
  ```bash
    yarn android
  ```

## 🧑‍💻 Running Backend Server Guidelines:


### Setting up Server locally
- Please make sure you have Nodje.js installed. It is advisable to use Node.js version 14.x or above.

- install yarn globally, if not installed

  ```bash
  npm i -g yarn
  ```

- create an env file and specify following environment variables

  - `MONGO_URI`: connection string to your Mongo DB cluster. \
     In you cluster create a database named `dukaan`

  - `PORT`: the port in which server will run on


- run below script to start dev server

  ```bash
    yarn start:dev
  ```

### 💡 Future Plans
  - Using `@react-native-async-storage/async-storage` to store products data offline to process orders without internet connection.
  - Integrating Mi Dukaan app with physical payment machines for automatic amount entering and swift transactions user experience.
  - Add more features to tracking like: filters sort by date.

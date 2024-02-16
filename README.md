# Ticker Tracker

<img src="https://res.cloudinary.com/deojavjaq/image/upload/v1708050303/projects/price-ticker-readme-image_n4bkjw.png" alt="The screenshot of the Ticker Tracker project"/>

## Implemented features

- Connects to the locally running service
- Utilizes websockets to fetch and display real-time price ticker data
- Visual effects to highlight positive or negative changes in the prices depending on if change percent was higher lower 0.5%
- Ability to specify interval time by user by 5/15/30 seconds
- Renders price changes for selected tickers dynamically
- Pressing on the card changes the displayed chart
- Switched to a new technology stack with React and Vite, which offers improved compatibility, security, and optimization, addressing previous challenges and enhancing overall project quality.

### Technologies

- React/React Hooks
- Redux/Redux Toolkit
- Socket.io
- Styled Components
- Jest
- Recharts
- React Select

### Running the local service

1. `cd server`
2. `npm install` or `yarn install`
3. `npm run start` or `yarn start`
4. You can visit [http://localhost:4000](http://localhost:4000) to check that the service is working correctly and inspect the data it produces.

### Run the client application

1. `cd client`
2. `npm install` or `yarn install`
3. `npm run dev` or `yarn dev`

### Run the tests

1. `cd client`
2. `npm run test` or `yarn test`

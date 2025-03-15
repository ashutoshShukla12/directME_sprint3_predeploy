const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

/* routers */
const authRouter = require('./Routes/AuthRouter');
const shelterRouter = require('./Routes/ShelterRoutes');
const adminRouter = require('./Routes/AdminRoutes');
const volunteerRouter = require('./Routes/VolunteerRoutes');
const InNeedRouter = require('./Routes/InNeedRoutes');
const usersRouter = require('./Routes/UsersRoutes');
const eventRouter = require('./Routes/EventRoutes');
const JobsRouter = require('./Routes/JobRoutes');

/* database connection */
require('dotenv').config();
require('./Models/db');

const PORT = process.env.PORT || 9000;


/* middleware */
app.use(bodyParser.json());
app.use(cors());


/* endpoints */
app.use('/api', usersRouter);
app.use('/auth', authRouter);
app.use('/api', shelterRouter);
app.use('/admin', adminRouter);
app.use('/api', volunteerRouter);
app.use('/inneed', InNeedRouter);
app.use('/api', eventRouter);
app.use('/api', JobsRouter);


/* ping test*/
app.get('/ping', (req, res) => {
    res.send('pong')
})/* ping test*/

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
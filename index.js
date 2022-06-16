const express = require('express');
const path = require('path');
// connect DB
const sequelize = require('./util/database');

const app = express();

// Multer -set up
const multer = require('multer');

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './data/uploads');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

// Models
const Appellant = require('./models/Appellant');
const Appeal = require('./models/Appeal');
const AppealState = require('./models/AppealState');
const Checklist = require('./models/Checklist');
const AppealDoc = require('./models/AppealDoc');

// Init Middleware
app.use(express.json({ extended: false }));
app.use(
    multer({ storage: fileStorage, fileFilter: fileFilter }).single('file')
);
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// app.get('/', (req, res) => res.send('API IS RUNNING'));

// Define Routes
const userRoutes = require('./routes/officials/userRoutes');
const authRoutes = require('./routes/officials/authRoutes');
const appellantUserRoutes = require('./routes/appellants/userRoutes');
const appealRoutes = require('./routes/appellants/appealRoutes');
const receptionistRoutes = require('./routes/officials/receptionistRoutes');
const registrarRoutes = require('./routes/officials/registrarRoutes');
const uploadRoutes = require('./routes/officials/uploadRoutes');
const downloadRoutes = require('./routes/officials/downloadRoutes');

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/appellants', appellantUserRoutes);
app.use('/api/appellant', appealRoutes);
app.use('/api/receptionist', receptionistRoutes);
app.use('/api/registrar', registrarRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/download', downloadRoutes);

// Define PORT
const PORT = process.env.PORT || 5000;

// Model relations
Appeal.belongsTo(Appellant, { constraints: true, onDelete: 'CASCADE' });
Appellant.hasMany(Appeal);

AppealState.belongsTo(Appeal, { constraints: true, onDelete: 'CASCADE' });
Appeal.hasOne(AppealState);

Checklist.belongsTo(Appeal, { constraints: true, onDelete: 'CASCADE' });
Appeal.hasOne(Checklist);

AppealDoc.belongsTo(Appeal, { constraints: true, onDelete: 'CASCADE' });
Appeal.hasOne(AppealDoc);

sequelize
    // .sync({ force: true })
    .sync()
    .then((result) => {
        app.listen(PORT, () => {
            console.log('SERVER IS RUNNING');
        });
    })
    .catch((err) => {
        console.log(err);
    });

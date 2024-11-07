const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const SECRET_KEY = "secret";
const users = []; 


app.post('/api/register', async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email || !password) {
        return res.status(400).json({ error: 'Email et mot de passe requis' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ email, password: hashedPassword });
    console.log(users);
    res.status(201).json({ message: 'Utilisateur créé' }); 
});



app.post('/api/login', async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).send('Identifiants incorrects');
    }
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});

// Route protégée
app.get('/api/protected', (req, res) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).send('Token requis');
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        res.json({ message: `Bienvenue, ${decoded.email}` });
    } catch (err) {
        res.status(403).send('Token invalide');
    }
});

app.listen(3000, () => console.log('Serveur démarré sur http://localhost:3000'));

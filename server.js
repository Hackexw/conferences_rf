import express from 'express';

const app = express();
const PORT = 1000;

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/register', (req, res) => {
    res.render('register', {title: "Регистрация на портале"});
});

app.post('/register', (req, res) => {

  const { fio, phone, email, login, password } = req.body;
  
  res.render('register', {
    title: "Регистрация на портале",
    user: { fio, phone, email, login }
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'О портале',
    description: 'Наш портал предназначен для тестирования работы кода)'
  });
});

app.get('/login', (req, res) => {
  res.render('login', {title1: "Авторизация"});
});

app.post('/login', (req, res) => {

  res.redirect('/dashboard');
});

app.get('/dashboard', (req, res) => {
  res.render('dashboard', {
    title: 'Мои заявки',
    user: { fio: 'Иванов Иван' },
    requests: [
      { room_name: 'Аудитория №1', status: 'Новая' },
      { room_name: 'Коворкинг', status: 'Завершено' }
    ]
  });
});

app.get('/contact', (req, res) => {
    res.send('Контакты');
});

app.get('/', (req, res) => {
    res.send('тестик_бе');
});

app.listen(PORT, () => {
    console.log(`Сервер: https://localhost:${PORT}`);
});
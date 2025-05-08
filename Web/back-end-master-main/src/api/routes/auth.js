const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  const { token, comment } = req.body; // افترض أن القيم يتم إرسالها في الـ body

  // طباعة القيم المرسلة
  console.log('Token:', token);
  console.log('Comment:', comment);

  // منطق تسجيل المستخدم
  const data = { message: 'User registered successfully' }; // استجابة وهمية
  console.log('Response:', data);

  res.send(data);
});

module.exports = router;
import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

const resumeData = {
  name: 'Gabriel Zouad',
  title: 'Full Stack Developer',
  contact: {
    email: 'z20gab@gmail.com',
    phone: '+47 47653911',
    website: 'https://www.gabrielzouad.no',
  },
  summary: 'Engasjert utvikler med erfaring fra flere prosjekter ',
  skills: ['JavaScript', 'nextjs', , 'react', 'HTML/CSS', 'kotlin'],
};

app.get('/api/resume', (req, res) => {
  res.json(resumeData);
});

app.listen(PORT, () => {
  console.log(`Resume API is running on port ${PORT}`);
});

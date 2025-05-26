const express = require('express');
const router = express.Router();
const db = require('../firebase');

const postsRef = db.collection('posts');

router.get('/', async (req, res) => {
  const snapshot = await postsRef.orderBy('timestamp', 'desc').get();
  const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  res.json(posts);
});

router.post('/', async (req, res) => {
  const { username, message } = req.body;
  const newPost = {
    username,
    message,
    timestamp: new Date()
  };
  const docRef = await postsRef.add(newPost);
  res.json({ id: docRef.id, ...newPost });
});

router.delete('/:id', async (req, res) => {
  await postsRef.doc(req.params.id).delete();
  res.sendStatus(204);
});

router.put('/:id', async (req, res) => {
  const { username, message } = req.body;
  await postsRef.doc(req.params.id).update({ username, message });
  res.sendStatus(200);
});

module.exports = router;

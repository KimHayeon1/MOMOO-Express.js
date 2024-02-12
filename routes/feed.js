const express = require('express');
const { getDoc, doc } = require('firebase/firestore');
const { appFireStore } = require('../firebase/config');
const router = express.Router();

// GET /feed/:id Router
router.get('/:id', async (req, res) => {
  req.header('uid');

  const docSnap = await getDoc(
    doc(
      appFireStore,
      req.header('uid'),
      req.header('uid'),
      'feed',
      req.params.id
    )
  );

  res.json(docSnap.data());
});

module.exports = router;

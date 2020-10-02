const express = require("express");
const asyncHandler = require("express-async-handler");
// const jwt = require("jsonwebtoken");
// const { jwtConfig } = require("../../config");
const { Case, User } = require("../../db/models");
const router = express.Router();


// getting Cases
router.get(
  "/",
  asyncHandler(async function (req, res, next) {
    const cases = await Case.findAll({
      include: User
    });
    return res.json({ cases });
  })
);

// getting number
router.get(
  "/total",
  asyncHandler(async function (req, res, next) {
    const total = await Case.findAll({
      include: User
    });
    return res.json({ total });
  })
);

// new case
router.post(
  "/newcase",
  asyncHandler(async function (req, res, next) {
    const { patientName, providerId } = req.body;
    const newCase = await Case.create({
      patientName,
      providerId
    });
    return res.json({ newCase })
  })
);
module.exports = router;


const express = require("express");
const router = express.Router();
const { Event, validate_event } = require("../models/event");

const _ = require("lodash");
const logger = require("../logger");
const wrapper = require("../middleware/async_midlleware");
const upload = require("../file_uploader");
const auth=require('../middleware/auth');


router.get(
  "/",
  wrapper(async (req, res, next) => {
    const events = await Event.find();
    res.send(events);
  })
);

router.get(
  "/user/:id",
  wrapper(async (req, res, next) => {
    const events = await Event.find({userId:req.params.id});
    res.send(events);
  })
);

router.get(
  "/:id",
  wrapper(async (req, res) => {
    const event = await Event.findById(req.params.id);
    res.send(event);
  })
);

router.post(
  "/",
  wrapper(async (req, res) => {
    const { error } = validate_event(req.body);

    if (error) {
      return res.json({
        status: 'error',
        error: error.details[0].message
      });
    }

    let event = await Event.findOne({ name: req.body.name });
    if (event) {
      return res.json({status: 'error', error:"event already created"});
    }

    event = new Event(
      _.pick(req.body, ["name", "description", "date", "designColor", "location","userId"])
    );

    await event.save().catch(err => {
      console.log(err);
      res.json({
      status: 'error',
      error: err._message
    })});

    res.json({
      status: 'success',
      event
    });
  })
);

router.post(
  "/img/:id",
  upload.single("avatar"),
  wrapper(async (req, res) => {
    const result = await Event.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          img: req.file.filename
        }
      }
    );
    res.send(result);
  })
);

router.put(
  "/:id",
  wrapper(async (req, res) => {
    const result = await Event.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          description: req.body.description,
          date: req.body.date,
          location: req.body.location,
          designColor: req.body.designColor
        }
      }
    );
    res.send(result);
  })
);

router.delete(
  "/:id",
  wrapper(async (req, res) => {
    const result = await Event.findByIdAndDelete(req.params.id);
    res.send(result);
  })
);

module.exports = router;

const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
router.put("/api/workouts/:id",({ body , params }, res)=>{
    Workout.findByIdAndUpdate(params.id,{$push:{ exercises: body}},{new: true})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});
router.get("/api/workouts/range",({body},res)=>{
    Workout.aggregate([{
        $addfield:{
            totalDuration:{
                $sum:"$exercises.duration"
            }
        }
    }])
    .sort({_id:-1})
    .limit(7)
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
});
router.get("/api/workouts",({body},res)=>{
    Workout.aggregate([{
        $addfield:{
            totalDuration:{
                $sum:"$exercises.duration"
            }
        }
    }])
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
});
module.exports = router

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('quotes').del()
  await knex('quotes').insert([
    //subject_id 1 is veteran view quotes
    {
      quote_id: 1,
      subject_id: 1,
      quote: 'Heya! good to see you back!',
    },

    {
      quote_id: 2,
      subject_id: 1,
      quote: 'Hello! what are we learning today?',
    },

    {
      quote_id: 3,
      subject_id: 1,
      quote: 'Welcome back, glad to see you learning!',
    },

    {
      quote_id: 4,
      subject_id: 1,
      quote: 'Hurry and pick something so we can start learning!',
    },

    {
      quote_id: 5,
      subject_id: 1,
      quote: 'Wassup, ready to learn?',
    },

    //subject_id 2 is dailylearning quotes

    {
      quote_id: 6,
      subject_id: 2,
      quote: 'What a cool goal',
    },

    {
      quote_id: 7,
      subject_id: 2,
      quote: 'Alright lets get started',
    },

    {
      quote_id: 8,
      subject_id: 2,
      quote: 'sweet, im ready to learn this',
    },

    {
      quote_id: 9,
      subject_id: 2,
      quote: "Don't let me distract you from your learning journey!",
    },

    {
      quote_id: 10,
      subject_id: 2,
      quote: 'Im really proud of you for doing this',
    },

    //subject_id 3 is reflections quote
    {
      quote_id: 11,
      subject_id: 3,
      quote: 'Lets have a reflection on what we learned',
    },

    {
      quote_id: 12,
      subject_id: 3,
      quote: 'Phewf what a day, how did we do?',
    },

    {
      quote_id: 13,
      subject_id: 3,
      quote: 'Reflecting is a big part of developing your skillz',
    },

    {
      quote_id: 14,
      subject_id: 3,
      quote: "Don't underestimate the value of reflection",
    },

    {
      quote_id: 15,
      subject_id: 3,
      quote: 'Nice job today, you did great!',
    },

    //subject_id 4 is the goal and subgoal page quotes

    {
      quote_id: 16,
      subject_id: 4,
      quote:
        "It's time to divide and conquer our goals! like it's 18th century france",
    },

    {
      quote_id: 17,
      subject_id: 4,
      quote: 'Divide et impera.',
    },

    {
      quote_id: 18,
      subject_id: 4,
      quote: 'Time to score some goals!',
    },

    {
      quote_id: 19,
      subject_id: 4,
      quote: 'Happy learning time',
    },

    {
      quote_id: 20,
      subject_id: 4,
      quote: 'I am the worlds worst goalie, I help you score goals',
    },

    //subject_id 5 is for the hit enter to advance quotes for making a goal

    {
      quote_id: 21,
      subject_id: 5,
      quote: 'Hit the enter key when you are done typing to move on!',
    },

    {
      quote_id: 22,
      subject_id: 5,
      quote: 'When you are done typing hit that enter!',
    },

    //subject_id 6 is for letting people know they can change the subgoal name in the subgoal component

    {
      quote_id: 23,
      subject_id: 6,
      quote:
        'Did you know you can change the name of your sub-goal by clicking on it?',
    },

    {
      quote_id: 24,
      subject_id: 6,
      quote: 'You can change the name of your sub-goal by clicking on it!',
    },
    {
      quote_id: 25,
      subject_id: 7,
      quote:
        'Phewf what a day, how did we do? Start by writing down your thoughts from the session, then reflect on what went well, what could have gone better, and what you will do differently next time. This might seem tedious, but take it from me, writing reflections is super helpful for your learning. \n   - PlanBuddy 2022',
    },
  ])
}

const questions = {
  Anxiety: {
    questions: [
      {
        question: "How are you feeling right now?",
        responses: ["Not great", "Ok", "Great"],
        points: [0, 1, 2],
      },

      {
        question: "Feeling nervous,restless or tensed?",
        responses: ["Not at all", "Several days", "Every day"],
        points: [0, 1, 2],
      },

      {
        question: "Feeling a sense of panic or danger?",
        responses: ["Not at all", "Several days", "Every day"],
        points: [0, 1, 2],
      },

      {
        question: "Feeling weak or tired mentally and physically? ",
        responses: ["Not at all", "Several days", "Every day"],
        points: [0, 1, 2],
      },

      {
        question:
          "Trouble concentrating or thinking about anything other than the present worry?",
        responses: ["Not at all", "Several days", "Every day"],
        points: [0, 1, 2],
      },

      {
        question: "Having an incresed heart rate or breathing rapidly?",
        responses: ["Not at all", "Several days", "Every day"],
        points: [0, 1, 2],
      },
    ],

    totalPoints: 6,
    //based on total points consultations
  },

  Depression: {
    questions: [
      {
        question: "How are you feeling?",
        responses: ["Not great", "Ok", "Great"],
        points: [0, 1, 2],
      },

      {
        question: "Experienced any changes, loss, or trauma recently?",
        responses: ["No", "Maybe", "Yes"],
        points: [0, 1, 2],
      },

      {
        question: "Feeling lost in hopelessness?",
        responses: ["Not at all", "Several days", "Every day"],
        points: [0, 1, 2],
      },

      {
        question:
          "Do problems start to feel bigger when you think about them for long periods of time?",
        responses: ["Not at all", "Several days", "Every day"],
        points: [0, 1, 2],
      },

      {
        question: "Are you able to relax even for some time?",
        responses: ["No", "Maybe", "Yes"],
        points: [0, 1, 2],
      },

      {
        question: "Feeling emotions such as fear and sadness?",
        responses: ["No", "Maybe", "Yes"],
        points: [0, 1, 2],
      },
    ],

    totalPoints: 6,
  },

  "Bipolar Disorder": {
    questions: [
      {
        question: "How are you feeling?",
        responses: ["Not great", "Ok", "Great"],
        points: [0, 1, 2],
      },

      {
        question:
          "Do you feel so irritable at times  that you shouted at people or started fights or arguments?",
        responses: ["No", "Maybe", "Yes"],
        points: [0, 1, 2],
      },

      {
        question: "Do you feel much more energy than usual?",
        responses: ["Not at all", "Several days", "Every day"],
        points: [0, 1, 2],
      },

      {
        question:
          "Do you feel thoughts racing your mind and you can't slow down?",
        responses: ["No", "Maybe", "Yes"],
        points: [0, 1, 2],
      },

      {
        question:
          "Do you feel easily distracted and have trouble concentrating?",
        responses: ["Not at all", "Several days", "Every day"],
        points: [0, 1, 2],
      },

      {
        question:
          "Did you attempt some unsual things that people thought were foolish or risky?",
        responses: ["No", "Maybe", "Yes"],
        points: [0, 1, 2],
      },
    ],

    totalPoints: 6,
  },

  Addiction: {
    //substances options
    questions: [
      {
        question: "How are you feeling?",
        responses: ["Not great", "Ok", "Great"],
        points: [0, 1, 2],
      },

      {
        question:
          "Do people annoy you by criticizing your drinking or drug use?",
        responses: ["No", "Maybe", "Yes"],
        points: [0, 1, 2],
      },

      {
        question: "Do you feel  bad or guilty about your drinking or drug use?",
        responses: ["No", "Maybe", "Yes"],
        points: [0, 1, 2],
      },

      {
        question: "Is drinking or drug use the first thing in morning you do?",
        responses: ["Not at all", "Several days", "Every day"],
        points: [0, 1, 2],
      },

      {
        question:
          "Do you feel that you ought to cut down on your drinking or drug use?",
        responses: ["Not at all", "Several days", "Every day"],
        points: [0, 1, 2],
      },

      {
        question: "Can you survive a 3 days without it?",
        responses: ["No", "Maybe", "Yes"],
        points: [0, 1, 2],
      },
    ],

    totalPoints: 6,
  },

  "Eating Disorder": {
    questions: [
      {
        question: "How are you feeling?",
        responses: ["Not great", "Ok", "Great"],
        points: [0, 1, 2],
      },

      {
        question:
          "Do you worry about your weight and bosy shape more than other people of your age?",
        responses: ["Not at all", "Several days", "Every day"],
        points: [0, 1, 2],
      },

      {
        question: "Are you afraid of gaining weight?",
        responses: ["No", "Maybe", "Yes"],
        points: [0, 1, 2],
      },

      {
        question:
          "Do you have  eating habits that are different from those of my family and friends?",
        responses: ["No", "Maybe", "Yes"],
        points: [0, 1, 2],
      },

      {
        question: "Do you skip meals often?",
        responses: ["No", "Maybe", "Yes"],
        points: [0, 1, 2],
      },

      {
        question: "Do you prefer to eat alone?",
        responses: ["Not at all", "Several days", "Every day"],
        points: [0, 1, 2],
      },
    ],

    totalPoints: 6,
  },
};

//About you:name,age,gender,zip code,phone

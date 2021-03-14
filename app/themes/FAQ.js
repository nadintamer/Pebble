const frequentlyAskedQuestions = {
  tasks: {
    question: 'How do I use the tasks feature?',
    answer: 'Adding a suggested task from Week X on the tasks tab will add it to your running “My Tasks” list. To access tasks from previous weeks, navigate to previous weeks from the home screen and access tasks from there.',
  },
  resources: {
    question: 'Where can I find additional resources?',
    answer: 'Check out these websites for more information about pregnancy and becoming a parent.',
    links: [
      { id: 0,
        text: 'What to Expect for Fathers',
        link: 'https://www.whattoexpect.com/pregnancy/expecting-father/',
      },
      { id: 1,
        text: 'National Parent Helpline',
        link: 'https://www.nationalparenthelpline.org/find-support',
      },
      { id: 2,
        text: 'The Post Partum Stress Center',
        link: 'https://postpartumstress.com/about/support-groups/',
      },
    ]
  },
  progressBar: {
    question: 'What does the progress bar mean?',
    answer: 'This progress bar represents how far along your partner is in their pregnancy. Remember that your due date is only an estimation!',
  },
  recommendations: {
    question: 'How does Pebble recommend items?',
    answer: 'Pebble leverages intelligent AI algorithms that can analyze articles and tasks you spend the most time on and provides suggestions accordingly.',
  },
  saved: {
    question: 'How do saved modules work?',
    answer: 'If you\'d like to come back to a module later, you can tap on the bookmark icon in the top right corner to save it! All of your saved modules are available under "Saved" on the Profile tab.',
  },
};

export default frequentlyAskedQuestions;

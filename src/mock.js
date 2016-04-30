const INITIAL_STATE = {
  activityTypes: [
    {
      id: 1,
      type: 'walk'
    },
    {
      id: 2,
      type: 'run'
    },
    {
      id: 3,
      type: 'park'
    },
    {
      id: 4,
      type: 'feed'
    },
    {
      id: 5,
      type: 'vet'
    }
  ],
  dogs: [
    {
      id: 1,
      name: 'Rocko',
      tagline: 'Badass Rescue',
      img: 'rocko.jpeg'
    },
    {
      id: 2,
      name: 'Sasha',
      tagline: 'Very Viszla',
      img: 'sasha.png'
    }
  ],
  history: [
    {
      id: 1,
      type: 'walk',
      participant: 'Rocko',
      assessment: 'good',
      duration: 20,
      notes: ''
    },
    {
      id: 2,
      type: 'walk',
      participant: 'Rocko',
      assessment: 'good',
      duration: 15,
      notes: ''
    },
    {
      id: 3,
      type: 'walk',
      participant: 'Rocko',
      assessment: 'good',
      duration: 10,
      notes: ''
    },
    {
      id: 4,
      type: 'walk',
      participant: 'Rocko',
      assessment: 'good',
      duration: 30,
      notes: ''
    },
    {
      id: 5,
      type: 'walk',
      participant: 'Rocko',
      assessment: 'good',
      duration: 25,
      notes: ''
    },
    {
      id: 6,
      type: 'walk',
      participant: 'Rocko',
      assessment: 'good',
      duration: 60,
      notes: ''
    },
    {
      id: 7,
      type: 'walk',
      participant: 'Rocko',
      assessment: 'good',
      duration: 45,
      notes: ''
    },
    {
      id: 8,
      type: 'walk',
      participant: 'Rocko',
      assessment: 'good',
      duration: 20,
      notes: ''
    },
    {
      id: 9,
      type: 'walk',
      participant: 'Rocko',
      assessment: 'good',
      duration: 25,
      notes: ''
    },
    {
      id: 10,
      type: 'walk',
      participant: 'Rocko',
      assessment: 'good',
      duration: 30,
      notes: ''
    },
    {
      id: 11,
      type: 'walk',
      participant: 'Sasha',
      assessment: 'good',
      duration: 30,
      notes: ''
    },
    {
      id: 12,
      type: 'walk',
      participant: 'Sasha',
      assessment: 'good',
      duration: 35,
      notes: ''
    },
    {
      id: 13,
      type: 'walk',
      participant: 'Sasha',
      assessment: 'good',
      duration: 20,
      notes: ''
    },
    {
      id: 14,
      type: 'walk',
      participant: 'Sasha',
      assessment: 'good',
      duration: 25,
      notes: ''
    },
    {
      id: 15,
      type: 'walk',
      participant: 'Sasha',
      assessment: 'good',
      duration: 45,
      notes: ''
    },
    {
      id: 16,
      type: 'walk',
      participant: 'Sasha',
      assessment: 'good',
      duration: 35,
      notes: ''
    },
    {
      id: 17,
      type: 'walk',
      participant: 'Sasha',
      assessment: 'good',
      duration: 40,
      notes: ''
    },
    {
      id: 18,
      type: 'walk',
      participant: 'Sasha',
      assessment: 'good',
      duration: 50,
      notes: ''
    },
    {
      id: 19,
      type: 'walk',
      participant: 'Sasha',
      assessment: 'good',
      duration: 40,
      notes: ''
    },
    {
      id: 20,
      type: 'walk',
      participant: 'Sasha',
      assessment: 'good',
      duration: 30,
      notes: ''
    }
  ],
  showModal: false
};

export default INITIAL_STATE;

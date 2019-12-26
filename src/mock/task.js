import { COLORS, DESCRIPTION_TASKS, TAGS, DEFAULT_REPEATING_DAYS } from '../const.js';
import Common from '../utils/common.js';

const generateRepeatingDays = () => {
  const repeatingDays = Object.assign({}, DEFAULT_REPEATING_DAYS);

  for (const day of Object.keys(repeatingDays)) {
    repeatingDays[day] = (Math.random() > 0.75);
  }

  return repeatingDays;
};

const generateTags = (tags) => tags.filter(() => Math.random() > 0.5).slice(0, 3);

const generateTask = () => {
  const dueDate = Math.random() > 0.5 ? Common.getRandomDate() : null;

  return {
    id: null,
    description: DESCRIPTION_TASKS[Common.getRandomNumberFromPeriod(DESCRIPTION_TASKS.length)],
    dueDate,
    repeatingDays: (dueDate) ? DEFAULT_REPEATING_DAYS : generateRepeatingDays(),
    tags: new Set(generateTags(TAGS)),
    color: COLORS[Common.getRandomNumberFromPeriod(COLORS.length)],
    isFavorite: (Math.random() > 0.5),
    isArchive: (Math.random() > 0.5),
  };
};

const generateTasks = (amount) => new Array(amount)
  .fill(``)
  .map((task, i) => {
    task = generateTask();
    task.id = i;
    return task;
  });

export { generateTasks };


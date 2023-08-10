export const TOTAL_TASKS = "TOTAL_TASKS";

export const totalTasks = (count) => {
    return {
      type: TOTAL_TASKS,
      payload:{count:count}
    };
  };
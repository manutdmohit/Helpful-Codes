// Get Today Start Date and End Date
  let startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);
  let endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  // Get Yesterday Start Date and End Date
  let startOfYesterday = new Date();
  startOfYesterday.setDate(startOfYesterday.getDate() - 1);
  startOfYesterday.setHours(0, 0, 0, 0);
  let endOfYesterday = new Date();
  endOfYesterday.setDate(endOfYesterday.getDate() - 1);
  endOfYesterday.setHours(23, 59, 59, 999);

  // Get Last Month Start Date and End Date
  let startOfPreviousMonth = new Date();
  startOfPreviousMonth.setMonth(startOfPreviousMonth.getMonth() - 1);
  startOfPreviousMonth.setDate(1);
  startOfPreviousMonth.setHours(0, 0, 0, 0);
  let endOfPreviousMonth = new Date();
  endOfPreviousMonth.setMonth(endOfPreviousMonth.getMonth() - 1);
  let lastDayOfPreviousMonth = new Date(
    endOfPreviousMonth.getFullYear(),
    endOfPreviousMonth.getMonth() + 1,
    0
  );
  endOfPreviousMonth.setDate(lastDayOfPreviousMonth.getDate());
  endOfPreviousMonth.setHours(23, 59, 59, 999);

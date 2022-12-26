  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 15;
  const skip = (page - 1) * limit;
  const count = getAllData.length;
  const totalPages = Math.ceil(count / limit);
  function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  res.status(StatusCodes.OK).json({
    count,
    totalPages,
    page,
    prev: page === 1 ? 1 : page - 1,
    next: totalPages === 0 ? page : page === totalPages ? totalPages : page + 1,
    stays: paginate(getAllData, limit, page),
  });

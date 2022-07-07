export const errorEntryBuilder = (errors: any) => {
  let newArrayError = [];
  for (const { constraints, property } of errors) {
    // const { constraints, property } = error;
    let valuesConst = Object.values(constraints);
    newArrayError.push(valuesConst[0]);
  }
  return { statusCode: 400, errorsMessages: newArrayError };
};

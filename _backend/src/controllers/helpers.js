import { reduce, map } from 'lodash';

export function logError(err) {
  console.error(err);
}

export function handleError(res, err, statusCode = 500) {
  logError(err);
  let status = err.statusCode || err.code || err.status || statusCode;
  // fix range errors from db
  if(+(status) > 500) status = 500;
  return res.status(status).json({'success': false, 'message': err.message, 'error': err});
}

export function getParam(req, name, altname) {
  let val = req.body[name] || req.query[name] || null;
  if (altname && !val) {
    val = req.body[altname] || req.query[altname] || null;
  }
  return val;
}


export async function asyncReduce(collection, callback) {
  return await reduce(collection, async (previousPromise, item, key) => {
    const collection = await previousPromise;
    collection[key] = await callback(item);
    return collection;
  }, Promise.resolve({}));
}

export async function asyncMap(collection, callback) {
  const promises = await map(collection, async (item, key) => {
    return await callback(item);
  });
  return await Promise.all(promises);
}

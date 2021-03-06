import { combineRoutes, r } from '@marblejs/core'
import {
  addNewLPEffect,
  getAllForSaleEffect,
  getAllLPsEffect,
  getRandomLPEffect,
} from './lps.effect'

const getAllLPsRoute = r.pipe(
  r.matchPath('/'),
  r.matchType('GET'),
  r.useEffect(getAllLPsEffect),
)

const addNewLPRoute = r.pipe(
  r.matchPath('/new'),
  r.matchType('POST'),
  r.useEffect(addNewLPEffect),
)

const getAllForSale = r.pipe(
  r.matchPath('/for-sale'),
  r.matchType('GET'),
  r.useEffect(getAllForSaleEffect),
)

const getRandomLp = r.pipe(
  r.matchPath('/random'),
  r.matchType('GET'),
  r.useEffect(getRandomLPEffect),
)

export const lps = combineRoutes('lps', {
  middlewares: [],
  effects: [
    getAllLPsRoute,
    addNewLPRoute,
    getAllForSale,
    getRandomLp,
  ],
})

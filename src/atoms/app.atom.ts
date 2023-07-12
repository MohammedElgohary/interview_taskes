import { CourseInterface } from '../@types'
import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

import { CONFIG } from '../config'

const { persistAtom } = recoilPersist();

export interface AppAtomI {
  courses: CourseInterface[];
}

export const appAtom = atom<AppAtomI>({
  key: `${CONFIG.app.shortName}-data`,
  default: {
    courses: [],
  },
  effects_UNSTABLE: [persistAtom],
});

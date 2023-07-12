import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { appAtom } from '../../atoms/app.atom'

export function useCourseDate() {
  const params = useParams();

  const [parentId, id] = useMemo(
    () =>
      params.id?.split("-").length === 2
        ? params.id.split("-")
        : ["", params.id],
    [params.id]
  );

  const [state] = useRecoilState(appAtom);

  const course = useMemo(() => {
    if (parentId) {
      return state.courses
        .find((course) => String(course.id) === String(parentId))
        ?.drafts.find((draft) => String(draft.id) === String(params.id));
    }

    return state.courses.find((course) => String(course.id) === String(id));
  }, [id, params.id, parentId, state.courses]);

  return {
    course,
    isChild: !!parentId,
    parentId,
    id,
  };
}

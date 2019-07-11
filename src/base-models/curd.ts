import { message } from 'antd';

import { getTableList /* getData*/, isCommitSuccessNew } from '@/utils/model';
import { callFunctionIfFunction } from '@/utils/decorators/callFunctionOrNot';

export type modelConfig = {
  fetchMethod?: Function;
  createMethod?: Function;
  updateMethod?: Function;
  deleteMethod?: Function;
};

export default (
  namespace: string,
  { fetchMethod, createMethod, updateMethod, deleteMethod }: modelConfig
) => ({
  namespace,

  state: {
    data: {
      list: [],
      pagination: {},
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(fetchMethod, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *create({ payload, callback }, { call }) {
      const response = yield call(createMethod, payload);
      if (isCommitSuccessNew(response)) {
        message.success('创建成功');
        callFunctionIfFunction(callback)();
        return;
      }
      callFunctionIfFunction(callback)(response);
    },
    *update({ id, payload, callback }, { call, put, select }) {
      const response = yield call(updateMethod, id, payload);
      if (isCommitSuccessNew(response)) {
        message.success('更新成功');

        const { data } = response;
        const list = yield select(state => state[namespace].data.list);
        yield put({
          type: 'save',
          payload: list.map(item => (item.id === data.id ? data : item)),
        });
        callFunctionIfFunction(callback)();
        return;
      }
      callFunctionIfFunction(callback)(response);
    },
    *delete({ id, callback }, { call }) {
      const response = yield call(deleteMethod, id);
      if (isCommitSuccessNew(response)) {
        message.success('删除成功');
        callFunctionIfFunction(callback)();
        return;
      }
      callFunctionIfFunction(callback)(response);
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        data: { ...getTableList(action) },
      };
    },
  },
});

import { getDefaultHeaders, getFormattedDateTime } from "utils/helpers";
import { request } from "utils/request";
import { API_URL } from "utils/constants";
import { put, takeLatest } from "redux-saga/effects";
import { actions } from "./slice";

export function* getLoginGraph(action) {
  try {
    const { startDate, endDate } = action.payload;
    const options = {
      method: "GET",
      headers: getDefaultHeaders(),
    };
    const response = yield request(
      `${API_URL}/dashboard/stats/loginGraphData?${
        startDate && endDate
          ? `start=${getFormattedDateTime(
              new Date(startDate).toISOString(),
              "MM-dd-yyyy"
            )}&end=${getFormattedDateTime(
              new Date(endDate).toISOString(),
              "MM-dd-yyyy"
            )}`
          : ""
      }`,
      options
    );
    if (response) {
      // console.log(response, "data", "mobile response");
      yield put(
        actions.setDashboardGraph({ key: "loginGraph", value: response })
      );
    } else {
    }
  } catch (e) {}
}
export function* getServiceCallsGraph(action) {
  try {
    const { startDate, endDate } = action.payload;
    const options = {
      method: "GET",
      headers: getDefaultHeaders(),
    };
    const response = yield request(
      `${API_URL}/dashboard/stats/requestChangeGraphData?${
        startDate && endDate
          ? `start=${getFormattedDateTime(
              new Date(startDate).toISOString(),
              "MM-dd-yyyy"
            )}&end=${getFormattedDateTime(
              new Date(endDate).toISOString(),
              "MM-dd-yyyy"
            )}`
          : ""
      }`,
      options
    );
    if (response) {
      // console.log(response, "data", "mobile response");
      yield put(
        actions.setDashboardGraph({
          key: "serviceCallsGraph",
          value: response,
        })
      );
    } else {
    }
  } catch (e) {}
}

export function* getMobileUsersCount() {
  try {
    const options = {
      method: "GET",
      headers: getDefaultHeaders(),
    };
    const response = yield request(
      `${API_URL}/dashboard/stats/mobileusercount`,
      options
    );
    if (response && response.total) {
      // console.log(response, "data", "mobile response");
      yield put(
        actions.setDashbaordStats({ key: "mobileUsers", value: response })
      );
    } else {
    }
  } catch (e) {}
}
export function* getUsersCount() {
  try {
    const options = {
      method: "GET",
      headers: getDefaultHeaders(),
    };
    const response = yield request(
      `${API_URL}/dashboard/stats/usercount`,
      options
    );
    if (response && response.total) {
      // console.log(response, "data");
      yield put(actions.setDashbaordStats({ key: "users", value: response }));
    } else {
    }
  } catch (e) {}
}

export function* getChangeRequestCount() {
  try {
    const options = {
      method: "GET",
      headers: getDefaultHeaders(),
    };
    const response = yield request(
      `${API_URL}/dashboard/stats/requestcount`,
      options
    );
    if (response && response.total) {
      // console.log(response, "data");
      yield put(
        actions.setDashbaordStats({ key: "changeRequests", value: response })
      );
    } else {
    }
  } catch (e) {}
}

export function* getDashboardStats(action) {
  try {
    yield getUsersCount();
    yield getChangeRequestCount();
    yield getMobileUsersCount();
    yield getLoginGraph(action);
    yield getServiceCallsGraph(action);
  } catch (e) {}
}

export function* useDashboardSaga() {
  yield takeLatest(actions.getDashboardStats.type, getDashboardStats);
}

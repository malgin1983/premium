module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/store.ts":
/*!**************************!*\
  !*** ./src/app/store.ts ***!
  \**************************/
/*! exports provided: makeStore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeStore\", function() { return makeStore; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _features_counter_counterSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/counter/counterSlice */ \"./src/features/counter/counterSlice.ts\");\n\n\nfunction makeStore() {\n  return Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"configureStore\"])({\n    reducer: {\n      counter: _features_counter_counterSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n  });\n}\nconst store = makeStore();\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlLnRzPzU4ZGIiXSwibmFtZXMiOlsibWFrZVN0b3JlIiwiY29uZmlndXJlU3RvcmUiLCJyZWR1Y2VyIiwiY291bnRlciIsImNvdW50ZXJSZWR1Y2VyIiwic3RvcmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRU8sU0FBU0EsU0FBVCxHQUFxQjtBQUMxQixTQUFPQyx1RUFBYyxDQUFDO0FBQ3BCQyxXQUFPLEVBQUU7QUFBRUMsYUFBTyxFQUFFQyxzRUFBY0E7QUFBekI7QUFEVyxHQUFELENBQXJCO0FBR0Q7QUFFRCxNQUFNQyxLQUFLLEdBQUdMLFNBQVMsRUFBdkI7QUFhZUssb0VBQWYiLCJmaWxlIjoiLi9zcmMvYXBwL3N0b3JlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUsIFRodW5rQWN0aW9uLCBBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuXG5pbXBvcnQgY291bnRlclJlZHVjZXIgZnJvbSAnLi4vZmVhdHVyZXMvY291bnRlci9jb3VudGVyU2xpY2UnXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3RvcmUoKSB7XG4gIHJldHVybiBjb25maWd1cmVTdG9yZSh7XG4gICAgcmVkdWNlcjogeyBjb3VudGVyOiBjb3VudGVyUmVkdWNlciB9LFxuICB9KVxufVxuXG5jb25zdCBzdG9yZSA9IG1ha2VTdG9yZSgpXG5cbmV4cG9ydCB0eXBlIEFwcFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+XG5cbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gdHlwZW9mIHN0b3JlLmRpc3BhdGNoXG5cbmV4cG9ydCB0eXBlIEFwcFRodW5rPFJldHVyblR5cGUgPSB2b2lkPiA9IFRodW5rQWN0aW9uPFxuICBSZXR1cm5UeXBlLFxuICBBcHBTdGF0ZSxcbiAgdW5rbm93bixcbiAgQWN0aW9uPHN0cmluZz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgc3RvcmVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/store.ts\n");

/***/ }),

/***/ "./src/features/counter/counterAPI.ts":
/*!********************************************!*\
  !*** ./src/features/counter/counterAPI.ts ***!
  \********************************************/
/*! exports provided: fetchCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchCount\", function() { return fetchCount; });\nasync function fetchCount(amount = 1) {\n  const response = await fetch('/api/counter', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      amount\n    })\n  });\n  const result = await response.json();\n  return result;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvY291bnRlci9jb3VudGVyQVBJLnRzPzU2NTYiXSwibmFtZXMiOlsiZmV0Y2hDb3VudCIsImFtb3VudCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQU8sZUFBZUEsVUFBZixDQUEwQkMsTUFBTSxHQUFHLENBQW5DLEVBQWlFO0FBQ3RFLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsY0FBRCxFQUFpQjtBQUMzQ0MsVUFBTSxFQUFFLE1BRG1DO0FBRTNDQyxXQUFPLEVBQUU7QUFDUCxzQkFBZ0I7QUFEVCxLQUZrQztBQUszQ0MsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFUDtBQUFGLEtBQWY7QUFMcUMsR0FBakIsQ0FBNUI7QUFPQSxRQUFNUSxNQUFNLEdBQUcsTUFBTVAsUUFBUSxDQUFDUSxJQUFULEVBQXJCO0FBRUEsU0FBT0QsTUFBUDtBQUNEIiwiZmlsZSI6Ii4vc3JjL2ZlYXR1cmVzL2NvdW50ZXIvY291bnRlckFQSS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaENvdW50KGFtb3VudCA9IDEpOiBQcm9taXNlPHsgZGF0YTogbnVtYmVyIH0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9jb3VudGVyJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGFtb3VudCB9KSxcbiAgfSlcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/counter/counterAPI.ts\n");

/***/ }),

/***/ "./src/features/counter/counterSlice.ts":
/*!**********************************************!*\
  !*** ./src/features/counter/counterSlice.ts ***!
  \**********************************************/
/*! exports provided: incrementAsync, counterSlice, increment, decrement, incrementByAmount, selectCount, incrementIfOdd, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"incrementAsync\", function() { return incrementAsync; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"counterSlice\", function() { return counterSlice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"increment\", function() { return increment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"decrement\", function() { return decrement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"incrementByAmount\", function() { return incrementByAmount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectCount\", function() { return selectCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"incrementIfOdd\", function() { return incrementIfOdd; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _counterAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counterAPI */ \"./src/features/counter/counterAPI.ts\");\n\n\nconst initialState = {\n  value: 0,\n  status: 'idle'\n}; // The function below is called a thunk and allows us to perform async logic. It\n// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This\n// will call the thunk with the `dispatch` function as the first argument. Async\n// code can then be executed and other actions can be dispatched. Thunks are\n// typically used to make async requests.\n\nconst incrementAsync = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createAsyncThunk\"])('counter/fetchCount', async amount => {\n  const response = await Object(_counterAPI__WEBPACK_IMPORTED_MODULE_1__[\"fetchCount\"])(amount); // The value we return becomes the `fulfilled` action payload\n\n  return response.data;\n});\nconst counterSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSlice\"])({\n  name: 'counter',\n  initialState,\n  // The `reducers` field lets us define reducers and generate associated actions\n  reducers: {\n    increment: state => {\n      // Redux Toolkit allows us to write \"mutating\" logic in reducers. It\n      // doesn't actually mutate the state because it uses the Immer library,\n      // which detects changes to a \"draft state\" and produces a brand new\n      // immutable state based off those changes\n      state.value += 1;\n    },\n    decrement: state => {\n      state.value -= 1;\n    },\n    // Use the PayloadAction type to declare the contents of `action.payload`\n    incrementByAmount: (state, action) => {\n      state.value += action.payload;\n    }\n  },\n  // The `extraReducers` field lets the slice handle actions defined elsewhere,\n  // including actions generated by createAsyncThunk or in other slices.\n  extraReducers: builder => {\n    builder.addCase(incrementAsync.pending, state => {\n      state.status = 'loading';\n    }).addCase(incrementAsync.fulfilled, (state, action) => {\n      state.status = 'idle';\n      state.value += action.payload;\n    });\n  }\n});\nconst {\n  increment,\n  decrement,\n  incrementByAmount\n} = counterSlice.actions; // The function below is called a selector and allows us to select a value from\n// the state. Selectors can also be defined inline where they're used instead of\n// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`\n\nconst selectCount = state => state.counter.value; // We can also write thunks by hand, which may contain both sync and async logic.\n// Here's an example of conditionally dispatching actions based on current state.\n\nconst incrementIfOdd = amount => (dispatch, getState) => {\n  const currentValue = selectCount(getState());\n\n  if (currentValue % 2 === 1) {\n    dispatch(incrementByAmount(amount));\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (counterSlice.reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvY291bnRlci9jb3VudGVyU2xpY2UudHM/ODFmZSJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ2YWx1ZSIsInN0YXR1cyIsImluY3JlbWVudEFzeW5jIiwiY3JlYXRlQXN5bmNUaHVuayIsImFtb3VudCIsInJlc3BvbnNlIiwiZmV0Y2hDb3VudCIsImRhdGEiLCJjb3VudGVyU2xpY2UiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImluY3JlbWVudCIsInN0YXRlIiwiZGVjcmVtZW50IiwiaW5jcmVtZW50QnlBbW91bnQiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsImZ1bGZpbGxlZCIsImFjdGlvbnMiLCJzZWxlY3RDb3VudCIsImNvdW50ZXIiLCJpbmNyZW1lbnRJZk9kZCIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJjdXJyZW50VmFsdWUiLCJyZWR1Y2VyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQU9BLE1BQU1BLFlBQTBCLEdBQUc7QUFDakNDLE9BQUssRUFBRSxDQUQwQjtBQUVqQ0MsUUFBTSxFQUFFO0FBRnlCLENBQW5DLEMsQ0FLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1DLGNBQWMsR0FBR0MseUVBQWdCLENBQzVDLG9CQUQ0QyxFQUU1QyxNQUFPQyxNQUFQLElBQTBCO0FBQ3hCLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyw4REFBVSxDQUFDRixNQUFELENBQWpDLENBRHdCLENBRXhCOztBQUNBLFNBQU9DLFFBQVEsQ0FBQ0UsSUFBaEI7QUFDRCxDQU4yQyxDQUF2QztBQVNBLE1BQU1DLFlBQVksR0FBR0Msb0VBQVcsQ0FBQztBQUN0Q0MsTUFBSSxFQUFFLFNBRGdDO0FBRXRDWCxjQUZzQztBQUd0QztBQUNBWSxVQUFRLEVBQUU7QUFDUkMsYUFBUyxFQUFHQyxLQUFELElBQVc7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsV0FBSyxDQUFDYixLQUFOLElBQWUsQ0FBZjtBQUNELEtBUE87QUFRUmMsYUFBUyxFQUFHRCxLQUFELElBQVc7QUFDcEJBLFdBQUssQ0FBQ2IsS0FBTixJQUFlLENBQWY7QUFDRCxLQVZPO0FBV1I7QUFDQWUscUJBQWlCLEVBQUUsQ0FBQ0YsS0FBRCxFQUFRRyxNQUFSLEtBQTBDO0FBQzNESCxXQUFLLENBQUNiLEtBQU4sSUFBZWdCLE1BQU0sQ0FBQ0MsT0FBdEI7QUFDRDtBQWRPLEdBSjRCO0FBb0J0QztBQUNBO0FBQ0FDLGVBQWEsRUFBR0MsT0FBRCxJQUFhO0FBQzFCQSxXQUFPLENBQ0pDLE9BREgsQ0FDV2xCLGNBQWMsQ0FBQ21CLE9BRDFCLEVBQ29DUixLQUFELElBQVc7QUFDMUNBLFdBQUssQ0FBQ1osTUFBTixHQUFlLFNBQWY7QUFDRCxLQUhILEVBSUdtQixPQUpILENBSVdsQixjQUFjLENBQUNvQixTQUoxQixFQUlxQyxDQUFDVCxLQUFELEVBQVFHLE1BQVIsS0FBbUI7QUFDcERILFdBQUssQ0FBQ1osTUFBTixHQUFlLE1BQWY7QUFDQVksV0FBSyxDQUFDYixLQUFOLElBQWVnQixNQUFNLENBQUNDLE9BQXRCO0FBQ0QsS0FQSDtBQVFEO0FBL0JxQyxDQUFELENBQWhDO0FBa0NBLE1BQU07QUFBRUwsV0FBRjtBQUFhRSxXQUFiO0FBQXdCQztBQUF4QixJQUE4Q1AsWUFBWSxDQUFDZSxPQUFqRSxDLENBRVA7QUFDQTtBQUNBOztBQUNPLE1BQU1DLFdBQVcsR0FBSVgsS0FBRCxJQUFxQkEsS0FBSyxDQUFDWSxPQUFOLENBQWN6QixLQUF2RCxDLENBRVA7QUFDQTs7QUFDTyxNQUFNMEIsY0FBYyxHQUFJdEIsTUFBRCxJQUE4QixDQUMxRHVCLFFBRDBELEVBRTFEQyxRQUYwRCxLQUd2RDtBQUNILFFBQU1DLFlBQVksR0FBR0wsV0FBVyxDQUFDSSxRQUFRLEVBQVQsQ0FBaEM7O0FBQ0EsTUFBSUMsWUFBWSxHQUFHLENBQWYsS0FBcUIsQ0FBekIsRUFBNEI7QUFDMUJGLFlBQVEsQ0FBQ1osaUJBQWlCLENBQUNYLE1BQUQsQ0FBbEIsQ0FBUjtBQUNEO0FBQ0YsQ0FSTTtBQVVRSSwyRUFBWSxDQUFDc0IsT0FBNUIiLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvY291bnRlci9jb3VudGVyU2xpY2UudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rLCBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5cbmltcG9ydCB0eXBlIHsgQXBwU3RhdGUsIEFwcFRodW5rIH0gZnJvbSAnLi4vLi4vYXBwL3N0b3JlJ1xuaW1wb3J0IHsgZmV0Y2hDb3VudCB9IGZyb20gJy4vY291bnRlckFQSSdcblxuZXhwb3J0IGludGVyZmFjZSBDb3VudGVyU3RhdGUge1xuICB2YWx1ZTogbnVtYmVyXG4gIHN0YXR1czogJ2lkbGUnIHwgJ2xvYWRpbmcnIHwgJ2ZhaWxlZCdcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBDb3VudGVyU3RhdGUgPSB7XG4gIHZhbHVlOiAwLFxuICBzdGF0dXM6ICdpZGxlJyxcbn1cblxuLy8gVGhlIGZ1bmN0aW9uIGJlbG93IGlzIGNhbGxlZCBhIHRodW5rIGFuZCBhbGxvd3MgdXMgdG8gcGVyZm9ybSBhc3luYyBsb2dpYy4gSXRcbi8vIGNhbiBiZSBkaXNwYXRjaGVkIGxpa2UgYSByZWd1bGFyIGFjdGlvbjogYGRpc3BhdGNoKGluY3JlbWVudEFzeW5jKDEwKSlgLiBUaGlzXG4vLyB3aWxsIGNhbGwgdGhlIHRodW5rIHdpdGggdGhlIGBkaXNwYXRjaGAgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50LiBBc3luY1xuLy8gY29kZSBjYW4gdGhlbiBiZSBleGVjdXRlZCBhbmQgb3RoZXIgYWN0aW9ucyBjYW4gYmUgZGlzcGF0Y2hlZC4gVGh1bmtzIGFyZVxuLy8gdHlwaWNhbGx5IHVzZWQgdG8gbWFrZSBhc3luYyByZXF1ZXN0cy5cbmV4cG9ydCBjb25zdCBpbmNyZW1lbnRBc3luYyA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gICdjb3VudGVyL2ZldGNoQ291bnQnLFxuICBhc3luYyAoYW1vdW50OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoQ291bnQoYW1vdW50KVxuICAgIC8vIFRoZSB2YWx1ZSB3ZSByZXR1cm4gYmVjb21lcyB0aGUgYGZ1bGZpbGxlZGAgYWN0aW9uIHBheWxvYWRcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxuICB9XG4pXG5cbmV4cG9ydCBjb25zdCBjb3VudGVyU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdjb3VudGVyJyxcbiAgaW5pdGlhbFN0YXRlLFxuICAvLyBUaGUgYHJlZHVjZXJzYCBmaWVsZCBsZXRzIHVzIGRlZmluZSByZWR1Y2VycyBhbmQgZ2VuZXJhdGUgYXNzb2NpYXRlZCBhY3Rpb25zXG4gIHJlZHVjZXJzOiB7XG4gICAgaW5jcmVtZW50OiAoc3RhdGUpID0+IHtcbiAgICAgIC8vIFJlZHV4IFRvb2xraXQgYWxsb3dzIHVzIHRvIHdyaXRlIFwibXV0YXRpbmdcIiBsb2dpYyBpbiByZWR1Y2Vycy4gSXRcbiAgICAgIC8vIGRvZXNuJ3QgYWN0dWFsbHkgbXV0YXRlIHRoZSBzdGF0ZSBiZWNhdXNlIGl0IHVzZXMgdGhlIEltbWVyIGxpYnJhcnksXG4gICAgICAvLyB3aGljaCBkZXRlY3RzIGNoYW5nZXMgdG8gYSBcImRyYWZ0IHN0YXRlXCIgYW5kIHByb2R1Y2VzIGEgYnJhbmQgbmV3XG4gICAgICAvLyBpbW11dGFibGUgc3RhdGUgYmFzZWQgb2ZmIHRob3NlIGNoYW5nZXNcbiAgICAgIHN0YXRlLnZhbHVlICs9IDFcbiAgICB9LFxuICAgIGRlY3JlbWVudDogKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS52YWx1ZSAtPSAxXG4gICAgfSxcbiAgICAvLyBVc2UgdGhlIFBheWxvYWRBY3Rpb24gdHlwZSB0byBkZWNsYXJlIHRoZSBjb250ZW50cyBvZiBgYWN0aW9uLnBheWxvYWRgXG4gICAgaW5jcmVtZW50QnlBbW91bnQ6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pID0+IHtcbiAgICAgIHN0YXRlLnZhbHVlICs9IGFjdGlvbi5wYXlsb2FkXG4gICAgfSxcbiAgfSxcbiAgLy8gVGhlIGBleHRyYVJlZHVjZXJzYCBmaWVsZCBsZXRzIHRoZSBzbGljZSBoYW5kbGUgYWN0aW9ucyBkZWZpbmVkIGVsc2V3aGVyZSxcbiAgLy8gaW5jbHVkaW5nIGFjdGlvbnMgZ2VuZXJhdGVkIGJ5IGNyZWF0ZUFzeW5jVGh1bmsgb3IgaW4gb3RoZXIgc2xpY2VzLlxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuICAgIGJ1aWxkZXJcbiAgICAgIC5hZGRDYXNlKGluY3JlbWVudEFzeW5jLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnbG9hZGluZydcbiAgICAgIH0pXG4gICAgICAuYWRkQ2FzZShpbmNyZW1lbnRBc3luYy5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN0YXRlLnN0YXR1cyA9ICdpZGxlJ1xuICAgICAgICBzdGF0ZS52YWx1ZSArPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgfSlcbiAgfSxcbn0pXG5cbmV4cG9ydCBjb25zdCB7IGluY3JlbWVudCwgZGVjcmVtZW50LCBpbmNyZW1lbnRCeUFtb3VudCB9ID0gY291bnRlclNsaWNlLmFjdGlvbnNcblxuLy8gVGhlIGZ1bmN0aW9uIGJlbG93IGlzIGNhbGxlZCBhIHNlbGVjdG9yIGFuZCBhbGxvd3MgdXMgdG8gc2VsZWN0IGEgdmFsdWUgZnJvbVxuLy8gdGhlIHN0YXRlLiBTZWxlY3RvcnMgY2FuIGFsc28gYmUgZGVmaW5lZCBpbmxpbmUgd2hlcmUgdGhleSdyZSB1c2VkIGluc3RlYWQgb2Zcbi8vIGluIHRoZSBzbGljZSBmaWxlLiBGb3IgZXhhbXBsZTogYHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5jb3VudGVyLnZhbHVlKWBcbmV4cG9ydCBjb25zdCBzZWxlY3RDb3VudCA9IChzdGF0ZTogQXBwU3RhdGUpID0+IHN0YXRlLmNvdW50ZXIudmFsdWVcblxuLy8gV2UgY2FuIGFsc28gd3JpdGUgdGh1bmtzIGJ5IGhhbmQsIHdoaWNoIG1heSBjb250YWluIGJvdGggc3luYyBhbmQgYXN5bmMgbG9naWMuXG4vLyBIZXJlJ3MgYW4gZXhhbXBsZSBvZiBjb25kaXRpb25hbGx5IGRpc3BhdGNoaW5nIGFjdGlvbnMgYmFzZWQgb24gY3VycmVudCBzdGF0ZS5cbmV4cG9ydCBjb25zdCBpbmNyZW1lbnRJZk9kZCA9IChhbW91bnQ6IG51bWJlcik6IEFwcFRodW5rID0+IChcbiAgZGlzcGF0Y2gsXG4gIGdldFN0YXRlXG4pID0+IHtcbiAgY29uc3QgY3VycmVudFZhbHVlID0gc2VsZWN0Q291bnQoZ2V0U3RhdGUoKSlcbiAgaWYgKGN1cnJlbnRWYWx1ZSAlIDIgPT09IDEpIHtcbiAgICBkaXNwYXRjaChpbmNyZW1lbnRCeUFtb3VudChhbW91bnQpKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvdW50ZXJTbGljZS5yZWR1Y2VyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/features/counter/counterSlice.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/store */ \"./src/app/store.ts\");\n\nvar _jsxFileName = \"/Users/a18407633/Documents/Next/client/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n    store: _app_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFHQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBbUQ7QUFDakQsc0JBQ0UscUVBQUMsb0RBQUQ7QUFBVSxTQUFLLEVBQUVDLGtEQUFqQjtBQUFBLDJCQUNFLHFFQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztBQUVjRixvRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vYXBwL3N0b3JlJ1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/globals.css\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@reduxjs/toolkit\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCI/Y2NkOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAcmVkdXhqcy90b29sa2l0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@reduxjs/toolkit\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });
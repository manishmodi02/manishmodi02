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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/home/Home.styles.ts":
/*!***********************************!*\
  !*** ./pages/home/Home.styles.ts ***!
  \***********************************/
/*! exports provided: Container, Title, ListContainer, Grid, CardContainer, PosterContainer, Poster, IconContainer, RatingsContainer, Ratings, StarsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListContainer", function() { return ListContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardContainer", function() { return CardContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosterContainer", function() { return PosterContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poster", function() { return Poster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconContainer", function() { return IconContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingsContainer", function() { return RatingsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ratings", function() { return Ratings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarsContainer", function() { return StarsContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  min-height: 70vh;
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3`
  text-align: center;
`;
const ListContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;
const Grid = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (max-width: 500px) {
    margin-left: 0px;
  }
`;
const CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-top: 2px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-height: 300px;
  max-width: 200px;

  &:hover {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
    transition: 0.5s ease-out;
  }
`;
const PosterContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  flex: 1;
  border-radius: 10px;
  height: 220px;
  width: 150px;
  overflow: hidden;
`;
const Poster = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img`
  border-radius: 10px;
  object-fit: cover;
  height: 100%;
  width: 100%;

  &:hover {
    transform: scale(1.2);
    transition: 0.5s ease-out;
  }
`;
const IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  width: 100%;
  margin-bottom: 2px;
  align-items: center;
  justify-content: space-between;
`;
const RatingsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Ratings = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.text`
  font-size: 12px;
  text-align: center;
`;
const StarsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  align-items: center;
`;

/***/ }),

/***/ "./pages/home/Home.tsx":
/*!*****************************!*\
  !*** ./pages/home/Home.tsx ***!
  \*****************************/
/*! exports provided: Home, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./pages/home/index.tsx");
/* harmony import */ var _Home_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.styles */ "./pages/home/Home.styles.ts");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* Home component Using the custom hook */

const Home = () => {
  const {
    movies,
    updateMovieState
  } = Object(_index__WEBPACK_IMPORTED_MODULE_1__["useMovies"])();
  return __jsx(_Home_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(_Home_styles__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    "data-testid": "count-title"
  }, "Movies ", `(${movies.length})`), __jsx(_Home_styles__WEBPACK_IMPORTED_MODULE_2__["ListContainer"], null, __jsx(_Home_styles__WEBPACK_IMPORTED_MODULE_2__["Grid"], null, movies.map((movie, index) => __jsx(_index__WEBPACK_IMPORTED_MODULE_1__["MovieCard"], {
    "data-testid": "MovieCard-element",
    movie: movie,
    updateMovieState: updateMovieState,
    index: index
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/home/index.tsx":
/*!******************************!*\
  !*** ./pages/home/index.tsx ***!
  \******************************/
/*! exports provided: useMovies, MovieCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMovies", function() { return useMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieCard", function() { return MovieCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.styles */ "./pages/home/Home.styles.ts");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "@material-ui/icons/Visibility");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/FavoriteBorder */ "@material-ui/icons/FavoriteBorder");
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "@material-ui/icons/Favorite");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ "@material-ui/icons/VisibilityOff");
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Star */ "@material-ui/icons/Star");
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/StarBorder */ "@material-ui/icons/StarBorder");
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_7__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








/*
Custom Hook useMovies
returns
list of movies and
updated state of the watched and saved variabl
*/

const useMovies = () => {
  const {
    0: movies,
    1: setMovies
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  /* side-effect */

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchMovies();
  }, []);
  /* fetches movies */

  const fetchMovies = async () => {
    try {
      const response = await fetch('http://localhost:3333/api/movies');
      const data = await response.json();

      if (data.length) {
        setMovies(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  /* updates the state of the movie */


  const updateMovieState = async (movieId, body) => {
    try {
      const response = await fetch(`http://localhost:3333/api/movies/id/${movieId}`, {
        method: 'PUT',
        headers: {
          accept: '*/*',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `saved=${body.saved}&watched=${body.watched}`
      });

      if (response.status === 200) {
        fetchMovies();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    movies,
    updateMovieState
  };
};
/* calculates the star ratings of a movie */

const StarRatings = ({
  ratings = 0
}) => {
  const starsArray = Array.from({
    length: 5
  });
  return __jsx(_Home_styles__WEBPACK_IMPORTED_MODULE_1__["StarsContainer"], null, starsArray.map((i, index) => index >= Math.floor(ratings / 2) ? __jsx(_material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_7___default.a, {
    key: `${i}-${index}`
  }) : __jsx(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_6___default.a, {
    key: `${i}-${index}`
  })));
};
/* interface */

/* Movie Card Component */


const MovieCard = ({
  movie,
  index,
  updateMovieState
}) => {
  const EyeIcon = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => movie.Watched === 'True' ? _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_2___default.a : _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_5___default.a, [movie.Watched]);
  const HeartIcon = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => movie.Saved === 'True' ? _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4___default.a : _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_3___default.a, [movie.Saved]);
  return __jsx(_Home_styles__WEBPACK_IMPORTED_MODULE_1__["CardContainer"], {
    key: `${movie.imdbID}-${index}`
  }, __jsx(_Home_styles__WEBPACK_IMPORTED_MODULE_1__["IconContainer"], null, __jsx("div", {
    "data-testid": "view-btn-div",
    onClick: () => updateMovieState(movie.imdbID, {
      watched: movie.Watched !== 'True',
      saved: movie.Saved
    })
  }, __jsx(EyeIcon, null)), __jsx("div", {
    "data-testid": "like-btn-div",
    onClick: () => updateMovieState(movie.imdbID, {
      saved: movie.Saved !== 'True'
    })
  }, __jsx(HeartIcon, null))), __jsx(_Home_styles__WEBPACK_IMPORTED_MODULE_1__["PosterContainer"], null, __jsx(_Home_styles__WEBPACK_IMPORTED_MODULE_1__["Poster"], {
    src: movie.Poster
  })), __jsx(_Home_styles__WEBPACK_IMPORTED_MODULE_1__["RatingsContainer"], {
    "data-testid": "rating-container"
  }, __jsx(_Home_styles__WEBPACK_IMPORTED_MODULE_1__["Ratings"], null, `(${movie.imdbRating})`), __jsx(StarRatings, {
    ratings: Number(movie.imdbRating)
  })));
};

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/Home */ "./pages/home/Home.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_home_Home__WEBPACK_IMPORTED_MODULE_0__["Home"]);

/***/ }),

/***/ "@material-ui/icons/Favorite":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Favorite" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ "@material-ui/icons/FavoriteBorder":
/*!****************************************************!*\
  !*** external "@material-ui/icons/FavoriteBorder" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FavoriteBorder");

/***/ }),

/***/ "@material-ui/icons/Star":
/*!******************************************!*\
  !*** external "@material-ui/icons/Star" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Star");

/***/ }),

/***/ "@material-ui/icons/StarBorder":
/*!************************************************!*\
  !*** external "@material-ui/icons/StarBorder" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/StarBorder");

/***/ }),

/***/ "@material-ui/icons/Visibility":
/*!************************************************!*\
  !*** external "@material-ui/icons/Visibility" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Visibility");

/***/ }),

/***/ "@material-ui/icons/VisibilityOff":
/*!***************************************************!*\
  !*** external "@material-ui/icons/VisibilityOff" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VisibilityOff");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaG9tZS9Ib21lLnN0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lL0hvbWUudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2hvbWUvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGVCb3JkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9TdGFyQm9yZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Zpc2liaWxpdHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVmlzaWJpbGl0eU9mZlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJUaXRsZSIsImgzIiwiTGlzdENvbnRhaW5lciIsIkdyaWQiLCJDYXJkQ29udGFpbmVyIiwiUG9zdGVyQ29udGFpbmVyIiwiUG9zdGVyIiwiaW1nIiwiSWNvbkNvbnRhaW5lciIsIlJhdGluZ3NDb250YWluZXIiLCJSYXRpbmdzIiwidGV4dCIsIlN0YXJzQ29udGFpbmVyIiwiSG9tZSIsInVwZGF0ZU1vdmllU3RhdGUiLCJ1c2VNb3ZpZXMiLCJtb3ZpZXMiLCJsZW5ndGgiLCJpbmRleCIsInNldE1vdmllcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmV0Y2hNb3ZpZXMiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImNvbnNvbGUiLCJtb3ZpZUlkIiwibWV0aG9kIiwiaGVhZGVycyIsImFjY2VwdCIsImJvZHkiLCJzYXZlZCIsIndhdGNoZWQiLCJTdGFyUmF0aW5ncyIsInJhdGluZ3MiLCJzdGFyc0FycmF5IiwiTWF0aCIsImkiLCJNb3ZpZUNhcmQiLCJFeWVJY29uIiwidXNlTWVtbyIsIm1vdmllIiwiSGVhcnRJY29uIiwiaW1kYklEIiwiU2F2ZWQiLCJpbWRiUmF0aW5nIiwiTnVtYmVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLFNBQVMsR0FBR0Msd0RBQU0sQ0FBQ0Ms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QUFGcEIsS0FPRSxpQkFwQk4sSUFvQk0sQ0FQRixDQVpGLENBREYsRUF1QkUsMEVBQ0U7QUFBUSxPQUFHLEVBQUVBLEtBQUssQ0FBQ3BDO0FBQW5CLElBREYsQ0F2QkYsRUEwQkU7QUFBa0IsbUJBQVk7QUFBOUIsS0FDRSxrRUFBVyxJQUFHb0MsS0FBSyxDQUFDSSxVQUR0QixHQUNFLENBREYsRUFFRTtBQUFhLFdBQU8sRUFBRUMsTUFBTSxDQUFDTCxLQUFLLENBQU47QUFBNUIsSUFGRixDQTFCRixDQURGO0FBZkssRTs7Ozs7Ozs7Ozs7O0FDbEdQO0FBQUE7QUFBQTtBQUVBLGdIOzs7Ozs7Ozs7OztBQ0ZBLHdEOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDcwdmg7XG5gO1xuXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDNgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBMaXN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcblxuZXhwb3J0IGNvbnN0IEdyaWQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENhcmRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuXG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1vdXQ7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBQb3N0ZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDIyMHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gO1xuXG5leHBvcnQgY29uc3QgUG9zdGVyID0gc3R5bGVkLmltZ2BcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1vdXQ7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBJY29uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcblxuZXhwb3J0IGNvbnN0IFJhdGluZ3NDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gO1xuXG5leHBvcnQgY29uc3QgUmF0aW5ncyA9IHN0eWxlZC50ZXh0YFxuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdGFyc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuIiwiXHJcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlTW92aWVzLCBNb3ZpZUNhcmQgfSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IHtcclxuICAgIENvbnRhaW5lcixcclxuICAgIFRpdGxlLFxyXG4gICAgTGlzdENvbnRhaW5lcixcclxuICAgIEdyaWRcclxuICB9IGZyb20gJy4vSG9tZS5zdHlsZXMnO1xyXG5cclxuLyogSG9tZSBjb21wb25lbnQgVXNpbmcgdGhlIGN1c3RvbSBob29rICovXHJcbmV4cG9ydCBjb25zdCBIb21lOiBGQyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgbW92aWVzLCB1cGRhdGVNb3ZpZVN0YXRlIH0gPSB1c2VNb3ZpZXMoKTtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFRpdGxlIGRhdGEtdGVzdGlkPVwiY291bnQtdGl0bGVcIj5Nb3ZpZXMge2AoJHttb3ZpZXMubGVuZ3RofSlgfTwvVGl0bGU+XHJcbiAgICAgICAgPExpc3RDb250YWluZXI+XHJcbiAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAge21vdmllcy5tYXAoKG1vdmllLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxNb3ZpZUNhcmRcclxuICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiTW92aWVDYXJkLWVsZW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgbW92aWU9e21vdmllfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlTW92aWVTdGF0ZT17dXBkYXRlTW92aWVTdGF0ZX1cclxuICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0xpc3RDb250YWluZXI+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxuICB9O1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEhvbWU7IiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTW92aWUgfSBmcm9tICdhcHBzL2ZlLXd0Yy10ZWNoLXRlc3QvdHlwZXMvbW92aWUnO1xuaW1wb3J0IHtcbiAgQ2FyZENvbnRhaW5lcixcbiAgUG9zdGVyLFxuICBQb3N0ZXJDb250YWluZXIsXG4gIEljb25Db250YWluZXIsXG4gIFJhdGluZ3NDb250YWluZXIsXG4gIFJhdGluZ3MsXG4gIFN0YXJzQ29udGFpbmVyLFxufSBmcm9tICcuL0hvbWUuc3R5bGVzJztcbmltcG9ydCBWaXNpYmlsaXR5SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVmlzaWJpbGl0eSc7XG5pbXBvcnQgRmF2b3JpdGVCb3JkZXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZUJvcmRlcic7XG5pbXBvcnQgRmF2b3JpdGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZSc7XG5pbXBvcnQgVmlzaWJpbGl0eU9mZkljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Zpc2liaWxpdHlPZmYnO1xuaW1wb3J0IFN0YXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdGFyJztcbmltcG9ydCBTdGFyQm9yZGVySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhckJvcmRlcic7XG4vKlxuQ3VzdG9tIEhvb2sgdXNlTW92aWVzXG5yZXR1cm5zXG5saXN0IG9mIG1vdmllcyBhbmRcbnVwZGF0ZWQgc3RhdGUgb2YgdGhlIHdhdGNoZWQgYW5kIHNhdmVkIHZhcmlhYmxcbiovXG5leHBvcnQgY29uc3QgdXNlTW92aWVzID0gKCkgPT4ge1xuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGU8TW92aWVbXT4oW10pO1xuXG4gIC8qIHNpZGUtZWZmZWN0ICovXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hNb3ZpZXMoKTtcbiAgfSwgW10pO1xuXG4gIC8qIGZldGNoZXMgbW92aWVzICovXG4gIGNvbnN0IGZldGNoTW92aWVzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMzMzMvYXBpL21vdmllcycpO1xuXG4gICAgICBjb25zdCBkYXRhOiBNb3ZpZVtdID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICBpZiAoZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgc2V0TW92aWVzKGRhdGEpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuICAvKiB1cGRhdGVzIHRoZSBzdGF0ZSBvZiB0aGUgbW92aWUgKi9cbiAgY29uc3QgdXBkYXRlTW92aWVTdGF0ZSA9IGFzeW5jIChtb3ZpZUlkLCBib2R5KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjMzMzMvYXBpL21vdmllcy9pZC8ke21vdmllSWR9YCxcbiAgICAgICAge1xuICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgYWNjZXB0OiAnKi8qJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IGBzYXZlZD0ke2JvZHkuc2F2ZWR9JndhdGNoZWQ9JHtib2R5LndhdGNoZWR9YCxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIGZldGNoTW92aWVzKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBtb3ZpZXMsXG4gICAgdXBkYXRlTW92aWVTdGF0ZSxcbiAgfTtcbn07XG5cbi8qIGNhbGN1bGF0ZXMgdGhlIHN0YXIgcmF0aW5ncyBvZiBhIG1vdmllICovXG5jb25zdCBTdGFyUmF0aW5nczogRkM8eyByYXRpbmdzOiBudW1iZXIgfT4gPSAoeyByYXRpbmdzID0gMCB9KSA9PiB7XG4gIGNvbnN0IHN0YXJzQXJyYXkgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA1IH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFN0YXJzQ29udGFpbmVyPlxuICAgICAge3N0YXJzQXJyYXkubWFwKChpLCBpbmRleCkgPT5cbiAgICAgICAgaW5kZXggPj0gTWF0aC5mbG9vcihyYXRpbmdzIC8gMikgPyAoXG4gICAgICAgICAgPFN0YXJCb3JkZXJJY29uIGtleT17YCR7aX0tJHtpbmRleH1gfSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxTdGFySWNvbiBrZXk9e2Ake2l9LSR7aW5kZXh9YH0gLz5cbiAgICAgICAgKVxuICAgICAgKX1cbiAgICA8L1N0YXJzQ29udGFpbmVyPlxuICApO1xufTtcblxuLyogaW50ZXJmYWNlICovXG50eXBlIE1vdmllQ2FyZFByb3BzID0ge1xuICBtb3ZpZTogTW92aWU7XG4gIGluZGV4OiBudW1iZXI7XG4gIHVwZGF0ZU1vdmllU3RhdGU6IChtb3ZpZUlkOiBzdHJpbmcsIGJvZHk6IG9iamVjdCkgPT4gdm9pZDtcbn07XG4vKiBNb3ZpZSBDYXJkIENvbXBvbmVudCAqL1xuZXhwb3J0IGNvbnN0IE1vdmllQ2FyZDogRkM8TW92aWVDYXJkUHJvcHM+ID0gKHtcbiAgbW92aWUsXG4gIGluZGV4LFxuICB1cGRhdGVNb3ZpZVN0YXRlLFxufSkgPT4ge1xuICBjb25zdCBFeWVJY29uID0gdXNlTWVtbyhcbiAgICAoKSA9PiAobW92aWUuV2F0Y2hlZCA9PT0gJ1RydWUnID8gVmlzaWJpbGl0eUljb24gOiBWaXNpYmlsaXR5T2ZmSWNvbiksXG4gICAgW21vdmllLldhdGNoZWRdXG4gICk7XG5cbiAgY29uc3QgSGVhcnRJY29uID0gdXNlTWVtbyhcbiAgICAoKSA9PiAobW92aWUuU2F2ZWQgPT09ICdUcnVlJyA/IEZhdm9yaXRlSWNvbiA6IEZhdm9yaXRlQm9yZGVySWNvbiksXG4gICAgW21vdmllLlNhdmVkXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmRDb250YWluZXIga2V5PXtgJHttb3ZpZS5pbWRiSUR9LSR7aW5kZXh9YH0+XG4gICAgICA8SWNvbkNvbnRhaW5lcj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGRhdGEtdGVzdGlkPVwidmlldy1idG4tZGl2XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgdXBkYXRlTW92aWVTdGF0ZShtb3ZpZS5pbWRiSUQsIHtcbiAgICAgICAgICAgICAgd2F0Y2hlZDogbW92aWUuV2F0Y2hlZCAhPT0gJ1RydWUnLFxuICAgICAgICAgICAgICBzYXZlZDogbW92aWUuU2F2ZWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgPEV5ZUljb24gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS10ZXN0aWQ9XCJsaWtlLWJ0bi1kaXZcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICB1cGRhdGVNb3ZpZVN0YXRlKG1vdmllLmltZGJJRCwge1xuICAgICAgICAgICAgICBzYXZlZDogbW92aWUuU2F2ZWQgIT09ICdUcnVlJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICA8SGVhcnRJY29uIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9JY29uQ29udGFpbmVyPlxuICAgICAgPFBvc3RlckNvbnRhaW5lcj5cbiAgICAgICAgPFBvc3RlciBzcmM9e21vdmllLlBvc3Rlcn0gLz5cbiAgICAgIDwvUG9zdGVyQ29udGFpbmVyPlxuICAgICAgPFJhdGluZ3NDb250YWluZXIgZGF0YS10ZXN0aWQ9XCJyYXRpbmctY29udGFpbmVyXCI+XG4gICAgICAgIDxSYXRpbmdzPntgKCR7bW92aWUuaW1kYlJhdGluZ30pYH08L1JhdGluZ3M+XG4gICAgICAgIDxTdGFyUmF0aW5ncyByYXRpbmdzPXtOdW1iZXIobW92aWUuaW1kYlJhdGluZyl9IC8+XG4gICAgICA8L1JhdGluZ3NDb250YWluZXI+XG4gICAgPC9DYXJkQ29udGFpbmVyPlxuICApO1xufTtcblxuXG4iLCJpbXBvcnQgeyBIb21lIH0gZnJvbSAnLi9ob21lL0hvbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZUJvcmRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhckJvcmRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVmlzaWJpbGl0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVmlzaWJpbGl0eU9mZlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9
# 🍿 usePopcorn - Movie Search & Rating App

A modern React application that allows users to search for movies, view detailed information, rate them, and maintain a personal watchlist. Built with React hooks, custom components, and the OMDB API.

![usePopcorn App Screenshot](./public/Screenshot%202025-06-17%20at%205.54.46%20PM.png)

## ✨ Features

### 🎬 Movie Search

- **Real-time search** with minimum 3-character input requirement
- **Instant results** from the OMDB API
- **Error handling** for failed searches and network issues
- **Loading states** with spinner animations

### 📱 Movie Details

- **Comprehensive movie information** including plot, cast, director, runtime, and ratings
- **Interactive star rating system** (1-10 stars)
- **Add to watched list** functionality
- **Dynamic page titles** that change based on selected movie

### 📋 Watchlist Management

- **Personal watchlist** with local storage persistence
- **Movie ratings** with user-defined scores
- **Watchlist summary** with average ratings and runtime statistics
- **Remove movies** from watchlist

### ⌨️ Keyboard Navigation

- **Enter key** to focus search input and clear query
- **Enter key** to close movie details
- **Escape key** to close movie details

### 🎨 User Experience

- **Responsive design** with modern UI components
- **Smooth animations** and transitions
- **Intuitive navigation** between search results and watchlist
- **Error messages** for better user feedback

## 🛠️ Technology Stack

- **React 19.1.0** - Modern React with hooks
- **JavaScript (JSX)** - Component-based architecture
- **CSS3** - Custom styling with modern design patterns
- **OMDB API** - Movie database integration
- **Local Storage** - Data persistence
- **Custom Hooks** - Reusable logic

## 📁 Project Structure

```
usepopcorn/
├── api/
│   └── useMovie.js          # Custom hook for movie API calls
├── hooks/
│   └── useKey.js            # Keyboard event handling hook
├── libs/
│   └── useLocalStorageState.js  # Local storage state management
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── navbar/          # Navigation components
│   │   │   ├── Logo.jsx
│   │   │   ├── NavBar.jsx
│   │   │   ├── NumResult.jsx
│   │   │   └── SearchInput.jsx
│   │   └── main/            # Main application components
│   │       ├── Box.jsx
│   │       ├── Button.jsx
│   │       ├── ErrorMessage.jsx
│   │       ├── Loader.jsx
│   │       ├── Main.jsx
│   │       ├── Movie.jsx
│   │       ├── MovieDetails.jsx
│   │       ├── MoviesLists.jsx
│   │       ├── SearchMoviesLists.jsx
│   │       ├── StarRating.jsx
│   │       ├── WatchedMovies.jsx
│   │       ├── WatchedMoviesListing.jsx
│   │       ├── WatchedMoviesLists.jsx
│   │       └── WatchedMoviesSummary.jsx
│   ├── App.jsx              # Main application component
│   ├── index.js             # Application entry point
│   ├── index.css            # Global styles
│   ├── TextExpanded.jsx     # Text expansion component
│   └── textExpand.css       # Text expansion styles
├── package.json             # Dependencies and scripts
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd usepopcorn
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🔧 Key Components

### Custom Hooks

#### `useMovie(query)`

- **Location**: `api/useMovie.js`
- **Purpose**: Fetches movies from OMDB API based on search query
- **Features**:
  - Debounced search with minimum 3 characters
  - Error handling and loading states
  - Abort controller for cleanup

#### `useKey(key, action)`

- **Location**: `hooks/useKey.js`
- **Purpose**: Handles keyboard events globally
- **Usage**: Used for Enter and Escape key functionality

#### `useLocalStorageState(initialValue, key)`

- **Location**: `libs/useLocalStorageState.js`
- **Purpose**: Manages state with localStorage persistence
- **Usage**: Stores watched movies list

### Core Components

#### `App.jsx`

- **Main application component**
- **State management** for query, selected movie, and watchlist
- **Event handlers** for movie selection and watchlist management

#### `MovieDetails.jsx`

- **Comprehensive movie information display**
- **Star rating system** with interactive stars
- **Add to watchlist** functionality
- **Dynamic page title** updates

#### `StarRating.jsx`

- **Interactive star rating component**
- **Hover effects** and visual feedback
- **Customizable** size, color, and maximum rating
- **SVG-based** star icons

#### `SearchInput.jsx`

- **Search functionality** with keyboard shortcuts
- **Auto-focus** on Enter key press
- **Query clearing** functionality

## 🎯 API Integration

### OMDB API

- **Base URL**: `https://www.omdbapi.com`
- **Search Endpoint**: `/?apikey=${Key}&s=${query}`
- **Details Endpoint**: `/?apikey=${Key}&i=${selectedId}`
- **API Key**: Included in the application (for development purposes)

### API Features

- **Movie search** with title-based queries
- **Detailed movie information** including ratings, cast, plot
- **Error handling** for API failures
- **Response validation** for successful data retrieval

## 🎨 Styling & Design

- **Modern CSS** with flexbox and grid layouts
- **Responsive design** for various screen sizes
- **Custom animations** and transitions
- **Consistent color scheme** and typography
- **Interactive elements** with hover states

## 🔒 Data Persistence

- **Local Storage** for watched movies list
- **Automatic saving** when watchlist changes
- **Data recovery** on page refresh
- **JSON serialization** for complex data structures

## 🧪 Testing

The application includes testing setup with:

- **Jest** testing framework
- **React Testing Library** for component testing
- **User event simulation** for interaction testing

## 📱 Browser Compatibility

- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest)
- **Edge** (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🚀 Future Features

### 🔐 User Authentication & Authorization

- **User Registration & Login** - Secure authentication system with email/password
- **Protected Routes** - Home page access restricted to authenticated users only
- **User Profiles** - Personalized user dashboards
- **Social Login** - Integration with Google, Facebook, and Apple authentication
- **Password Recovery** - Secure password reset functionality

### 📊 Enhanced Features

- **Movie Recommendations** - AI-powered movie suggestions based on user preferences
- **Advanced Filtering** - Filter movies by genre, year, rating, and more
- **Dark/Light Theme** - User preference for application appearance

## 🙏 Acknowledgments

- **OMDB API** for providing movie data
- **React team** for the amazing framework
- **Create React App** for the development setup

## 📞 Support

For support and questions, please open an issue in the repository or contact the development team.

---

**Happy movie watching! 🍿✨**


import './App.css'
import ProfilesList from './SatLive/ProfileList'

function App() {
  return (
    <div className="app-container">
      <div className="app-header">
        <h1>NUS User Profile demo</h1>
      </div>
      <div>
        <ProfilesList />
      </div>
<div className="instructions">
                        <h2>React Concepts Demonstrated:</h2>
                        <ul>
                            <li><strong>Components:</strong> Breaking UI into reusable pieces (App, ProfilesList, ProfileViewer)</li>
                            <li><strong>JSX:</strong> HTML-like syntax inside JavaScript</li>
                            <li><strong>Props:</strong> Passing data from parent to child components</li>
                            <li><strong>Mapping:</strong> Using map() to render lists of components</li>
                            <li><strong>Event Handling:</strong> Hover effects on profile cards</li>
                            <li><strong>Styling:</strong> CSS classes for component styling</li>
                        </ul>
                      </div>
    </div>
  )
}

export default App

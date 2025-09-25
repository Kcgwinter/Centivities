import { Fragment, useEffect, useState } from "react"

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/activities').then(response => response.json()).then(data => setActivities(data))
  }, [])

  return (
    <Fragment>
      <h3 className="app" style={{ color: 'red' }}>Welcome to the Centivities</h3>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.title}</li>
        ))}
      </ul>
    </Fragment>
  )
}



export default App

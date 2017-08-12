
class TimersDashboard extends React.Component {
    render() {
      return (
        <div className='ui three column centered grid'>
          <div className='column'>
            <EditableTimerList />
            <ToggleableTimerForm
              isOpen={true}
            />
          </div>
        </div>
      );
    }
  }

  class EditableTimerList extends React.Component {
    render() {
      return (
        <div id='timers'>
          <EditableTimer
            title='Learn React'
            project='Web Domination'
            elapsed='8986300'
            runningSince={null}
            editFormOpen={false}
          />
          <EditableTimer
            title='Learn extreme ironing'
            project='World Domination'
            elapsed='3890985'
            runningSince={null}
            editFormOpen={true}
          />
        </div>
      );
    }
  }
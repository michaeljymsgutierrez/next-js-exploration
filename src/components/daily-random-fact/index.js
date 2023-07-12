import Component from './component'

function DailyRandomFact(props) {
  const component = Component(props)
  return (
    <div>
      <b>{component.title} {component.day}!</b>&nbsp;
      <i>
        {component.factForToday
          ? component.factForToday.fact
          : 'None for now...'}
      </i>
      <br/>
      <button onClick={component.updateDay}>Update Day</button>
    </div>
  )
}

export default DailyRandomFact

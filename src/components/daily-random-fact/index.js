import Component from './component'

function DailyRandomFact() {
  const component = Component()
  return (
    <div>
      <b>{component.title}</b>&nbsp;
      <i>
        {component.factForToday
          ? component.factForToday.fact
          : 'None for now...'}
      </i>
    </div>
  )
}

export default DailyRandomFact

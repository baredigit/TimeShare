import PlaySVG from './play-circle.svg'
import PauseSVG from './pause-circle.svg'
import sector from './sector'
import './style.css'

export default function TimerCard ({
  onRunClick,
  totalSeconds,
  isRunning,
  seconds,
  type = 'primary'
}) {
  const step = parseFloat(seconds / totalSeconds, 2)
  const min = parseInt(seconds / 60)
  const sec = seconds % 60
  return (
    <div className={`
      timer-card
      timer-card-${type}
    `}>
      <div className='timer-svg-container'>
        <svg viewBox="0 0 400 400" width="400" height="400" className='timer-svg'>
          <path id="sector" fill="currentColor" fillRule="evenodd" d={sector.getSectorPath(step)} />
        </svg>
      </div>
      <div className='timer-text'>{min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}</div>
      <div className='timer-button' onClick={onRunClick}>
        {isRunning ? <img src={PauseSVG} alt='pause' /> : <img src={PlaySVG} alt='play' />}
      </div>
    </div>
  )
}
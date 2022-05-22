const BackgroundOverlay = ({ color }) => {
  return <div className={`absolute inset-0 z-10 bg-[${color}]`} />
}

export default BackgroundOverlay

const BackgroundOverlay = ({ color }) => {
  return <div className={`absolute inset-0 z-10 bg-tranlucent${color}`} />;
};

export default BackgroundOverlay;

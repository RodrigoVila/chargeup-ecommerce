interface Props {
  darker?: boolean;
  lighter?: boolean;
}

const BackgroundOverlay = ({ darker, lighter }: Props) => {
  const getBgOpacity = () =>
    darker ? 'bg-overlayDark' : lighter ? 'bg-overlayLight' : 'bg-overlay';

  return <div className={`${getBgOpacity()} absolute inset-0 z-10 h-full`} />;
};

export default BackgroundOverlay;

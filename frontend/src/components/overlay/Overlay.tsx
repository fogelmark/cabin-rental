import './Overlay.scss'

type OverlayProps = {
  onClick: () => void
}

const Overlay = ({ onClick }: OverlayProps) => {
  return (
    <div onClick={onClick} className='overlay' />
  );
};

export default Overlay;
import Modal from '@shared/Modal';
import { useEffect, useState } from 'react';

export const DeliveryAreasMap = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [label, setLabel] = useState('');

  useEffect(() => {
    if (!isExpanded) document.body.style.overflow = 'hidden';
  }, [isExpanded]);

  return (
    <>
      <div className="relative flex items-center justify-center w-full h-64 font-bold bg-green-400">
        <div
          className="hover:bg-[rgba(0,0,0,0.3)] cursor-pointer w-full flex h-full items-center justify-center"
          onClick={() => setExpanded(true)}
        >
          Ver mapa
        </div>
      </div>
      <Modal isOpen={isExpanded} onClose={() => setExpanded(false)} fullScreen>
        <div className="flex items-center justify-center w-full font-bold bg-green-400 h-[70%] 2xl:h-full">
          Mapa Grande
        </div>
      </Modal>
    </>
  );
};
